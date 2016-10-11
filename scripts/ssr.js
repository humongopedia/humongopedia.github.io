import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App.jsx'
console.log('str : ', ReactDOMServer.renderToString(<App />))
console.log('str2 : ', ReactDOMServer.renderToStaticMarkup(<App />))
