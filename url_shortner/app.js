const express = require("express");
const path = require('path')
const cookieParser = require('cookie-parser')
const connectToDB = require("./connect");
const URL = require("./models/url");
const {only_login_user, checkAuth} = require("./middleware/auth");


const url_route = require("./routes/url");
const static = require('./routes/static')
const user = require('./routes/user');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
const port = 3001;


// app.get('/test', async (req, res)=>{
//     const allUrls = await URL.find({})
//     return res.render('home', {
//         urls: allUrls
//     })
// })

app.use("/url", only_login_user, url_route);
app.use('/user', user)
app.use('/', checkAuth, static)

app.get("/:shortId", async (req, res) => {
    try {
      const shortId = req.params.shortId;
      const entry = await URL.findOneAndUpdate(
        { shortId },
        {
          $push: {
            totalClicks: {
              timestamp: Date.now(),
            },
          },
        }
      );
  
      if (entry && entry.redirectURL) {
        res.redirect(entry.redirectURL);
      } else {
        res.status(404).send("URL not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
  


connectToDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB connected")
);
app.listen(port, () => console.log("Server running on port: " + port));
