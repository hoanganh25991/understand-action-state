import {combineReducers} from 'redux'

const demoItems = [
	{key: 1, name: 'TA CAPPUCHINO',  price: 35, quanity: 1, discount: 0},
	{key: 2, name: 'NWM CCD 500 ML', price: 38, quanity: 3, discount: 0},
	{key: 3, name: 'COCA 330 ML',    price: 45, quanity: 2, discount: 0},
	{key: 4, name: 'BLENDED MOCHA',  price: 40, quanity: 1, discount: 0},
];

const receiptPage = combineReducers({
	items: (items = demoItems, action) => {
		switch(action.type) {
			case 'APPLY_DISCOUNT': {
				let {discount, getState} = action;

				let {selectedItem} = getState();

				return items.map(item => {
					if(item.key === selectedItem.key){
						return Object.assign({}, item, {discount});
					}

					return item;
				})
			}
			default:
				return items;
		}
	},

	selectedItem: (selectedItem, action) => {
		switch(action.type) {
			case 'TOOGLE_SELECTED': {
				// Current selected item from action
				let {item} = action;
				// Decide current state
				let isSelected = (item.key === selectedItem.key);
				// Toggle it
				isSelected = !isSelected;
				
				return isSelected ? Object.assign({}, item) : {};
			}
			default:
				return {};
		}
	}
})

export default receiptPage

