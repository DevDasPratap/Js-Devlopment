function makeHttpRequest(method, url, callback) {
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse JSON response
    })
    .then(data => callback(null, data)) // Call the callback with the data
    .catch(error => callback(error)); // Call the callback with the error
}

// Start the chain of callbacks
makeHttpRequest('GET', 'https://dummyjson.com/users', (error, usersData) => {
    if (error) {
        console.error("Error fetching users:", error);
        return;
    }
    
    makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (error, postsData) => {
        if (error) {
            console.error("Error fetching posts:", error);
            return;
        }

        makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (error, commentsData) => {
            if (error) {
                console.error("Error fetching comments:", error);
                return;
            }

            makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (error, userData) => {
                if (error) {
                    console.error("Error fetching user data:", error);
                    return;
                }

                console.log(userData); // Final output
            });
        });
    });
});