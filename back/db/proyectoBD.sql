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
estado boolean

);

alter table usuario
add column nombreRol varchar(50),
add column permisos int;


 create table perfil(
	id int primary key auto_increment,
    id_user int, 
    img varchar(2000),
    notas varchar(500),
    colorHeader int,
    background int,
    ligthDark bool
    
 );

insert into usuario (nombre,apellido,email,nick,pass,estado,nombreRol,permisos)
 values ("Diego","Flores","floresdiego2015@gmail.com","chew","123456",true,'Administrador',1);
 insert into usuario (nombre,apellido,email,nick,pass,estado,nombreRol,permisos)
 values ("Enzo","Gonzalez","enzo@mascapi.com","Enzo2023","12345",true,'Administrador',1);

 
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
 

    
     DELIMITER //
     CREATE PROCEDURE pa_verUsuario()
     BEGIN
     SELECT * FROM usuario;
     END //
     DELIMITER  ;
     
     select * from usuario;
     
     
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
 dni_duenio int,
 especie varchar(50),
 raza varchar(50),
 edad varchar(50),
 estado bool);
 
 create table cliente(
 id int primary key auto_increment,
 nombre varchar(50),
 apellido varchar (50),
 direccion varchar(70),
 dni int,
 telefono varchar(50),
 cuit varchar(50) null
 );
 select*from cliente;
 select*from paciente;
 
 insert into cliente (nombre,apellido,direccion,dni,telefono,cuit) values 
 ('Juan','Sotelo','San Martin 500',34123090,'3814564544','20-34123090-1'),
 ('Dario','Benedetto','Monteagudo 1100',24333678,'3814421264','20-24333678-7'),
 ('Emiliano','Martinez','Ayacucho 231',19345123,'3813768945','22-19345123-7'),
 ('Lionel','Messi','Jujuy 4000',22987654,'3816428931','20-22987654-5'),
 ('Ricardo','Arjona','Chacabuco 120',18099122,'3814762953','20-18099122-2'),
 ('Emanuel','Noir','Rivadavia 500',25186239,'3813057929','20-25186239-1'),
 ('Walter','Salinas', 'España 200',30193759,'3815195349','21-30193759-3'),
 ('Alvaro','Albornoz','Guemes 1200',39478090,'3816821901','20-39478090-2'),
 ('Nelson','Lobo','Famailla - Famailla',40532283,'3813438063','20-40532283-1'),
 ('Diego','Flores','Amador Lucero 500',38340246,'3816155136','20-38340246-9'),
 ('Enzo','Gonzalez','Pje Williams 2622',41772351,'3814563507','20-41772351-0');
 insert into paciente (nomPac,dni_duenio,especie,raza,edad,estado) values
('Rufo',34123090,'Canino','Pitbull','2',TRUE),
('Pio',24333678,'Ave','Pollo',1,FALSE),
('Hulk',22987654,'Canino','Dogo de Burdeo','3',TRUE),
('Elotro',34123090,'Ave','Tordo','1',FALSE),
('Lobito',40532283,'Canino','Lobo Siberiano','2',TRUE),
('Pipi',25186239,'Ave','Perico','1',TRUE),
('Michifus',30193759,'Felino','Persa','3',TRUE),
('Lula',39478090,'Canino','Caniche','4',TRUE),
('Scooby',19345123,'Canino','Gran Danés','5',TRUE);

 
select A.id,A.nomPac ,A.especie,A.raza,A.edad,A.estado,B.nombre from paciente A
inner join cliente B on A.dni_duenio=B.dni;

select A.id,A.nomPac,A.especie,A.raza,A.edad,A.estado,concat(B.apellido," ",B.nombre) as cliente,B.dni as dniCliente from 
paciente A 
join cliente B on A.dni_duenio=B.dni;

select A.id,A.nomPac,A.especie,A.raza,A.edad,A.estado,concat(B.apellido," ",B.nombre) as cliente,B.dni as dniCliente from 
paciente A 
join cliente B on A.dni_duenio=B.dni
where (A.nomPac like "ap%")
order by id asc;

	



 
 UPDATE usuario SET nombre ="alvaro", apellido="albornoz",email="alvarito+kpito",nick="lloveratrolo",pass="1234567",estado=1,nombreRol="ESCLAVO",permisos=2 WHERE id=4;
 DELETE FROM usuario WHERE id =4;
 
 CREATE TABLE turnos(
 id int primary key auto_increment,
 idPac int,
 dniCliente int,
 observaciones varchar(250),
 fecha varchar(50),
 idVet int,
 tipo varchar(50)
 );
 
 insert into turnos (idPac, dniCliente, observaciones, fecha, idVet, tipo)
 values (1, 38340246, "Perrito con malestar estomacal", "05-07-2023 1:26", 1, "consulta"); 
 
 
 CREATE TABLE veterinario(
 id int primary key auto_increment,
 nombre varchar(50),
 apellido varchar(50),
 dni int,
 matricula int,
 especialidad varchar(50),
 horario varchar(150),
 telefono varchar(50)
 );
 
 