const express= require('express');
const app =express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// data
let student=[
    {id:1, name:'John Doe', course:'Computer Science'},
    {id:2, name:'Jane Smith',course:'Mathematics'},
    {id:3, name:'Sam Brown', course:'Physics'}
];

// read all students

app.get('/students', (req, res) => {
    res.json(student);
});

// read a single student by id
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const stud = student.find(s => s.id === id);
    if (stud) {
        res.json(stud);
    } else {
        res.status(404).send('Student not found');
    }
});

// create a new student -creation using post
app.post('/students', (req, res) => {
    const newStudent = {
        id: student.length + 1,
        name: req.body.name,
        course: req.body.course
    };
    student.push(newStudent);
    res.status(201).json(newStudent);
});

//update a student by id
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const studIndex = student.findIndex(s => s.id === id);  
    if (studIndex !== -1) {
        student[studIndex].name = req.body.name || student[studIndex].name;
        student[studIndex].course = req.body.course || student[studIndex].course;
        res.json(student[studIndex]);
    } else {
        res.status(404).send('Student not found');
    }
});

// delete a student by id
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const studIndex = student.findIndex(s => s.id === id);
    if (studIndex !== -1) {
        const deletedStudent = student.splice(studIndex, 1);
        res.json(deletedStudent);
    }
    else {
        res.status(404).send('Student not found');
    }
});

//start the server
app.listen(3001, () => {
    console.log('Server is running on port 3000');
});
