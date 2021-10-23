const express = require('express');
const cors = require('cors');
const app =express(); 
 
app.use(cors())
app.use(express.json());
const port =  process.env.PORT ||  5000;



app.get('/', (req, res)=>{
    res.send('Hallo from My 5th ever node')

});
const users =[
    {
        id:0 , name: "Jasim",username: "Bret",email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      },
      {
        id: 1,
        name: "Abdul",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains"
        }
      },
      {
        id:2 ,
        name: "Noor",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications"
        }
      },
      {
        id: 3,
        name: "Mariya",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
          name: "Robel-Corkery",
          catchPhrase: "Multi-tiered zero tolerance productivity",
          bs: "transition cutting-edge web services"
        }
      },
      {
        id: 4,
        name: "Aanisa",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
          name: "Keebler LLC",
          catchPhrase: "User-centric fault-tolerant solution",
          bs: "revolutionize end-to-end systems"
        }
      },
]

// ------------------------------search implement quary///
app.get('/users',(req,res)=>{
  const search =req.query.search;
  if(search){
    const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
  }
  else{
    res.send(users)
  }
})
//---------------------------------users  route
app.get('/users',(req,res)=>{
    res.send(users);
});
//---------------------dynamic route for id
app.get('/users/:id',(req,res)=>{
  const id = req.params.id;
  const user = users[id];
  res.send(user);
})
//app.METHOD-----------------------------------post
app.post('/users',(req,res)=>{
 const newUser = (req.body);
 newUser.id = users.length;
 users.push(newUser);
//  res.send(JSON.stringify(newUser));
 res.json(newUser);
 console.log(newUser);
})

app.listen(port, ()=>{
    console.log('listing to port',port);
});
