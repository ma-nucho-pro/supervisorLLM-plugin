let raw=''; process.stdin.setEncoding('utf8'); process.stdin.on('data',c=>raw+=c); process.stdin.on('end',()=>{
 let input={}; try{input=JSON.parse(raw||'{}')}catch{}
 if(input.stop_hook_active){process.stdout.write(JSON.stringify({decision:'allow'})); return;}
 const reason='SUPERVISOR FINAL RELEASE JUDGE: reject this first final response and perform one fresh independent release pass. Re-check user intent and critical requirements; verify current factual/technical claims with authoritative web evidence when available; verify code/tests/runtime and frontend render/accessibility as applicable; use relevant independent Supervisor subagents, hallucination checks and red-team review; fix all known P0/P1; never invent tool evidence. Retry with the corrected answer plus a concise Verification Receipt. If critical evidence cannot be obtained, qualify or abstain.';
 process.stdout.write(JSON.stringify({decision:'deny',reason}));
});
