const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const auth = require('./auth');
const bodyParser = require('body-parser');
const { sendEmailVerification, signInAnonymously } = require('firebase/auth');


// var request = require('request');





app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
// Serve static files from the "public" directory
const publicDirPath = path.join(__dirname, 'public/')
app.use(express.static('public'));

// Define routes

app.get('/', (req, res) => {
  res.sendFile('/home/bala/Documents/laptopdocuments/mac bala/ideathon-main/live in lab 3/public/login.html');
});






app.post("/signup", async (req,res)=>{
      var {email,password} = req.body;

      console.log('email is ',email);
  try{
    var userData = await auth.createUser(email=email, password=password)
    if (userData){
      res.status(200).json({ message: 'User signed up successfully', userData });
      window.location.href="/login.html";
    }
    else{
      res.status(500).json({ message: 'Failed to sign up user' });
    }
  }catch(error) {
    console.error('Error handling sign-in request:', error);
    res.status(500).json({ message: 'Failed to sign in user' });
  }

})



app.post("/login", async (req, res) => {
  var  {email,password} = req.body;


  try{
    var  userData = await auth.loginUser(email=email, password=password)
    if(userData){
      res.status(200).json({ message: true });

    }
  }catch(error){
    res.status(401).json({ message: false });
   
  }
})






app.get('/chennai', (req, res) => {
  const path = req.path;
  console.log(path)
  // res.sendFile('chennai.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// res.sendfile(__dirname + '/public/home.html');