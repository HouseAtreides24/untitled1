const { Router } = require('express');
const users = require('../db/users')

const userRouter = Router();

userRouter.get('/',({query}, res) => {
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

})

userRouter.get('/:userId',(req,res)=>{
    const {userId} = req.params;
    res.json(users[userId])
})

module.exports = userRouter;