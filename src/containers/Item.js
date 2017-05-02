import { connect } from 'react-redux'
import Item from '../components/Item'

const mapStateToProps = (state) => {
	let {selectedItem} = state;
	
	return {
		isSelected: (item) => item.key === selectedItem.key,
		itemTotal:  (item) => Number(item.price * item.quanity * (1 - item.discount/100)).toFixed(2)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSelected: (item)     => dispatch({type: 'TOOGLE_SELECTED', item}),
		applyDiscount:  (discount) => dispatch( (dispatch, getState) => dispatch({type: 'APPLY_DISCOUNT', discount, getState}) )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)