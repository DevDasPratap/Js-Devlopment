web server vs app server
apcahe server how to handle traffic using multiple theads?
what is threading behaviour of node?

apache vs nginx

Client <===> Server(ram) <===> Database (hdd/ssd)
what actually do when tries to intract with database?
how newtwork connect between these
how any client request travel?

in early apache server implemention, for every new request it used to create a new process (1 thread per process) to handle the requests

later apache improved it by introducing a single per request instead of a whole process.