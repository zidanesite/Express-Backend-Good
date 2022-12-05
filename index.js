const express = require('express');



const handlelogin = (req, res) => {
    res.send("<h2>This LOGIN page says Zidane did his assignment</h2>")
}
const handleSignUp = (req, res) => {
    res.send("<h2>Who Cares if your Sign Up page works?</h2>")
}

const handleRegister = (req, res) => {
    res.send("<h2>I got your Name plate Registered baby</h2>")
}

const handleError = (req, res) => {
    res.send("<h3>This world is full of Error</h3>")
}


const app = express()

app.get("/login", handlelogin)
app.put("/signUp", handleSignUp)
app.post("/register", handleRegister)
app.delete("*", handleError);


app.listen("3000", "localhost")