CREATE DATABASE `bbl` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

use bbl

CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(60) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
   `fname` VARCHAR(20) NULL,
 `lname` VARCHAR(20)  NULL,
  `token` VARCHAR(36) NULL,
  PRIMARY KEY (`id`, `email`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
  

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `authenticate`(IN _username CHAR(60), IN _password varchar(20))
BEGIN
	set @authenticated = exists (
		SELECT *
		FROM users u
        WHERE u.email = _username and u.password = _password
	);
    
	if  @authenticated=1 then
		select true as 'authenticated';
	else 
		select false as  'authenticated';
   end if;

END$$
DELIMITER ;
  
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `user_signup`(IN _username CHAR(60), IN _password varchar(20), IN _fname varchar(20), IN _lname varchar(20))
BEGIN
	-- check if user exists 
	set @user_exists = exists (
		SELECT *
		FROM users u
        WHERE u.email = _username
	);
    
	-- check if user exists, then return
	if  @user_exists=1 then
		select false as 'created' ,  true as 'exists';
	else 
		-- insert record into user table
        insert into users (email, password, fname, lname) values (_username, _password, fname, lname);
		select true as 'created' ,  false as 'exists';
   end if;

END$$
DELIMITER ;
