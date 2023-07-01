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

 insert into user_rol(nombreRol,id_user,permisos)
 values ('Administrador',1,1);

 
 create table perfil(
	id int primary key auto_increment,
    id_user int, 
    img varchar(2000),
    notas varchar(500),
    colorHeader int,
    background int,
    ligthDark bool
    
 );
 
 insert into perfil(id_user,img,notas,colorHeader,background,ligthDark)
 values (1,"https://i.pinimg.com/originals/6a/5f/7f/6a5f7f9636c3412617756297fa60b78c.jpg",
			"Escribe aqui tu nota ! :)",1,1,false);
 
 
 /* NOTAS Diego
	update usuario 
    set estado=true
    where id=1;
	select img,notas,colorHeader,background,ligthDark from perfil
    where id_user=1;
	select * from user_rol;
	select * from usuario
		where ((nick or email) ="chew") and pass="123456";
 */
