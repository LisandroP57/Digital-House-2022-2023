DROP DATABASE  IF exists notasdetexto;
CREATE DATABASE notasdetexto;
USE notasdetexto;

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
 );

INSERT INTO categories VALUES
(1, 'Filosofia'),
(2, 'Matematicas'),
(3, 'Psicologia'),
(4, 'Bioquimica'),
(5, 'Anatomia'),
(6, 'Gramatica'),
(7, 'Algebra'),
(8, 'Programacion'),
(9, 'Biologia'),
(10, 'Historia');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO users VALUES
(1, 'usuario1', 'usuario1@gmail.com'),
(2, 'usuario2', 'usuario2@gmail.com'),
(3, 'usuario3','usuario3@gmail.com'),
(4, 'usuario4','usuario4@gmail.com'),
(5, 'usuario5','usuario5@gmail.com'),
(6, 'usuario6','usuario6@gmail.com'),
(7, 'usuario7','usuario7@gmail.com'),
(8, 'usuario8','usuario8@gmail.com'),
(9, 'usuario9','usuario9@gmail.com'),
(10, 'usuario10','usuario10@gmail.com');

DROP TABLE IF EXISTS `notes`;
CREATE TABLE `notes` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `category_id` int(10) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `destroy_note` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
  );
 
 INSERT INTO notes VALUES
 (1, 5, 4,'Examen Oral','descripcion',1,NULL,NULL),
 (2, 4, 3,'Examen Teorico','descripcion',0,NULL,NULL),
 (3, 1, 5,'Practica integradora','descripcion',0,NULL,NULL),
 (4, 8, 7,'Examen integrador','descripcion',0,NULL,NULL),
 (5, 7, 7,'Examen','descripcion',1,NULL,NULL),
 (6, 6, 2,'Practica','descripcion',0,NULL,NULL),
 (7, 9, 1,'Examen','descripcion',0,NULL,NULL),
 (8, 10, 6,'Examen','descripcion',1,NULL,NULL),
 (9, 2, 4,'Clase','descripcion',0,NULL,NULL),
(10, 3, 10,'Receso','descripcion',1,NULL,NULL);