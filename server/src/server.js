import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const port = process.env.PORT || 8081;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`server is running on port ${port}`);
        });
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}
startServer();

