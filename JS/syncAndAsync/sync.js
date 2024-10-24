// js is single thread 

// Block the the main execution
// alert('I am blocking main thread')

// block the  browser tab for perticular time (reload)
// const startTime = Date.now()
// let currentTime = startTime

// while (startTime + 4000 > currentTime) {
//     currentTime = Date.now()
// }


const addElem = document.querySelector('#addElem');

function blockThread() {
    // Show initial message
    addElem.textContent = "Blocking the main thread...";

    // Use setTimeout to allow UI update before blocking
    setTimeout(() => {
        const startTime = Date.now();
        let currentTime = startTime;

        // Simulate blocking for 4 seconds
        while (startTime + 4000 > currentTime) {
            currentTime = Date.now();
        }

        // Update message after blocking
        addElem.textContent = "Main thread unblocked!";
    }, 0); // Delay of 0 milliseconds to allow UI update
}

const blockingBtn = document.querySelector('#blockBtn');
blockingBtn.addEventListener('click', blockThread);