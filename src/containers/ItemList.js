import React from 'react'
import Item from './Item'

import {connect} from 'react-redux'

class ItemList extends React.Component {
	render(){
		let {items} = this.props;

		return (
			<div>
				{items.map(item => <Item {...{item}}/>)}
			</div>

		)
	}
}

const items = () => {
	return {
		items: [
			{keys: 1, name: 'TA CAPPUCHINO' , price: 35},
			{keys: 1, name: 'NWM CCD 500 ML', price: 38},
			{keys: 1, name: 'COCA 330 ML'   , price: 45},
			{keys: 1, name: 'BLENDED MOCHA' , price: 40},
		]
	}
}

ItemList = connect(items)(ItemList)

export default ItemList