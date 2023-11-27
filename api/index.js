import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();



const app = express();
console.log(process.env);
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
});
app.listen(3000,()=>{
console.log('server is running on port 3000');
});
app.use('/api/user',userRouter);