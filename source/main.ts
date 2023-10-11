import express from './libs/express';
import http from 'node:http';

import 'dotenv/config';
import './libs/mongoose';

const server = http.createServer(express);

server.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));