let raw=''; process.stdin.setEncoding('utf8'); process.stdin.on('data',c=>raw+=c); process.stdin.on('end',()=>{
 let input={}; try{input=JSON.parse(raw||'{}')}catch{}
 const context='Supervisor is active. Preserve the exact request. For substantive work, use real web research for externally verifiable/current/technical claims when available; prefer official/primary sources. Use independent subagents proportional to complexity. Code needs real repository/runtime checks; frontend needs rendered/browser/accessibility inspection when available. Run anti-hallucination, red-team and final-release review. Never invent search/test/subagent/render evidence. Fix P0/P1 before release and end with a concise Verification Receipt.';
 process.stdout.write(JSON.stringify({hookSpecificOutput:{hookEventName:'UserPromptSubmit',additionalContext:context}}));
});
