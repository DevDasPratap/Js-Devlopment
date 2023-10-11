/*
URL: https://www.google.com/search?q=monkey

https: Protocol
wwww: Subdomain
google: Domain
com: Domain extention(top level)
search: Path
?q=monkey: Query parameter

DNS: Domain name system

🖥 Server <-------> Client 📱
 Here(172.217.14.238)
 Where is(www.google.com)

nslookup google.com

Result

Server:         192.168.0.1
Address:        192.168.0.1#53

Non-authoritative answer:
Name:   google.com
Address: 142.251.42.110


nslookup google.in
Server:         192.168.0.1
Address:        192.168.0.1#53

Non-authoritative answer:
Name:   google.in
Address: 142.250.192.100

IP Address
IPv4 - 64bit, IPv6 - 128bit

interminal

type-> nslookup          
> google.com
Server:         192.168.0.1
Address:        192.168.0.1#53

Non-authoritative answer:
Name:   google.com
Address: 142.251.42.110
> set query=AAAA
> google.com
Server:         192.168.0.1
Address:        192.168.0.1#53

Non-authoritative answer:
google.com      has AAAA address 2404:6800:4009:832::200e

Authoritative answers can be found from:
google.com      nameserver = ns3.google.com.
google.com      nameserver = ns1.google.com.
google.com      nameserver = ns2.google.com.
google.com      nameserver = ns4.google.com.
ns1.google.com  internet address = 216.239.32.10
ns2.google.com  internet address = 216.239.34.10
ns4.google.com  internet address = 216.239.38.10
ns3.google.com  internet address = 216.239.36.10
ns1.google.com  has AAAA address 2001:4860:4802:32::a
ns2.google.com  has AAAA address 2001:4860:4802:34::a
ns4.google.com  has AAAA address 2001:4860:4802:38::a
ns3.google.com  has AAAA address 2001:4860:4802:36::a

Network Port
Virtual port -> 0 to 65,535(16bits)

Bring it all together
https://www.google.com/search?q=monkey
⬇️
1.DNS: where is google.com
⬇️
2.it's at: 172.217.14.238
⬇️
3.Http request to known port 80
⬇️
http://172.217.14.238:80



*/