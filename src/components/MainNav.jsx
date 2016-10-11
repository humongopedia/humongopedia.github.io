import React from 'react'
import MainList from '../../public/main-list.json'
import Drawer from 'material-ui/Drawer'
import { List, ListItem } from 'material-ui/List'
import { v4 } from 'uuid'
import TitleBar from './TitleBar.jsx'

const getEmbeddedListItem = category => {
	if (!category.contents || category.contents.length <= 0) {
		return (<ListItem key={v4()} primaryText={category.text}/>)
	}
	const embeddedList = category.contents.map(getEmbeddedListItem)
	return <ListItem key={v4()} primaryText={category.text} nestedItems={embeddedList} />
}

const MainNav = () => {
	return (
		<Drawer open={true}>
      <TitleBar />
			<List>
				{MainList.map(getEmbeddedListItem)}
			</List>
		</Drawer>
	)
}

export default MainNav
