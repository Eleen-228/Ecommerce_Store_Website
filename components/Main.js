import styled from 'styled-components'

const MainStyled = styled.div`
	margin-top: 150px;
`
export default function Main({ children }) {
	return <MainStyled>{children}</MainStyled>
}
