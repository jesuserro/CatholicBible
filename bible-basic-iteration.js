const { ENOTEMPTY } = require('constants');
var fs = require('fs');
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();

var file = './toc.json';

let rawdata = fs.readFileSync(file);
let bible = JSON.parse(rawdata);

/* 
`\book{book}` Gn 
`\part{part}` PRIMERA PARTE: CREACIÓN Y PRIMERA ETAPA DE LA HUMANIDAD {Gn 1,1-11,26}
`\chapter{chapter}` I. ORÍGENES DEL CIELO Y TIERRA {Gn 1,1-4,26}
`\section{section}` 1. Relato de la creación. {Gn 1,1-31.2,1-3}
`\subsection{subsection}`
`\subsubsection{subsubsection}`
`\paragraph{paragraph}`
`\subparagraph{subparagraph}`

level 3: LIBRO    | GÉNESIS {Gn 1-50}
level 5: PARTE    | PRIMERA PARTE: CREACIÓN Y PRIMERA ETAPA DE LA HUMANIDAD {Gn 1,1-11,26}
level 7: CAPÍTULO | I. ORÍGENES DEL CIELO Y TIERRA {Gn 1,1-4,26}
level 9: Sección  | Relato de la creación. {Gn 1,1-2,4a}
*/
for(let i in bible){
    let obj = bible[i], content = obj.content;
    if(!(content)){
        continue;
    }

    let level = obj.level;
    
    console.log(i+": "+content+" ("+level+")");
    if(i>500) break;
}

