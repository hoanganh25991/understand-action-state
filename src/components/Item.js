import React from 'react'
import PropTypes from 'prop-types'

import './Item.css'

class Item extends React.Component {
	render(){
		// Basic info
		let {item, order, itemTotal} = this.props;

		// Decide style
		let {isSelected}     = this.props;
		let _isSelected      = isSelected(item);
		let rootDivClass     = _isSelected ? 'selected' : '';
		let discountDivClass = _isSelected ? 'anim-show' : 'anim-hide';

		// Actions
		let {toggleSelected} = this.props;
		let {applyDiscount}  = this.props;

		return (
			<div className={rootDivClass} onClick={() => {toggleSelected(item)}}>
				<div style={{display: 'flex'}}>
					<div style={{flex: 3}}                      >{order} {item.name}</div>
					<div style={{flex: 1}}                      >{item.price}</div>
					<div style={{flex: 1}}                      >{item.quanity}</div>
					<div style={{flex: 1}}                      >{item.discount}</div>
					<div style={{flex: 1, textAlign: 'right'}}  >{itemTotal(item)}</div>
				</div>
				<div style={{display: 'flex',  flexDirection: 'row-reverse'}} className={discountDivClass}>
					<button onClick={() => {applyDiscount( 0)}}>  x</button>
					<button onClick={() => {applyDiscount(20)}}>20%</button>
					<button onClick={() => {applyDiscount(15)}}>15%</button>
					<button onClick={() => {applyDiscount(10)}}>10%</button>
					<label>APPLY DIS:</label>
				</div>
			</div>
		)
	}
}

Item.propTypes = {
	item: PropTypes.shape({
		key:      PropTypes.number.isRequired,
		name:     PropTypes.string.isRequired,
		price:    PropTypes.number.isRequired,
		quanity:  PropTypes.number.isRequired,
		discount: PropTypes.number.isRequired,
	})
}

export default Item
/////