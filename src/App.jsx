import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { green100, green500, green700 } from 'material-ui/styles/colors'

import MainNav from './components/MainNav.jsx'
import TitleBar from './components/TitleBar.jsx'
import ContentList from './components/ContentList.jsx'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: green500,
		primary2Color: green700,
		primary3Color: green100
	}
}, {
	avatar: {
		borderColor: null
	},
	userAgent: false
})

class App extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<TitleBar/>
					<MainNav/>
					<section className="content">
						<ContentList data={this.props.data || []}/>
					</section>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App
