const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose');
// const todoRoute=require('./routes/todo'); routes of todo  
const blog = require('./routes/blog');

app.use(express.json());
// learn for crud operations and blog for blog website
mongoose.connect(`mongodb+srv://ashishSocial:Shivam@cluster0.yzsw1ma.mongodb.net/Blog`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection successfully established");
}).catch((err) => {
    console.log(err)
});
// ***************Routes for TOdo ****************************
// app.use('/api',todoRoute);

// ***************Routes for BLOG ****************************

app.use('/api/blog', blog);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))