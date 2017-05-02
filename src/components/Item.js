import React from 'react'
import PropTypes from 'prop-types'

import './Item.css'

class Item extends React.Component {
	render(){
		let {item, order} = this.props;

		let {isSelected}  = this.props;
		
		let _isSelected   = isSelected(item);

		let rootClass     = _isSelected ? 'selected' : '';
		
		let discountPanelClass = _isSelected ? 'anim-show' : 'anim-hide';

		let {toggleSelected} = this.props;

		let {applyDiscount}  = this.props;
		
		let {itemTotal}      = this.props;

		return (
			<div className={rootClass}>
				<div style={{display: 'flex', flexDirection: 'row'}} onClick={() => {toggleSelected(item)}}>
					<div style={{flex: 3}}>{order} {item.name}</div>
					<div style={{flex: 1}}>{item.price}</div>
					<div style={{flex: 1}}>{item.quanity}</div>
					<div style={{flex: 1}}>{item.discount}</div>
					<div style={{flex: 1, textAlign: 'right'}}>{itemTotal(item)}</div>
				</div>
				<div style={{display: 'flex',  flexDirection: 'row-reverse'}} className={discountPanelClass}>
					<button onClick={() => {applyDiscount(20)}}>20%</button>
					<button onClick={() => {applyDiscount(15)}}>15%</button>
					<button onClick={() => {applyDiscount(10)}}>10%</button>
					<label>APPY DIS:</label>
				</div>
			</div>
		)
	}
}

Item.propTypes = {
	item: PropTypes.shape({
		key:     PropTypes.number.isRequired,
		name:    PropTypes.string.isRequired,
		price:   PropTypes.number.isRequired,
		quanity: PropTypes.number.isRequired
	})
}

export default Item
/////