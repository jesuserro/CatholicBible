var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();
var text = '# _markdown-it_ *rulezz!*';
var result = md.renderInline(text);
console.log(result);

result = md.render(text);
console.log(result);