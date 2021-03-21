const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const auth = require('./auth/auth.json');
const PORT = process.env.PORT || 5000


const app = express();

app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
    host: auth.host,
    user: auth.user,
    password: auth.password,
    database: auth.database  
})

app.get('/crud/get', (req,res) => {
    const DATAS = `SELECT * FROM new_table;`

    pool.query(DATAS, (err, result) => {
        if(err) return console.log('error ' + err.code);

        res.send(result);
    })
})

app.post('/crud/post', (req,res) => {
    const name = req.body.name;
    const note = req.body.note;

    const INSERT_DATA = `INSERT INTO new_table (name, note)
    VALUES (?,?);`;

    pool.query(INSERT_DATA, [name, note], (err, result) => {
        if(err) return console.log('error ' + err.code); 
    })
})

app.delete('/crud/delete/:id', (req,res) => {
    const ID = req.params.id;

    const DELETE_DATA = `DELETE FROM new_table
    WHERE id = ${ID};`

    pool.query(DELETE_DATA, (err, result) => {
        if(err) return console.log(err);
    })
})

app.put('/crud/update', (req,res) => {
    const newName = req.body.name;
    const newNote = req.body.note;
    const ID = req.body.id;

    const UPDATED_DATA = `UPDATE new_table 
    SET name = '${newName}' , note = '${newNote}'
    WHERE id = ${ID};`

    pool.query(UPDATED_DATA, (err, result) => {
        if (err) return console.log('error' + err);
    })
})


app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON ${PORT}`)
})