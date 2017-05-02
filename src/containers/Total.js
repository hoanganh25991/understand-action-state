import { connect } from 'react-redux'
import Total from '../components/Total'

const total = (state) => {
	let {items} = state;

	let total = items.reduce((carry, item) => {
		carry += +Number(item.price * item.quanity * (1 - item.discount/100)).toFixed(2);
		return carry;
	}, 0);

	total = Number(total).toFixed(2);

	return {total}
}

export default connect(total)(Total)