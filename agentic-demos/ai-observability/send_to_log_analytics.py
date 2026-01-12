import base64
import hashlib
import hmac
import json
import os
import time
import requests

# Usage: set WORKSPACE_ID and SHARED_KEY env vars, then run
# python send_to_log_analytics.py metrics.json

LOG_TYPE = os.environ.get("LOG_TYPE", "AIObservabilityMetrics")
WORKSPACE_ID = os.environ.get("WORKSPACE_ID")
SHARED_KEY = os.environ.get("SHARED_KEY")

def build_signature(workspace_id, shared_key, date, content_length, method, content_type, resource):
    x_headers = f"x-ms-date:{date}"
    string_to_hash = f"{method}\n{content_length}\n{content_type}\n{x_headers}\n{resource}"
    bytes_to_hash = bytes(string_to_hash, encoding="utf-8")
    decoded_key = base64.b64decode(shared_key)
    encoded_hash = base64.b64encode(hmac.new(decoded_key, bytes_to_hash, hashlib.sha256).digest()).decode()
    return f"SharedKey {workspace_id}:{encoded_hash}"

def post_data(records):
    body = json.dumps(records)
    method = 'POST'
    content_type = 'application/json'
    resource = '/api/logs'
    rfc1123date = time.strftime('%a, %d %b %Y %H:%M:%S GMT', time.gmtime())
    signature = build_signature(WORKSPACE_ID, SHARED_KEY, rfc1123date, len(body), method, content_type, resource)

    uri = f'https://{WORKSPACE_ID}.ods.opinsights.azure.com{resource}?api-version=2016-04-01'
    headers = {
        'Content-Type': content_type,
        'Log-Type': LOG_TYPE,
        'x-ms-date': rfc1123date,
        'Authorization': signature
    }

    resp = requests.post(uri, data=body, headers=headers)
    resp.raise_for_status()
    return resp.status_code

if __name__ == '__main__':
    import sys
    if len(sys.argv) != 2:
        print("Usage: python send_to_log_analytics.py <metrics.json>")
        raise SystemExit(1)

    with open(sys.argv[1], 'r') as f:
        records = json.load(f)
    status = post_data(records)
    print(f"Posted {len(records)} records to Log Analytics. Status: {status}")
