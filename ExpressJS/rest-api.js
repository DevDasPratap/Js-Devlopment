/*

What is REST API
   . REST stand for representational state transfer
     . REST make a layer to under this deliver formate transafer/represation/packet/container data.
     . REST is based core principal
       . Client-server architecture
       . Stateless communication (means if search on google it does not required to login, i can search and get result with login)
       . Resource based interaction (means if i req '/' then i will get home or '/about' req i will get about page)
       . Uniform interface (req, res structure)
       . Cacheable (i can saved req data on browser/enetwork layer cache)
   . API stand for Application programming interface
     . Communicate interface, data type html, json, text, etc.
   . REST API is define as and interface that two computer systems use to exchange data securely over the internet.

Example of REST API
Stateless and stateful REST API
   . Sateless: Does not needed to store any client-specific or session information between request.
             . Example: i want to get weather report, cricket score for this req does not need any login or session store.
   . Stateful: Needed to store any client-specific or session/cookie information between request.
             . Context transfer (req,res) client to server
             . Example: online shopping cart app (store mobile number, rewards, address, crad deatils, etc)
Why REST API needed
   . It is widely adopted
   . It is scablable since they are stateless
   . Simple uniform interface based http protocol
   . Data formated JSON or XML
How REST API works
   . REST API works by using HTTP request method such as Get, Put, Post, Delete

*/