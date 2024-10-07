const express = require('express');
const app = express();
const db = require('./db')


const PORT =process.env.PORT || 9000;

const bodyParser = require('body-parser');
const Instructor = require('./models/Instructor');
const Student = require('./models/Student');
const Course = require('./models/Course');
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("hello world")
})


app.post('/Instructor', async(req, res)=>{
    try{
        const data = req.body;
        const newInstructor = new Instructor(data);
        const response = await newInstructor.save();//response should write earlier wrote repose
        console.log("data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log("error");
        res.status(500).json({error:"internal server error"});
    }
});




app.get('/Instructor', async (req, res) => {
    try {
        const data = await Instructor.find();
        console.log("Data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})



app.put('/Instructor/:id',async (req, res)=>{
    try{

        const InstructorId = req.params.id;
        const updatedInstructorData = req.body;

        const response = await Instructor.findByIdAndUpdate(InstructorId, updatedInstructorData, {
            new: true, 
            runValidators: true 
        })


        if(!response)
        {
            return res.status(404).json({ error: 'Instructor not found' });
        }
        res.status(200).json(response);


    }
    
    catch(err){
        console.log(err);
       res.status(500).json({ error: "Internal server error" });
    }
} )

app.delete('/Instructor/:id',async (req, res)=>{
    try{

        const InstructorId = req.params.id;
        const deleteInstructorData = req.body;

        const response = await Instructor.findByIdAndDelete(InstructorId, deleteInstructorData)


        if(!response)
        {
            return res.status(404).json({ error: 'Instructor not found' });
        }
        res.status(200).json({message:'Instructor deleted successfully'});


    }
    
    catch(err){
        console.log(err);
       res.status(500).json({ error: "Internal server error" });
    }
} )


//student data collections
app.post('/Student', async(req, res)=>{
    try{
        const data = req.body;
        const newStudent = new Student(data);
        const response = await newStudent.save();//response should write earlier wrote repose
        console.log("data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log("error");
        res.status(500).json({error:"internal server error"});
    }
});

app.get('/Student', async (req, res) => {
    try {
        const data = await Student.find();
        console.log("Data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})


app.put('/Student/:id',async (req, res)=>{
    try{

        const StudentId = req.params.id;
        const updatedStudentData = req.body;

        const response = await Student.findByIdAndUpdate(StudentId, updatedStudentData, {
            new: true, 
            runValidators: true 
        })


        if(!response)
        {
            return res.status(404).json({ error: 'student not found' });
        }
        res.status(200).json(response);


    }
    
    catch(err){
        console.log(err);
       res.status(500).json({ error: "Internal server error" });
    }
} )

app.delete('/Student/:id',async (req, res)=>{
    try{

        const StudentId = req.params.id;
        const deleteStudentData = req.body;

        const response = await Student.findByIdAndDelete(StudentId,deleteStudentData)


        if(!response)
        {
            return res.status(404).json({ error: 'student not found' });
        }
        res.status(200).json({message:'student deleted successfully'});


    }
    
    catch(err){
        console.log(err);
       res.status(500).json({ error: "Internal server error" });
    }
} )


//student data collections
app.post('/Course', async(req, res)=>{
    try{
        const data = req.body;
        const newCourse = new Course(data);
        const response = await newCourse.save();//response should write earlier wrote repose
        console.log("data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log("error");
        res.status(500).json({error:"internal server error"});
    }
});

app.get('/Course', async (req, res) => {
    try {
        const data = await Course.find();
        console.log("Data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})


app.put('/Course/:id',async (req, res)=>{
    try{

        const CourseId = req.params.id;
        const updatedCourseData = req.body;

        const response = await Course.findByIdAndUpdate(CourseId, updatedCourseData, {
            new: true, 
            runValidators: true 
        })


        if(!response)
        {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(response);


    }
    
    catch(err){
        console.log(err);
       res.status(500).json({ error: "Internal server error" });
    }
} )

app.delete('/Course/:id',async (req, res)=>{
    try{

        const CourseId = req.params.id;
        const deleteCourseData = req.body;

        const response = await Course.findByIdAndDelete(CourseId,deleteCourseData)


        if(!response)
        {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json({message:'Course deleted successfully'});


    }
    
    catch(err){
        console.log(err);
       res.status(500).json({ error: "Internal server error" });
    }
} )


app.listen(9000,()=>{
    console.log("server run at 9000")
});