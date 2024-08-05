require('dotenv').config();
const express = require('express');
const connectDB = require('./db/index')
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employee');

const app = express();
connectDB()
.then(() => {
    app.listen(process.env.DB_PORT || 5000, () => {
        console.log(`MongoDb Server is running at port: ${process.env.DB_PORT}`);
    })
})
.catch((err) => {
    console.log(`MongoDB Connection Failed`, err);
})

app.use(cors());
app.use(bodyParser.json());

app.use('/api/employees', employeeRoutes);

const port = process.env.SERVER_PORT || 8000;
app.listen(port, () => console.log(`Node Server running on port ${port}`));
