const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();

const DUMMY_DATA = []; // cache/im-memory storage

app.use(bodyParser.json());

// CORS HEADER => cross-server comm
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    res.setHeader(
        'Access-Control-Allow-Methods',
        'Get, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.get('/tasks', (req, res, next) => {
    res.status(200).json({ tasks: DUMMY_DATA });
});

app.post('/task', (req, res, next) => {
    const { title, description } = req.body;

    if (!title || title.trim().length === 0 || !description || description.trim().length === 0) {
        return res.status(422).json({
            message: 'Invalid input...'
        });
    }
    
    const createTask = {
        id: uuid(),
        title,
        price
    };

    DUMMY_DATA.push(createTask);

    res.status(201).json({ message: "You created a task!", tasks: createTask });
});


app.listen(5000); // host backend on port 5000