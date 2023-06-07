import styled from 'styled-components'
import ProductBox from './ProductBox'
const GridStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 5px;
	padding: 20px;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (min-width: 992px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media screen and (min-width: 1200px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`
export default function ProductsGrid({ product }) {
	return (
		<GridStyle>
			{product.map(p => (
				<ProductBox key={p._id} {...p}>
					Product
				</ProductBox>
			))}
		</GridStyle>
	)
}
