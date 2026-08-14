let raw=''; process.stdin.setEncoding('utf8'); process.stdin.on('data',c=>raw+=c); process.stdin.on('end',()=>{
 let input={}; try{input=JSON.parse(raw||'{}')}catch{}
 if(input.stop_hook_active){process.stdout.write('{}'); return;}
 const reason='SUPERVISOR FINAL RELEASE JUDGE: perform one fresh independent release pass now. Re-check user intent and critical requirements; verify current factual/technical claims with real authoritative web evidence when available; verify code/tests/runtime and frontend render/accessibility as applicable; run relevant independent reviewers/hallucination/red-team checks; fix every known P0/P1; never invent tool or test evidence; then answer with a concise Verification Receipt. If a critical claim remains unverifiable, qualify or abstain.';
 process.stdout.write(JSON.stringify({decision:'block',reason}));
});
