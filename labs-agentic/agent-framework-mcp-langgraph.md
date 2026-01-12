# Lab: Agent Frameworks — MCP Server + LangGraph Workflow

## Objectives
- Implement a simple MCP server exposing a tool (e.g., docs search)
- Build a LangGraph (or Agno) workflow using the toolchain
- Front with API Management and secure via managed identity

## Prerequisites
- Node.js or Python environment; APIM instance; Azure identity

## Steps (Outline)
1. Scaffold MCP server with one tool (search or KQL lookup)
2. Create a LangGraph workflow that calls MCP tool
3. Configure APIM with JWT/managed identity; route traffic privately
4. Log requests to Log Analytics; add Sentinel detection on unusual rates

## Verification
- Tool invocation succeeds via the workflow
- APIM shows authenticated calls; private connectivity enforced
- Logs and detections firing on thresholds
