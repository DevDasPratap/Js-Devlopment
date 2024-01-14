const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
    // set cookie
    res.cookie('name', 'Pratap Das');
    // res.cookie('name', 'Cookie Das', { expire: 10000 + Date.now() }); // specific time
    // res.cookie('name', 'Cookie Das', {maxAge: 10000}) //specific time

    // Get cookies
    console.log('Cookies: ', req.cookies);
    
    // Send response after setting the cookie
    res.send('Cookie set');
});

// clear cookie
app.get('/clear', function (req, res) {
    res.clearCookie('name');
    
    // Send response after clearing the cookie
    res.send('Clear cookie');
});

app.listen(3000);
