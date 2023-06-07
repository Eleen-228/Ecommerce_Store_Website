import styled from 'styled-components'
const SubtitleStyled = styled.h3`
	color: ${props => props.color};
	text-align: center;
	padding: 5px;
`
export default function Subtitle({ children, color }) {
	return <SubtitleStyled color={color}>{children}</SubtitleStyled>
}
