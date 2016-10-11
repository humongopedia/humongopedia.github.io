import React, { PropTypes } from 'react'
import { Card, CardHeader } from 'material-ui/Card'

const ContentItem = ({text, link}) => (
	<a href={link}>
		<Card className="content-list__item">
			<CardHeader title={text}/>
		</Card>
	</a>
)

const ContentList = ({data}) => {
	return (<div className="content-list">
		{data.map(item => (<ContentItem {...item}/>))}
	</div>)
}

ContentList.propTypes = {
	data: PropTypes.array
}

ContentItem.propTypes = {
	text: PropTypes.string,
	link: PropTypes.string
}

export default ContentList
