import Header from '@/components/Header'
import Center from '@/components/Center'
import Heading from '@/components/Heading'
import ContentWrapper from '@/components/ContentWrapper'
import ImagesShow from '@/components/ImagesShow'
import AddToCartBtn from '@/components/AddToCartBtn'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import { connectMongo } from '@/lib/mongoose'
import { Product } from '@/models/Products'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: grid;
	gap: 2rem;
	padding: 3rem 1rem;
`
const Desc = styled.div`
	font-size: 1.5rem;
	font-weight: 300;
	color: #fff;
`
const PriceWrap = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;
	padding: 1rem;
	margin: 0 auto;
`
const Price = styled.div`
	font-size: 2rem;
	color: #e22263;
`
export default function ProductPage({ thisProduct }) {
	const { title, price, desc, _id } = thisProduct
	return (
		<>
			<Header />
			<Main>
				<Center backgroundColor="#0b0d0f" borderRadius="15px">
					<Heading headingPadding="4rem 0">{title}</Heading>
					<ContentWrapper setHeight="100%">
						<ImagesShow />
						<Wrapper>
							<Desc>{desc}</Desc>
							<PriceWrap>
								<Price>${price}</Price>
								<AddToCartBtn id={_id} />
							</PriceWrap>
						</Wrapper>
					</ContentWrapper>
				</Center>
			</Main>
			<Footer />
		</>
	)
}
export const getServerSideProps = async context => {
	const { id } = context.params
	await connectMongo()
	const thisProduct = await Product.findById(id)
	return {
		props: {
			thisProduct: JSON.parse(JSON.stringify(thisProduct)),
		},
	}
}
