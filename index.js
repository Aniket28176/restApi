const express = require("express");
const users=require("./MOCK_DATA.json");
const fs= require('fs');
const app = express();
const PORT=8000;
//Middleware
app.use(express.urlencoded({extended:false}));

app.get("/api/users/:id",(req,res)=>{
    const id= Number(req.params.id);
    const user =users.find((users)=>users.id === id);
    return res.json(user);
})
app.post("/api/users",(req, res) => {
  const body=req.body;
  users.push({...body,id:users.length+1});
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users, null, 2),(err,data)=>{
    return res.json({status:"successful"});
  });
});
app.patch("/api/users/:id",(req, res) => {
    //Todo:edit the user
  res.json({ message: "PATCH request received" });
});
app.delete("/api/users/:id",(req, res) => {
    //TODO:delete the user
  res.json({ message: "DELETE request received" });
});
app.listen(PORT,()=>console.log(`server start at port 8000`)); 