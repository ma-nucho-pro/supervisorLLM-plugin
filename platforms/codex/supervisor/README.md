# Supervisor for Codex

OpenAI/Codex plugin adapter. The plugin provides the universal Skill and `UserPromptSubmit` + `Stop` command hooks.

Codex custom agents are project/user configuration, so this package also includes 27 optional TOML agent profiles plus an installer:

```bash
node scripts/install-native-agents.mjs /path/to/your/project
```

This writes the profiles to `/path/to/your/project/.codex/agents/`. Restart/reload Codex and review hook trust prompts before enabling hook scripts.

For skill-only use, copy `skills/supervisor` to a supported Agent Skills directory such as `.agents/skills/supervisor`.
