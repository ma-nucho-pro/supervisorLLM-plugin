let raw=''; process.stdin.setEncoding('utf8'); process.stdin.on('data',c=>raw+=c); process.stdin.on('end',()=>{
 let input={}; try{input=JSON.parse(raw||'{}')}catch{}
 const context='Supervisor is active. Preserve the exact request. For substantive work, research externally verifiable/current/technical claims with real web/search tools and authoritative sources when available. Use relevant independent subagents, test executable work, visually inspect frontend when available, run hallucination/red-team/final-release review, fix P0/P1, and never fabricate searches/tests/renders/subagents. End the released answer with a concise Verification Receipt.';
 process.stdout.write(JSON.stringify({hookSpecificOutput:{additionalContext:context}}));
});
