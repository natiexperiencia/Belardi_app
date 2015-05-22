-- crear el esquema
create schema belardi;

-- usar el esquema
use belardi;

-- crear tablas
create table usuarios(
numero int(3) auto_increment not null unique primary key,
nombre varchar(15),
email varchar(30),
pass varchar(10),
rol varchar(15));

create table productos(
numero int(3) auto_increment not null unique primary key,
nombre varchar(15),
propiedades varchar(15),
foto varchar(50),
stock float(6,2));

create table consume(
numero_usuario int(3),
numero_producto int(3),
fecha date,
cantidad float(4,2),
primary key(numero_usuario, numero_producto, fecha));

-- foreign keys
alter table consume
add constraint numero_usuario_consume foreign key(numero_usuario) references usuarios(numero)
on delete cascade on update cascade;

alter table consume
add constraint numero_producto_consume foreign key(numero_producto) references productos(numero)
on delete cascade on update cascade;

-- insertar datos
insert into usuarios(nombre,email,pass,rol) values
("Iker","natiexperiencia@gmail.com","nati666000","socio"),
("Naiara","popitxuela@gmail.com","popi123456","socio"),
("Pepe","jarecrina@gmail.com","pepe666000","administrador");

insert into productos(nombre,propiedades,foto,stock) values
("Critical","C.B.D","images/productos/critical.jpg",100),
("MobiDyck","T.H.C","images/productos/moby.jpg",150),
("Gibel Urdin","C.B.D","images/productos/gibel.jpg",50);

-- triggers
-- control de stock en productos al insertar en consume
delimiter |
create trigger insertar_consume before insert on consume
for each row begin
	update productos
    set stock = stock - new.cantidad
    where new.numero_producto = numero;
end
|
delimiter ;

-- control de stock al borrar en consume
delimiter |
create trigger borrar_consume before delete on consume
for each row begin
	update productos
    set stock = stock + old.cantidad
    where old.numero_producto = numero;
end
|
delimiter ;

-- control de stock al modificar en consume
delimiter |
create trigger modificar_consume before update on consume
for each row begin
	if old.numero_producto != new.numero_producto
    then
		update productos
        set stock = stock + old.cantidad
        where numero = old.numero_producto;
        update productos
        set stock = stock - old.cantidad
        where numero = new.numero_producto;
	end if;
    if old.cantidad != new.cantidad
    then
		update productos
        set stock = (stock + old.cantidad) - new.cantidad
        where numero = old.numero_producto;
	end if;
end
|
delimiter ;
drop trigger modificar_consume;