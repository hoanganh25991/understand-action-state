import React from 'react'
import './Item.css'

import { connect } from 'react-redux'

const isSelected = (state) => {
	let {selectedItem} = state;
	
	return {
		isSelected: (id) => {
			if(id == selectedItem.id){
				return true;
			}

			return false;
		}
	}
}

const selectedItem = (state) => {
	let {selectedItem} = state;
	
	return {selectedItem};
}

const discount = (dispatch) => {
	return {
		discount: (discount) => {dispatch({type: 'APPLY_DISCOUNT', discount})}
	}
}

const selectItem = (dispatch) => {
	return {
		selectItem : (item) => {dispatch({type: 'SELECT_ITEM', item})}
	}
}

const qty = (dispatch) => {
	return {
		qty: (qty) => {dispatch({type: 'UPDATE_QTY'}, qty)}
	}
}

class Item extends React.Component {
	render(){
		let {item, isSelected, selectedItem} = this.props;

		let _isSelected  = isSelected(item.id);
		let className    = _isSelected ? 'selected' : '';
		let itemQuanity  = _isSelected ? selectedItem.qty : 0;
		let itemDiscount = _isSelected ? selectedItem.discount : 0;


		let {selectItem, qty, discount} = this.props;

		return (
			<div style={{display: 'flex'}} {...{className}} onClick={selectItem(item)}>
				<div style={{flex: 3}}>{item.name}</div>
				<div style={{flex: 1}}>{item.price}</div>
				<div style={{flex: 1}}>
					<select value={itemQuanity} onChange={(e) => {qty(e.target.value)}}>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>
				<div style={{flex: 1}}>{{itemDiscount}}</div>
				<div style={{flex: 1}}>Amt</div>
				<div>
					<button onClick={discount(10)}>10%</button>
					<button onClick={discount(20)}>20%</button>
				</div>
			</div>
		)
	}
}

Item = connect([isSelected, selectedItem], [selectItem, qty, discount])(Item)

export default Item