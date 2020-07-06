DROP DATABASE IF EXISTS burguers_db;


CREATE DATABASE burguers_db;
USE burguers_db;

CREATE TABLE burguer
(
	id int NOT NULL AUTO_INCREMENT,
	burguer_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
