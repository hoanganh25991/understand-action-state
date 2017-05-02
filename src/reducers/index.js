import {combineReducers} from 'redux'

const demoItems = [
	{key: 1, name: 'TA CAPPUCHINO',  price: 35, quanity: 1, discount: 0},
	{key: 2, name: 'NWM CCD 500 ML', price: 38, quanity: 3, discount: 0},
	{key: 3, name: 'COCA 330 ML',    price: 45, quanity: 2, discount: 0},
	{key: 4, name: 'BLENDED MOCHA',  price: 40, quanity: 1, discount: 0},
];

const demoSaleItems = [
	{key: 1, discount: 35},
	{key: 4, discount: 35},
];

const receiptPage = combineReducers({
	items: (items = demoItems, action) => {
		switch(action.type) {
			case 'APPLY_DISCOUNT': {
				let {discount, getState} = action;

				let {selectedItem, saleItems} = getState();

				return items.map(item => {
					if(item.key === selectedItem.key){
						// Staff want to clear discount
						// Don't have to check other
						if(discount === 0){
							return Object.assign({}, item, {discount});
						}

						let itemInSale = saleItems.filter(saleItem => item.key === saleItem.key)[0];

						// If item in sale, apply it
						if(itemInSale){
							discount = itemInSale.discount;
							window.alert(`Item in sale, discount: ${discount}%`);
						}

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
	},

	saleItems: (saleItems = demoSaleItems) => saleItems
})

export default receiptPage

