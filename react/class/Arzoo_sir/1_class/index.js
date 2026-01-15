const express = require('express')
const app = express()
const birds = require('./bird')
const port = 3000
const student = require('./student')
app.use(express.json());
app.use('/b',birds)
app.get("/", (req, res) => res.send("from all"));
app.get('/', (req, res) => res.send('Hello World!'))
app.get("/name", (req, res) => res.send("Welcome sky"));
// app.get("/student",(req,res) => res.send("Dharmraj sodha\n sem 5th \nrku"))
// app.get("/student", (req, res) =>{ res.sendFile(Path.join(__dirname, "student.html"))})
app.get("/student",(req,res) => res.json({name:"dharmraj" , age:20,branch:"CE"}) )
app.get('/food{s}',(req,res) => res.send("food or foods"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.post('/addstudent',(req,res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    res.send('welcome ${fname},${lname}');
})

app.get('/user/:fname/:lname',(req,res)=> {
    var fname = req.params.fname
    var lname = req.params.lname
    res.send("hello "+fname+" "+lname)
})


//create end point to accept date of birth of user in dd/mm/yyyy formate if age of user is more than 18 then print msg you are eligble for admisssion
router.post("/admission", (req, res) => {
  const dob = req.body.dob;
  const [day, month, year] = dob.split("/").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age >= 18) {
    res.send("You are eligible for admission");
  } else {
    res.send("You are not eligible for admission");
  }
});



app.post("/hel",(req,res) => res.send("hoo00000"))


// create end point for student , details , univercity , branch