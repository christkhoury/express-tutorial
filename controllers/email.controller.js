
 const object1 = {
    name:'nicolas',
    email:'elmirnicolas@gmail.com',
    password:'Hello123321',
    spam:false,
    id:0
}

const object2 = {
    name:'christ',
    email:'christ@gmail.com',
    password:'Hejjklskdj4392',
    spam: false,
    id:1
}

const object3 = {
    name:'TOTO',
    email:'toto@gmail.com',
    password:'Hejjklskdj4392',
    spam: true,
    id:2
}

const users = [object1,object2, object3]


exports.allUsers = (req, res) => {

    const spamBox = []
    const goodBoz = []

    // for each element in the users array
    users.forEach(element => {
       if(element.spam === true){
           //if user is spam, it will be pushed to the spamBox
           spamBox.push(element)
       } else {
           goodBoz.push(element)
       }
    })
    res.send(users)
}

exports.usersById = (req, res) => {
    const aUser =  users.find(element => element.id == req.params.id)
    res.send(aUser)
}