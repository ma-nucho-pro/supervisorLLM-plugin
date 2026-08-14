import fs from 'node:fs'; import path from 'node:path';
const root=path.resolve(process.argv[2]||process.cwd());
const required=[
  'skill/supervisor/SKILL.md',
  'platforms/claude-code/supervisor/.claude-plugin/plugin.json',
  'platforms/cursor/supervisor/.cursor-plugin/plugin.json',
  'platforms/codex/supervisor/.codex-plugin/plugin.json',
  'platforms/gemini-cli/supervisor/gemini-extension.json'
];
let ok=true;
for(const rel of required){const p=path.join(root,rel); if(!fs.existsSync(p)){console.error('MISSING',rel); ok=false;}}
const jsonFiles=[];
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name); if(e.isDirectory())walk(p); else if(e.name.endsWith('.json'))jsonFiles.push(p);}}
walk(root);
for(const p of jsonFiles){try{JSON.parse(fs.readFileSync(p,'utf8'));}catch(e){console.error('BAD JSON',path.relative(root,p),e.message);ok=false;}}
const counts={
 claude:fs.readdirSync(path.join(root,'platforms/claude-code/supervisor/agents')).filter(x=>x.endsWith('.md')).length,
 cursor:fs.readdirSync(path.join(root,'platforms/cursor/supervisor/agents')).filter(x=>x.endsWith('.md')).length,
 codex:fs.readdirSync(path.join(root,'platforms/codex/supervisor/native-agents')).filter(x=>x.endsWith('.toml')).length,
 gemini:fs.readdirSync(path.join(root,'platforms/gemini-cli/supervisor/agents')).filter(x=>x.endsWith('.md')).length
};
console.log('agent-counts',counts);
if(Object.values(counts).some(n=>n!==27)){console.error('Expected 27 specialist definitions per native adapter');ok=false;}
if(!ok)process.exit(1); console.log('Supervisor universal static validation passed.');
