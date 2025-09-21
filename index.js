const express = require("express");
const users=require("./MOCK_DATA.json");
const app = express();
const PORT=8000;
app
.route("/api/users/:id").get((req,res)=>{
    const id= Number(req.params.id);
    const user =users.find((users)=>users.id === id);
    return res.json(user);
})
.post( (req, res) => {
    //TODO:create the user
  res.json({ message: "POST request received" });
})
.patch((req, res) => {
    //Todo:edit the user
  res.json({ message: "PATCH request received" });
})
.delete((req, res) => {
    //TODO:delete the user
  res.json({ message: "DELETE request received" });
});
app.listen(PORT,()=>console.log(`server start at port 8000`)); 