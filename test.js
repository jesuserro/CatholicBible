const { ENOTEMPTY } = require('constants');
var fs = require('fs');
var iterator = require('markdown-it-for-inline');
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();

var file = './toc.json';


md.use(iterator, 'foo_replace', 'text', function (tokens, idx) {
    tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
    console.log( arguments );
});

var result = md.render(file);