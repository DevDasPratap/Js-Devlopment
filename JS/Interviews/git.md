**Git Interview Questions with Short Answers**

### **General Git Questions (For All Developers)**
1. **What is Git, and how is it different from GitHub?**  
   - Git is a distributed version control system, while GitHub is a cloud-based hosting service for Git repositories.

2. **Explain the difference between Git and SVN.**  
   - Git is distributed, allowing local commits, while SVN is centralized.

3. **What is the difference between `git pull` and `git fetch`?**  
   - `git pull` fetches and merges changes, while `git fetch` only downloads changes.

4. **How do you resolve merge conflicts in Git?**  
   - Identify conflicts using `git status`, edit the files, and commit the resolved version.

5. **Explain the difference between `git merge` and `git rebase`.**  
   - `git merge` combines branches with a merge commit; `git rebase` applies commits on top of another branch.

6. **What is a detached HEAD state in Git?**  
   - When Git HEAD is pointing to a commit instead of a branch.

7. **How do you revert a commit in Git?**  
   - Use `git revert <commit-hash>` to create a new commit that undoes the changes.

8. **What is Git stash, and how do you use it?**  
   - Temporarily saves changes using `git stash` and restores them with `git stash pop`.

9. **How do you delete a local/remote Git branch?**  
   - Local: `git branch -d <branch>`
   - Remote: `git push origin --delete <branch>`

10. **How do you squash multiple commits into one?**  
    - Use `git rebase -i HEAD~n` and mark commits as `squash`.

### **Git Questions for Backend Developers**
1. **How can you ensure code consistency when working in a team using Git?**  
   - Use feature branches, enforce code reviews, and set up CI/CD.

2. **How do you use Git tags, and why are they useful?**  
   - Tags mark specific commits (`git tag v1.0`) for versioning and releases.

3. **Explain `git cherry-pick` and its use case.**  
   - It applies a specific commit from one branch to another.

4. **How do you manage feature branches in a backend project?**  
   - Follow Gitflow: use `develop`, `feature/*`, `release/*`, and `hotfix/*` branches.

5. **What is a Git submodule?**  
   - A repository inside another repository (`git submodule add <repo-url>`).

### **Git Questions for Frontend Developers**
1. **How do you manage CSS/JavaScript versioning with Git?**  
   - Use Git tags and semantic versioning.

2. **How do you track large media assets in Git?**  
   - Use Git LFS (Large File Storage).

3. **How do you rollback UI changes using Git?**  
   - Use `git revert <commit-hash>` or `git reset`.

4. **How do you set up Git in a monorepo frontend project?**  
   - Use tools like Nx or Lerna to manage multiple packages.

### **Git Questions for Full-Stack Developers**
1. **How do you manage separate frontend and backend repositories?**  
   - Use different repositories and link them in CI/CD pipelines.

2. **What is Gitflow, and how would you implement it?**  
   - A workflow with branches like `main`, `develop`, `feature`, `hotfix`.

3. **How do you handle multiple environments (dev, staging, production) in Git?**  
   - Use separate branches or environment configuration files.

4. **How do you automate deployment using Git hooks?**  
   - Use post-commit or post-receive hooks to trigger deployment scripts.

