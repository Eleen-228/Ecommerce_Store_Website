import Center from './Center'
import ProductsGrid from './ProductsGrid'
import Heading from './Heading'

export default function NewProducts({ product }) {
	return (
		<Center>
			<Heading>NEW ARRIVALS</Heading>
			<ProductsGrid product={product} />
		</Center>
	)
}
