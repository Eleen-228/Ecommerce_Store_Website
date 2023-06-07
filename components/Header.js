import Link from 'next/link'
import { useState, useContext } from 'react'
import styled from 'styled-components'
import Center from './Center'
import { CartContext } from '@/context/CartContext'

const HeaderStyle = styled.header`
	padding: 15px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	z-index: 999;
	background-color: #1d3a7d;
	@media screen and (min-width: 768px) {
		background-color: #222;
	}
`
const ContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	height: inherit;
	align-items: center;
	@media screen and (min-width: 768px) {
		row-gap: 4rem;
		flex-direction: row;
		justify-content: space-between;
	}
`
const Logo = styled(Link)`
	font-size: 2rem;
	color: #000;
	font-weight: 600;
	padding-left: 50px;
	@media screen and (min-width: 768px) {
		font-size: 3rem;
		color: #97abba;
	}
`
const NavStyle = styled.nav`
	font-size: 2rem;
	display: ${props => (props.show ? 'flex' : 'none')};
	flex-direction: column;
	row-gap: 3rem;
	position: fixed;
	background-color: #939098;
	padding: 150px 25px;
	font-size: 1.5rem;
	width: 100%;
	height: 100%;
	text-align: center;
	@media screen and (min-width: 768px) {
		display: flex;
		position: static;
		font-size: 1.2rem;
		flex-direction: row;
		align-items: center;
		justify-content: end;
		gap: 1.5rem;
		background-color: transparent;
		padding: 0;
		height: auto;
		width: auto;
	}
`
const LinkStyle = styled(Link)`
	color: #fff;
`
const NavBtn = styled.button`
	display: block;
	position: absolute;
	left: 25px;
	top: 25px;
	width: 40px;
	height: 40px;
	border-radius: 8px;
	border: 0;
	padding: 2px;
	cursor: pointer;
	@media screen and (min-width: 768px) {
		display: none;
	}
`
export default function Header() {
	const [show, setShow] = useState(false)
	const { cart } = useContext(CartContext)
	return (
		<HeaderStyle>
			<Center height="100%">
				<ContainerStyle>
					<Logo href="/">E-Commerce</Logo>
					<NavStyle show={show}>
						<LinkStyle href="/">Home</LinkStyle>
						<LinkStyle href="/allProducts">All Products</LinkStyle>
						<LinkStyle href="/">Categories</LinkStyle>
						<LinkStyle href="/">Account</LinkStyle>
						<LinkStyle href="/cart">Cart ({cart?.length})</LinkStyle>
					</NavStyle>
					<NavBtn onClick={() => setShow(!show)}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</NavBtn>
				</ContainerStyle>
			</Center>
		</HeaderStyle>
	)
}
