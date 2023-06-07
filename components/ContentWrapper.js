import styled from 'styled-components'
const StyledWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 3rem;
	background-color: ${props => props.backgroundColor};
	@media screen and (min-width: 768px) {
		padding: ${props => props.padding};
		grid-template-columns: 1fr 1fr;
	}
`
export default function ContentWrapper({ children, padding, backgroundColor }) {
	return (
		<StyledWrapper padding={padding} backgroundColor={backgroundColor}>
			{children}
		</StyledWrapper>
	)
}
