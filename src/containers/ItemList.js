import {connect} from 'react-redux'
import ItemList from '../components/ItemList'

const items = (state) => {
	let {items} = state;
	return {items}
}

export default connect(items)(ItemList)