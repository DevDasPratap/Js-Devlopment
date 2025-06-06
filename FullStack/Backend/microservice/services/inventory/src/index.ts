import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import morgan from "morgan"
import { createInventory } from "./controller";

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/health', (_req, res)=>{
    res.status(200).json({status: 'UP'})
})

// app.use((req, res, next) => {
// 	const allowedOrigins = ['http://localhost:8081', 'http://127.0.0.1:8081'];
// 	const origin = req.headers.origin || '';

// 	if (allowedOrigins.includes(origin)) {
// 		res.setHeader('Access-Control-Allow-Origin', origin);
// 		next();
// 	} else {
// 		res.status(403).json({ message: 'Forbidden' });
// 	}
// });


// routes
app.post('/inventories', createInventory);

// 404 handler
app.use((_req, res)=>{
    res.status(404).json({status: 'Not found'})
})

// Error handler
app.use((err, _req, res, _next)=>{
    console.error(err.stack)
    res.status(500).json({status: 'Internal server error'})
})

const port = process.env.PORT || 4002
const serviceName = process.env.SERVICE_NAME || 'inventory-service'

app.listen(port, ()=>{
    console.log(`${serviceName} is running on port ${port}`)
})