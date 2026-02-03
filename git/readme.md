git --version
git init

git status
git status -s
#  ? = Untracked
#  A= Added
#  M=Modified

git diff
git diff --stat
git diff --name-only
git diff --color-words
git difftool

git commit
git commit -m 'message'
git commit -a -m 'message'
git commit -amend

find . -name "concept.js"

git log
git log -p -2
git log --stat
git log --pretty=online
git log --graph

git reset
git reset --soft
git reset --hard
git restore
git restore --staged

# accidently deleted a branch? type git reflog and watch your history appear
git reflog
# want to work on 2 git branch same without switch branch
git worktree add
git worktree remove branchname


git fsck
git fsck --lost-found

