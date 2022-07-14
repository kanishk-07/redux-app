import React from 'react'

const Shop = () => {
	return (
		<div className='container' style={{ marginTop: '80px' }}>
			<ul>
				<button className="btn btn-success mx-2">Buy this Item +</button>
				<button className="btn btn-danger mx-2">Sell this Item -</button>
			</ul>
		</div>
	)
}

export default Shop