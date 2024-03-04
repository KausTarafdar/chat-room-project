import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './DB/connectionMongo.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse through the JSONS from req.body

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`App listening at port ${PORT}`)
});