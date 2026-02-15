#!/usr/bin/env node
/** Count lines, words, chars in files */
const fs = require('fs'), path = require('path');

function count(f) {
    try {
        const c = fs.readFileSync(f, 'utf-8');
        return { l: c.split('\n').length, w: c.split(/\s+/).filter(x=>x).length, c: c.length };
    } catch(e) { return {e:e.message}; }
}

const a = process.argv.slice(2);
if(!a[0]){ console.log('Usage: file-counter.js <file>'); process.exit(1); }
const r = count(a[0]);
if(r.e) console.log('Error:',r.e);
else console.log(`${r.l} ${r.w} ${r.c} ${a[0]}`);
