import styled from 'styled-components'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import Subtitle from '@/components/Subtitle'
import ContentWrapper from '@/components/ContentWrapper'
import Center from '@/components/Center'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import ItemImg from '../public/images/Apple-MacBook-Pro-M2.jpeg'
import { useEffect, useState, useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import axios from 'axios'
const Orders = styled.div`
	background: #fff;
	padding: 10px;
	display: grid;
`
const Checkout = styled.div`
	display: grid;
	gap: 2rem;
	background-color: #fff;
	padding: 15px 10px;
`
const Info = styled.div`
	display: grid;
	gap: 0.5rem;
	padding: 2rem;
`
const Input = styled.input`
	padding: 8px;
`
const RowOne = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.5rem;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 2fr;
	}
`
const City = styled.div`
	display: grid;
	gap: 10px;
	input {
		width: 100%;
	}
	@media screen and (min-width: 768px) {
		display: block;
		input {
			width: 30%;
			margin-right: 5px;
		}
	}
`
const DateCode = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 10px;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		gap: 25px;
	}
`
const DateCVV = styled.div`
	display: grid;
	gap: 5px;
	@media screen and (min-width: 768px) {
		gap: 10px;
	}
`
const BtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;
	button {
		padding: 10px 30px;
		background-color: #000;
		border: 0;
		color: #fff;
		box-shadow: 0.3rem 0.3rem 0.2rem rgba(0, 0, 0, 0.3);
		cursor: pointer;
	}
`
const CartMessage = styled.div`
	background-color: #fff;
	padding: 20px;
	grid-column: span 2;
	text-align: center;
`
const TopTable = styled.table`
	padding: 1.2rem 0.5rem 0;
	td {
		width: 30%;
		padding: 5px;
	}
`
const Item = styled.tr`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	background-color: #e8eaed;
	border-bottom: 1px solid #ccc;
`
const Img = styled.div`
	width: 80px;
	overflow: hidden;
	img {
		width: 100%;
	}
	@media screen and (min-width: 768px) {
		width: 100px;
	}
`
const Quantity = styled.div`
	width: 80px;
	border: 1px solid #ccc;
	display: flex;
	justify-content: space-between;
	button {
		width: 25px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		border: 0;
		background-color: #ccc;
		cursor: pointer;
	}
	@media screen and (min-width: 768px) {
		width: 100px;
	}
`
const QuantityNum = styled.span`
	line-height: 25px;
`
const BottomTable = styled.table`
	margin-top: 30px;
	width: 100%;
	padding: 10px 15px;
	@media screen and (min-width: 768px) {
		padding: 10px 50px;
	}
`
const Total = styled.td`
	font-weight: 600;
`
const Amt = styled.td`
	text-align: right;
`
const FinalAmt = styled.td`
	font-weight: 600;
	text-align: right;
`
export default function CartPage() {
	const { cart, addProduct, clearCart, removeProduct } = useContext(CartContext)
	const [productsOrdered, setProductOrdered] = useState([])
	const [fullName, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [streetAdd, setStAdd] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	const [postalCode, setPosCode] = useState('')
	const [fullNameOnCard, setFullNameOnCard] = useState('')
	const [creditCardNum, setCardNum] = useState('')
	const [expiration, setExp] = useState('')
	const [cvv, setCVV] = useState('')
	const [isSuccess, setIsSuccess] = useState('')
	useEffect(() => {
		if (cart?.length >= 0) {
			axios
				.post('/api/cart', { ids: cart })
				.then(res => setProductOrdered(res.data))
				.catch(error => console.log(error))
		}
	}, [cart])
	console.log('PRODUCT', productsOrdered)
	console.log('CART', cart)
	let finalPrice = 0
	productsOrdered.map(({ _id, price }) => {
		let counts = cart.filter(id => id === _id).length
		return (finalPrice += counts * price)
	})
	const submitOrder = e => {
		e.preventDefault()
		const data = { cart, fullName, email, streetAdd, city, state, postalCode, fullNameOnCard, creditCardNum, expiration, cvv }
		axios
			.post('/api/checkout', data)
			.then(res => {
				setIsSuccess(res.data)
				clearCart()
			})
			.catch(error => console.log(error))
	}
	if (isSuccess.msg === 'order received') {
		return (
			<>
				<Header />
				<Main>
					<Center>
						<ContentWrapper backgroundColor="#d7dbdf" padding="15px">
							<CartMessage>
								Thank you for your order, {isSuccess.fullName}. Your order has been placed and a confirmation email will be sent to {isSuccess.email}.
							</CartMessage>
						</ContentWrapper>
					</Center>
				</Main>
			</>
		)
	} else {
		return (
			<>
				<Header />
				<Main>
					<Center>
						<Heading>Shopping Cart</Heading>
						<ContentWrapper backgroundColor="#d7dbdf" padding="15px">
							{productsOrdered?.length > 0 ? (
								<>
									<Orders>
										<Subtitle>Order Summary</Subtitle>
										<TopTable>
											<tbody>
												{productsOrdered.map(product => (
													<Item key={product._id}>
														<td>
															<Img>
																<img src={ItemImg.src} alt="item_image" />
															</Img>
														</td>
														<td>
															{product.title} <b>${product.price}</b>
														</td>
														<td>
															<Quantity>
																<button onClick={() => removeProduct(product._id)}>-</button>
																<QuantityNum>{cart.filter(_id => _id === product._id).length}</QuantityNum>
																<button onClick={() => addProduct(product._id)}>+</button>
															</Quantity>
														</td>
													</Item>
												))}
											</tbody>
										</TopTable>
										<BottomTable>
											<tbody>
												<tr>
													<td>Subtotal</td>
													<Amt>${finalPrice.toFixed(2)}</Amt>
												</tr>
												<tr>
													<td>Sales Tax (NYS)</td>
													<Amt>${(finalPrice * 0.0875).toFixed(2)}</Amt>
												</tr>
												<tr>
													<Total>Total</Total>
													<FinalAmt>${(finalPrice + finalPrice * 0.0875).toFixed(2)}</FinalAmt>
												</tr>
											</tbody>
										</BottomTable>
									</Orders>
									<Checkout>
										<form onSubmit={submitOrder}>
											<div>
												<Subtitle>Delivery Information</Subtitle>
												<Info>
													<RowOne>
														<Input type="text" placeholder="Last, First Name" value={fullName} onChange={e => setFullName(e.target.value)} required />
														<Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
													</RowOne>
													<Input type="text" placeholder="Street Address" value={streetAdd} onChange={e => setStAdd(e.target.value)} required />
													<City>
														<Input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} required />
														<Input type="text" placeholder="State" value={state} onChange={e => setState(e.target.value)} required />
														<Input type="text" placeholder="Postal Code" value={postalCode} onChange={e => setPosCode(e.target.value)} required />
													</City>
												</Info>
											</div>
											<div>
												<Subtitle>Payment Method</Subtitle>
												<Info>
													<label htmlFor="">Full Name on Card:</label>
													<Input
														type="text"
														placeholder="Full Name on Card"
														value={fullNameOnCard}
														onChange={e => setFullNameOnCard(e.target.value)}
														required
													/>
													<label htmlFor="">Credit Card Number:</label>
													<Input type="text" placeholder="Credit Card Number" value={creditCardNum} onChange={e => setCardNum(e.target.value)} required />
													<DateCode>
														<DateCVV>
															<label htmlFor="">Expiration Date:</label>
															<Input type="text" placeholder="mo / yr" value={expiration} onChange={e => setExp(e.target.value)} required />
														</DateCVV>
														<DateCVV>
															<label htmlFor="">CVV:</label>
															<Input type="text" placeholder="CVV" value={cvv} onChange={e => setCVV(e.target.value)} required />
														</DateCVV>
													</DateCode>
												</Info>
											</div>
											<BtnWrapper>
												<button>Place My Order</button>
											</BtnWrapper>
										</form>
									</Checkout>
								</>
							) : (
								<CartMessage>Your Shopping Cart is empty</CartMessage>
							)}
						</ContentWrapper>
					</Center>
				</Main>
				<Footer />
			</>
		)
	}
}
