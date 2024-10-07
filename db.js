const mongoose = require('mongoose')
require('dotenv').config();


//const mongoUrl = 'mongodb://localhost:27017/onlinecourse';
//const mongoUrl ='mongodb+srv://nikitadesai0796:Yvik8dJDrK10KMDy@cluster0.mpxux.mongodb.net/'


//const mongoUrl ='mongodb+srv://nikitadesai0796:AMCBdStz7Pdh5JQ1@cluster0.0ltc3.mongodb.net/'

const mongoUrl=process.env.mongoDB_Url;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection ;

db.on('connected',()=>{
    console.log("connected mongodb server")
} );
db.on('error',(err)=>{
    console.log("error while connecting",err)
});