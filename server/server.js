// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser');
// const TodoListRoutes = require('./routes/api/TodoList');
// const cors = require('cors')
// require('dotenv').config();

// app.use(cors()) // to allow cross origin requests
// app.use(bodyParser.json()) // to convert the request into JSON
// app.use('/api/todoList', TodoListRoutes)

// mongoose
//     .connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log('MongoDB database Connected...'))
//     .catch((err) => console.log(err))

// app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })


//-----------------------------------
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes.js');
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT ;

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use(bodyParser.json());
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
