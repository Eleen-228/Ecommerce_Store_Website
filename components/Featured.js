import Link from 'next/link'
import styled from 'styled-components'
import ProductImg from '../public/images/macbook_pro14_and_16.png'
import Center from './Center'
import ContentWrapper from './ContentWrapper'
import { CartContext } from '@/context/CartContext'
import { useContext } from 'react'
const FeaturedStyle = styled.div`
	background-image: url(${ProductImg.src});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	padding-top: 100px;
`
const FeaturedLeft = styled.div`
	display: flex;
	justify-content: center;
`
const FeaturedButtons = styled.div`
	display: flex;
	gap: 1.5rem;
	align-items: center;
`
const DetailLink = styled(Link)`
	border-radius: 5px;
	height: 50px;
	background-color: #e9f1f5;
	color: #000;
	padding: 0 10px;
	line-height: 50px;
	font-size: 0.8rem;
	@media screen and (min-width: 768px) {
		font-size: 1rem;
		padding: 0 20px;
	}
`
const CartBtn = styled.button`
	display: flex;
	gap: 0.5rem;
	padding: 0 20px;
	height: 50px;
	align-items: center;
	justify-center: center;
	border-radius: 5px;
	border: 0;
	background-color: #73abe6;
	color: #fff;
	cursor: pointer;
	font-size: 1rem;
	svg {
		height: 30px;
	}
`
const FeaturedRight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	color: #fff;
	text-align: center;
	order: -1;
	@media screen and (min-width: 768px) {
		order: 1;
	}
`
const Title = styled.div`
	font-size: 3rem;
`
const Desc = styled.div`
	font-size: 1rem;
	@media screen and (min-width: 768px) {
		font-size: 1.5rem;
	}
`
const Price = styled.div`
	color: #dadfe6;
	font-size: 2.6rem;
`
export default function Featured({ product }) {
	const { addProduct, clearCart } = useContext(CartContext)
	return (
		<FeaturedStyle>
			<Center>
				<ContentWrapper padding="280px 0">
					<FeaturedLeft>
						<FeaturedButtons>
							<DetailLink href={'/product/' + product._id}>Click for More Details</DetailLink>
							<CartBtn onClick={() => addProduct(product._id)}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
									/>
								</svg>
								Add to Cart
							</CartBtn>
						</FeaturedButtons>
					</FeaturedLeft>
					<FeaturedRight>
						<Title>{product.title}</Title>
						<Desc>{product.desc}</Desc>
						<Price>${product.price}</Price>
					</FeaturedRight>
				</ContentWrapper>
			</Center>
		</FeaturedStyle>
	)
}
