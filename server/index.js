import express from 'express';
import cors from 'cors';
import { adminRouter } from './Routes/AdminRoute.js'; // This should match the exact case

const app = express();
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT"],
    credentials:true
}));
app.use(express.static('Public'))
app.use(express.json());
app.use('/auth', adminRouter);
app.listen(3000, () => {
    console.log('Welcome node server');
});
