import React from 'react'

class Total extends React.Component {
	render(){
		let {total} = this.props;
		return (
			<div style={{textAlign: 'right'}}>${total}</div>
		)
	}
}

export default Total