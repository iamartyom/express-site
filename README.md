# How to deploy this site on DigitalOcean.com?

### 1 step

Create Ubuntu droplet.

### 2 step

Install nodejs, npm and nginx.

```
sudo apt-get update
```

nodejs:
```
sudo apt-get install nodejs
sudo apt-get install nodejs-legacy
```

npm:
```
sudo apt-get install npm
```

nginx:
```
sudo apt-get install nginx
```

### 3 step

Clone app

Use this commands:
```
cd /var/www/
git clone https://github.com/temagr/express-site.git
cd express-site/
npm install
```

### 4 step

Configure nginx:

Need change file which located path ```/etc/nginx/sites-enabled/default```

Replace the contents with the following:
```
server {
	listen 80;

	location ~* ^.+\.(jpg|jpeg|gif|png|ico|css|zip|tgz|gz|rar|bz2|pdf|txt|tar|wav|bmp|rtf|js|flv|swf|html|htm)$ {
        	root   /var/www/express-site/public/;
		expires 24h;
    	}

	location / {
    # Use ip address server and port which listen node
		proxy_pass http://159.89.14.77:3000/; # Change this ip
	}
}
```

After restart Nginx:

```
sudo service nginx restart
```

### 5 step

Start site:

```
cd /var/www/express-site/
npm start
```
