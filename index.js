const App = require("./App");

const PORT = process.env.PORT || 5000

App.listen(PORT, ()=>{
    console.log("Server Runn Succes http://localhost:5000")
})