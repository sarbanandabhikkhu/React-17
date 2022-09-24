# React 17 Startup Code

- SystemJS
- NodeJS

# Content

- [Create Brand new Local Git Repo](#create-brand-new-local-git-repository)

```sh
https://unpkg.com/package@latest/
//or
https://unpkg.com/package@17.0.2/
```

### Create Brand new Local Git Repository

```sh
cd /sdcard/directory
mkdir my-app
cd my-app

git config --global --add safe.directory /storage/emulated/0/directory/my-app
git config --global user.email "someone@gmail.com"
git config --global user.name "someone"
git config --global init.defaultBranch main

git touch .gitignore
git touch .README.md

git add .
git commit -m "initial commit"
git branch -M mains
git remote add origin https://github.com/somone/my-app.git
git push -u origin main

git branch
git branch development
git checkout development
git add .
git commit -m "development"
git push origin developmentcommit"
```
