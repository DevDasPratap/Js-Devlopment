So why actually Node JS is kind
of very cool. So before we
actually understand about
internal architecture of what
actually is comprised inside
Node js, we need to understand
something called as IO input
output. Now, the IO operations
in your computer system are kind
of like expensive. Just think
about one thing. No, let's say
there is a process running on,
running on and there is an input
expected from an end user, not
even some other process. The
input is expected from some end
user. Now end user can give the
input immediately, or they might
take five minutes to give the
input, right? So the input
output operation, when you are
giving an output, you might have
to send a signal to a printer.
Now how fast that printer is
working depends on how fast you
will be able to actually give
the output. So IO is kind of
like a one of the most expensive
operations that exist inside
your computer system. Now, the
implementations of IO can be of
two types. One can be blocking,
one can be non blocking. What do
you mean by blocking? Blocking
means. Blocking IO means that,
let's say on a particular thread
you're executing a process and
that particular process went for
taking some input from a user.
Now this thread is actually
blocked until or unless we are
coming back from the end user
and started executing the
remaining steps. This is going
to actually wait. This thread is
actually going to wait. That
means if you want to do some
things parallelly, you might
have to trigger multiple threads
at the same time. Whereas that's
not the case with non blocking
IO. Non blocking IO handles
thing in a very different way,
right? It doesn't handle things
with a single thread that if
there will be an I O operation,
then the whole thread will be
blocked. That's now how it
actually handles. So non
blocking IO architecture we
already know since the lecture
of Async js, right? Since by the
time we completed Async js, we
already knew about non blocking
IO. And when I say IO then any
expensive operation also I am
also including in this. For
example, reading a file is also
an I O only, right? But let's
say setting a timer might not be
an IO. Okay, so this is
something that I'm talking
about, like these kind of
expensive operations that might
block your thread for a long
period of time, because this is
going to happen somewhere in the
future. So what architecture we
actually learned? We learned an
architecture that there is
something called as a set of
queues that exist. There is
something called as event loop,
right? Then there is something
called as your runtime which
actually executes your features.
And then from your actual piece
of Code, you trigger the
runtime. Meanwhile, behind the
scenes, the event loop is
running. If the runtime
completes its feature and there
is still something going on in
the program, it is going to park
its fe, park its callback inside
the queues. I believe everyone
knows this mechanism on the same
mechanism, even non blocking IO
works like. Even in node js, in
the same mechanism, non blocking
IO works, right? So in node JS
also there is something called
as event loop. There is
something called as event loop.
There are a bunch of cues that
you can maintain, Right? There
will be a bunch of queues, for
example, your macro, task, task
queue, micro task queue, and so
on. Now actually when you say
that there is a runtime and
inside the runtime you actually
send a signal to execute a
feature. Runtime is comprised of
multiple things, as I said, it
provides a lot of resources to
your JavaScript. It's not just
going to execute whatever
instruction you have given,
right? So there is something
called as event demultiplexer.
Now in order to understand what
is event D multiplexer, you need
to first of all understand what
is multiplexing and
demultiplexing. So multiplexing
in simple words is, let's say
it's a, it's an electronics term
that if you actually combine
multiple signals into one,
that's multiplexing. If you have
one signal and you distribute
that into multiple ones, that's
demultiplexing, right? So
technically actually inside your
runtime there are a lot of
things, right? One, one of them
is actually this event
demultiplexer. What this event
demultiplexer actually does is
all of these IO operations or
heavy operations, or these
costly operations are actually
considered as event. So whenever
the end application, end
application means something like
JavaScript triggers that, okay,
this is a runtime feature, what
it does is it actually registers
a new entry inside the event
demultiplexer, right? That it
registers a new operation inside
the event D multiplexer. And if
it's a callback based
application, then it also
registers the handler inside it
and it starts executing the
operation. It actually starts
executing the operation.
Meanwhile, when the operation is
done and if the application is
still actually getting executed,
then it doesn't halt the
execution of the application, it
just parks whatever was the
corresponding handler for this
operation inside the
corresponding queues, right?
Similar thing exists inside node
JS as well. You might you have
already seen this architecture
when I was explaining you
promises and everything. Similar
thing exists inside node JS as
well. That's what make node JS
non blocking. So if you're
writing your services inside
Node js, they are going to have
your have a non blocking
architecture altogether right?
Now if you actually talk about
what Node JS is actually made up
of, then there are a lot of
things that Node JS is made up
of. One of them is the V8
engine. What is V8 engine? V8,
the JavaScript is the JavaScript
engine developed by Google. For
Chrome. So Google initially
developed this for chrome,
right? This V8 engine is
actually responsible for
understanding what syntax of
JavaScript you are running and
actually running JavaScript
inside the corresponding
runtime. Okay? Apart from that,
runtime has a set of JavaScript
APIs, or let's say you can say
JavaScript functions that
actually exposes to JavaScript
so that JavaScript can actually
use all of these functions
altogether. Apart from this,
there is something called as
libuv. Now this is something
that you have to very carefully
understand right? Now, every
operating system, when you are
implementing any operate, like
when you are working with any
operating system, every
operating system works very
differently. For example,
reading a file, whether that is
a blocking IO operation or a non
blocking IO operation, can be
specific to operating system to
operating system, right? If,
let's say you are you are
running a timer, is that a
blocking I O operation or a non
blocking I operation that can be
also dependent on operating
system to operating system? So
if we are actually preparing a
runtime, we can't rely a lot on
what feature app actually the
operating system is giving us.
Because when we will ship this
feature end to end to a
particular customer, we can't be
sure that what particular type
of device they are actually
using in order to execute my
feature or see my product,
right? So we need some kind of
interface to actually generalize
it or standardize it. So what
I'm trying to say is, for
example, let me give an example.
Now if you try to read file
system in a Linux based
operating system. Now in a Linux
based operating system, reading
a file is technically a blocking
IO. Reading a fly file is
technically a blocking IO. That
means if you're actually using
operating system resources and
you start reading a file that
will act as a blocking input
output operation. But we just
discussed that we want to make
sure that node JS is non
blocking, right? It manages all
of those queues, event queues,
event loops and everything. But
if Node JS is supporting non
blocking IO, then how node JS is
able to read a file system of a
Linux based operating system
that supports blocking I. Okay,
Right. So we need kind of like a
standardization. Maybe in
Windows if you are reading file
system you don't need, you don't
have blocking IO, maybe you have
a non blocking IO. So what I'm
trying to say is that based on
different operating system,
based on different environments,
every feature might be available
in a different way. For example,
inside Linux based operating
system, if you have to read two
files, then technically
internally you have to create
two threads altogether. There is
no way that you can actually
make it a non blocking IO.
Right? But when we are writing
Node JS code, we don't want this
kind of hassle that some
features are actually requiring
us to create threads. Some
features are requiring us to
create not threads, right?
That's why you have kind of like
a library called as libuv,
right? So this is actually
prepared by the Node JS core
team, Node js14, right? And what
it does is it makes node
compatible with all operating
systems, right? It's written in
C, it's very fast. Like for
example from Node js, if you
will try to read a file in Linux
based operating system, you will
feel like that it's a non
blocking IO. But internally, in
order to read the file, if the
operating system is not
supporting non blocking IO, then
internally you can't do it,
right? So internally, maybe it's
creating a lot of threads and
everything, but as an end user
of Node js, when you will
actually try to access file
system in Node js, you will feel
like everything is working like
a non blocking IO. This is
something that is extremely
important and it is, it actually
gives one of the most exciting
features or it actually creates
the most exciting debate in the
world of Node js. So technically
libuv represents kind of like a
IO binding or it provides you
low level I O based
implementations in more
compatible form for node with
respect to any operating system,
right? So this libuv also exists
inside the Node JS architecture.
And apart from that there are
bindings. There are bindings,
right? What are bindings?
Bindings are special programs
that actually helps Node JS to
interact with the Libuv library,
right? So a lot of things
together actually prepares the
architecture of Node js, right?
And that's the fun part. It. It
gets the V8 engine from Chrome,
which is one of the fastest
running JavaScript engines. It
works on cutting edge
architecture. It provides a lot
of APIs to JavaScript so that it
can JavaScript can actually
leverage operating system based
features. You have LiveUV that
is actually acting as an
interface between the Node JS
and a lot of different operating
systems and giving a consistent
set of APIs to Node JS to use
despite what operating system
the user is actually working on.
Then there are a set of
bindings, right, that actually
are a set of programs that can
help the Node JS runtime to
actually interact with libview,
right? So all of these things
together actually helps us to
prepare a runtime like Node js,
right? There are other runtimes
as well. For example, Deno, you
can actually yourself read about
it, right? But Node JS is the
most famous runtime. There are a
lot of would say startups and
companies that are actually
working with the Node JS
runtime. So learning it actually
makes a lot of sense. But I
believe now you are already
aware that if there will be an
asynchronous operation coming up
in Node, how it will handle it
will handle it in the same way
how we were handling it in
browsers. There are queues,
there is a event loop. All of
these things, right? So I hope
the basic introduction around
the architecture of Node JS is
clear to everyone.





Globals in nodejs

So node js provides us a lot of
globals. There are something
called as globals inside node
js. These are kind of like
global variables that are
available everywhere in every
part of your code in node JS
runtime, right? These globals
are important for a lot of
features. Some of them are, for
example, process global. So if
you want to actually access the
runtime. Sorry, if you want to
actually access the processes
running the current process that
you are actually running,
environment variable for that
process. What is environment
variable? We will learn later,
right? So you can use the
process global. There is
something called as underscore,
underscore dir name, right? This
is something using which you can
actually access what is the
current directory from which you
are actually trying to execute
the process, right? Then there
is something called as require
that helps us to require other
modules till the time we didn't
don't cover module. You can
assume that module is a concise
segregated part of your code or
a meaningful part of your code
that you actually segregated in
a particular module to modular
modularize the whole piece of
code, right? So there is
something called as global.
There is a global named as
global also, right? So you might
have heard about the window
object inside browsers, right?
The window object helps us to
access a lot of things, right?
Or the document object. These
are actually globals that
browsers provide you, right?
Similar to that, there are
globals that node JS actually
provides you, okay? There is one
global called as module. There's
one global called as module,
using which you can actually
access the module pattern of
node js. We'll talk about module
pattern in upcoming set of
parts. But my point being that
these globals are extremely
important for a lot of features.
These globals are actually very
useful, right? One, one thing to
note, there will be some cases
where some of the available some
of the globals will not be
available. For example, there
are cases where you cannot use
dir name every time. There will
be a certain set of
configurations that you will be
able to do in which underscore
underscore dir name will not be
actually available, right? So
how can you actually access
globals? Let me show you a demo.
Now, as I mentioned that
whenever you are actually going
to run your JavaScript code
inside versus code that is
actually going to run inside no
inside node in work. For
example, when you do console log
hi and run it, you can see it
executes your file saying node
and then the path of your file.
So it is actually running node
environment. Also, one thing to
note that console log is also
available inside Node JS.
Console log is not part of
JavaScript, it's part of runtime
feature. So console log is
available inside Node js. Also,
just like browser, the
implementation might be
different. Okay, I'll show you
examples of where the
implementations are different.
Okay, but before that, for
example, if you do something
like console log process, just
write process, nothing more,
nothing less. If you run it, you
can see there is a whole
JavaScript object that got
printed. See very big JavaScript
object actually got printed.
This is the process object. It
has the access to what's the
node process version, right? V8
engine version. You can see
libuv library version, right? A
lot of versions are actually
present. You can actually access
the environment variables. For
example, you can do something
like process env. So there is a
key value pair env. These are
all the environment variables
for my current process. You can
actually access all of this.
Apart from this, there is
something called as module.
There's a module global. This
module global actually helps you
to access the module pattern of
Node js. You can see there is a
module global. It helps you with
something like exports. You will
see a lot of time me doing
module dot export, right? So
that's what the module exports
come From. It's a JavaScript
object, right? Module dot paths.
So it is going to give you the
parts of all available modules,
right? So there is one global
named as module. What is the use
case of these globals? You will
slowly and steadily understand.
My point being is to make you
aware about the fact that there
exists the concept of global
similar to that of browsers
inside Node js. But there is a
global called as require. If you
run it, you can see require is a
function. See, Module was an
object, process was an object.
Require is a function. You can
do console log underscore
underscore dir name. See
underscore underscore dir name
is technically a string. So
these globals can be string or
functions or objects, multiple
different things. But the only
agenda is you are able to access
all of them everywhere in your
code. There are few corner cases
in which in a few set of
configurations you won't be able
to access your corresponding
global. For example, dir name is
not everywhere accessible. When
I will teach you module pattern
of JavaScript or technically
node js, then you will realize
that underscore underscore dir
name are not available in modern
modules, that is ESX module
systems, right? So there can be
a corner case that for a few set
of configurations, some globals
are not available. But if a
global is available that is
going to be available everywhere
in your code at any point of
time. Anywhere you can actually
use it right? Now what is
console? Console actually also
acts as a global object. You can
actually use console anywhere at
any point of time, right? And
there are mult. There are other
globals. For example, there is
something called as global only.
As far as I know you can see
there is a global only
altogether, right? There is a
global object. Inside the global
object you have access to the
functions like set, interval,
settimeout, queue, micro task,
all of these things, right?
Clear, immediate, set,
immediate. These kind of
functions are available inside
the global object. Now one thing
to notice, you should never try
to update your global object
because this can be a
catastrophe for your whole
project because you might be
using or somebody else might be
using or some third party
modules might be using any
global in their code. And if you
will change the meaning of the
global because there is are what
just plain JavaScript objects or
strings or something, then you
might hamper execution of the
other piece of code that is
available out there. So these
are what globals inside Node JS
mean. Slowly and steadily we
will explore all of the globals.
For example, when I will teach
you module pattern, then three
globals will be automatically
clear to all of you. Then when
we'll start actually developing
our backend applications, then
the process global will be clear
to all of you and so on.



Comparing browser and node runtime

Now as I said, browser is a
different runtime and every
browser is a different runtime.
And node JS is a different
runtime. So different runtimes
can have different
implementations. You might feel
they are exposing same
functions, but the internal
implementations can be
different. For example, even
Chrome browser, Mozilla and your
Node js, all of these runtimes
provide you something called as
set timeout that helps you to
access a timeout.
Speaker B :
Now, if you call settimeout.
Speaker A :
Inside node environment, Let's
do console log completed
timeout.
Speaker B :
Okay, now settimeout is a
function, right? What I want to
do is this.
Speaker A :
Function must be returning
something. You already know that
if function doesn't return
something, then it still returns
undefined, right? So there will
be some return type of set
timeout.
Speaker B :
Okay, let's do const X is
equals.
Speaker A :
To this and I'll do console log
X. So what's going to happen in
line number one? You're going to
start a timer. You're going to
go and tell the node JS runtime
that hey, there is a timer that
is going to come up. Take it,
whatever is the return value of
that, you are going to
immediately.
Speaker B :
Assign it to X and then you.
Speaker A :
Are going to print X after some
time when the timer gets
completed, then you will print
console log completed timer.
Let's run this code.
Speaker B :
The moment you run this code,
can.
Speaker A :
You see return type of
settimeout is actually a timeout
object. The return type of
settimeout is actually a return
in is actually a timeout.
Speaker B :
Object inside Node js.
Speaker A :
And see, once the timer
completes, it prints completed
timer.
Speaker B :
If you copy the same piece of
code, put it in your browser and
run it.
Speaker A :
Now can you see inside your
Chrome browser? The return type
of set timeout is.
Speaker B :
Not an object, it's a number.
It's a number, right? And same
thing happens after 10 seconds.
Speaker A :
You actually print it. So there
is definitely some difference in
the implementation.
Speaker B :
Right now there is something
called as clear interval.
Speaker A :
So if you do clear interval,
for example, Sorry, there is
clear timeout and clear interval
both. So now you can do
something like.
Speaker B :
Clear timeout and you can pass
X.
Speaker A :
So whatever is the returned
value of a particular timer. If
you pass that to clear timeout,
the timer breaks like that never
gets completed, it vanishes out.
So now technically if you run
it, you can see the program
immediately turned off because
you cleared the timeout. So here
in node js, the clear timeout is
actually taking a timeout
object.
Speaker B :
Whereas.
Speaker A :
Inside browser the clear
timeout is actually taking a
number to actually stop the
timer.
Speaker B :
See, that's the difference,
right?
Speaker A :
So different runtimes can have
different implementation.
Speaker B :
Of the same feature. They might
be executing things, things in.
Speaker A :
An absolutely bizarre and
different way. You can't
generalize things, and even you
can't generalize things between
browsers. Maybe some browsers
have implemented this in a
certainly different way. All you
can do is you can try to read
the APIs, whatever you have in
your mind, whatever is required,
you can see what functionality
it is giving you, how it is
giving you, and then start
working on it. Don't just
preassume anything.



How client and server interact:

So whenever any kind of a
communication happens on the web
through your, any kind of
application, web application,
mobile application, desktop
application, anything, and there
are a few things that are going
to be common. One of them is the
client server architecture. In
order to understand what is a
client server architecture, you
need to first of all understand
these two terms that what is a
client and what is a server.
Okay, now let's talk about it in
a very simple term, okay? What
is a client? Any end system. Now
that end system can be a mobile
phone that can be a browser or
running on your machine, or
maybe some process running on
your machine, right? For
example, let's say you're
running some Python program on
your machine, for example,
right? Any end system that
actually initiates a request,
any end system that actually
initiates a request is actually
considered as a client, right?
Now what is an end system? End
system is like the end machines
or end process. Like for
example, if you see a computer
network, what is a computer
network? Multiple computers are
actually, I would say, connected
through a network, right? So all
these computers, mobile phones,
everything is actually
considered as an end system.
Like the technical term to see
this, say this is called as an
end system, right? So in the
client server architecture, the
client are those end systems
which actually originates a
request, which actually
generates a request, which want
to query some information or
which wants to perform some
action. If they lie in any of
these categories, they are going
to be considered as a client. So
for example, let's talk about it
in simple terms. For example,
your Zomato's mobile app. Okay,
let's take a simple example. Now
you all must have used the
Zomato's mobile app, right? Now,
on that mobile application,
let's say when you do actually
your sign up, you put your
number, you click Enter, and
then an OTP comes. So what
happens? Your mobile application
is actually acting as a client,
right? It's originating a
request that, hey, please,
someone can actually generate a,
generate an OTP for me and can
it send it, can you send me back
something like this? Okay, so
whenever there is a request
origination going on, right?
That you want to query some
data, you want to save some
data, right? You want to perform
some action. Everything in this
category is going to be
considered as a client, okay?
Everything in this category is
going to be considered as a
client. Now what client does is
client actually originates a
request. Client actually
originates a request. This
request is collected by
something called as a server.
Now what is a server? Let's try
to understand it very carefully.
Any end system that can be again
a computer system or let's say
some other device or maybe a
process running on your computer
system that can actually receive
a request process. The request
process, some data out of it
spits out a response. That's
actually your server, right?
That's actually your server. So
server sends back a response.
Now, all those people who come
from, let's say a web
development background, if you
don't come from a web
development background, don't
worry. But a lot of times all
those people who come from a web
development background have a
very restricted vision of a
client server architecture. A
lot of time they feel that,
okay, client is what, let's say
your web app or your mobile app.
That's it, that's the client.
And server is, for example, the
client app is of zomato. So it
should be a zomato server that
some business logic and
everything is actually going on.
But in fact, you in your day to
day computing, or I would say
day to day computer science
mechanisms, you see, a lot of
times you will be interacting
with a lot of servers. For
example, if at any point of time
you have installed MySQL or
let's say another database like
MongoDB or similar databases, PG
SQL or whatever it is when you
actually install these
databases, right? Just
installing the databases don't
help. Just installing the MySQL
database is not going to help
you. What you have to do is you
need to actually boot up the
MySQL server on your local
machine, right? That actually
runs on a particular port. Same
thing you have to actually do
for MongoDB as well. Let me
actually show you that. So let
me. So there is a software
MongoDB compass. Let me open
that. I guess it takes a minute
to open. Okay, Let's wait, guys.
Okay, what happened? Let's see
later. Okay, I guess it's a bit
slow, but booting up. So now
here you can see it says you
need to prepare a new connection
to a MongoDB deployment. Now you
can see the URL that I have
given here is MongoDB colon
forward slash, forward slash,
localhost colon 27017 right. Now
what's the meaning of this
localhost 27017 it means that on
my machine I am running a
MongoDB server. It's my local
MongoDB server. Now a MongoDB
server might be running on some
remote AWS machine as well,
right? Or a Google Cloud machine
as well. But in this case the
MongoDB server is actually
running on my System, right? So
that's also considered as a
server. Because what happens is
now this MongoDB server is
actually a process running on my
system. This MongoDB server is
actually a process running on my
system. Now what I can do is I
can prepare, let's say a Python
client or a node client. Like I
can prepare a PYTHON script or a
node JS script, and from that
script I can actually connect to
the MongoDB server and then
start making requests to the
MongoDB server and start getting
response. Now, in this case
there is no UI involved, right?
There is no UI actually
involved, right? So client is
not only going to be considered
everything that is going to have
a ui, right? A lot of people
have a notion that when they say
client, they only mean kind of
like the UI client can be
anything that can actually
originate a request. And it's a
general programming term. For
example, it's not absolutely
wrong to say clients are
something that has a UI or
something. And it's not always
almost correct to say that
client are always something that
has a ui, right? Again, it's
more of an understanding term.
But the better understanding you
need to get is for servers,
right? So even a MongoDB
software that you actually run
won't work if you don't boot up
the MongoDB server. Now it's
going to be a process that goes
on running behind the scenes in
my system forever till the time
my system is on. And whenever I
try to make a query to the
MongoDB database, I actually
make a query to this server.
This server actually collects my
query, it process the data out
of the query, it goes back and
see, the database, gets data
from the database and spits out
a response back to my client,
right? That's actually what
happens when you actually do a
communication between a client
and a server. Now this
communication that happens
between a client and a server
can happen via any medium,
right? Now, this communication
that is actually happening might
be happening via HTTP, right? So
if, let's say this communication
is happening via HTTP, HTTP is a
application layer protocol and
HTTP depends on transport layer
protocol called as tcp. So what
will happen? There will be a TCP
connection setup using a three
way handshake and then over that
TCP connection you actually make
an HTTP request and receive an
HTTP response. Depending on what
kind of a communication protocol
you are going to use, things
might vary, but overall the end
gist remains the same. The end
just remains the same, right?
And trust me, 50% of the time,
whatever development you are
actually going to do is going to
be something that is going to be
related to this, that there will
be one process that will be
originating some request, there
will be another process that
will be processing that request
and spits out response back to
the first process. This is
something that you are actually
going to do very frequently,
right? So any computer, any
host, any process that actually
sends a request for doing
something specific or sends a
request to get some specific
data or to save some specific
data can be considered as a
client. And the one who actually
accepts the request processes
it. It can be a computer
machine, or it can be just a
process running on a computer
machine that's actually called
as a server, right? So for
example, when you actually rent
an AWS machine, you call it as
an AWS server. I have an AWS
server. Because you feel like
you have rented a whole AWS
machine, but actually you're
just running a process on that,
right? So again, these terms are
very interchangeable that
whether it's a process or a
computer computer, whole
computer system. That's why
people say that it can be a
computer system or it can be
just a process in your
corresponding computer system,
right? This is something that
actually happens. And that's why
like client can be something
like your mobile app or your
browser or even some other
scripts that maybe you have
written. And server can be your
Hostess hosted business servers
on AWS or GCP or even some
simple database servers running
on your local machines. I hope
this idea around what is client
and what is a server is clear to
everyone.



What is an api:

Now, in order to understand
further things in our
development journey, we need to
actually understand in a very
good way that what is this term
called as, which is API? At any
point of time you work in any
organization, be it very small,
be it very large, daily. If you
don't say this word API to five
different people, I'm not sure
whether you are actually working
or not. Okay, let's see the full
form. That actually doesn't help
a lot, but it still gives us
some fair amount of idea. API
stands for Application
Programming interface. Okay? Now
the most important term in this
three words, application
programming interface, is the
word interface. Now, if you're
coming from a world of Java, or
if you have ever heard about a
few terminologies of Java, you
might have heard about something
called as an interface. What is
an interface? Right? Interface
actually stands like a contract,
right? It actually stands like a
contract. Contract of what?
Contract of application
programming. Application
programming means there will be
some application, some piece of
software, some piece of logic,
and how do you actually
communicate with that? How can
you programmatically use that?
That contract is defined inside
an API. Let me give you a very
simple example. Let me give you
a very simple example. In
JavaScript, you must have heard
about set timeout, okay? Or
let's say if, and let's say
consider this in the browser
environment, set timeout. Or you
might have heard about get
element by id, Right? All of
these functions you might have
heard about. You generally call
it as what? There is a set
timeout function. There is a get
element by ID function, okay?
But here's the catch.
Technically it still remains a
function, but we just give it a
fancy name. Why we get to give
it a fancy name? We give it a
fancy name because we don't know
the internal implementation,
right? And someone else actually
built us, built this for us. For
example, the browser is actually
providing us. So a lot of time
you will find people calling
this as browser APIs. Now again,
why browser APIs? Because you
just know that settimeout
function takes what arguments
and gives what response and what
it actually does, right? You
only know what input it takes,
What output it will return and
what processing it will do,
right? So you just know about
these things. So you technically
are just given a contract.
Contract means at any point of
time in, let's say this
particular XYZ browser, if you
want to fetch a particular HTML
element by its id, you can use
something like get element by
id, right? So it's a contract,
right? It's a piece of, I would
say set of input, set of output
and set of processing that is
defined. It's not going to
change, right? That's an API.
Now you might be getting a bit
confused that okay, this looks
like a function only, right? Why
we are calling it as APIs? Yes,
technically, yes. There is no
harm in actually calling them as
just functions and there's no
harm in actually calling them as
APIs. Right? But technically
APIs can be considered in a much
more broader perspective also.
For example, these are the
browser APIs that you can
directly programmatically use
from a language like JavaScript.
Now there can be other type of
APIs. For example, for example,
let's say the Kovin API. Okay,
so you must have heard about the
vaccination API, right? That a
lot of applications like PayTM
and all were actually using
Coven API. Okay, now what is
this? Now government of India,
what they actually did was they
actually set up a bunch of
softwares or I would say
processes where people can
actually come and make a request
in order to get the data about
what are the vaccines available
in what all hospitals. Okay, now
this piece of functionality they
didn't release as a part of your
programming language or your, as
a part of your what native
browser or everything. What they
did is they actually hosted a
server or maybe a bunch of them.
This functionality is actually
going on there and they exposed
a contract, an API contract. But
this time you have to
communicate to that API not by a
library function call, but
instead via a network call. You
have to actually go over the
Internet, go to the
corresponding server, make an
HTTP request, get the data of
the hospitals and the vaccines
and come back. Now it's not like
you can send any request and it
will still give you response.
No, there is a contract, there
is a proper way. How Government
of India defined that, how you
need to give the input, if the
input is correct, what
processing we will do and once
the processing is done, what
output you will get. For
example, let's see this, I'm not
sure what how many APIs they
still expose, but let's see. So
they are exposing certificate
APIs I guess now, right? So you
can see if you want to get a
covered vaccine certificate,
right? Let's see. Okay, so if
you want to get a COVID vaccine
certificate, right, you need to
actually send all of this data.
What format of the data? This
is, I'll talk about. But this is
how you will actually send the
data, right? See and this is how
you can actually expect the
response for in case if the
response is properly done, then
you will be getting a 200 and
you might get a PDF to download
something like that, right? So
everything is actually defined
that what kind of input you are
going to give and what kind of
output you will get. Let me show
you one more. So there is
something called as a fake store
API. What is a fake store API?
Fake store API is kind of like
an online fake e commerce API
where you can actually browse
stuff. Okay, now let's say now
this is again not on my browser.
This is again not in your
JavaScript code. Somebody has
posted it on some machines and
exposed it to the end world
where you can actually interact
via network calls, right? For
example, if you make a request
to HTTPs fakestoreapi.com
products now you can make a
request, let's say from the
browser as well. If you make a
request from the browser, press
Enter. See all of this data you
are getting. Again, this data
you might feel, okay, this looks
similar to that Kovin data and
everything. But I'll talk about
it. But you can see we are
getting the data. That first one
is the Fijal Rawan bag. Second
one is a men's casual premium
slim fit T shirt. Third one is a
men's cotton jacket and so on
and so forth, right? So this is
also an API. This is also an
API, right? The only difference
is this time you are going to
communicate over the network via
HTTP because they expose things
via HTTP to actually use
whatever functionality they are
providing. But the concept
remains same. The input is going
to be defined for example here
you can't just say takestore
API.com sanket and you can
expect everything. No, there is
a dedicated way. If you do slash
products you will get all the
products. If you just want to
get a single product, you need
to put the product ID after
slash products. If you want to
get let's say five products out
of it from all the products, you
need to actually give it like
this, right? So they are going
to give you a particular input
format. They are going to give
you a particular input format.
They are going to tell you,
right? They are going to tell
you that what exactly this API
is doing and what kind of output
you can actually expect, right?
All of this they are going to
define for you, right? So if you
talk about it in a nutshell, you
can say that APIs actually
enables us to provide a way for
other people. It enables us to
provide a way for other people
so that they can use our
applications, they can
communicate with it, they can
exchange some data, they can use
the functionalities. So on and
so forth. Right? Now, this
functionality might be exposed
via a library, right? This
functionality might be exposed
via library. When you make a
library call, network call is
not involved. Like you don't
have to make an HTTP request
over the net, over the Internet,
right? Library call is like
there is a bunch of code already
downloaded in your machine and
you just make a function call
there. That's also an API. And
if somebody is exposing their
functionality over the Internet,
that's also an API. And all of
these terms technically are used
like very casually, right? No
one is going to beat the shit
out of you if you say that,
okay, this is a function, this
is not an API. It's not like
that. It's not like that, right?
It's a very casually used term,
right? The only thing is you
need to understand that when
somebody talks about an API,
they must be talking about a
significantly properly defined
input, properly defined
processing and properly defined
output. That's the meaning of
API for you.


What is rest:

Having said that, now one of
the most widely used term on the
with the perspective of
development can be considered as
rest. What is rest? Okay, you
might have heard the terms rest
APIs. I'm learning rest APIs. I
know how to build rest APIs.
This, that, this, that. What is
rest? If you go to, let's say
some, to some place, let's say,
talk to some people, what is
rest? 30, 40% of the people will
say, oh, you want to understand
rest? Rest means
representational state transfer.
And you will be like, okay, and
what is that? Then they are
going to say a lot of gibberish
things in front of you right
now. Let me make it very simple
and crystal clear for you that
what is rest? See, I always say
this. At any point of time when
there is going to be a
particular type of communication
that's gonna happen between two
things, that communication can
be between two people, that
communication can be between two
computer systems. Every time
there is going to be not one,
not two, but many, many rules
defined. There will be some set
of rules that will be defined.
And apart from those rules, like
rules we call as protocols,
protocols are bound to be
followed. Apart from these
rules, or we say protocol, there
is something else also. There is
recommendation that, okay, these
are some bare minimum things
that you have to do. Okay, like
if you go to a bank, few things
are like bare minimum that you
have to do. But post that, there
will be some recommendations as
well, right? These
recommendations if you want to
follow. Good. It might help a
lot of people if you don't want
to follow. It's not gonna break
things, but it might not be
considered as a best practice.
As simple as that. Right? Now
what is rest? Now what is rest?
Rest is nothing but set of
guidelines. A set of guidelines
that drive. Architecture of the
web. These are some set of
guidelines or recommendation.
These are not protocols.
Guidelines are recommendation.
It's good man, that you put a
mask. It's not safe. But if
you're not putting a mask,
people can fine you, they can't
kill you, right? It's like that.
So REST is nothing. Rest is just
a set of guidelines that hey
man, if you want to develop good
piece of software and if you
follow the conventions or you
can say if you follow the
guidelines, or you can say if
you follow the recommendations
of rest, then your piece of
software will be considered as
good. A lot of people will be
able to very easily understand
it and it will be easy to
maintain. I am not saying that
it won't be if you don't follow
rest, then you will lose all
three. But if you use rest, then
definitely you are going to
achieve all three. It's like
that. These are just some
standard guidelines, okay? You
don't want to follow it, don't
follow it, nobody cares. Okay?
And trust me on this, when you
actually build very complex
application, you will yourself
override a lot of guidelines and
defeat the whole purpose of
rest. Because for very complex
architectures, maybe this might
not be the only thing that you
have to follow. You hope you
have to do a lot of business
related stuff as well, right?
That's what REST is. Right? Now
there comes a term REST API.
There comes a term called as
REST API. Any API. Any API that
follows the REST guidelines or
REST convention is a REST API.
Any API that follows the
recommendations of REST is a
REST API. As simple as that? As
simple as that, right? You don't
consider your browser APIs to be
REST APIs, right? You don't
consider Java APIs to be REST
API because they're not directly
following the guidelines of
rest, they're just APIs. But
let's say if you see the fake
store API that I showed you, it
very closely follows the REST
principles or I would say the
REST guidelines. It very closely
follows it. I'll talk about what
are the guidelines, but I hope
the basic understanding of what
on this earth is REST is clear
to everyone.


Alternatives of REST:

Now I talked about the fact
that REST give you a set of
guidelines. Now every government
gives guidelines, right? And
every government gives different
guidelines. And definitely we
are working on the free
Internet, right? Nowadays, not
sure how much free it is now,
but still we consider, I at
least consider that it has
pretty free, at least 70% now on
this free Internet. Why do you
think that everyone is just
going to come up and start
following like from today,
whatever REST says, we will
follow that. Of course there can
be counter arguments, right?
That means there can be some
alternate guidelines. Also that
some other people feel that this
guidelines can be good for some
other use cases as well, right?
And that's where other terms
like soap, the much hyped GRPC,
GraphQL, all of this comes into
the picture right now one thing
that you need to keep in mind is
90 to 95% of the time there's a
highly likely chance, 90 to 25%
chance you will be working on
REST because REST is the most
widely accepted. There is a very
less chance that you will be
working on SOAP because SOAP is
now quite old and there is still
okay questions that you will be
using GRPC or GraphQL because
they are very good, but they are
relatively new and any new
things takes a lot of time for
adaption, right? That's why
anywhere on the Internet you
will go, you will find people
talking about REST only. And I
also believe it makes sense.
Like I worked with Howard at
gsoc. We were building
everything around rest, the
startups, the startups that I
worked with, interview bit, I
worked with Kakcho, Fashions,
Fable, everyone was just writing
rest. Even LinkedIn heavily
followed rest, right? So you
will see a very big wide, like
there are friends of mine in
Microsoft, people use rest.
Flipkart people use rest. All
these big tech companies that
you see, small startups that you
see a lot of time, people use
REST because REST is most widely
accepted. There are good amount
of resources to understand rest.
And REST is significantly easier
to understand when you come and
compare it with something like
GRPC or something. If you
consider my own experience, I
have worked with REST for good
amount of time. And now
considering my professional
experience, if I avoid the
interns, I have done more work
with GRPC now, right? Because at
Google almost everything is
GRPC, right? So I have
experience in these two. I know
theoretically what Soap is and
theoretically what GraphQL does,
I've never worked with it. And
when I say work with it, that
that means like at least one
year of work I have never done
with soap. Or GraphQL of course,
like reading a small blog and
making a small application or
looking at some small
application. Of course I've
done. But I don't consider that
experience as experience. I
consider that as just, I would
say getting some idea about it.
But yeah, I have written a bunch
of things following REST
conventions and significantly
good amount of things following
the GRPC conventions. Right? And
we're going to talk about both.
Because if I know both, why
shouldn't I teach both? So we'll
be talking about both REST as
well as GRPC.



REST recommendations _ Message structure:

Now, what are the conventions
of rest? What are the guidelines
that REST actually provides?
Right, so let's talk about it
now. Again, everything is a
guideline, as I say, right? So
REST provides a bunch of
guidelines, Bunch of guidelines
to prepare good APIs. Good APIs.
Okay, cool. Let's talk about a
few of them. Let's talk about a
few of them. Okay, REST prefers
a client server communication.
Should happen over HTTP over
HTTP. Okay? So REST generally
prefers that if you are going to
do a client server
communication, that a client is
going to initiate a request over
the network and a server is
going to give you back a
response, this should happen
over HTTP. According to the
conventions of rest, they don't
specify a particular version of
HTTP that this bare minimum
version of HTTP should be there.
So technically you can assume at
least HTTP 1.1 kind of thing,
right? But they prefer HTTP
connections. Okay, then rest
prefers JSON. Rest prefers JSON
as the format to send and
receive data, right? So now when
you are actually sending a
request along with the request,
you might have to send some
data, right? When you are
actually collecting some
response, you might have to
collect some data. So for
sending and receiving the data
to and Pro, REST prefers that
you send data in the form of
JSON. Now what is a JSON? JSON
stands for JavaScript object
notation. JavaScript object
notation, right? And you will
see that nowadays it's pretty
standard to prepare JSON APIs.
JSON REST APIs. If you say where
people take input in the form of
a JSON and spits you back the
response in the form of a JSON,
right? Now what is a JSON JSON
like? You can prepare a JSON
file by putting an extension
JSON, right? And the file
content looks very similar to
how a JavaScript object looks
like. This is how a JavaScript
object looks like, right? And so
on. So just how the JavaScript
looks object looks like in this
file, the content also looks
like the same. But mind my word,
this is not a JavaScript file.
You can't run it like Node XYZ,
JSON, you can't do that. The
overall, I would say writing
that you actually do with JSON
files, the syntax of the JSON
files is similar to the syntax
of JavaScript objects. That's
why a lot of people call it as
and technically not a lot of
people, everyone call it as
JavaScript object notation that
the writing style or the
notation of this file is going
to be very similar to a
JavaScript object, right? Now if
you go to other conventions like
SOAP or grpc, every convention
might prefer different data
formats to send and receive
data, right? Different data
formats to send and receive
data. For example, in soap
people prefer xml, right? As the
format to send and receive data.
In grpc, people prefer something
called as proto Buffs or
protocol buffers, right? In REST
we use JSON, right? Because
first of all JSON is very good
and very, and I would say highly
human readable. I at least feel
that it's easy to prepare, it's
easy to transfer, it's easy to
encode and decode, right? If you
compare that with XMLN protocol
buffers. But protocol buffers I
believe are more efficient.
We'll talk about that when we'll
come to grpc. But yeah, and one
few things that you have to keep
in mind, like you don't have
JavaScript like keywords here or
JavaScript like functions here.
You just denote a bunch of data
in a form of a key value pair.
And like array based syntax is
also supported, right? So don't
just start writing functions and
everything here, right? That
doesn't work. It's like the data
that you see. So if you see this
fake store API, this data that
you are actually seeing, if I
put it in a RAW format, see,
this is the raw format, this is
actually a JSON. If I actually
clean it up, this JSON is
actually looking like this. This
is a JSON API. So see, don't you
think it's like a JavaScript
object? Key value pair, key
value pair, key value pair. Then
values can, can be nested
objects and everything. See, so
this is kind of like a JSON API
only, right? So my point being
that if you have to send and
receive data using rest, then
you actually prefer JSON. In
other convention you might
prefer something else.




REST recommendation _ Api structures:

Speaker A :
Now let's talk about a few more
conventions. Now you can see
REST expects the communication
to happen via HTTP, right? Now,
if it expects the communication
to happen via HTTP, it's going
to be a network call, right? So
if it is going to be a network
call, then some type of URL must
be present, right?
Speaker B :
So REST gives guidelines on how
the URLs should look like, okay?
Speaker A :
So how your URL, because you
are going to make a call over
the network, right? That means
some server machine is going to
be on some IP address. That IP
address we are going to resolve
via DNS because we will be.
Speaker B :
Having some URLs, right?
Speaker A :
So rest also gives you a bunch
of guidelines that how exactly
your URLs should actually look
like.
Speaker B :
Okay, for example.
Speaker A :
Or let's say, let's start
talking about everything. In
rest.
Speaker B :
The main source of info is
considered as a resource.
Speaker A :
Okay?
Speaker B :
As a resource, now you might
be.
Speaker A :
Thinking, okay, what is a
resource? Just think about it.
If, let's say you are creating
an application like Twitter. So
in Twitter, tweet is a resource.
Tweet is a resource. User is a
resource. Like is a resource.
Can I say that? Right? So if I
talk about examples, tweet in a
Twitter can be a resource,
whereas creating tweet, if I
somewhere write create tweet,
this is actually action.
Speaker B :
Right? Delete tweet is actually
action, right?
Speaker A :
User is a resource.
Speaker B :
Add user is an action. Okay?
Speaker A :
And in simple terms you can
understand it like resource
actually refers to noun.
Speaker B :
And actions actually refers to
verbs.
Speaker A :
Action or verbs means something
that is going to be done.
Speaker B :
Noun means some operation is
going to.
Speaker A :
Be done on an entity. That's
that entity is this resource or
the noun. So our main focus
always remains around resources.
Speaker B :
That means the nouns, our focus
around.
Speaker A :
The URLs that we prepare are
not around actions. As a
counterpart, just to give
example, like you might have a
question that, okay, does some
convention prefer actions? Yes,
if you go for something like.
Speaker B :
Grpc, they prefer actions.
Speaker A :
But again, more things I'll
talk about when we will
dedicatedly discuss grpc.
Speaker B :
Right?
Speaker A :
So we have the main source of.
Speaker B :
Information as a resource,
okay? And REST says that the
endpoints or you can say the
URLs, right? Should use nouns,
right? And not verbs. They
should not use verbs, they
should use nouns.
Speaker A :
So a corresponding example, a
corresponding example of a REST
endpoint or a REST URL can be
something like.
Speaker B :
Medium.Com/Blog blogs, right?
Or medium.comblogs/two,
something like this.
Speaker A :
Okay, if you carefully see, I
am Never mentioning that in this
URL am I creating a blog. In
this URL am I downloading a blog
or deleting a blog. What I'm
doing, I'm not mentioning what
is my action going to be. I'm
not mentioning the action in the
URL. You never mention actions
in the URL.
Speaker B :
Endpoints in rest conventions.
And again, it's just a
guideline.
Speaker A :
Your application is not going
to break if you say medium.com
createblogs it's not going to
break. It says that when
somebody else will read your
URLs, they won't understand
exactly why somebody has done it
or why they want to do something
like this in this way.
Speaker B :
Okay, so endpoints should
always prefer nouns. Okay, cool.
Now these nouns, these nouns
should be plural.
Speaker A :
It's again a recommendation. As
I say, you don't want to follow
it, don't follow it.
Speaker B :
So. The nouns.
Speaker A :
That we mention, right.
Speaker B :
Are expected.
Speaker A :
To be plural.
Speaker B :
Expected to be plural.
Speaker A :
Right. Now you might be
thinking why they want to keep
everything plural. Because just
think about it, generally in
application you just want to be
having one entity created. There
will be multiple entities of the
same type, right?
Speaker B :
And.
Speaker A :
When you actually write
medium.com blog it doesn't
actually gives us the
significance that can there be
multiple blogs or not? Right? So
every time you see people will.
Speaker B :
Prefer mentioning these nouns
in the form of plurals.
Speaker A :
Okay, Now a question might be
coming to your mind that, okay,
sir, we saw that URL should be
resource oriented. This should
be plural. But how do you know
what is happening in this URL
and what is happening in this
URL? Like how do you know what
might be the intended action?
And again, everything is a
guideline, right? So you always
question that what might be the
intended action inside it, you
might be doing something else.
You might be just writing ABCD
and doing something altogether
different. So you always ask the
question, what might be the
intention of the developer here?
So how do you understand the
developer intention?
Speaker B :
You understand developer
intentions by this? Every rest
endpoint should be defined,
should be defined.
Speaker A :
Along with a.
Speaker B :
HTTP method.
Speaker A :
Now, what are HTTP methods? If
you have watched the network
videos.
Speaker B :
Get, put, post, patch, delete,
all of these are HTTP methods.
Speaker A :
And that's why I always say
when people say no, like if, if
you will go in an interview and
if you will ask someone that
what is the difference between
get and post? They say, get is
to get some data or download
some data, post is to put some
data or like send some data.
Technically that's not what get
and post.
Speaker B :
Is REST recommendations
actually prefer using get.
Speaker A :
Post, put, patch in a specific
way. That's why people actually
get confused. You don't need to
answer get and post with respect
to rest endpoints just need to
answer what's a get request?
Speaker B :
What's a post request?
Speaker A :
So, and if you don't know, you
might want to watch the network
lectures.
Speaker B :
To understand get and post and
put, patch, delete everything.
So we have get.
Speaker A :
Now rest endpoint says that if
you are using a GET request, if
that HTTP method is defined as
get, you might want to retrieve
some data. And again, it's a
recommendation you might be
using get to actually send data,
no problem. But it's an intended
variation that if you are using
something like get medium.com
blogs, that means most probably
you want some blogs. You want to
retrieve data about blogs. Okay,
Then you have post. This is
generally for sending data or
creating resource. If you want
to create a new resource,
something like this. Okay,
something like this, then you
have delete. If let's say you
say delete medium.com box, that
means some deletion you are
intended to do some kind of
deletion you might be doing.
Maybe you are not doing, but the
reader will think that you might
be doing some deletion. Delete a
resource.
Speaker B :
Then put is update.
Speaker A :
A resource.
Speaker B :
Patches partial update on a
resource, and so on.
Speaker A :
Like these are the main five
ones. Generally you will find
people using them. Also if you
find someone else using
something else, you can just
google about it. Okay, so the
intended action is actually
defined with the URL plus the
HTTP method that what you might
be actually doing, right?
Speaker B :
And these are HTTP methods.
Speaker A :
These are no kind of functions.
Get, put, post, patch, delete,
these are not functions. These
you can consider that in an HTTP
request, these are kind of like.
Speaker B :
Values that you can actually
send, right? Okay, now apart
from that.
Speaker A :
If you.
Speaker B :
Now actually want to see the
rest recommendation for URLs.
Speaker A :
So if let's say you have
something.
Speaker B :
Like blogs, and let's say it is
a GET request, so you want to.
Speaker A :
Retrieve data, you are going to
signify you want to retrieve
data. But what data?
Speaker B :
You want to retrieve data of
all the blogs.
Speaker A :
You want to retrieve data of
all the blogs. So if you have a
GET request.
Speaker B :
Of blogs, then at least the
user.
Speaker A :
Will understand that you want
to retrieve.
Speaker B :
Data of all the blogs, right?
Speaker A :
If let's say you have something
like.
Speaker B :
Slash blogs slash 1, let's say
slash.
Speaker A :
12, something like this, and it
is.
Speaker B :
A GET request.
Speaker A :
Then the user will understand.
Again, if you want to do
anything else. I'm again and
again specifying this, that
these are not hard and fast
rules. These are just
recommendations. So here it will
understand, the user will
understand that.
Speaker B :
Okay, you want to retrieve data
of.
Speaker A :
The blog.
Speaker B :
Whose unique identifier value
is 12, right?
Speaker A :
For example, a blog ID that can
uniquely identify a blog. So you
want to get a blog which is
having an ID 12. And this can be
a variable thing. For example,
you can have something like.
Speaker B :
Slash blogs, slash 15. This is
also the same thing. So in a
general way, in a.
Speaker A :
General way you refer it as
slash.
Speaker B :
Blogs, slash colon id.
Speaker A :
Wherever you see someone
putting a colon. This is
technically referring to a
variable that this part of the
URL can be variable.
Speaker B :
This part of the URL can be
variable. Okay, right.
Speaker A :
Now there can be more. For
example.
Speaker B :
You want to say slash blogs.
Speaker A :
And let's say it's a delete
request.
Speaker B :
It's a delete request, right?
Speaker A :
Then you might be signifying
that delete all blogs. And this
deletion, this retrieval you
might be doing from some
database, persistent storage
database. Or maybe you are
reading some file, you have data
somewhere, you are retrieving
data from somewhere. The client
doesn't need to know. Client
just want to fetch the data.
Okay, then let's say if you are.
Speaker B :
Doing something like blogs,
slash colon ID.
Speaker A :
And the type of the request is.
Speaker B :
A delete request.
Speaker A :
Then you might want.
Speaker B :
To delete blog with a
particular id.
Speaker A :
With a particular id. Okay,
then let's say.
Speaker B :
You have a URL like this blogs,
and let's say.
Speaker A :
It is a post request.
Speaker B :
Now if you see slash blogs with
a post request, then the user
will understand that you want
to. Create a blog.
Speaker A :
Now you might be thinking,
okay, in.
Speaker B :
The URL you have slash blogs.
Speaker A :
In the HTTP method you have
post. This signifies you want to
create the blog. But how do we
send the details of the blog?
Like name of the blog,
description of the blog, details
of the blog, author of the blog,
where do we send all of these
information? So the information.
Speaker B :
Information is send in the
request body.
Speaker A :
So as you might be already
knowing that in HTTP request you
have a request body, right? That
request body can actually take
data.
Speaker B :
In the form of JSON, Also in.
Speaker A :
The form of a plain text,
whatever you see, right? It can
be JSON text, whatever you want
to send, right? And inside this
request body you actually send
the details of the blog. That
how the blog should look like,
who is the author, when it was
created, all of these things you
actually send in the request
body. You don't send it in the
URL, you don't send it in the
URL. And that's one of the most
important features of post
request that if you want to send
some sensitive information, you
actually send that in request
body. You don't send that in the
URL. And if you don't send
something in the URL, it can
never be saved.
Speaker B :
In your history and something
so that's a benefit.
Speaker A :
That's why authentication
requests sensitive information.
You don't send in URLs. That's
why you don't use a get request
there generally you will see
authentication.
Speaker B :
Related endpoints are post
requests.
Speaker A :
Similar to this. If let's say
you see.
Speaker B :
Blogs colon.
Speaker A :
ID and let's say type of the
request is a put request or a.
Speaker B :
Patch request, then you want.
Speaker A :
Either full.
Speaker B :
Or partial update.
Speaker A :
On a particular blog. And where
do you send what properties to
update?
Speaker B :
You send properties to update
in request body. In request
body.
Speaker A :
So these are some of the basic
guidelines for one particular
resource that actually rest
signifies.
Speaker B :
That actually rest signifies.
Speaker A :
Right now you might be thinking
that world is not so simple,
right? For example, I can have
comments on a blog. Blog might
be having some comments, right?
And there is a relationship
between blogs and comments. A
blog can have many comments. How
do you represent relationship
that? If I want to get all the
comments of a particular blog,
then how do you actually show
that kind of relationship,
right?
Speaker B :
For showing relationship you
use nesting. We use nesting for
relationships, right? Okay.
Speaker A :
For example, you can have
something like.
Speaker B :
Slash blogs, slash 13 slash
comments and let's say it's a
get request.
Speaker A :
So what will happen? You want
to get all the comments of blog
with id 30.
Speaker B :
If do something like slash
blogs slash 22 slash comments
slash 3.
Speaker A :
So you want to get the third
comment that somebody made on
the 22nd blog, right? So and
let's say this is also.
Speaker B :
A get request, right?
Speaker A :
As simple as that.
Speaker B :
And let's say if you
have/blogs,/10/comments and.
Speaker A :
Let'S say it's a post request,
that means you are going to
create a new comment on the 10th
blog, whatever is the blog with
ID 10, you are going to create a
new comment on that, right? So
this is kind of like the nesting
that you can actually do. And it
is generally recommended that
don't.
Speaker B :
Use more than 3 level nesting,
right? For
example/a,/id/b/bidc/cid.
Speaker A :
Don't go beyond this like 3
level nesting. If you're not
able to understand, then maybe
you might want to change the URL
and there can be cases like
that. So that's why in those
kind of cases, rest. Using REST
doesn't make sense because
otherwise it will make your URL
very big. Right? This is
something that actually exists
there. I hope all of these basic
points around the URL is making
sense to everyone.



REST recommendation _ API versioning _ CRUD API:

Now, apart from shaping your
URLs and putting in HTTP
methods, what rest expects us to
do is REST expects the Response
to have HTTP codes, right? So
REST endpoints or REST APIs are
going to provide you HTTP codes.
For example 200 for. Okay, 201
for created, 404 for client side
error of not found, 500 for
internal server error. Right?
All of these things are expected
in a REST based API response,
right? This is kind of like very
important and fundamental. If
you don't send HTTP codes,
definitely you are way far from
qualifying for a REST API and I
believe one should send it
because it at least gives you a
signaling mechanism. Okay. Of
about what happened with your
request. Okay, now there is a
very interesting use case about
versioning generally. If you see
my previous batches and old
videos and anything, I generally
do API versioning in small
projects also. Now what is API
versioning? Now what REST says
that make sure that you
specifically mention your
versionings. Versioning. What do
you mean by versionings? I will
very quickly give you an
example. If you go to Kovin,
Although they have now removed
it from here you can see. But if
you carefully see there is
something called that V3 written
here. If we go for coven public
APIs, let's see if they still
expose something. Govind public
V2. So can you see there is V2
V2 slash, V2 V2 return. Can you
guys see that? Right? So what is
API versioning? Now let's say
you are preparing your own
online code judge like
HackerRank. Okay. And let's say
you just prepared an interface.
People can come and actually
submit their solution. But
behind the scenes on your server
you are not computing the
solutions on your own. What do
you do? You receive a request on
your server and from the server
you actually forward or forward
your request to a third party
service. Let's say Hacker Earth
or spodge. Right? Or Code Judge
anything. Let's say spodge.
Okay. So you send the code given
by the user and the test cases
that you have saved on your
server, both of them to spot
what SPODGE does is SPOD
evaluates the code, runs it
along with the test cases and
gives you back a response and
then you give you back and let's
say you process the response a
bit and then you give it back to
your client. Now how you are
going to communicate with
Spodge? Spodge will be having
their own servers, but spos is
going to expose a bunch of
functionalities to you. So
Spodge is going to expose APIs,
right? And assuming that, let's
say SPOD support REST APIs, then
in their APIs they should do
versioning. What do you mean by
versioning Now? Just think about
it. Initially, let's say like 10
years back, Spod might be using
C11's compiler, okay, or early C
compilers. But now in 2023, 2024
they have migrated their old
compilers and now they are also
supporting some new compilers.
Or let's say in 2010 there were
some old features. Now they have
optimized the features and their
execution engine is a bit
faster, right? So what happens
is spod, when they will launch
their APIs, they will say that,
okay, sp slash, they will say
their API is to be
like/v1/submit. Let's say
something like this, that they
have, they have a submission API
on this submission API, it's a
post request. Somebody can send
a piece of code and a bunch of
test case files. They will
evaluate it and send back a
response. Now let's say when you
actually make a request to this
URL, you actually hit the old
system of sports, which might
not be that efficient. It might
be a bit slow. Old compilers
might be getting used, but now
slowly and steadily they
migrated and they have exposed a
new API v2/ submission. Now you
can see the overall signature is
still a lot similar. It might
change also. Like for example,
instead of submissions, they
might say submission submitting
or something like xyz. They
change it. But my point being
that they mention something
called as a version version
represents that. Have you
released a new set of
functionalities for your API? If
somebody wants to use the old
functionalities, they will be
using the old version of your
URL. And APIs, if they want to
use new version, they will be
mentioning the used version. Now
you might be thinking, okay, why
do you want to actually support
both of them? You migrated your
compilers, discard all of this
and start supporting it. Let's
not have any versioning, let's
have just submissions. Post
request once. Everything,
everything my developers have
coded, everything is optimized.
Everyone can actually start
making requests there. But there
are two issues. Maybe the new
engine that you have developed
is buggy and it's not able to
take a lot of load. If you will
just at one night shut down all
your old servers and boot up the
new servers with new
functionality and they don't
perform well, there might be a
case that all of your customers
are going to face downtime
because of you. So what happens
is generally what companies do
they prepare both the versions.
1v1 version, which is kind of
like old stable version, and v2
version, which is a new version,
but that might be still in a
testing phase. And they slowly
and steadily roll out both of
them to all of the users. If the
users face issues with v2, they
can immediately shift back to v1
and then report the issue to
Spodge. And they don't have to
do much, they just have to
change their URLs and
everything. URL, how the input
is coming, they have to change
it, right? This is one use case.
Apart from that, if just think
about it, you don't keep
versioning, earlier you had an
old execution engine which used
to take the input in some other
contract format and the new
execution engine takes input in
some other format. You can't
just say to all of your
customers that from tomorrow
every one of you have to change
their code. Because now I don't
take input in this format, I
have started taking input in a
new format. This is called as
backward compatibility, right?
That is, people who have their
old codes should also work and
the new people who might get
onboard should also work. And
it's not like you have to run
both of them forever. Like V3
also comes till you are running
V1. No, you can let's say give a
one year buffer that, hey, we
have launched our V1 already. It
was running for like 10 years
now. Recently we have launched
our V2 APIs. These are pretty
stable and we are giving you one
year of time. After one year,
the V1 API will be deprecated.
So you need to start your
migration and you have, let's
say your one year of time with
yourself, right? Similar thing
happens with a lot of Facebook
APIs as well. They released new
versions and asked people to
actually migrate given some time
period. So this is something
very important that actually
happens with versioning of APIs.
And this is pretty cool, right?
Because then you are backward
compatible. If your new features
has some issues, nobody sees a
downtime, you can test it. Well,
your customers get both of the
supports and they get time to
transition as well, right? So
these versionings are pretty
cool and pretty important to
actually do. Now last thing,
that sending data can be done in
three ways. So if you want to
send data, you can technically
do it in three ways. One is
request body that I already
talked about, right? I talked
about, right? That let's say in
a put patch request, if you want
to send the properties to
update, you can send in request
body in post Request, you can
send a request body. In request
body you can send a JSON or
whatever you want, right?
Another way to send data is
called as URL params. What are
URL params? These dynamic IDs or
dynamic values that you see,
don't you think? This is also
data that I'm sending
that/block/1. I'm sending a data
that give me the first block or
12th block or Xth block. So I'm
sending some data. So whenever
you send data which is embedded
in the URL, like at last the
data will look something like
this, right? At last it will
look something like this. Blog
22 comments 3 so this data is
actually embedded in the part of
your resource in the URL, right?
This is actually called sending
data through URL params. Okay?
And the third one is query
params, right? For example, a
lot of time you will see slash
products and then you will see
people putting a question mark
after question mark. People say,
let's say. Let's do something
like this. Category is equals to
electronics, okay? I'm just
hypothetically putting something
and company is equals to Apple,
something like this. So here
what do you actually do is you
put a question mark and then you
try putting key value pair
separated by equals to. Then the
next key value pair is separated
by and see key value and key
value and and so on, right? This
is something that actually
called as this is actually
called as query params. This is
something called as query
params. So there are these three
ways in which you can actually
send the data when you will
receive like and now in this
request body when you are
sending, you can even send JSON
and everything, right? But when
you will receive the data,
always you are going to receive
it in a JSON format, right? You
might be thinking that how do
you configure request body? You
can configure it
programmatically.
Programmatically you can
configure. Or there are tools
using which you can configure
it. We will talk about those
tools like Postman. Okay, so
these are some of the
conventions that actually REST
brings into the picture, right?
In order to use these
conventions, there are a lot of
libraries that actually by
default support rest, right? For
example, if you go for a library
like Exios and everything, they
support a lot of REST related
stuff. And trust me with this
fact, there are frameworks that
are REST based frameworks, for
example Rails, Django, all of
these frameworks heavily rely on
REST conventions. And it's a
specific saying in Rails that if
you follow REST convention While
developing a Rails application,
Rails will do a lot of things
automatically for you. But if
you don't follow REST
convention, then you have to do
everything yourself in Rails,
right? Trust me with this fact.
Like in Rails, if Rails, if you
are doing a lot of automated
stuff that Rails provides,
everything will be done by
default in REST conventions,
right? You can just line three,
four lines of code, and in
three, four lines of code, Rails
is going to provide you a lot of
rest APIs in front of you,
right? So these are the
conventions of rest. And as I
said, all those APIs that
actually follows the REST
conventions are called as rest
APIs. Now you will see one more
term called as CRUD API. CRUD
means create, read, update,
delete that you can create a
resource, you will provide 5, 7
APIs in which you can create a
resource, you can read a
resource, you can update a
resource, you can delete a
resource. Technically I have
already written that you can
read a resource, you can create
a resource, you can delete a
resource, you can update a
resource. So when you support
APIs that support all of these
operations and beyond, these
kind of APIs are called as CRUD
APIs. So, so generally you will
see people creating CRUD APIs by
following all the conventions of
rest, right? But specific APIs
that provides all these four
functionalities together are
called as CRUD API. So you will
see or like, you will hear this
term also very frequently when
you will start your development
journey, right? But I believe
overall basic understanding of
REST is clear to everyone.