import express from 'express';
import cors from 'cors';
import router from '../router';

export default express()
    .use(express.json())
    .use(cors())
    .use(router);