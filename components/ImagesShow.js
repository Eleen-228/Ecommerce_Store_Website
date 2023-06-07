import styled from 'styled-components'
import ImageOne from '../public/images/MacBook_Pro.webp'
import ImageTwo from '../public/images/Apple-MacBook-Pro-M2.jpeg'
import ImageThree from '../public/images/mbp14_silver_m1_2021.jpeg'
import ImageFour from '../public/images/mbp14_spacegray.jpeg'
import { useState } from 'react'
const ImagesContainer = styled.div`
	display: grid;
	background-color: #fff;
	padding: 10px;
	grid-template-rows: auto;
	row-gap: 3rem;
	border-radius: 10px;
	grid-template-columns: ;
	min-width: 0;
`
const MainImg = styled.div`
	display: flex;
	align-items: center;
	img {
		border-radius: 5px;
		max-width: 100%;
	}
`
const MoreImages = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	height: 80px;
	padding: 0 5px;
`
const ImageBtn = styled.div`
	width: 100%;
	height: 60px;
	cursor: pointer;
	overflow: hidden;
	border-radius: 5px;
	img {
		width: 100%;
		height: 100%;
		padding: 5px;
		background-color: #dbdbdb;
	}
`
export default function ImagesShow() {
	const [active, setActive] = useState(false)
	return (
		<ImagesContainer>
			<MainImg>
				<img src={ImageOne.src} alt="product_image" />
			</MainImg>
			<MoreImages>
				<ImageBtn onClick={() => setActive(true)} active={{}}>
					<img src={ImageOne.src} alt="product_image" />
				</ImageBtn>
				<ImageBtn>
					<img src={ImageTwo.src} alt="product_image2" />
				</ImageBtn>
				<ImageBtn>
					<img src={ImageThree.src} alt="product_image3" />
				</ImageBtn>
				<ImageBtn>
					<img src={ImageFour.src} alt="product_image4" />
				</ImageBtn>
			</MoreImages>
		</ImagesContainer>
	)
}
