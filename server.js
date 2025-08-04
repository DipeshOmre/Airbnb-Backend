const express=require('express');
const app=express();
const userRouter=require('./routes/userrouter');
const {hostRouter}=require('./routes/hostRouter');
const {registeredHomes}=require('./routes/hostRouter');
const rootDir=require("./utils/pathUtil"); // Assuming pathUtil.js is in the utils folder
const port=3000;
const path = require('path');
const { errorcont } = require('./controller/error');
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(rootDir,'public'))); // Serve static files from the public directory
app.use((req,res,next)=>{
    console.log(`${req.method} request for '${req.url}'`);
    next();
});
app.use(express.urlencoded());
app.use(userRouter);

app.use("/host",hostRouter);

// here we come means there is no response sent by the above routes
app.use(errorcont);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);   
});