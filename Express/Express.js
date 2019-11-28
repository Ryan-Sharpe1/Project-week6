var express = require ("express");
var session = require("express-session");
var mysql = require("./dbConnect.js");
var bodyparser = require("body-parser");
var cors=require("cors");
var con=mysql();
var app=express();
app.use(session({secret: 'Secretses Hobbitses'}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
//logincheck

app.post('/login', function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var query = `select * from users where username='${username}' and password='${password}'`
        console.log(query)
        con.query(query,
        function(error, results, fields){
        if(results.length<1){
        }
        else{
            res.send(results);
        }
    })
})

//creatingusersubmit

app.post('/createuser', function(req,res){
    var name = req.body.name;
    var username = req.body.username;
    var password = req.body.password;
    var role = req.body.role;

        var query=`insert into users values('${name}', '${username}',  '${password}', '${role}')`
        console.log(query)
        con.query(query,function(error, data){
            console.log(data);
        })
})

//homepage

app.get('/homepage', function(req,res){
    con.query(`select * from personal`, 
    function(error,data){
        if(error){
            console.log("Error Retrieving From Personal Table");
        }
        else{
            console.log("Data Found In Personal");
            console.log(data);
            res.send(data);
        }
    })
})

app.post('/delete', function(req,res){
    regno = req.body.regno
    con.query(`delete from personal where regno=${regno}`,function(err,data){
        if(!(err)){
        }
    })
})

app.put('/edit',function(req,res){
    var regno = parseInt(req.body.regno)
    var name = req.body.name
    var address = req.body.address
                    con.query(`update personal set name = '${name}', address = '${address}' where regno = ${regno}`,function(error, results, fields){
                    });    
});

app.post('/addpersonal', function(req,res){
    var regno = parseInt(req.body.regno)
    var name = req.body.name
    var address = req.body.address
    var query=`insert into personal values(${regno}, '${name}', '${address}')`
        console.log(query)
        con.query(query,function(error, data){
            console.log(data);
        });
});

app.listen(6400);