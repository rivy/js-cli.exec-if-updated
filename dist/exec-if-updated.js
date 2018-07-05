#!/usr/bin/env node
const e=require("yargs"),t=require("globby"),r=require("execa");function s(e){return t(e,{stats:!0})}!async function(e){const t=await s(e.source),i=await s(e.target);if(function(e,t){const r=e=>new Date(e.mtimeMs),s=(e,t)=>t.getTime()>e.getTime()?t:e,i=e.map(r).reduce(s),a=t.map(r).reduce(s);return i.getTime()>a.getTime()}(t,i))try{const t=function(e){if(e._&&e._.length)return e._.join(" ");throw new Error("Missing command")}(e),s=r.shell(t);s.stdout.pipe(process.stdout),s.stderr.pipe(process.stderr),process.stdin.pipe(s.stdin),await s}catch(e){console.error(e.message),process.exit(1)}else process.exit()}(e.example("$0 --source src/** --source assets/** --target dist/** npm run build").option("s",{alias:"source",demandOption:!0,describe:"A glob describing the source files that may be updated. May be supplied more than once for additional source files.",type:"array",nargs:1}).option("t",{alias:"target",demandOption:!0,describe:"A glob describing the target files to which the source files will be compared. May be supplied more than once for additional target files.",type:"array",nargs:1}).wrap(e.terminalWidth()).argv);