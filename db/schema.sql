### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	-- for heroku new jawsdb, local was fixed in seeds.sql
	createdAt DATETIME NOT NULL,
	updatedAt DATETIME NOT NULL,
	PRIMARY KEY (id)
);
