# Supervisor for Gemini CLI

Native Gemini CLI extension. It bundles the universal Agent Skill, 27 extension subagents, and `BeforeAgent`/`AfterAgent` hooks. Gemini CLI currently documents extension subagents as a preview feature.

Install from this local folder:

```bash
gemini extensions install . --consent
```

For development:

```bash
gemini extensions link .
```

Verify with `/extensions list`, `/skills list`, and `/agents`.
