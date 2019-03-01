const express = require('express');
const cors = require('cors');
const mySql = require('mysql');

const app = express();
const SELECT_ALL_EMPLOYEE = "SELECT * FROM employee";

const connection = mySql.createConnection({
    host:'localhost',
    user:'root',
    password: 'XPDL3142',
    database: 'employee_directory'
});

connection.connect(err => {
    if(err){
        return err;
    }
});

// console.log(connection);
app.use(cors());

app.get('/', (req,res) => {
    res.send("Hello server");
})

app.get('/employee', (req,res) => {
    connection.query(SELECT_ALL_EMPLOYEE, (err, results) => {
        if(err){
            return res.send(err);
        } else {
            return res.json({
                data: results
            })
        }
    });
})
app.listen(4000, () => {
    console.log("server running on 4000!");
})
