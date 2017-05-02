import React from 'react'
import Item from '../containers/Item'

class ItemList extends React.Component {
	render(){
		let {items} = this.props;
		
		return (
			<div>
				{items.map((item, index) => <Item key={item.key} order={index+1} {...{item}} />)}
			</div>

		)
	}
}

export default ItemList