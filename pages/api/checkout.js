import { connectMongo } from '@/lib/mongoose'
import { Orders } from '@/models/Orders'
import { Product } from '@/models/Products'
export default async function handler(req, res) {
	const method = req.method
	if (method === 'POST') {
		const { cart, fullName, email, streetAdd, city, state, postalCode, fullNameOnCard, creditCardNum, expiration, cvv } = req.body
		await connectMongo()
		const orderProdIDs = cart
		const uniqProdIDs = [...new Set(orderProdIDs)]
		const cartProdInfo = await Product.find({ _id: uniqProdIDs })
		let quantity = 0
		let prod_ordered = []
		for (const product of cartProdInfo) {
			quantity = orderProdIDs.filter(id => id === product._id.toString()).length
			prod_ordered.push({ prod_name: product.title, prod_counts: quantity })
			console.log(quantity)
		}
		await Orders.create({
			lineItems: prod_ordered,
			fullName,
			email,
			city,
			postalCode,
			streetAddress: streetAdd,
			state,
			paid: false,
			fullNameOnCard,
			creditCardNum,
			expiration,
			cvv,
		})
		res.json({
			msg: 'order received',
			fullName,
			email,
		})
	}
}
