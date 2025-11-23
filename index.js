require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubdata={
    name:"hitesh",
    company:"chai aur code",
    location:"india"
}
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('hiteshdotcom')
})

app.get('/Login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
