# Harness Adapter Contract

The Supervisor core is intentionally host-neutral. A harness adapter should provide the strongest native equivalents available for:

1. web research / source opening;
2. project file inspection and shell/runtime checks;
3. independent subagent delegation;
4. visual/browser inspection when applicable;
5. a lifecycle gate that triggers a fresh final review before release.

Adapters must never downgrade uncertainty into certainty. If a host lacks a capability, mark it `UNVERIFIED` or `DEGRADED_MODE` and continue with the strongest honest review available.

The same logical roles can be mapped to different native primitives. Claude Code agents, Cursor subagents, Codex custom agents, and Gemini CLI subagents are not assumed to share identical schemas or recursion behavior.
