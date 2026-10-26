import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoURL = process.env.MONGO_URL;
        await mongoose.connect(mongoURL);
        console.log("mongodb connected");
    } catch(err) {
        throw new Error(err);
    }
}
export default connectDB;