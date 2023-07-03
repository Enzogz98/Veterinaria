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
estado tinyint,
rol varchar(50),
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
 values ("Enzo","Gonzalez","enzo@mascapi.com","Enzo2023","123456",1,true);
 insert into perfil(id_user,img,notas,colorHeader,background,ligthDark)
 values (1,"https://i.pinimg.com/originals/6a/5f/7f/6a5f7f9636c3412617756297fa60b78c.jpg",
			"Escribe aqui tu nota ! :)",1,1,false);
 
insert into perfil(id_user,img,notas,colorHeader,background,ligthDark)
 values (2,"https://tn.com.ar/resizer/l0aYgsZDf-mJXrEnI8On9APaDMg=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/Z5BNARUTRZAJVMUL2QSP45TTMQ.jpg",
			"Enzo escribe tu nota aqui tu nota ! :)",1,1,false);
            
drop procedure if exists pa_verUsuario; 
delimiter //
create procedure pa_verUsuario()
begin
select * from usuario;
end //
delimiter ;
call pa_verUsuario();
            
            

