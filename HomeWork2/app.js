const path  = require('path')
const express = require('express')
const {engine} = require('express-handlebars')

let users = [
    {
        firstName:"Kuziv",
        lastName:"Vasul",
        email:"wwwwSSSS@gmail.com",
        password:"",
        age: 30,
        city:"Ivano-Frankivsk"
    }
]
const app = new express;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'static')))
app.set('view engine','.hbs')
app.engine('.hbs', engine({defaultLayout:false}))
app.set('views',path.join(__dirname,'static'))

app.listen(5200,()=>{
    console.log('Server is started')
})


app.get('/users',(({query}, res) => {
    let usersBy = [...users];
    if (query){
        if (query.city){
            usersBy = usersBy.filter(user => user.city==query.city)
        }
        if (query.age){
            usersBy = usersBy.filter(user => user.age==query.age)
        }
        res.render("users",{users : usersBy})
        return;
    }
    res.render("users",{users})

}))

app.get('/users/:userId',(req,res)=>{
    const {userId} = req.params;
    res.json(users[userId])
})

app.get('/login',(res,req)=>{
    req.render('login')
})

app.post('/login',(req,res)=>{
    let flag = true;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email===req.body.email){
            flag = false;
            break;
        }
    }
    if (flag){
        users.push(req.body)
        res.redirect('/users');
    }else{
        res.redirect('/errorPage')
    }
})

app.use((req, res) => {
    res.render('notFound')
})



