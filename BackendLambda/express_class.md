Hey everyone, we are going to
start in about a minute. We're
just waiting for everyone to
join and then we'll start. Okay,
cool. Looks like we can start.
Just a second. Okay. Hi
everyone. Are you guys able to
hear me? Just drop a quick yes
or no in the chat. Foreign. Am I
audible? Let me know if you face
any lag or something. There
might be some Internet
fluctuation. So let me know if
you guys face some lag. I'll
just turn off the video for that
much time period, right? Good
evening. Good evening everyone.
Okay, no. L. Just let me know in
case you get some issue or
something. Okay, cool. Everyone
can see my shared screen. Okay,
just a second. Wait. Okay, so in
the last class we prepared our
own TCP server and a. I would
say our own HTTP server.
Remember that using the. NET
module and the HTTP module,
right? Now if you remember, we
were doing a lot of stuff like
we had to make a lot of effort
to actually make things happen.
We had to do a lot of things to
actually set up an HTTP
connection, TCP connection and
everything, right? Now the thing
is that in order to resolve
these kind of issues, because as
a developer there can be two
roles that you might be into.
Either you might be building
customer facing products or you
might be building developer, I
would say productivity products,
right? Customer facing products
means let's say you are working
with an application like phone
pay, Google pay book, my show
right there. As a developer,
your agenda is not to make web
frameworks. Instead your agenda
is to make customer facing
applications as soon as
possible. You have to ship
features and everything there.
The other type of role you might
be into can be into product
production tools or server
related tools or let's say
infrastructure related tools.
For example, let's say you are
building a web framework of, of
your own, right? Let's say you
are in Google. And in Google,
for example, for Java there is a
web framework called as apps
framework. For C there is a web
framework called as scaffolding,
right? So let's say you might be
building that kind of a thing,
right? So there can be
different, different roles that
you might land up into, right?
In both of the cases it is very
good that you know the internals
of how exactly these kind of
network connections happen,
right? But for wide, wide
majority of the roles in
startups and companies, you will
be working on customer facing
products, right? In that case,
you do not want to, I would say,
spend your major time in
actually setting up these
infrastructure tools yourself,
right? In that case, using
frameworks and library makes A
lot of sense. Are you guys able
to get this point? That is why
we have a very minimalistic
framework for us called as
Express js. Right. If you go to
Express js, you can see that the
first line that they mention it
is fast. Although we have done
some kind of load testing in
front of you and we saw that
yeah, it's good, but it's not
the best. Right? But what I like
about Express JS is that it is
unopinionated. What do we mean
when we say unopinionated?
Unopinionated means that Express
JS doesn't impose any guidance
on you or any strict rules on
you. For example, if you use
something like Ruby on Rails,
then frameworks like Ruby on
Rails is very opinionated
because they impose a specific
set of rules, a specific set of
guidelines on you. And it is a,
it is a very known thing that if
you do not follow these
guidelines of Rails, then you
will not get the most out of the
framework. But that's not the
case with Express. In Express
you can actually build things in
whatever you way you like,
however you like. So they don't
impose anything on you. Right?
There is no conventions that you
have to actually follow. It is
minimalistic. That means it
comes with bare minimum set of
things, right? It comes with
bare minimum set of things that
you need to get started with a
basic web framework. It doesn't
gets preloaded with everything,
right? Right. So yes, we have
just started. It doesn't get
preloaded with a lot of things.
For example, in Ruby on Rails,
for example, there is a inbuilt
support for socket connections
like WebSocket, not the TCP
socket. I'm talking about web
sockets. There is inbuilt
support for, I would say orms.
There is inbuilt support for
logging. A lot of things are
inbuilt support. That makes
frameworks like Ruby on Rails
very huge, very bulky, but
everything comes out of the box.
But Express on the other hand is
minimalist. It will give you the
minimum that you need. And on
the top of that you can use
library, you can make libraries.
It doesn't restrict you. And
that's what was one of the
biggest selling point of Express
js. Right? For one more example
of opinionated framework can be
spring boot. Spring boot is very
opinionated. Spring boot expect
you to do do things in a very
certain way. Right? That also
leads to a lot of performance
advantage in spring boot as
well. But if you see then there
is not a lot of, I would say
room for you to explore. Yes,
Swami B, you can consider that.
Does that one make sense?
Everyone? Django is also very
opinionated, right? Nest js.
Yes, Nest JS is there. That's
also very opinionated. Okay, now
in order to get started with
Express, you do not need to do
much, okay? You do not need to
do much. Okay? If you want to
start with Express, the first
thing that you need to do is you
need to set up a very basic NPM
project. NPM project means that
this project is going to be
managed by NPM Package manager,
right? All the package
installations, all the
versionings and everything is
going to be managed by npm. How
do you make that? Let's see.
First things first, you need to
make a simple folder, right? So
I'll make a new folder First
Express app. Okay? Okay, that's
it. We will come to that. We'll
come to like. I'll give you some
introduction on YARN and pnpm.
Okay? But let's. Our focus as of
now is not npm. Our focus is
mainly Express for now. Okay?
There are multiple tools that
you can actually use, no matter
what. Okay? So first things
first, you'll just make a new
folder first Express app. Okay?
I'll just go inside First
Express app. Okay? And here what
you can do is you can run a
command NPM init. What NPM INIT
does is it tries to create a new
NPM project. And in order to
create an NPM project, your main
agenda is to create a package
JSON file. Okay? You can create
this package JSON file yourself
or you can do NPM INIT to create
this package JSON file via a
bunch of prompts. These prompts
give you some questions. You
have to answer them. And based
on that, it pre prepares a
package JSON file for you. What
is this package JSON file? It's
kind of like a metadata for your
project. Does it point make
sense? No, you do. Please do not
code along with me, guys.
Otherwise I will be bombarding a
lot of information. Then you
guys will be again and again
asking for repetition. Watch
this lecture again. You will get
more context and then you should
do the code along, okay? You
will get the recordings, right?
So the first question that is it
is asking that do you want to
keep the package name as first
Express app? We'll say yes. What
should be the version for now,
the version will keep as 1.0.0
description. I'll keep it as
empty entry point. I'll keep
index JS as it is. Just keep on
pressing Enter, right? And all
the default Values. And you can
see it is about to write this as
the package JSON. Is this okay?
Yes. And that's it. That's it.
If you will see it has created a
new, brand new package JSON
file. And as I mentioned, this
package JSON file is a metadata
for your project. It provides
extra information about the
project that you are building.
Now I'll open this in versus
code so that you guys can also
see it. You can see there is
just one file package JSON. Now,
how can you start using Express?
How can you start using Express?
It's to get started with Express
it is very easy to do. First
things first, what you have to
do, you have to do NPM install
Express. Okay, that's it. If you
press Enter, what it is going to
do is it is going to fetch
Express from the Express
repository and install it. The
moment you do that and you check
your package JSON inside your
package JSON in the
dependencies, you have added
Express, you see that and you
can see there is a node modules
as well that has now been
created inside this node
modules. If you will scroll, you
will see Express being
installed. But apart from
Express, also a lot of things
are actually installed. What are
these things? So Express as a
web framework also to work
depend on other NPM packages.
Right? That's what is actually
going on here. These are the
dependent libraries for Express
that my project is depending on
Express and Express internally
is depending on all of these
things. For example, you can say
that if you install TensorFlow,
my project is dependent on
TensorFlow. But let's say
TensorFlow internally depends on
NumPy and Pandas, and NumPy and
Pandas internally depends on
Python. So when you install
TensorFlow, all of these things
already need to be installed.
Does that point make sense? So
that's what actually happened.
The moment you do that. The
moment you do that, we are in a
good shape. What we can do is we
can create a new folder source.
Okay, why source? So that we can
keep all the main logical part
of our project inside one
folder. Okay, Inside Source I'll
create. And it's not mandatory
to create a source folder. As I
said, Express is unopinionated.
That means it doesn't impose
anything on you. What we can do
is we can create a new file
index js. Okay, now first things
first, we are going to use
common JS module for this
demonstration. As of now, what
we will we have to do is we have
to first of all require the
Express, I would say Framework.
This is how you do it. You say
const express is equals to
require express express. When
you do require Express, what
happens is you get a function
with you. If you carefully see,
right? This is. This express
variable is actually a function,
right? When you call this
function, when we call the
function Express, we create a
new Express server object.
Express server object. How do
you do that? You say const app
is equals to express. That's it.
Right? Do you remember we have
been doing this previously as
well. Remember HTTP create
server using the HTTP module we
were doing HTTP create server. I
already mentioned Rabindra. For
this demonstration we are using
common JS moduling. In some
other demonstration we can use
ES moduling as well. No problem.
Okay, cool. So this calling this
express function is similar to
creating a new express server
that internally how it might be
doing is using HTTP createserver
and then you can do app listen.
Remember the listen function
where you mention which port you
want to listen on? Right? So you
can mention any one of the
ports. Let's say I'll mention
the port as 3000, it takes a
callback here. I can say console
log server started at port
dollar port and let's make a
port variable altogether. Const
port is equals to 3,000 and
we'll mention the port here.
Make sense? And that's it.
That's it. This is the bare
minimum to create your brand new
Express app server. Are you able
to get this point? Yes, Ishan.
Okay, our server is ready. Now
you might be thinking, do you
have to learn all of this? No, I
have done this n number of
times. That's why I remember all
of these functions and syntaxes.
But to do this, ideally what I
recommend always and always for
you to do is make sure you go to
this getting started. You can
see there are installation
steps. You do mkdir, you do CD
to that directory, you do NPM in
it, then you do NPM install
Express. Then you click on the
next tutorial and you can see
this is what we are doing.
Calling Express function,
creating the port, then doing
app listen. Right? And now let's
say you want to add your first
route, right? You want to add
your first route to your server.
That's also pretty easy, right?
Let's say, I want to say that if
anybody makes a get request to
home, I want to handle it here.
So request response. Remember
this request response that we
were having in the HTTP module?
Remember that? Do you guys
remember that? Right. So same
thing you have here as well.
See, it's very similar to what
HTTP module was offering to you.
Right. So every time, every time
when somebody will make a call
to home, this callback function
will be called. Every time
someone calls the home route,
this callback will be called. So
let's say if I do console log
home called and then let's say
we say return rest JSON message.
Okay? Okay, so what's happening
here? What's happening here? The
moment we hit this callback, I'm
just printing a log and I'm
returning a JSON. The moment
somebody hits this URL, I'm
returning a JSON inside that
JSON. We are sending a message.
Now, what is JSON? JSON stands
for JavaScript object notation.
Okay? Now JSON has nothing to do
with JavaScript. That is the
first thing that you need to
bring into your head. Just
because it has JavaScript in its
name doesn't make it a part of
JavaScript. JSON is not part of
JavaScript. Then what is JSON?
Just like you have a text file,
just like you have a normal text
file, you can have a normal JSON
file. Okay? JSON is just a
message structure. Okay, why it
has JavaScript as a name inside
it. What is the meaning of
JavaScript object notation? It
is because when you will look at
a JSON file, the overall
structure of the JSON file is
very similar to the structure of
a JavaScript object. For
example, can you see this
package JSON? Do you guys
believe the structure of this
file is very similar to a
JavaScript object, but this is
not executable by any JavaScript
runtime or anything. Are you
guys able to at this point?
Okay, so what is going to happen
when you call this method
response JSON and you pass a
JavaScript object? You can see
here we are passing a JS object.
This message, okay, is a actual
JS object, right? So what
Express will do is you will pass
a JS object and Express
internally will convert this JS
object to a JSON message
structure and send this JSON.
Let me actually show you. So
what I'm going to do, I'm going
to run this server. Let's run
this server. How can you run
this server? You can say node
and you can give the path of the
file source, slash index js and
can you see it says server
started at port 3000. And now,
and now if I inspect network,
okay, and I say localhost 3000
home and press enter. Can you
see we are guessing getting
message. Okay, right. And can
you see this request? What is
the response? The response in
this request is what a JSON. Can
you see that double quotes on
that message msg. Can you see
that double quotes on that
message msg? Right. So what
happened? You actually provided
the input as JavaScript object
and express will internally
convert this JavaScript object
to a JSON message structure. And
you can see that here. Are you
able to get this point? Is
everyone able to get this point?
And you can see your first web
server using Express is ready.
As simple as that. Minimalistic,
unopened, nothing fancy you have
to do. Does that point make
sense? Right? Yes. Next class
will be on how to set up project
structure and everything. Then
I'll talk about some good
practice and everything. Yes,
and all of this. All of this.
What we are doing is currently
in the application layer.
Because here we have prepared an
HTTP server. HTTP protocol is
working on the application
layer. Does that one make sense?
Okay, cool. Now there are some
very interesting features that
Express provides us. Okay, yeah.
When I. As I already mentioned,
right. People say it's fast, but
we have seen things are faster
than Express as well. Now
Express actually focuses on one
very important concept. When we
will learn Fastify, then there
will be a different thing that
will come into Fastify. Right?
That Fastify generally promotes.
Fastify promotes something
called as plugins. Everything in
Fastify is expected to be a
plugin. Okay, but we'll come to
that later. But in Express,
Express promotes a very
interesting feature. Express
promotes a feature called as
middlewares. Rajesh says HTTP
server, where we have created.
Rajesh, when you create an
Express app object, this is an
HTTP server object. Does that
one make sense? Internally,
Express uses the HTTP module. We
discussed about that in the last
class. What is different from
Node js? I didn't get your
question. Santanu, can you
elaborate? Okay, cool. Now what
I would say Express promotes
HTTP depends on tcp. Yes,
Majesty, that's correct. What
they promote is something called
as middlewares. Let me talk
about what is middlewares. Okay,
for understanding middlewares,
one very interesting flowchart.
I'll draw in front of you. Okay,
so what are middlewares? Let's
talk about that. Just a second.
Okay, let's say that you have a
function. Let's say you have a
function. Fun. Everyone can see
the font, right? Okay. Okay,
cool, cool. So let's say there
is a function. Fun. Okay, now a
normal function is what? It's
just a black box that takes some
input and gives you some output.
Can I say that normal functions
is what black box? It takes some
input, processes that input and
gives you some output. Okay, now
what are middlewares Middlewares
are special functions in which
you have every feature of a
normal function that it can take
some input, give you some output
after processing. But
middlewares have one more
functionality. What is that?
Middlewares have access to the
next middleware as well. What do
you mean by that? So what
happens in the case of
middlewares is that middlewares
are generally chained. Have you
seen Linked List? Do you know
about Linked List? What is a
linked list? Linked List is a
chain like structure in which
one node is connected to the
next node. Are able to get this
point right? So if I actually
show you, if I actually show you
the official definition of
middlewares that Express
promotes. See, what are
middleware? What is the
middleware? Okay, middleware is.
Okay guys, FYI, middleware is
kind of like a general concept.
So there is a design pattern
called as chain of
responsibility that actually
inspires the whole architecture
of middlewares. Shupta, as you
answer question, read about
chain of responsibility. Okay,
cool. So coming back, I'm
currently. That's why I'm
talking only with respect to
Express that Express promotes
something called as middlewares.
What are middlewares? Middleware
functions are functions. So
first thing is they are
functions. So everything that a
function promotes, middleware
promotes. No problem. What
what's extra inside an express
middleware is that they have
access to the request object,
response object and next
middleware function. So that's
what I'm talking about that
middlewares are generally
chained. Middlewares are
generally chained, right? M1, m2
and m3. Okay, so see M2. Okay,
so what, what is this? This is
chain of functions. These are
normal function. They can act as
a normal function, but they have
one more interesting feature.
What is that feature that from
the middleware function M1 I can
call the middleware function M2.
You might feel sir, calling one
function from another function,
why you are naming it something
like something else? I can call
function M1 from function M2
very easily. We have been
calling functions from one other
functions, right? Yes, we know
that. But what special with
middlewares is that in
middlewares you have the access
of the next function as an
argument, right? So M1 function,
the function M1 will be having
multiple arguments and it will
be having an argument next. When
you will call this argument next
you will eventually call M2.
Same thing will M2. If M2 will
be having its own set of
arguments and it will be having
an argument next. When you will
call next, you are going to call
M3. And so on. And this next is
what? Nothing but callbacks,
right? These are callbacks, but
this is not ordinary callback.
It's a callback to our next
function that you have aligned.
Let me actually show you. So in
Express. In Express, what
happens is. Can you see this
function? Can you this function?
Can you see this function? It's
a callback, right? So in
Express, this callback function
has access to the request object
and the response object. What is
this request object? This is the
HTTP request object. What is
this response object? Response.
This is the HTTP response
object. Right? Okay. Now what
you can actually do is you can
create a function, M1, right?
This function is going to be a
Express middleware. In Express
middlewares, what you have,
every express middleware will be
having access to a request
object, it will be having access
to the response object, and it
will be having access to the
next middleware. Okay, cool. So
let's say console log inside
middleware M1. Okay? Similarly,
let's prepare one more
middleware, M2 inside middleware
M2. Okay? And now can you see,
apart from the request and the
response object, you have access
to the next middleware. So what
you can do is you can call next
here. What you can do is you can
call next here. Right? And then,
and then what you can do is you
can register these express
middlewares with your app
request. So you can see I have a
get request to slash home. What
I can do is I can say m1 comma,
m2, comma, another callback
function. Right? So this m1, m2,
and this callback, all three are
express middlewares. And if you
remember the definition, Express
middlewares are functions that
have access to the request
object, response object, and the
next middleware in the request
response life cycle. So in that
case, in that case, if I restart
my server and I refresh here,
and if you go to the console,
can you see what happened? You
first of all called M1, then you
called M2, and then you called
this callback. Are you able to
get this point? Keshav, which
part can you please specifically
mention? Generally you won't
compare that with iterators.
Next, Kunal, because Iterator
generally fetches when you call
iterator.net next, it is
generally to fetch next data
value here. The next is calling
the next function. I do not want
to. I. I don't think we can
compare both of them. Vivek,
I'll come to the application,
don't worry. Just in a moment,
okay? Yes, Sequencing is
important. If you do M2M1 and if
you restart your server and
refresh, can you see then M2 is
called first, then M1 and then
app. Okay? No, this is not
exactly generator function. You
are not yielding anything or
something. You can just say that
express internally manages. The
fact that the reference of M1 is
passed as a callback here. I do
not think they use internally
generators. Okay, just because
they you are mentioning
something as next doesn't mean
it is related to iterator
generator. Iterators and
generators are to fetch new
values. Are you able to get this
point? Okay, guys, I'm coming to
the application and everything.
But let me just quickly repeat.
Okay? Yeah, let me just quickly
repeat and let give me give you
some corner cases and everything
as well. So what is middlewares?
Middlewares are sequence of
functions or chain of function.
Just like chain of node in a
linked list. Every function has
access of the next function in
the chain via an argument, via
an argument, right? And from one
function, if you call this
argument, you will be able to
call the next function and so
on. Okay, now here you can see
that I created a function M1 in
which I'm giving request
response. Next, I'm giving a
function M2 request response.
Next, in both of these
functions, I'm calling the next
method. And then inside your
request here, I have prepared a
get request. After mentioning
the route URL, I'm defining the
orders of the middlewares. Can
you see? There are three
middlewares. M2, M1 and this
particular callback. All three
are middleware. So these three
are chained. Who will chain it?
Express will automatically chain
it. Express will automatically
chain it. Does that point make
sense? And, and what will happen
is whenever a new request will
come up. Rajesh, I'm coming to
that. Whenever a new request
will come up in whatever
sequence, in whatever sequence
you have mentioned, these
callbacks, these callbacks will
be executed in that particular
sequence. Are you able to get
this point, Rohit? I'm coming to
that. Okay, now a very common
question that everybody has in
their head is that what if I do
not call the next function?
Think about it. You have a chain
of functions in M1, when you
call next, you go to M2. M2,
when you call next, you go to M3
level, you will never reach M.
If you never reach M2, you never
reach M3. And can you see?
Technically this is our M3. And
inside M3 we have the logic of
returning the response. Can I
say that? Drop a quick yes or no
in the chat, everyone. So if you
do not call next then your
request will be halted. It will.
Expect some response. But no
response will come up. Let me
show you. So I have commented
out next here. You can see that
I have commented out next. If I
restart the server and if I
refresh. Can you see it is
loading? Can you see it is
loading? Yeah. If. If there is a
lag. Let me turn up. Turn off
the video. There is some issue.
I know with the Internet. Guys,
can you see that this is
loading? This is loading. Can
you see this loading here? Just
a second. Okay. Let me just
quickly do a speed test in case.
If some issue is coming up. The
speed looks fine, guys. Just
check it on your end. The speed
looks fine to me. Just a second.
Just a second. Yeah. I've turn.
Turn off the video. Don't worry.
I've turned off the video. Okay,
cool. I guess now it should be
good. Now it should be good.
Cool. Okay, cool. Now what did I
mention that? Let's say if you
comment the next function here
or let's say you do not call the
next function. What will happen?
M1 is connected to M2. M2 is
connected to M3. When inside M1
you call next then only you call
M2. When inside M2 you call next
then only you call m3. Can I say
that? Can I say that? Guys.
Right. So. So if you do not call
next function inside M1 that
means you never get access to
M2. And if you do not call next
inside M2 you never get access
to M3. Can I say that? Can I say
that? That's why you can see. I
have requested localhost
3000/home. But it's still
refreshing. Can I say that? Can
I say that? Guys, why it is
refreshing? Because it is
waiting for some response. But
no response is coming up.
Because you are hitting M1. No
problem. But after M1 you are
not going to M2 and this M3.
Right. Because you can see you
are hit. You are sorry. My bad.
Let's reset the sequence to M1.
M2. Okay. Let's restart the
server and let's say refresh and
can you see I'm calling M1. I'm
at M1. I called M1 but from M1
I'm not going to M2. So that's
it. The request is halted.
Request is in a halt state. Are
able to get this point? Will M1
be called automatically? Yes.
The first middleware, whatever
is your first middleware will be
automatically called no matter
what. Depends on your
implementation, Rohit. But it's
Kind of like a feature of
Express. To be very honest, no
Biswar engine. So Biswar engine
is saying can you not call this
function directly? You can call
this function directly if you
separately reference this
functions. Or let's say you call
M2 like this. Let's say you call
M2 like this. But what will be
the problem? Guys? Now you guys
tell me. There is a very
interesting question from
Biswaranjan that sir, you could
have instead of calling next,
you can call M2 directly, right?
What is not going to work here
if I call M2 directly? The
problem is if you call M2
directly then you have to pass
your request response object.
First thing. First thing is you
have to manually pass your
request response object. Are you
guys able to get this point?
Second thing. Second thing is
that you will lose this
chaining. You will lose this
chaining, right? What is the.
What is the benefit of this
chaining? What is the benefit of
this chaining? Think about it
like this. Let's say you have a
situation in which you are
expecting the user to send you
some valid arguments. Let's say
you are preparing a sign up page
and you want the sender to. You
want the user to send a valid
email and a password. Okay. Can
I say that what if the user
doesn't send a valid email? What
if the user doesn't send the
valid email? What you can do is
before actually executing your
response, before actually giving
your response, you can validate
the request. Remember we talked
about MVC and we talked about
the validation layer. That
validation layer we can very
easily prepare using these
middlewares. Are you able to get
this point? Let me show you an
example. If I show you an
example of a relatively well
structured app. Okay. So if you
carefully see if I go to. Okay,
let's say there was some URL
that I am expected to hit and I
want to check whether the user
is logged in or not. Can you see
what I'm doing.post I'm
mentioning a route and I'm
mentioning two functions. These
two are what middlewares and
this is logged in can act as
your authorization.
Authorization middleware. Can I
say that if. Let's say you go
here. Can you see there is a
Create product validator. Can
you see this Create product
validator. If you go inside this
Create product validator you can
see this is what just a
middleware. It is just a
middleware function. I am
checking whether the body
contains title or not, whether
the body contains description or
not and so on. Okay. Does that
point make Sense. So middlewares
can be used to write your
validation layers. Is this point
making sense? Okay, now one more
thing. Instead of calling next,
what you can do for express
middlewares is that you can
directly return a response from
here. That instead of calling
the remaining middlewares in the
chain, you can directly return
response from here. Let's say
message not okay. If I save it
and restart refresh, can you see
I'm getting message not okay. So
what's happening? I am hitting
M1 and M1 is directly returning
the response because we have the
access to the response object so
we can return the response. Can
I say that? Yes, Pankaj, you can
do that. M1 was printed twice
because I refreshed twice. Does
that point make sense? Think it
about. Think about it like a
link list. Guys, so is that M1
and M2 does not have a
connection or link between them.
Then server will never load.
It's not like the server will
never wrote the request that M1
and M2 are associated with. That
request will go in a halted
state. Like our server was still
turning up, right? Our server
was still turning up when you
hit home, then request was being
halted at M1. I guess that
answers your question, Sujan.
Okay, Arav, that's how the
syntactical sugar of express
middlewares is that you do not
need to pass. Guys, when you're
calling the next middleware from
here, you do not need to pass
request and response object
because express middlewares
automatically get that. You can
see in the definition. In the
definition you can see that
every middleware function has
access to the request and the
response object. Does that point
make sense? So you do not need
to separately pass that as an
argument. They will
automatically get that as an
argument. Make sense? If you
have 100 middlewares, then how
do you write M1, M2, M3 in the
main app get method? That's it.
One thing gender. In general
case there is no expectation
that you have 100 middlewares.
Second thing, there is one more
syntax to mention multiple
middlewares. How you can do
that? You can wrap them inside
an array. You can wrap them
inside an array like this and
you can pass an array of
functions. If I refresh. Yes,
inside M1. When you are in M1,
this next argument, the next of
M1 is actually M2. When you are
in M2, the next of M2 is
actually the callback function.
Callback function. This callback
function. Okay, and let's say if
I refresh one second. Sorry, I
didn't start the server. If I
refresh, you can see message.
OK. And middleware M1, M2 and
home called. Makes sense you can
do that. I guess that's it. I
don't think that there should be
an issue with that. If we modify
the response object, the next
middleware will automatically
get that updated response
object. Is that correct? Any
object that you modify, you if
you modify request object. If
you modify the request object,
then the next middleware will
get the modified request Object.
For example, for example, if you
do console log request.user
inside M1 as request user here
you will get it undefined. But
let's say before I call the next
middleware I say request.user is
equals to id one email s at the
rate s.com okay? Now if you try
to get Request user inside M2,
let's see what happens. Here we
are going to get the object.
Here we are going to get the
object. Let's. Let's try. If I
start, if I refresh, can you see
Request user inside M1 was
undefined, but inside M1 you
modified the request object and
you added a user property. Then
when you are accessing user,
request user inside M2 can you
see request user inside M2 has
that user object. So if you
modify something in one
middleware between request and
response object, that
modification will be accessible
inside the next middleware. No
RF somebody asked that what if
you want to pass 100
middlewares? I answered that
like you can pass an array of
functions. You can even avoid
passing an array. You can just
pass them normally. Make sense?
Both of the syntaxes work. Make
sense. Pm whatever is the
request object. That is the HTTP
request object. HTTP request
object contains your URL, your
headers. All of these things are
actually going to come up in
Request object of M1, M2 and
your final callback as well. If
you modify something then it
will be modified for the
remaining callbacks or remaining
middlewares. Make sense? Okay,
but if we do not pass M2 request
and response in get and only
pass M1, then M1 we call M2
request an object and then M2 we
call this. Now the link
continues, right? Once again,
Parth, I didn't get your
question. You are saying that
you will manually call M1.
Sorry, M2 from M1 and then you
manually call this function,
right? That's normal set of
function calls, right? That's
normal set of functions call. So
that won't create any problem
for you. Make sense. There can
be different use cases of
middlewares. One of the Use
case, I'm telling you, is the
validation layer. Yeah, but then
you have to do extra effort. You
have to manually return and
everything. Like for example,
you do not return anything from
M2. In that case you have to
return from M2. That's when you
will get the return value to M1
and then you return from M1 to
the remaining part. You have to
handle the returns, you have to
handle what you are passing
here. All of that. Now, one
thing that generally I believe
you should do is that if. Let's
say there is a. For example, in
Express they promote
middlewares. In Fastify they
promote plugins. What I have
generally seen is that on
framework level there are a lot
of optimizations that these
frameworks actually do. There
are workarounds in which you can
skip these, but if you follow
these, then there is a good
chance that some optimization
might be going on in behind the
scenes. For example, in Fastify,
if you do not use plugins, a lot
of things will still work fine.
But if you use plugins, then
Fastify optimizes a lot of
things for you. Same thing with
Express and its middlewares as
well. So generally, if a
framework is giving some
features, I generally recommend
to use it and not put our own
custom, I would say workarounds
to replace that. Because maybe
some optimization you might, you
might lack until or unless you
are very sure and you have read
the code behind, you should try
to follow it. Yes, the end of
chain is always this function,
guys. The end of this function
chain, Express middleware
function chain is always this
final callback function. Makes
sense. You can see here also you
can have the access like you can
also mention the next
middleware. But if you, if you
will print what is next here? If
you will print what is next, I
hope everybody can guess that
here the next function is this.
But because there is nothing
next in the chain, nothing will
be actually called, right? It
will be. It will be expecting a
middleware. But there is no
nothing in next in the chain and
hence nothing is going to
happen. Make sense? So generally
you do not put the final next
year. Does that point make
sense? Is the middlewares giving
you? Are you guys getting the
idea of what is middlewares and
where you can actually use it?
Okay, so Biswar engine has an
interesting question and I
believe you guys can guess it.
What if I do a console log here
after calling next? And let's
say if I do console log after
calling next here, what will
happen? What do you think. Is
it? Let's try. Let's try. So if
you refresh, can you see what's
happening? So it's a chain of
middlewares, Remember it's a
chain of middlewares. It's not
like from M1 you call M2, from
M2 you call M3 and from M3 you
send the response directly to
the user. No, from M3 what's
going to happen is the response
comes back to the chain of M2
and then from M2 to M1 and then
M1 sends it back. Are you able
to get this point? These are
just functions. So when your M2
has been completed then M1 will
be called. Can I say that? See
after calling M2 you are calling
M1. These are just normal
function calls. So they will be
added on the call stack. When M2
is completed, you need to
complete M1 as well, right? In
M2 when you call next, that
means it is calling this
callback. When this callback is
completed then you have to call
this M2. Right? So see these are
just normal functions. And every
simple behavior of function is
going to be followed here,
right? Simple thing but very
good question. Like again
exploring things right now do
you understand how exactly these
chain of functions called as
middlewares are working? Yes
Pankaj. Yeah. Or not? They are
not returning, they're just
printing. I'm just printing
there. These are just print
statements. Yeah. Make sense
guys. Everybody is this point
making sense that what express
is actually offering you out of
the box? Do we need to
compulsory pass request response
and next inside middleware
function declaration or it's
available already, you need to
pass it other Kunal, just think
about it. Let's say if I define
a function like it's a. It's.
It's not an express question,
Kunal. It's a coding question
that you are asking. If write a
function F1ABC and it has some
implementation. One way to call
F1 is like this. One way to call
F1is like this. Do you think
both of the things are same,
Kunal? I guess that answers your
question. Yes, arunav. So first
M1 is called, then M2, then
this. Let's say if you call M3
and then when you return then
you first return from M3, then
you return from M2 and then you
return from M1. Does that point
make sense? Yes. Normal function
calling stack. Right. Nothing
fancy as such. More use case of
middlewares. So any kind of an
authorization if you have to do,
you can do that using
middlewares. For example, if you
have to check whether a User is
allowed to access a particular
resource or not. You can do that
using middlewares. Okay, apart
from that, if. Let's say you
have to filter incoming request
object. Yes. Next is optional,
of course. Sukaman. Right. If
you have to filter some incoming
request object, you can do that
on multiple layers of your
middlewares. Can you put all
middlewares in one file? Rajesh,
it is like asking a question
that can we put all the
functions in one file? Yes, you
can do that. These are just
functions. Middlewares are
functions. Whatever you can do
with a function, you can do with
the middleware. Technically they
can do sparse, but I don't think
once you have returned something
for your from your final
middleware, you might want to
have a use case where you want
to update it in the preceding
middlewares. So I have never
done that, but I guess it's
possible. You can see middleware
is an express feature. Using
middlewares, we will be
preparing our validation layer.
Yes. So actually as. As I showed
you, you can see there are
dedicated middleware files.
These are your validation layer.
Only if I show you a another
project which is relatively more
clean. So. If I actually show
you. Validators, can you see
request response and next, and
can you see this validator file?
This has one function. It is
checking whether incoming ticket
val value value is valid or not.
There are authentication
validators is logged in and
everything or not. User
validator, user object, valid
creation validators and
everything. So generally you
write your validators in
different different files to
make things relatively cleaner.
Sir, how request object is
created? Sukamal? The moment the
TCP connection is set up and you
initiate a HTTP request from
your browser, the request is
collected on the express server.
Now this request already
contains a lot of things. For
example, your request headers,
request URL, type of the
request, get post or something.
All of these information. So
express takes that and converts
that to a JavaScript object. So
this is the responsibility of
express. Okay, can please tell
the difference between layer and
middleware? Darshit Middleware
is a feature. For example, C has
for loops is for loop and
algorithm. No, but using for
loops you can write algorithms.
Can I say that? So using
middlewares we will be able to
create the validator layer, the
application. It's an application
of middleware. So our middleware
basically used for validation
purpose only or any kind of
request style. I told multiple
application, right? You can use
it for authorization and
everything as well. Prakash
these different kind of folders
were modular single module. You
can say these are Different.
Different modules. Okay, cool.
Now these are middlewares that
you yourself prepare, right?
These are the middlewares that
you yourself prepare. Now there
will be some middlewares that
will be given to you either
directly by Express, or you can
install some third party package
that can also, I would say,
integrate some middlewares for
you. Okay, so let's actually try
to see that. Let's actually try
to see that. Okay, now, for
example, before we go there, if,
let's say you want to actually
see a bunch of things around the
request object, what you can do
is if let's you want to access
what is the request URL, you can
say request URL. If I restart
the server refresh, can you see
Request URL is what? Slash home.
Okay. Okay, so this request
object contains a bunch of
things. Now, a very interesting
thing that I want to tell you is
that a question that should come
to your head is how can the
client send custom data to the
server? This is our server,
right? How can the, how can our
client, like the browser client,
send custom data to our server?
There are ideally three ways to
do that. There are ideally three
ways to do that. To send some
data. You can send the data
either in URL params, or you can
send the data in query params,
or you can send the data in
request body. Okay, let's take a
look at all of them one by one.
First of all, let's look at
query params. Let's look at
query params. I believe
everybody must have seen
Flipkart somewhere sometime,
right? If you go to Flipkart. If
you go to Flipkart. And let's
say, what did I do? If I go to
the homepage again? If I go to
the homepage again, click here.
I clicked on Asus monitors. Can
you see how the URL looks like?
Flipkart.com computers
monitors/pr?sid is equals to
something. Then merchandising,
sorry, FM is equals to
merchandising, and so on. Can
you see all of this information
being passed? If I just copy
this here and paste it in a new
file. Okay. And paste it in a
new file. Can you see this?
Flipkart.com computer monitor PR
all of this piece of information
is being passed. And what is the
syntax of this? You can see
question mark. Sorry, question
mark. Something equals to a
value and Something equals to a
value and. And so on. So how the
structure is looking like how
the structure is looking like
the structure looks like this.
Question mark. Key 1 is equals
to value 1 and key 2 is equals
to value 2 and key 3 is equals
to value 3. Can you see that? J
You do not know about plugin, so
I cannot tell you the
difference. Once I come to
plugins, then maybe we can talk
about it. And even if you know
it, then rest of the people
don't know it. So current
discussion is of no point. You
cannot know everything in the
first hour, just FYI. Okay,
cool. So guys, can you see the
structure? And let me show you
one more thing. For example,
let's say. Let's say if I go to
Flipkart, let's say I put
customer ratings 4 and above. I
put customer rating 4 and above.
If I copy the URL again, paste
it here, can you see what's
coming up? See this rating
facets rating. Can you see this
part right now let's say if I
put the minimum price and
maximum price and I copy the URL
again, copy paste. Now can you
see price range from equals to,
Price range to equals to and so
on. Can you see again that key
value pair structure is coming
up. Can you see that? So what's
happening here? So whenever you
are selecting any kind of
filters on flipkart.com what
Flipkart's web UI is actually
doing, it is collecting all of
that information from the
browser from you and sending all
of that information to the
Flipkart servers. Flipkart
server processes those
information, those filters and
give you the response and how
they are sending this
information. They are sending
this information in this
particular format. Can I say
that this format is called as
query params? What are query
params? Query params are part of
your URL in which you send some
information in the form of key
value pairs to the server. Are
you guys able to get this point?
Are you guys able to get this
point? For example, now let's
forget flipkart.com let's make
things. And of course
flipkart.com is pretty complex,
so there were a lot of things
going on. But in the initials,
in the initials, let's say here,
if I say question mark name is
equals to Sanet and age is
equals to 25, right? If I press
enter, you can see it is still
getting message. Okay, why?
Because what URL you are hitting
home on that URL you are sending
this information. How to access
this information? You can say
request query, request dot
query. If I restart the server
and if I refresh, can you see
you are getting that same query
object key value pairs. So what
Express will do it is going to
convert this format key 1 value
1 and key 2 value 2 and key 3
value 3. In a JavaScript object
like fashion, which is going to
be super easy to use, are you
able to get this point drop a
quick yes or no in the chat. So
when you call/home, the URL is
going to be mapped from here
that you are calling slash home
after question mark. Whatever is
present is only going to be a
key value pair. And all of this
key value pair can be accessed
in the form of a JavaScript
object if you try to access
request query. So this is one
way in which the client can send
information to the server. Does
that point make sense? That's
called as query params. Make
sense everybody. Okay,
pushbaraj, let me explain. So
pushvaraj, we talked about
client server, right? We talked
about the client server
architecture. Yes or no? Yes. So
client has to send some
information to the server,
right? Now there are three ways
to send that information. One is
URL param, one is query param,
one is request body. We are
talking about query params.
First, what is query params? A
lot of times you will see this
kind of a structure in your
URLs. A lot of time you will see
that. I just showed that in
Flipkart. Can I say that in
Flipkart's URL also you were
able to see key equals to value,
key equals to value kind of
stuff. Yes or no. So that's
query params. How do you write
query params or how do you
access query params? Because
it's the part of the request
client is sending the data using
query params and what does
client sends? It sends the
request. So if you want to
access the query params, you can
access that in the request
query. Are you guys able to get
this point? Not generally used
Prakash, but you can still send
significant information. Like
you can see Flipkart was sending
significant information. Okay,
now in request query what will
happen is whatever you put after
a question mark, See there is a
question mark before question
mark. There is the whole URL
after question mark. You put key
equals to value and key equals
to value and key equals to value
and so on. And whatever this key
equals to value structure you
have, Express will automatically
convert that into a JavaScript
object and give you the access
inside request query. So that's
how you can access this
information send via query
params from the client inside
your server. If you want to
access that information, you can
access it using request query.
Does that answer your question?
Pushparaj yes, your front end is
going to modify all of this we
can expect that, okay, these
kind of query structures are
going to come up. So this is one
way, let's see one more way of
sending the data. Let's come
back to Flipkart. Can you see in
flipkart.com you see a slash
computers slash monitors. Do you
see this is also sending some
information? Like you, you are
trying to fetch computers and
specifically what what part of
computer you're trying to fetch
monitors from your servers. Can
I say that. That's it, but you
are sending some. Guys. Can you
see that? Flipkart.com let's say
if I go to something else, let's
say if I come back here and
let's say I select top
mirrorless cameras. This
particular banner I select see
cameras/DSLR mirrorless. You can
see some information is present
that we are now trying to fetch
cameras and specifically
mirrorless DSLR cameras. This
information is being sent to the
server. Can I say that and this
is not key value pair. Can I say
that this is not key value
pairs. This is not key value
pairs. Can I say that? Yes or
no, guys? Can I say this is not
key value pairs? So what is
this? This particular part is
called as URL params. This
particular part is called as URL
params. Okay, how URL params
looks like? So in URL params
there will be some constant
part. Let's say slash products.
And then let's say you want to
fetch the first product or you
want to fetch the second product
or third product or fourth
product, or fifth product or
sixth product. Something like
this, some particular product
you want to fetch. So this part
which is variable, this part
which is variable is going to be
your URL params. For example,
let's say I create app do post
request. You can also create a
post request, right? If I say
slash products/colon id. Okay,
request response return rest
JSON. Product ID is id. Okay,
now what is going on here? What
is going on here? Sor, do not
get confused. You are not
listening to me properly. I
already mentioned the
difference. I said this is key
value pair and I asked all of
you a question. Is this a key
value pair? Is this a key value
pair like slash cameras? Do you
see slash cameras as a key value
pair? Or let me go to book my
show. Let me go to book my show
and okay, not book my show. Book
my show is not loading. Say if I
go to hot star and dots are
opening. Yes. And inside hot
star. Okay, let's go to IMDb.
Okay, and let's say we select
this. Okay, do you see slash
list slash this particular
thing? Do you see it as a key
value pair? Saurabh, is it a key
value pair? No. So that's the
difference. If you want to send
a key value pair, that's query
params, right? This is not key
value pair. This is indeed part
of your URL route. This data is
part of your URL route. Can I
say that? Okay, so inside your
URLs, inside your URLs, inside
your URLs there will be some
part which will be static like
slash products. It is not going
to change. But after slash
products, let's say you say/2
23/cameras, anything that's
variable, right? So this colon
ID part, this colon ID part is
variable and products is static.
This colon ID part is your URL
params is your URL params and
overall these kind of routes are
called as dynamic routes. Like
you will see this word dynamic
routes a lot of times, right?
But this colon ID part is
variable. How can you access
this colon ID part? You can say
const PID is equals to request
params id if I print console log
request params here, right? And
let's return this pid, let's see
what happens. Okay, let's see
what happens if I restart. Okay,
now let's say instead of doing
slash home, let's say I go to
slash product slash cameras. Oh,
sorry, this is a I B a post make
a get request. Can you see
whatever I'm writing is coming
up here? Slash cameras. If I say
slash keyboards, Keyboards. Can
you see now keyboards is coming
up here. So what is going to
happen? What is happening here
inside your URL route? Products
part is constant, it's not
changing. But after products you
have something variable, right?
It is something user defined. It
is something defined on the
client side and if you see we
are able to access it on the
server side. How using request
params. Using request params. So
what request params will do is
request params will also give
you a JavaScript object in which
anything you put as a code colon
id for example, you put a colon
product underscore id for
example, you put it like this
product underscore id and let's
say you restart your server.
Let's close this window. If I
restart the server and I
refresh, can you see product ID
is now coming as keyboards. Can
I say that this is what URL
params is? Because now the
information is embedded in the
URL route, It is no more a key
value pair, it's embedded inside
the URL route. So whatever you
write by prepending a colon
becomes a URL param. Are you
guys able to get this point
right? For example, now it has
a/product ID/rating/ colon rate.
Okay if I do that, if I do that
and let's say here I access
product id. Okay and let's say
if I say rating is
request.passams.rate. okay if I
restart and if I say slash
keyboards/rating/4 can you see
what is coming up? Can you see
what is coming up? Products is
constant, rating is constant.
But this keyboards and phone 4
is variable. If I say 9, the
rating becomes 9. And all of
this is being handled by Express
JS. Yes Prashant, so what
Express JS does is it takes a
look at your route inside your
route. Wherever you have a
colon, wherever you have a colon
prepended, that much part of the
route is taken as a variable
part. That means it is going to
be user driven. Whatever user is
going to send here will be
accessible inside the request
params. Can you see request
params now has a product ID and
you can see here we had a colon
product ID and it has a rate.
You can see we had a colon rate.
There is nothing pro like
products and rating because
there is no colon mentioned
here. Hence it's a static part
of your URL. Can I say that? Can
we set the type of variable
part? Akash JavaScript map
typeset string typescript but
why we have two different things
params Query params Can't we do
the same thing? Samadhi I do not
know the root cause why people
have introduced two things
separately but I know the use
cases generally. If you go with
rest conventions then query
params contains things like
filtering objects. If you want
to filter some specific search
criteria, that's when you use
query params. URL params on the
other hand are more intended
towards showing the resource and
resource related data. For
example Product id, it's not a
filter but let's say price of a
product should start from 30 and
should go till 100 is a filter.
So this filter should go in
query params and product ID
should go inside your URL
params. Yes Pagination for
example which page you want to
be at if let's say there are yes
these kind of things, how to
decide which data should be sent
and I just answered that
question. Sagrika. How URL
connects to server? Keshav Were
you not present in the last two
three classes? We have already
talked about a Lot of things
there. During form submission
does form data automatically go
into query params? No. If I have
to answer your question as a yes
or no, then that's a no. Any
other questions? Guys? Now do
you understand URL params and
query params how they are
actually working? Do you
understand the difference?
Everybody understood the
difference. I'm open to more
questions. Like you are. You can
say that Angeline. Like for your
internal understanding. Yes.
Which length limit? The URL
length limit? I do not think
there is a like. I don't
remember any length limit. You
can google it but still you can
send significantly Good, good
amount of information in the URL
may be form data answer yes or
no. So I can do a yes or no
answer for you. You give me.
Guys, one thing please do not go
too much beyond what we are
discussing. Or smartest. There
will be a pre existent agreement
between the backend and the user
for how the user will be sending
that. Yes, Soheb, you are right.
So when you will be working as a
backend engineer generally what
happens is in you have to
prepare something called as a
design doc. In design doc what
you do is you mention all the
agreements like this is how the
URL structure will look like.
This kind of a data we will be
expecting in URL params. This
kind of data will be expecting
in query params. This kind of a
data we'll be expecting in
request body. This will be the
type of the request, this will
be the route of the request.
This will be the validation
expectations. All of that is
generally mentioned in design
documentation. This design
documentation is actually shared
with the front end engineers as
well and they have to actually
abide that. For example, when I
was working with like Google Pay
in Google Pay because Google Pay
depends a lot because I believe
everybody knows that apps like
Google Pay and PhonePay depends
on NPCI. That's a government
semi government organization.
Right? Right. So what NPCI used
to send us was kind of like a
design documentation. We used to
call it something called as a
tsd. TSD stands for technical
Specification doc. Tsd. Okay,
it's kind of like a design doc
only but it's what's the
difference between a design
documentation and a technical
specific edition document?
Design documentation contains
logics that how something is
working internally. Technical
specification document is kind
of like a subset of a design
document where you do not
mention how something is working
but you just mention the
agreements that how the URL
structure should look like. What
do you need to send? What do you
not need to send? All of that
things. Does that one make
sense? Right, so I'm not sure if
it is available open source,
upi, psd. One second, let me
check. Let me search it. Like
generally though our product
managers used to give it. I've
not never searched it openly.
Maybe you have to request it
from npci. But I just wanted to
show you if I can somehow get
access. Just a second, just a
second, let me check. Just a
second. Guys. I guess I might be
having it that made. Take it one
second. You can see API and
technical specification Doc,
right? So take this URL. I'm not
sure if it is like how they have
fetched it. You can see it's a
slightly bit blurred. If you
will go to view full document,
you might not be able to see
because they might ask you for
payment or login, but you can
try to login and everything. But
this kind of a technical
specification document NPCI used
to send us, right? One second,
one more second, just one more
second. One more thing, let me
check. Okay, I guess this one
is. Yeah, this one you can. You
guys can check. So let me share
it again the chat. Okay, so this
is kind of like a technical
specification document, right?
This document, this is very old,
although June 2016, this is
very, very old. Like you must
not have even registered to UPI
by that time. But you can see it
defines a lot of things. It
defines all the terminologies,
like what is meaning of
something. It doesn't define all
the algorithm logics. Like it
doesn't define the internal
logics, but it defines all the
interfaces. And you can see how
exactly a flow is working. You
initiate a device, you register
for payer, PSP pay PSP and PCI
registration, all of that. And
if I scroll down, you generally
get this kind of a thing if you
work with a government
organization and if you are
let's say working internally,
for example, let's say currently
I work with Bing Ads. So the
backend team and the front end
team sits together, defines all
the agreements and prepare a
document and then it is shared
within each other so you can
read about it. But yeah, this is
this kind of a documentation you
generally get because somebody
asked. Okay, so you can check it
out. Thanks to one of my friend
who is a product manager at
Phone Pay. He just shared it to
me in the class. So thanks to
him here App dot listen. Yeah,
it contains all of that logic
similar to how HTTP I would say
library, I would say module was
containing everything is
abstracted inside app. Listen.
Yes, Varun I can Maybe upload a
few lectures where I will talk
about where I can talk about how
you can design. But it should be
important I should cover that.
So Google Pay also faced
restriction in India by Airby.
Yes, we used to face a lot of
restrictions by RBI and we had
to abide that. Otherwise there
were repercussions. Hope like we
were able to do that mostly
things on the time. But in real
real world product will be
separate service or product is
param to homepage service. I
didn't get your questions. Yes,
like for our project I'll be
creating dedicating a whole
design document altogether for
you guys. No, Arif, I have to
talk about one more thing. Okay,
cool. Now the third type of data
that we are sending is called as
request body. Okay. So what is
request body? Now can you see in
URL params and query params
There is a problem. We will not
be able to send sensitive
information. Why anybody? Why we
cannot send sensitive
information in URL params and
query params. Because it will be
visible. Your history is
generally stored in your
browsers. So if browser somehow.
If hackers somehow get access to
your browsers, then they can
check the history and get all
the sensitive information.
Generally sensitive information
is not passed or sent through
URL params or query params. It
is generally sent through
request body. Okay. It is
generally sent through request
body. So in browsers you won't
be able to configure your
request body directly. So for
this kind of a purpose, you'll
be having Postman. Okay. Ria
will take a dedicated session on
Postman in which she will talk
about some interesting use cases
of Postman. How can you set
variables and everything as
well? But this is Postman. Okay.
In Postman like you can install
Postman. It's a interesting
tool. Okay. You can say it helps
you to actually make network
request without browser. Okay,
so for example, let's say if you
have a post request/data request
comma response and I want to
send some data inside this post
request, but I do not want to
send it. So let's say for the
timing, let's do rest JSON
message. Okay? Okay. I do not
want to send the data in the
URL. What I can do is. What I
can do is. Can you see there is
a option of body. Can you see
there's an option of body,
Right? What is this body? This
body is the body that we are
referring to. Request body. The
request body is the part of your
HTTP request object. It is not
not visible in the URL Hence it
is not cached or not stored in
your history. And if someone
intercepted your URL cannot get
this information. This request
body can contain data in
different different format. For
example, it can contain form
data. Form data like HTML form
data. It can contain data in raw
JSON format, XML format text
format. Right? It can contain
URL encoded format. You might be
thinking what is URL encoded?
Just give me five more minutes,
I'll tell you what is URL
encoded. Right? But you can see
body can contain data in
different different formats.
Okay, so for example, I want to
send JSON data. Okay, so let's
say this is how JSON data will
look like, right? So let's say
name. Let's say, let's write it
as email s@the latest.com
password 123456 okay, let's say
I want to send this information
to which URL? I want to send it
to localhost3000/data and it's a
post request. Okay, let's
restart our server. Okay, now
inside your app post, how can
you access this request or
request body? You can say
console log request body. Inside
request body, you have access to
what body is actually coming up.
Okay. You have access to what
body is actually coming up.
Okay, cool. So if I send this
request, if I send this request,
you can see I'm getting message.
Okay, looks good. But can you
see the request body is coming
as undefined here. The request
body is coming as undefined
here. Can I say that. The
request body is coming as
undefined and if you will check
the documentation of Express.
This specifically mentioned that
if you want to access request
body, you can do it by request
body. So what is the problem?
The problem is Request body can
come in different, different
formats. Which format do you
want to support? You need to
actually mention that. And what
will happen is let's say you
want to support raw JSON or you
want to support, let's say some
binary, you want to support
text. What, what will happen is
there are different, different
formats available that you can
send inside Request Body. How
will Express decide what format
do you want to support? So
Express actually gives you the
liberty to actually decide what
all formats do you want to
support? Whatever format do you
want to support? Express will
start accepting that and will
convert it to the relevant
format. JavaScript, I would say
compatible type. For example, if
it is a text, it will convert it
to a string. If it is a JSON, it
will convert it to an object.
How do you do that? So to do
that you need to use A
middleware, right? Because every
request is going to have the
request body. So for every
request you want to do that
conversion, right? So you need a
middleware. Now this middleware
you want to set for every
incoming request. Can I say
that? Because you want to access
Request Body in almost all of
the requests, so you want to set
this middleware in every
incoming request. Whenever you
have to set a middleware in
every incoming request, there is
a shorthand for that you can do
app use inside app. Use whatever
you mention, whatever function
you mention will be added as a
middleware to all of the
requests to whatever route the
request comes up. Are you guys
able to get this point? Okay,
let me repeat. So the problem
here is I want to access Request
Body. But you can see Request
Body is available in different,
different formats, right? Let's
say if you send a JSON,
JavaScript doesn't understand
JSON, so Express has to convert
it into a JavaScript object. If
you send a text, JavaScript
doesn't understand text, so
Express has to convert it to a
string and so on. So this
conversion Express has to
manually do. Right? Can I say
that? So in. So what Express
does is Express leaves this
decision on you that what all
format do you want to support?
In earlier days of Express, by
default Express was not able to
do this conversion. So Express
used to depend on something
called AS Body Parser. Earlier
days there was a package called
AS Body parser on which Express
used to depend. Like we had to
manually install Express Body
Parser internally. But now Body
parser comes installed with
Express. Let me show you. If you
expand Node modules, can you see
there is Body parser already
installed? Can you see that? So
now Body parser comes installed
with Express already. What Body
parser will do is Body parser
will act as a middleware. If it
will act as a middleware, means
it will be having access to your
request and response object. And
this middleware is going to
modify Your request objects JSON
data to a JavaScript compatible
object. And you want to set this
middleware to all of the
requests, right? Because in
majority of the requests you
will be required to access
Request Body. Can I say that?
And currently we are not able to
access Request Body. So if you
want to set this middleware
which will give us the access of
request Body in the form of
proper JavaScript types, you
need to register it for all the
routes. How do you do that? If
you want to register middleware
for all the routes, you can use
app dot use. Okay, so I'll say
const Body parser is equals to
require Body parser, it is now
automatically installed. You do
not have to specifically install
it. Body parcel. Okay? Yes, app.
Because you are registering app.
Use before M1. See, M1
registration is happening here
and you are doing app use before
that. So the sequence matters.
Okay, so here, now here, what
you'll say, you'll say body
parser JSON. The moment you do
Body parser JSON, what will
happen is every incoming request
which will be having a JSON
request Body will be now
compatible inside Express and
Express will be able to convert
it into a JavaScript object.
Let's restart our server and try
it again. So if I restart send
the request, can you see we are
able to access request body. Yes
or no? Can you see that? Yes.
Now in the latest version of
Express, Body parser
automatically comes with
Express. Okay, now let's say
instead of JSON I want to send a
text. Let's say I want to send a
text. Hello. Let's see if hello
is being sent or not. If I send
it, can you see hello is not
accessed? Can you see that? Why?
Because I have only given
support of JSON, yes or no? If
you want to give support of
text, as far as I remember, you
need to do body parser dot text.
Okay, if I restart and send it,
can you see? Now hello is being
accessed, yes or no. So what's
happening? Previously we were
not able to access Request Body.
Previously we were not able to
access request Body. Why is
that? Because there can be
different, different types of
request body, text, JSON, URL,
encoded data, form data,
different, different types. Now
Express doesn't know what you
need. So Express leaves this
task up to you as a developer
that you decide what all types
should be supported and whatever
type you will support, Express
will take that type and convert
it to a relevant JavaScript
type. Are you able to get this
point? For example, if you will
send JSON, it will convert it to
a JavaScript object. If you will
send text, it will convert it to
a string. Make sense? So that's
why. That's why Express leaves
this information on to you.
Okay, now how do you do that?
There is a package called as
Body Parser that already comes
installed with Express. Body
Parser exposes a bunch of
middlewares that you need to
attach with all the request. If
you want to make sure that all
the request is able to access
request body. But don't you
think in a very big application
you'll be having maybe 500, 600
routes? You cannot go to every
route and add a new middleware,
right? So you want to add this
middleware to all the given
routes that we have. If you want
to add this middleware to all
the given routes that we have,
you can use app use whatever
function you mention in app use
as a middleware. This middleware
will be accessible to every
particular round. So it will be
available here also. It will be
available here also. It will be
available here also. Are you
able to get this point?
Everybody drop a quick in the
chat. You do not need to convert
request param or you sorry query
param or URL param because they
automatically comes in the
required format. This for
engine. Yes. In whatever route
you are going to send the data,
it will be accessible inside
request body. Okay, cool. Now
just a second. Just one second.
Okay, now there is one more type
URL form www Form URL encoded.
Can you see this? Let's try to
send request body in this
format. Let's say email s@the
rate b dot com. Okay, if I send
it, can you see again it is not
being accessed. So what do you
need to do? You need to do
app.use body parser. URL
encoded. If you do that and send
it again, can you see now it is
being accessed. So what is this?
URL encoded data. So generally
you will see, for example, do
you see this?% 2C% 2C percent
5D. All of this because I
registered, right? Body parser
URL encoded. Now it is taking
URL encoded data as well. And
I'm now I'm telling what is URL
encoded data. So guys, a lot of
time in the URLs you must have
seen percent 2C percent 5B
percent 5D. Yes or no, have you
seen this in URLs? So in the
URLs if you put special
characters like comma or space,
then there is a chance that your
browser will not be able to
directly read it. So what you
have to do is you have to
convert your URL in a URL
encoded format. So what URL
encoded format is? URL encoding
converts non ASCII characters
into a format that can be
transmitted over the Internet,
right? For example, a plus sign
is generally replaced by a
percent 20 because plus is not a
part of ASCII. So your browser
URL doesn't support anything
apart from Sky. So what will
happen is if you want to send a
plus instead of sending a plus,
you will send percent 20. That's
what URL encoded format is. Are
you able to get this point? Yes,
Arif in the most compatible
format. For example URL encoded
format is converted into JS
object. Right? Text is converted
into a string, JSON is converted
into JS object and so on. So
Express is smart enough and body
parser is smart enough. It will
convert it into the respective
most compatible format. Does
that one make sense? And can you
see one more use case of URL?
Sorry middlewares. Can you guys
see one more use case of
middlewares? Yes, it returns a
middleware function. I guess. JS
object is something that is
understandable by JavaScript.
JSON is not part of JS. JSON is
just a message structure which
looks similar to a JavaScript
object but has nothing to do
with JavaScript. Make sense
guys? Yes, they can handle tasks
very easily. Form data is what
you send from HTML. Multi part
form data contains files and
everything as well. Data
conversion, slide formatting,
middle various. Yes, that is
also one more use case of
middlewares. Can I write custom
function middlewares? Prashant,
what do you think? M1 and M2 is.
Isn't that custom? Can we also
define middlewares for specific
URLs? For example all the
endpoints with slash users. Yes,
Agrica, you will be able to do
that in next few classes we will
modify the structure of our
application and the next class
is on the topic structuring your
app, structuring the folder,
setting up the folder structure.
There we will understand how can
you do that? Yes Prashant, you
can do that there as well. What
if someone want to send one file
within which format we have to
send? Read about multipart
forms. Arun Rajesh, how about
you try that? Yes Swamidit, I am
talking but maybe some Internet
issue on your side. Yes, some
Internet issue on your side.
Cool. Are you guys able to
understand whatever we have
talked about today that what
Express brings onto the plate
what are middlewares? We had a
lot of discussion about
middlewares. We talked about
every use case, how URL params
are used, how query params are
used, where request body is
used. What is the meaning of URL
encoded text URL encoded Sorry
body parser JSON text URL
encoded Most of the online
lectures you will see people
just mentioning that if you want
to access request body, write
these two lines. Write these
three lines and you'll be able
to access request body. Very
less people understand. Why do
you have to write these three
lines? Okay. And why this comes
into the picture. Most of the
people don't even use the dot
text because they don't know
about it it because if you go to
the express documentation they
just mention JSON and dot URL
encoded so people think these
are the only two types to
support. But you can support
more types as well. Okay, if you
have added middle variations can
we have a route to avoid a
specific or two I guess app use
register to all the particular
routes. In the next class I will
talk about something called as
Express Router in which you can
group a specific set of routers
and then on that you can set a
middleware on all of that group
instead of every single router.
So we'll talk about Express
Router that will help us
understand things a bit more
better. Yes Darshan, if not
added body parser then how
return error messages to the
client. You can just check if
you are like this response
object in the next class.
Prashant, when we'll structure
our application folders then you
will see we will be using this
response JSON only to send the
error messages to the user. Can
you drop a message to me on
discord on on the general group
rest of the people and and I
will be able to help you.
Product service. So I would say
stay there. Okay cool. So that
was it for this particular
class. I believe you got a in I
would say good start with
Express. We now know what is
Express and from the next class
what we will be able to do. We
will be able to connect
everything from the first class.
Remember the first class of mvc?
Remember the first class of MVC
where we talked about validator
layer, controller layer, service
layer, repository layer, all of
that thing. That's what we are
going to do next. We'll start
with preparation of routing
layer. We'll prepare routing
layer using Express router. We
will see the use case of
routers. We'll talk a few things
around APIs and we'll set up the
folder structure. It might take
us one or two classes to set up
the whole folder structure. To
get the understanding of the
folder structure and set up our
first set of rest APIs. Post
that we can actually start
contributing all of this
knowledge inside our product. I
would say project and while
doing the project only we will
be actually able to see the
microservices picture. Thanks
Majesty. Thank you for. Thank
you for that Kunal. I will be
telling that you next week. We
have finalized that and it is
going to be very interesting.
Don't worry. I have made sure
that it is complex enough that
you find a bunch of things very
challenging. So don't worry.
We'll. We'll discuss about it.
Make sense. Cool. That being
said, let's wrap this particular
session here. We are going to
meet soon in the next session
where we will continue our
discussion on Express Express
Router and setting up our folder
structure. We'll see how things
connect with the modern MVC
architecture that we talked
about then. Take care guys. Bye
bye. Have a lovely week ahead
and keep COD.


const express = require('express');
const bodyParser = require('body-parser');
// When we call the function express we create a new express server object

const app = express(); // http server object

const PORT = 3000;


app.use(bodyParser.json()); 
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

// express middleware
function m1(req, res, next) { // next => m2
    console.log('Inside middleware m1');
    // return res.json({msg: 'not ok'})
    // m2(req, res);
    console.log("Req.user inside m1", req.user); // undefined

    req.user = {id: 1, email: 's@s.com'}
    next();

    console.log("after calling next in m1")
}

function m2(req, res, next) { // next => cb func
    console.log('Inside middleware m2');
    console.log("Req.user inside m2", req.user); // {...}

    next();

    console.log("after calling next in m2")

}

app.get('/home', m1, m2, (req, res) => {
    // everytime someone calls the /home route, this callback will be called
    console.log("/home called");

    console.log(req.url, req.query);

    return res.json({msg: 'ok'}); // here we are passing a js object
});

app.get('/products/:product_id/rating/:rate', (req, res) => {
    // :id part is variable and products is static
    // :id part is your url params and overall these kind of routes are called as dynammic routes
    console.log(req.params);
    const pid = req.params.product_id;
    return res.json({productId: pid, rating: req.params.rate});
});

app.post('/data', (req, res) =>{

    console.log(req.body);
    
    return res.json({msg: 'ok'});
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
});


// how can the client send custom data to the server
/**
 * 1. URL Params -- /products/7
 * 2. Query Params -- ?key1=value1&key2=value2&key3=value3
 * 3. Request Body
 * 
 */