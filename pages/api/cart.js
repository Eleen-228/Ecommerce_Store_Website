import { connectMongo } from '@/lib/mongoose'
import { Product } from '@/models/Products'
export default async function handler(req, res) {
	await connectMongo()
	const ids = req.body.ids
	res.json(await Product.find({ _id: ids }))
}
