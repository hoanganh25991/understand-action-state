import { combineReducers } from 'redux'

const receiptPage = combineReducers({
	selectedItem: (selectedItem, action) => {
		switch(action.type){
			case 'SELECT_ITEM':{
				return {
					id: action.id,
					discount: null,
					qty: null,
				};
			}
			case 'APPY_DISCOUNT': {
				return Object.assign({}, selectedItem, {discount: action.discount});
			}
			default:
				return selectedItem;
		}
	}
})

export default receiptPage

