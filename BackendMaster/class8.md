As a backend developer

networking: how js send request, came response, http, websocket, tcp, udp, etc
database
scaling and architucture
security
business logic

// how zomato show real time data, food out of stock, delivy find, assigned, 
// how groww work buy stock (nse, bse work)
// how emi work in bank (my bank sbi, my loan bank hdfc) -> how hdfc bank initiate req and collection amount from sbi account

what actually hapen when client send network request to backend


tcp layer
 - application (our written code(where client autually happning))
 - transport
 - network
 - data link
 - physical

osi layer
 - application
 - presentation
 - session
 - transport
 - network
 - data link
 - physical

 protocols -> these are application layer
  - http
  - https
  - smtp
  - ftp


Application:
Http: hyper text transfer protocol
  - capable of containing hyper text (html, md, xml -> it containg hyper link(mean click any link it hyper(refer to another hyper text)))

Transport layer (OS): -> this layer sits on OS and it is responsible for desiding for reliable/unreliable connection
and it breaks down your incomming data from application into small components
(transport layer collect data from application layer when you initiate a request http)
 - reliable:
 - unreliable:


 - transport 2 types : TCP (reliable), UDP(unreliable)
 http -> when send a message/when you load any webpage you want hole data loding on browser/mobile app, http expect relibale also http depens tcp, tcp has mechanisume to handle all reliable connection, that mean no data lost

 tcp : no data lost, uassly slow
 udp: maybe data lost, uassly faster

 application layer protocols depend on transport layer protocols

 client  -----  server
  - tcp connection setup
  - client send http request over tcp connection
  - server do process and send return to response to client
  - client and server prepare socket object

  - set tcp connection we use 3 ways handshack
    - client send intializer request(syn request) to server
    - server collect it and sent back (ack) request (hay i receive your ack request)
    - client sent back (ack) request (hay i receive your ack request let complete the setup)


Network layer: also call internet layer
 - transport send request to network layer
 - network layer contain you IP(internet protocol)
 - here route logic present

Data link layer:

Physical layer:


 responsiblity, real example, 

Socket programming: (this is not web socket)
  - socket(ip address + port) together call is socket address

  MAC (media access control) it hardware address


as backend developer/engineer we work with express.js/fastify for node.js
 - these farework behind the sence work with http modules
 - in node.js http module internally use net module -> technically capable to preparing TCP connection
 - if you want to prepare UDP connection in node.js called dgram module