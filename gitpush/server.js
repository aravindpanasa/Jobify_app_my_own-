import 'express-async-errors'; //It only works when it is on top of all imports
import express from 'express'
import connectDB from './db/connect.js';
//import cors from 'cors';


import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';




import dotenv from 'dotenv'
dotenv.config();


const app = express();

//app.use(cors());

app.use(express.json());

app.get('/api/v1', (req, res) => {
    res.json({ msg: 'API' });
})

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome' });
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`)
        })
        
    }
    catch(error) {
        console.log(error);
    }
}

start();



/* Generally we cannot call backend as front end and backend are running in two diff ports.

To solve this we come with two different approaches 1. Using cors() 2. proxy
To make use of cords we need to install cors module npm and later we use app.use(cors()) in server.js
Then we call backend from frontend using fetch();
*/