import os
from flask import Flask, request, jsonify
from langfuse import Langfuse
from langfuse.decorators import observe
from openai import AzureOpenAI

app = Flask(__name__)

# Langfuse configuration (set via env)
langfuse = Langfuse(
    public_key=os.environ.get("LANGFUSE_PUBLIC_KEY"),
    secret_key=os.environ.get("LANGFUSE_SECRET_KEY"),
    host=os.environ.get("LANGFUSE_HOST", "https://cloud.langfuse.com")
)

# Azure OpenAI client
client = AzureOpenAI(
    azure_endpoint=os.environ.get("AZURE_OPENAI_ENDPOINT"),
    api_key=os.environ.get("AZURE_OPENAI_API_KEY"),
    api_version=os.environ.get("AZURE_OPENAI_API_VERSION", "2024-02-01")
)

MODEL_DEPLOYMENT = os.environ.get("AZURE_OPENAI_DEPLOYMENT", "gpt-4")

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

@observe()
@app.route("/chat", methods=["POST"])
def chat():
    body = request.get_json(force=True) or {}
    user_message = (body.get("message") or "").strip()

    if not user_message:
        return jsonify({"error": "message is required"}), 400

    if len(user_message) > 1000:
        return jsonify({"error": "message too long"}), 400

    try:
        completion = client.chat.completions.create(
            model=MODEL_DEPLOYMENT,
            messages=[
                {"role": "system", "content": "You are a helpful, safe assistant."},
                {"role": "user", "content": user_message}
            ],
            max_tokens=256,
        )

        response_text = completion.choices[0].message.content

        # Log a simple score to Langfuse (example)
        trace = langfuse.trace()
        trace.update(input=user_message, output=response_text)
        trace.score(name="length_ok", value=1.0 if len(response_text) < 1000 else 0.0)

        return jsonify({"response": response_text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", "8000")), debug=True)
