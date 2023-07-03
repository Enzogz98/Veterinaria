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
 create table perfil(
	id int primary key auto_increment,
    id_user int, 
    img varchar(2000),
    notas varchar(500),
    colorHeader int,
    background int,
    ligthDark bool
    
 );

insert into usuario (nombre,apellido,email,nick,pass,id_rol,estado)
 values ("Diego","Flores","floresdiego2015@gmail.com","chew","123456",1,true);
 insert into usuario (nombre,apellido,email,nick,pass,id_rol,estado)
 values ("Enzo","Gonzalez","enzo@mascapi.com","Enzo2023","12345",1,true);

 insert into user_rol(nombreRol,id_user,permisos)
 values ('Administrador',1,1);
 insert into user_rol(nombreRol,id_user,permisos)
 values ('Administrador',2,1);
 
 insert into perfil(id_user,img,notas,colorHeader,background,ligthDark)
 values (1,"https://i.pinimg.com/originals/6a/5f/7f/6a5f7f9636c3412617756297fa60b78c.jpg",
			"Escribe aqui tu nota ! :)",1,1,false);
 
insert into perfil(id_user,img,notas,colorHeader,background,ligthDark)
 values (2,"https://tn.com.ar/resizer/l0aYgsZDf-mJXrEnI8On9APaDMg=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/Z5BNARUTRZAJVMUL2QSP45TTMQ.jpg",
			"Enzo escribe tu nota aqui tu nota ! :)",1,1,false);
     
 create table tareas (
	id int primary key auto_increment,
    idUser int,
	tarea varchar(100),
    descripcion varchar(200),
    fecha_inicio varchar(50),
    fecha_finalizacion varchar(50) null,
    prioridad int
 );
 insert into tareas (idUser, tarea,descripcion,fecha_inicio,prioridad)
	values (1,"tarea 1","esto es una descripcion de ejemplo1","04/07/2023 19:00 hs",1);
    insert into tareas (idUser, tarea,descripcion,fecha_inicio,prioridad)
	values (1,"tarea 2","esto es una descripcion de ejemplo2","04/07/2023 19:00 hs",2);
    insert into tareas (idUser, tarea,descripcion,fecha_inicio,prioridad)
	values (1,"tarea 3","esto es una descripcion de ejemplo3","04/07/2023 19:00 hs",3);
     insert into tareas (idUser, tarea,descripcion,fecha_inicio,prioridad)
	values (2,"tarea 1","esto es una descripcion de ejemplo4","04/07/2023 19:00 hs",1);
    insert into tareas (idUser, tarea,descripcion,fecha_inicio,prioridad)
	values (2,"tarea 2","esto es una descripcion de ejemplo5","04/07/2023 19:00 hs",2);
    insert into tareas (idUser, tarea,descripcion,fecha_inicio,prioridad)
	values (2,"tarea 3","esto es una descripcion de ejemplo6","04/07/2023 19:00 hs",3);
 

    
     
     
     
  -- select * from usuario where ((nick ="Enzo202") or (email="floresdiego2015@gmail.com")) and  pass= '123456'  ;      
 
 
 
 /* NOTAS Diego
 
	insert into tareas (idUser, tarea,descripcion,fecha_inicio,prioridad)
	values (1,"tarea 2","esto es una descripcion de ejemplo","04/07/2023 19:00 hs",1);
    select * from tareas where idUser=2;
    
    update tareas 
    set fecha_finalizacion="02/07/2023 18:00 hs"
    where id=1;
    (?,?,?,?,?);
 
	update perfil 
    set background=2,
    ligthDark=true
    where id=2;
	select img,notas,colorHeader,background,ligthDark from perfil
    where id_user=1;
	select * from user_rol;
	select * from usuario
		where ((nick or email) ="chew") and pass="123456";
     update usuario
     set pass="12345"
     where id=2;
 */
 
 SELECT * FROM tareas WHERE idUser=1;
 
 CREATE TABLE paciente(
 id int primary key auto_increment,
 nomPac varchar(50),
 id_dueño int,
 especie varchar(50),
 raza varchar(50),
 edad varchar(50),
 estado bool);
 
 