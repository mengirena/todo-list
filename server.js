const express = require("express")//require express to help handle API quickly
const app = express()
const MongoClient = require("mongodb").MongoClient //require mongodb to talk to the database
const {v4:uuidv4} = require("uuid")


const PORT = 2021

app.set("view engine","ejs") // set the view engine using ejs
app.use(express.static("public"))
app.use(express.urlencoded({extended:true})) // parsing url to js object
app.use(express.json()) // teach express to read json

let db,
    dbConnectionString = "mongodb+srv://demo:demo123@cluster0.ubkgf.mongodb.net/Todos?retryWrites=true&w=majority",
    dbName = "Todos"

MongoClient.connect(dbConnectionString,{useUnifiedTopology: true})
.then(client =>{
    console.log('connected to Database')
    db = client.db(dbName) // connect to our database named "Todos"
})
//create task
app.post('/createTask',async (request, response)=>{
    const result = await db.collection("Tasks").insertOne({
        id: uuidv4(),
        taskName: request.body.taskName,
        finished: false,
        recordTime: new Date()
    })
    console.log("post added")
    response.redirect("/")
})
//get task
app.get('/', async (request, response)=>{
    const data = await db.collection("Tasks").find().sort({finished: 1, recordTime: 1}).toArray()
    response.render('index.ejs', {posts:data})
})

//delete task
app.delete('/deleteTask', async (request, response)=>{
    const result = await db.collection('Tasks').deleteOne({id:request.body.deleteId})
    console.log('data deleted')
    response.json('data deleted')
})

//update task
app.put('/updateCompleteness', async (request, response)=>{
    const result = await db.collection('Tasks').updateOne({id:request.body.updateId},{
       $set:{
           finished: !request.body.completeness
       }
    },{
        sort: {finished: -1, recordTime: 1},
        upsert: false
    })
    console.log('completeness updated')
    response.json("completeness updated")
})

//Listening to the port
app.listen(process.env.PORT || PORT, ()=>console.log('server\'s running' ))