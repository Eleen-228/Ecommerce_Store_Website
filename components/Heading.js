import styled from 'styled-components'
const Title = styled.h2`
	text-align: center;
	padding: ${props => props.headingPadding || '2.5rem'};
	font-weight: 400;
	color: #fff;
`
export default function Heading({ children, headingPadding }) {
	return <Title headingPadding={headingPadding}>{children}</Title>
}
