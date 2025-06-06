## install the packages
apt update
apt upgrade
apt install nodejs npm nginx

## move the services file
cp scottynet-node.service /etc/systemd/system
cp defualt /etc/nginx/sites-available