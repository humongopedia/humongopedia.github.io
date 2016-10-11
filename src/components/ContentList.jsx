import React, { PropTypes } from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'

const ContentItem = ({text, link, contents}) => (
	<a href={link}>
		<Card className="content-list__item">
			<CardHeader title={text}/> {(contents && contents.length > 0)
		? <CardText>
		<ContentList data={contents} />
		</CardText>
		: null}
		</Card>
	</a>
)
const ContentList = ({data}) => {
	return (
		<div className="content-list">
			{data.map((item, i) => (<ContentItem key={i} {...item}/>))}
		</div>
	)
}

ContentList.propTypes = {
	data: PropTypes.array
}

ContentItem.propTypes = {
	text: PropTypes.string,
	link: PropTypes.string
}

export default ContentList
