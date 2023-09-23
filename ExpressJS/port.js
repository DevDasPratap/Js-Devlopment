/*
What is PORT:
1. In computer network ,
a port is a logical construct that is used to identify a specific process
or service running on a computer or other network device.
2. Each port is associated with a unique number, called a port number,
which allows data to be routed to the correct application or service.
3. A port number is always associated with a network address of a host,
such as an IP address, and the type of transport protocol used for communication.


Type of PORT: There are 65535 port number, which can be classified
into 3 diffrent types-
1. well known port (These port range 0 to 1023)
   . Port 80: http
   . Port 443: https
   . Port 25: SMTP
   . Port 53: DNS
   . Port 110: POP3
   . Port 143: IMAP
2. Register port(These port range 1024 to 49151)
   . Port 8080: http
   . Port 3306: MySqL
   . Port 5432: PostgreSQL
   . Port 3389: Remote desktop protocol
3. Dynamic port(These port range 49152 to 65535)
   . When client program initiates a connection to a server program,
   the openning system assigns a unique dynamic port number to the client
   side to the connection. this dynamic closed/destrory after used

*/