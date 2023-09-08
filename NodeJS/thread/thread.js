const {
    Worker,
    isMainThread,
    parentPort,
    workerData
} = require("worker_threads");

if (isMainThread) {
    // create new threads from the main thread
    const thread1 = new Worker(__filename, {workerData: 'thread 1'});
    thread1.on('message', (msg) => console.log(`Message received from Thread1: ${msg}`));
    thread1.on("error", err => console.error(err));
    thread1.on("exit", code => console.log(`Thread1 exited with code ${code}.`));

    // create another thread
    const thread2 = new Worker(__filename, {workerData: 'thread 2'});
    thread2.on('message', (msg) => console.log(`Message received from Thread2: ${msg}`));
    thread2.on("error", err => console.error(err));
    thread2.on("exit", code => console.log(`Thread2 exited with code ${code}.`));
} else {
    const data = workerData;
    const time = data === "thread 1" ? 300 : 800;
    setInterval(() => {
        parentPort.postMessage("Send message to main thread from: " + data);
    }, time);
}