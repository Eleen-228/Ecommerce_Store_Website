import Header from '@/components/Header'
import Featured from '@/components/Featured'
import NewProducts from '@/components/NewProducts'
import Footer from '@/components/Footer'
import { connectMongo } from '@/lib/mongoose'
import { Product } from '@/models/Products'
export default function Home({ featuredProduct, newProducts }) {
	return (
		<>
			<Header />
			<Featured product={featuredProduct} />
			<NewProducts product={newProducts} />
			<Footer />
		</>
	)
}
export const getServerSideProps = async () => {
	const FeaturedProductID = '6464f6b0c9f3be414684f68c'
	await connectMongo()
	const featuredProduct = await Product.findById(FeaturedProductID)
	const newProducts = await Product.find({}, null, { sort: { _id: -1 }, limit: 10 })
	return {
		props: {
			featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
			newProducts: JSON.parse(JSON.stringify(newProducts)),
		},
	}
}
