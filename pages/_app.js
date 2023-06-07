import { createGlobalStyle } from 'styled-components'
import CartContextProvider from '@/context/CartContext'
import '@/styles/globals.css'

const GlobalStyle = createGlobalStyle`
*, *:before, *:after{
  padding:0;
  box-sizing: border-box;
  margin:0;
  font-family: sans-serif;
}
body{
  background: #124e7e;
}
a{
  text-decoration: none
}
`

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<CartContextProvider>
				<Component {...pageProps} />
			</CartContextProvider>
		</>
	)
}
