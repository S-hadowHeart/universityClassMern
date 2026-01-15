const express = require('express')
const router = express.Router()

const timeLog = (req,res,next) => {
    console.log("Time: ",Date.now())
    next()
}

router.use(timeLog)


router.get("/",(req,res)=> {
    res.send("Student welcome page");
})


router.get("/detail",(req,res) => {
    res.send("student info")
})

router.get("/branch", (req, res) => {
  res.send("student branch info");
});

router.get("/uni", (req, res) => {
  res.send("uni info");
});



module.exports = router