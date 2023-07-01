drop database if exists veterinariaBD;
create database veterinariaBD;
use veterinariaBD;

create table usuario(
id int primary key auto_increment,
nombre varchar(50),
apellido varchar(50),
email varchar(50),
nick  varchar(50) null,
pass varchar(50),
id_rol int ,
estado boolean
);

create table user_rol (
id int primary key auto_increment,
nombreRol varchar(30),
id_user int,
permisos int
);

insert into usuario (nombre,apellido,email,nick,pass,id_rol,estado)
 values ("Diego","Flores","floresdiego2015@gmail.com","chew","123456",1,true);
 
 select * from usuario
 where ((nick or email) ="chew") and pass="123456";


