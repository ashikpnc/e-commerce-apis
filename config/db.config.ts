import mongoose from 'mongoose'

export async function dbConfig() {
    try {
        await mongoose.connect(`${process.env.DB}`);
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}