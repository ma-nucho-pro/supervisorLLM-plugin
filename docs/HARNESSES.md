# Harness notes

Supervisor keeps one logical protocol but uses native adapter schemas. Claude Code, Cursor, Codex and Gemini CLI are deliberately not treated as schema-compatible.

- Claude Code: native plugin + agents + Skill + hooks.
- Cursor: native plugin + subagents + Skill + rule + stop hook.
- Codex: OpenAI plugin + Skill + command hooks; optional custom agents copied to `.codex/agents/`.
- Gemini CLI: extension + Skill + subagents + BeforeAgent/AfterAgent hooks.
- Other Agent Skills hosts: universal Skill only unless a native adapter is added.
