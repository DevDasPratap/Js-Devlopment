open file: vim/vim filename.txt
edit mode: type i for insert mode
close esc then :q (without change any value)
close esc then :q! (you change value but you won't save file you stay as it is)
save and close: esc then :wq ()

l: move right
h: move left
j: move down
k: move up
delete line: normal mode without insert mode type: dd

gg: in nomarl mode it will make the cursor go on the first line
G: in nomarl mode it will make the cursor go on the last line

yw: it copied one word in normal
yy: it copied hole line in normal
p: paste in normal

search and replace-> :%s/text /replacetext

text hightlight: goto vimrc => vim ~/.vimrc

example .vimrc file:
:syntax on
set number
set autoindent
filetype plugin indent on
set tabstop=4 softtabstop=4
set shiftwidth=4
:se mouse+=a
colorscheme murphy


tail -n 3 filename.txt: last 3 line
cat: view file data

piping
ls | grep javascript (ls result pass to after pipe command like greap) grep - substring search
ps aux: all process listested
ps aux | grep mysql 

Dumping data and boolean logics with commands
ls > logs.txt
pwd > text.txt

ls >> text.txt

run any file

cp: copy file
mv: move file

Zipping and creating archives
tar -cf archive.zip text.txt anotherfule.txt
tar -xvzf archive.zip (show content inside archive)
tar xf archive.zip -C extracts
ls -lh