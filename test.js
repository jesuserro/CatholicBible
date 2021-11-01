var fs = require('fs');
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();

var toc = fs.readFileSync('./toc.md', 'utf8');
var result = md.parse(toc);

fs.writeFileSync( "./toc.json", JSON.stringify(result) );