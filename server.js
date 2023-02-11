const express = require('express');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const fs = require('fs');

// <div> hello </div>
console.log(ReactDOMServer.renderToString(React.createElement('div',null, 'hello'))); 
const app = express();

// path.join(__dirname, 'build') build 폴더를 가리킴
app.use(express.static(path.join(__dirname, 'build')));
    
app.get('/test',(req,res) => {
    const ssr = ReactDOMServer.renderToString(React.createElement('div',null, 'hello'),);
    const indexHtml = fs
    .readFileSync(path.join(__dirname, 'build', 'index.html'))
    .toString()
    .replace('<div id="root"></div>', `<div id="root">${ssr}</div>`);
    
    
    console.log(indexHtml);
    
    res.send(indexHtml);
})

// client 와 api 추가 가능해짐...
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
