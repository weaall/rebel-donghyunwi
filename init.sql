ALTER USER 'mysql'@'%' IDENTIFIED WITH mysql_native_password BY 'mysql';
FLUSH PRIVILEGES;

CREATE USER 'appuser'@'%' IDENTIFIED BY 'apppassword';
GRANT ALL PRIVILEGES ON mysql.* TO 'appuser'@'%';
FLUSH PRIVILEGES; 