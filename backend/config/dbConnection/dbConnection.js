import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected`)
    } catch (error) {
        console.error(error.message)
    }
}


export default dbConnection;
