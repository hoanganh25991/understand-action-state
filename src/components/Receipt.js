import React from 'react'
import PropTypes from 'prop-types'

import ReceiptLayout from './ReceiptLayout'
import ItemList from '../containers/ItemList'
import Total from '../containers/Total'

class Receipt extends React.Component {
	render() {
		let position = {
			ItemList,
			Total
		}

		return (
			<ReceiptLayout {...position} />
		)
	}
}

Receipt.PropTypes = {
	total: PropTypes.func.isRequired
}

export default Receipt
/////////////////////