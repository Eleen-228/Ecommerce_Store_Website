import mongoose from 'mongoose'
export async function connectMongo() {
	try {
		if (mongoose.connection.readyState === 1) {
			return await mongoose.connection.asPromise()
		} else {
			return await mongoose.connect(process.env.MONGODB_URI)
		}
	} catch (error) {
		console.log(error)
	}
}
