const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const ConnectDB = require('./Database/DB_Connect');
const userRouter = require('./routes/userRouter');
const otpRouter = require('./routes/otpRouter');
const assignmentRouter = require('./routes/assignmentRouter');
const attendanceRouter = require('./routes/attendenceRouter');
const notificrouter = require('./routes/notifiactionsRouter');
const resultRouter = require('./routes/resultRouter');
const helpMsgRouter = require('./routes/helpMsgRouter');
const AiRouter = require('./routes/serverRouter');
const AdminRouter=require('./routes/adminRouter')
const hostelRouter=require('./routes/hostelRouter')

dotenv.config();
ConnectDB();

const app = express();

app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api', userRouter);
app.use('/api', otpRouter);
app.use('/api', assignmentRouter);
app.use('/api', attendanceRouter);
app.use('/api', notificrouter);
app.use('/api', AiRouter);
app.use('/api', resultRouter);
app.use('/api', helpMsgRouter);
app.use('/api',AdminRouter);
app.use('/api',hostelRouter);
app.get('/api/test',(req,res)=>{
  res.json({message:"test success"})
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});