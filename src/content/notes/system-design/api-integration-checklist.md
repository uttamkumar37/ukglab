# API Integration Checklist

Integrations fail most often at the edges: authentication, retries, rate limits, version changes, and unclear error handling.

## Before coding

- Confirm authentication type.
- Check rate limits and pagination.
- Identify webhook retry behavior.
- Store secrets outside source control.
- Log request IDs or correlation IDs.

## Useful design rule

Wrap third-party calls behind a small internal adapter so vendor details do not leak through the whole application.
