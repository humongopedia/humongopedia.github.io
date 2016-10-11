import React from 'react'
import MainList from '../../public/main-list.json'
import Drawer from 'material-ui/Drawer'
import { List, ListItem } from 'material-ui/List'
import TitleBar from './TitleBar.jsx'
import axios from 'axios'

import { render } from '../index'

const getEmbeddedListItem = ancestry => (category, i) => {
	const jsonLocation = ancestry + '__' + category.text
	const listProps = {
		key: i,
		primaryText: category.text,
		onClick: () => ancestry === 'root' ? null : axios
		.get(`/data/${encodeURIComponent(jsonLocation)}.json`)
		.then(res => render(res.data))
	}
	if (category.contents && category.contents.length > 0) {
		listProps.nestedItems = category.contents.map(getEmbeddedListItem(jsonLocation))
	}
	return <ListItem {...listProps}/>
}

const MainNav = () => {
	return (
		<Drawer open={true}>
			<TitleBar/>
			<List>
				{MainList.map(getEmbeddedListItem('root'))}
			</List>
		</Drawer>
	)
}

export default MainNav
