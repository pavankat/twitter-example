### Schema

CREATE DATABASE twitter_db;
USE twitter_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE tweets
(
	id int NOT NULL AUTO_INCREMENT,
	tweet varchar(150) NOT NULL,
	user_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id)
);




