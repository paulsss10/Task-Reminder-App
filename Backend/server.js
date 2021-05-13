const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const TaskRouter = require('./routes/tasks');

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


app.use('/task', TaskRouter);


app.listen(port, () => {
    console.log(`Running @Port: ${port}`);
});