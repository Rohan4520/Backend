//step- 1 install & import express
const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require("./routes/UserRoute.js")


//step-2  create the instance of express
const app = express();


// step-3 start the server via using listen method 
const port=3000;
app.listen(port, () => {
console.log(`Sever start successfully on port no. ${port}`)
})


//step-4
// create the demo request so i can see the changes on the UI
app.get("/",(req,res)=>{
    // console.log(req)
    res.send("<h1>This is heading one</h1>")
})

// for get the data from the body
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/batch20").then(()=>{
    console.log("database connected sucessfully");
}).catch(()=>{
    console.log("getting error while connecting database")
})

//     res.send(`<!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <title>Basic Card</title>
//   <style>
//     body{
//       margin:0;
//       font-family:Arial, sans-serif;
//       background:#f3f4f6;
//       display:flex;
//       justify-content:center;
//       align-items:center;
//       height:100vh;
//     }
//     .card{
//       background:#fff;
//       width:300px;
//       border-radius:12px;
//       box-shadow:0 4px 12px rgba(0,0,0,0.1);
//       overflow:hidden;
//     }
//     .card img{
//       width:100%;
//       height:180px;
//       object-fit:cover;
//     }
//     .card-content{
//       padding:16px;
//     }
//     .card-content h3{
//       margin:0 0 8px;
//       font-size:1.25rem;
//     }
//     .card-content p{
//       margin:0 0 12px;
//       color:#555;
//       font-size:0.95rem;
//     }
//     .card button{
//       background:#4f46e5;
//       color:#fff;
//       border:none;
//       padding:10px 14px;
//       border-radius:8px;
//       cursor:pointer;
//     }
//     .card button:hover{
//       background:#4338ca;
//     }
//   </style>
// </head>
// <body>
//   <div class="card">
//     <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=60" alt="Card Image">
//     <div class="card-content">
//       <h3>Beautiful Place</h3>
//       <p>A short description of the place or product goes here. Simple and clean design.</p>
//       <button>Learn More</button>
//     </div>
//   </div>
// </body>
// </html>`)
// })

app.use("/api/v1/students",UserRoute)
