const router = require('express').Router();
let Tasks = require('../models/tasks.model');

// Get all Tasks
router.route('/').get((req, res) => {
    Tasks.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Naay Error sa pagkuha sa tanan tasks: ' + err));
});

// Add new Task
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const schedule = req.body.schedule;
    const type = req.body.type;
    const reminder = req.body.reminder;

    const newTask = new Tasks({ title, description, schedule, type, reminder });
    newTask.save()
        .then(task => res.json('New Task has been saved'))
        .catch(err => res.status(400).json('Naay Error sa pag add ug task: ' + err));

});

// get specific task details
router.route('/:id').get((req, res) => {
    Tasks.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Naay Error sa pagkuha sa specific task: ' + err));
})


// Delete task
router.route('/:id').delete((req, res) => {
    Tasks.findByIdAndDelete(req.params.id)
        .then(task => res.json('A record was deleted.'))
        .catch(err => res.status(400).json('Naay Error sa pagkuha sa specific task: ' + err));
})


// Update a Task detail/s
router.route('/update/:id').post((req, res) => {
    
    Tasks.findById((req.params.id))
        .then(task => {
            // current values of Tasks
            task.title = req.body.title;
            task.description = req.body.description;
            task.schedule = req.body.schedule;
            task.type = req.body.type;
            task.reminder = req.body.reminder;

            

            task
              .save()
              .then(() => res.json("A task has been updated"))
              .catch((err) =>
                res.status(400).json("Naay Error sa pag update ug task: " + err)
              );
        })

});

module.exports = router;