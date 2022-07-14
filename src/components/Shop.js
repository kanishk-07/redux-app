import React from 'react';
import {useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
	const dispatch = useDispatch();
	const {increaseBalance, decreaseBalance} = bindActionCreators(actionCreators, dispatch);
	return (
		<div className='container' style={{ marginTop: '80px'}}>
				<ul>
					<button className="btn btn-success mx-2" onClick={()=>{decreaseBalance(50)}}>Buy this Item +</button>
					<button className="btn btn-danger mx-2" onClick={()=>{increaseBalance(50)}}>Sell this Item -</button>
				</ul>
		</div>
	)
}

export default Shop