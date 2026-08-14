let raw='';
process.stdin.setEncoding('utf8');
process.stdin.on('data', c => raw += c);
process.stdin.on('end', () => {
  let input={}; try { input=JSON.parse(raw||'{}'); } catch {}
  const loop=Number(input.loop_count ?? 0);
  const status=String(input.status ?? '').toLowerCase();
  // Force one fresh final-review pass, then stop to avoid an infinite polish loop.
  if (loop > 0 || (status && status !== 'completed')) {
    process.stdout.write('{}'); return;
  }
  const followup = [
    'SUPERVISOR FINAL RELEASE REVIEW.',
    'Before the answer is released, perform one fresh independent review pass.',
    'Re-check the exact user request and every critical requirement.',
    'For factual/current/technical claims, use real web research with authoritative sources when available; do not invent citations or results.',
    'For code, verify build/typecheck/lint/tests/runtime as applicable. For frontend, inspect the rendered UI/browser and accessibility when available.',
    'Use relevant Supervisor subagents for independent correctness, completeness, user-intent, evidence/hallucination, red-team, and final-release review.',
    'Fix every known P0/P1 defect. Do not claim any tool, search, test, render, or subagent ran unless it actually did.',
    'Then deliver the corrected answer with a concise Verification Receipt. If a critical claim remains unverifiable, qualify or abstain rather than guess.'
  ].join(' ');
  process.stdout.write(JSON.stringify({followup_message: followup}));
});
