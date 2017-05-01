import React from 'react'

class Receipt extends React.Component {
	render() {
		return (
			<div style={{padding: 30 + 'px', width: 460 + 'px'}}>
				<div style={{width: 400 + 'px'}}>
					<div style={{textAlign: 'center'}}>
						<h1>Hoi POS</h1>
						<p>268 To Hien Thanh, Quan 10</p>
						<p> Tel: 0903865657, Mob: 083745859</p>
						<br/>
						<h3>TAX INVOICE</h3>
						<br/>
					</div>
					<div style={{display: 'flex', flexDirection: 'row'}}>
						<div style={{textAlign: 'left', flex: 1.5}}>
							<p>BILL NO.: 6291</p>
						</div>
						<div style={{textAlign: 'left', flex: 2}}>
							<p>09/05/17 20:00</p>
						</div>
					</div>
					<div>ORDER NO.: 05</div>
					<br/>
					<p style={{textAlign: 'center'}}>-----------------------------------------</p>
					<div style={{display: 'flex'}}>
						<div style={{flex: 3}}>Name</div>
						<div style={{flex: 1}}>Pr.</div>
						<div style={{flex: 1}}>Qty</div>
						<div style={{flex: 1}}>Dis %</div>
						<div style={{flex: 1}}>Amt</div>
					</div>
					<p style={{textAlign: 'center'}}>-----------------------------------------</p>
					
					<div style={{display: 'flex'}}>
						<div style={{flex: 3}}>2 NWM CCD 500 ML</div>
						<div style={{flex: 1}}>Pr.</div>
						<div style={{flex: 1}}>Qty</div>
						<div style={{flex: 1}}>Dis %</div>
						<div style={{flex: 1}}>Amt</div>
					</div>
					<div style={{display: 'flex'}}>
						<div style={{flex: 3}}>3 COCA 330 ML</div>
						<div style={{flex: 1}}>Pr.</div>
						<div style={{flex: 1}}>Qty</div>
						<div style={{flex: 1}}>Dis %</div>
						<div style={{flex: 1}}>Amt</div>
					</div>
					<div style={{display: 'flex'}}>
						<div style={{flex: 3}}>4 BLENDED MOCHA</div>
						<div style={{flex: 1}}>Pr.</div>
						<div style={{flex: 1}}>Qty</div>
						<div style={{flex: 1}}>Dis %</div>
						<div style={{flex: 1}}>Amt</div>
					</div>
					<p style={{textAlign: 'center'}}>-----------------------------------------</p>
					<div style={{display: 'flex', flexDirection: 'row'}}>
						<div style={{flex: 6}}>
							<h3>TOTAL</h3>
						</div>
						<div style={{flex: 1}}>
							<h3>$75</h3>
						</div>
					</div>
					<br/>
					<br/>
					<br/>
					<div style={{textAlign: 'center'}}>
						<p>THANKS AND VIST AGAIN</p>
						<p style={{color: '#c4c4c4'}}>www.hoipos.com</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Receipt
//////////////////