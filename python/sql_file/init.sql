SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS critique;
DROP TABLE IF EXISTS attraction;
DROP TABLE IF EXISTS users;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE attraction (
    attraction_id int auto_increment,
    primary key(attraction_id),
    nom varchar(255) not null,
    description varchar(255) not null,
    difficulte int not null check(difficulte between 0 and 5),
    visible bool default true
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id int auto_increment,
    primary key(users_id),
    name varchar(255) not null,
    password varchar(255) not null
);

CREATE TABLE critique (
    critique_id int auto_increment,
    primary key(critique_id),
    attraction_id int,
    name varchar(255) not null,
    first_name varchar(255) not null,
    text varchar(255) not null,
    mark int not null check(mark between 0 and 5),
    isAnonym bool default false
);