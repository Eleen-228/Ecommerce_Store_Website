import Header from '@/components/Header'
import Center from '@/components/Center'
import Heading from '@/components/Heading'
import ProductsGrid from '@/components/ProductsGrid'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import { Product } from '@/models/Products'
import { connectMongo } from '@/lib/mongoose'
import styled from 'styled-components'

export default function AllProducts({ product }) {
	return (
		<>
			<Header />
			<Main>
				<Center backgroundColor="#0b0d0f" borderRadius="15px">
					<Heading headingPadding="5rem 0">ALL PRODUCTS</Heading>
					<ProductsGrid product={product} />
				</Center>
			</Main>
			<Footer />
		</>
	)
}
export const getServerSideProps = async () => {
	await connectMongo()
	const allProducts = await Product.find({}, null, { sort: { _id: -1 } })
	return {
		props: {
			product: JSON.parse(JSON.stringify(allProducts)),
		},
	}
}
