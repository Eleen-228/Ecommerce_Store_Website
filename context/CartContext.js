import { useState, useEffect, createContext } from 'react'

export const CartContext = createContext()

export default function CartContextProvider({ children }) {
	//use null instead of [] as the initial cart value to avoid empty [] being saved to localStorage after each page refresh
	//if [] is used as initial cart value, then it will pass the condition on line 15 after each page refresh and reset localStorage to [] even when there was still data saved in localStorage before page refresh
	const [cart, setCart] = useState(null)
	useEffect(() => {
		//`window` is available in `useEffect` so we can call localStorage directly inside useEffect hook
		setCart(JSON.parse(localStorage.getItem('cart')) || [])
	}, [])
	useEffect(() => {
		//use >= 0 instead of > 0 so localStorage of cart can be cleared when all products have been removed from the cart.
		if (cart?.length >= 0) {
			localStorage.setItem('cart', JSON.stringify(cart))
		}
	}, [cart])
	const addProduct = prodID => {
		setCart([...cart, prodID])
	}
	const clearCart = () => {
		setCart([])
	}
	const removeProduct = prodID => {
		setCart(prev => {
			const prodIndx = prev.indexOf(prodID)
			if (prodIndx !== -1) {
				return prev.filter((prod, index) => index !== prodIndx)
			}
			return prev
		})
	}
	return <CartContext.Provider value={{ addProduct, clearCart, cart, removeProduct }}>{children}</CartContext.Provider>
}
