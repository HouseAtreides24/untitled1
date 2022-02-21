const {Router } = require('express')
const users = require('../db/users')

const loginRouter = Router();

loginRouter.get('/',(res,req)=>{
    req.render('login')
})

loginRouter.post('/',(res,req)=>{
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

module.exports = loginRouter;