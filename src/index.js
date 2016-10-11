import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import './App.scss'
import './content-list.scss'

export const render = data => {
	ReactDOM.render(
		<App data={data} />,
		document.getElementById('root')
	)
}

render()
