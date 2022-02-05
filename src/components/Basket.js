import React from 'react';

const Basket = ({ cartItems, onAdd, onRemove }) => {

	const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
	const taxPrice = itemsPrice * 0.14;
	const shippingPrice = itemsPrice > 20 ? 0 : 2.95
	const totalPrice = itemsPrice + taxPrice + shippingPrice

	console.log(cartItems)


	return (

		<aside className="block col-1">
			<h2>Cart Items</h2>
			<div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
			{cartItems.map((item) => (
				<div key={item.id} className="row">
					<div className='col-2'>{item.name}</div>
					<div className='col-2'>
						<button className="add" onClick={() => onAdd(item)}>
							+
						</button>
						<button className="remove" onClick={() => onRemove(item)}>
							-
						</button>
					</div>
                    <div className='col-2 text-right'>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
				</div>
			))}
			{
				cartItems.length !== 0 && (
					<>
					<hr />
					<div className='row'>
						<div className='col-2'>Items Price</div>
						<div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
					</div>
					<div className='row'>
						<div className='col-2'>Tax</div>
						<div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
					</div>
					<div className='row'>
						<div className='col-2'>Shipping</div>
						<div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
					</div>
					<div className='row'>
						<div className='col-2'><strong>Total</strong></div>
						<div className='col-1 text-right'><strong>${totalPrice.toFixed(2)}</strong></div>
					</div>
					<hr />
					<div className="row">
						<button onClick={()=> alert(`Thank you for Shopping at The Colbalt Soul! Your Total is $${totalPrice.toFixed(2)} dollars.`)}>CheckOut</button>
					</div>
					</>
				)
			}

		</aside>
	);
};

export default Basket;
