create database test;

create table Usuarios(
No_usuario  int auto_increment primary key,
Nombre_Usuario varchar (20),
Nombre varchar (30),
A_Paterno varchar (30),
A_Materno  varchar (30),
Email  varchar (30),
F_nacimiento date,
Contrasenia varchar (15)
);

Insert into Usuarios values( 1000, "UC59", "Jose", "Abrego","Mtz", "jose@email.com", "2002-12-23", "jose123") ;
Insert into Usuarios values(null, "ALeAle", "Alejandro", "Hernandez","Hernandez", "Miguel@email.com", "2002-12-23", "Hernandez2") ;
INSERT INTO Usuarios values(null, 'null', 'Arturo', 'Rodriguez', 'Cezenias','Artu@email.com', '2002-12-23','artu');
INSERT INTO Usuarios values(null, 'a', 'Arturo', 'a', 'a','A@email.com', '2002-12-23','a')
delete  from Usuarios where No_usuario="1005";

SELECT Email FROM usuarios WHERE Email='Artu@email.com' and Contrasenia='Artu'


SELECT * FROM usuarios ;


select F_nacimiento from Usuarios where No_Usuario = 1000