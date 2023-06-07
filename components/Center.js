import styled from 'styled-components'

const StyledDiv = styled.div`
	max-width: 1000px;
	padding: 20px;
	height: ${props => props.height || 'auto'};
	margin: ${props => props.centerMargin || '0 auto'};
	background-color: ${props => props.backgroundColor};
	border-radius: ${props => props.borderRadius};
	overflow: hidden;
`

export default function Center({ children, backgroundColor, borderRadius, height }) {
	return (
		<StyledDiv backgroundColor={backgroundColor} borderRadius={borderRadius} height={height}>
			{children}
		</StyledDiv>
	)
}
