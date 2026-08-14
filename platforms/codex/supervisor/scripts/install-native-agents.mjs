import fs from 'node:fs'; import path from 'node:path'; import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const src=path.resolve(here,'..','native-agents');
const targetRoot=path.resolve(process.argv[2]||process.cwd());
const dst=path.join(targetRoot,'.codex','agents');
fs.mkdirSync(dst,{recursive:true});
for(const f of fs.readdirSync(src)){if(f.endsWith('.toml'))fs.copyFileSync(path.join(src,f),path.join(dst,f));}
console.log(`Installed ${fs.readdirSync(src).filter(f=>f.endsWith('.toml')).length} Supervisor Codex agent profiles into ${dst}`);
