import express from 'express';
import dotenv from 'dotenv';
import menagmentRoutes from './routes/menagmentRoutes.js';
import beneficiaryRoutes from './routes/beneficiaryRoutes.js';
import dbConnection from './config/dbConnection/dbConnection.js';


const app = express();
dotenv.config()
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Welcome to the beneficiary app');
})
app.use('/managment', menagmentRoutes)
app.use('/beneficiary', beneficiaryRoutes)


const PORT = process.env.PORT || 3000;
dbConnection()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})