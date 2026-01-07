import express  from "express" 
const  app =  express() ;
app.use(express.json()
)

app.get("/users" , (req , res)=> {
let  user:string[] = [] ; 
  for(let i = 0 ; i< 20 ; i++) {
    user.push(Math.random().toLocaleString());


;  }

res.json({
    'user' : user
}).status(200)



} )

app.listen(3001 , ()=>{
    console.log('server is running on  PORT 3000'); 

})