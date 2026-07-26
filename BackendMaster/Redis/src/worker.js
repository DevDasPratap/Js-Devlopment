// queue have producer and consumer also call worker
import { Worker } from "bullmq";
import { redisClient } from "./bullMQ.js";


const emailWorker = new Worker(
    'emails',
    async (job) => {
        console.log('Processing email job: ', job)
        await new Promise((resolve)=> setTimeout(resolve, 1500))
        console.log('Email job process completed', job.id, job.name, job.data)
    },
    {redisClient}
)

Worker.on("completed", (job)=>{
    console.log('Job completed:', job.id, job.name, job.data)
})
Worker.on("failed", (job)=>{
    console.log('Job failed:', job.id, job.name, job.data)
})