#Git Commands

git init - Create a new git repo
git status - View the changes to your area
git add - Add files to staging area
git commit - Create a new commit with files from staging area
git log - View recent commits

Setting ssl
ls -a ~/.ssh - Check ssh
ssh-keygon -t rsa -b 4096 -C "siurilove@gmail.com" - Create ssh (default name(id_rsa) and no passowrd)
eval "$(ssh-agent -s)"  - Check agent
ssh-add ~/.ssh/id_rsa   - Add key

pbcopy < ~/.ssh/id_rsa.pub  copy key to clip board

https://github.com/settings/keys  - Add pasted key

ssh -T git@github.com  - Check connecting...


git push heroku master -- connct to heroku
heroku open