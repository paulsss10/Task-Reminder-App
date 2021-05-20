const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const TaskRouter = require('./routes/tasks');
const AuthRouter = require('./routes/auth');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// DB Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("DB Connection success");
})


app.use('/task', TaskRouter); //route for tasks

app.use("/auth", AuthRouter); //route for auth

app.listen(port, () => {
    console.log(`Running @Port: ${port}`);
});