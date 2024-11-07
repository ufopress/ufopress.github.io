drop database if exists comicVerse;
create database comicVerse;
use comicVerse;

CREATE TABLE ADMINISTRADOR(
	Email VARCHAR(50) NOT NULL,
	Nombre VARCHAR(50) NOT NULL,
	Apellido VARCHAR(50) NOT NULL,
	FechaNacimiento VARCHAR(15) NOT NULL,
	TipoUsuario VARCHAR(3) NOT NULL,
	NroTelefono VARCHAR(15),
	Contraseña VARCHAR(100) NOT NULL,
	primary key(Email, Nombre)
);

CREATE TABLE DATOS_EMPRESA(
    NombreEmpresa VARCHAR(75) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Rubro VARCHAR(50) NOT NULL,
    Logo VARCHAR(100) NOT NULL,
    NombreAdmin VARCHAR(50) NOT NULL, 
    EmailAdmin VARCHAR(50) NOT NULL,
    PRIMARY KEY (NombreEmpresa, Email),
    
    -- Claves foráneas para evitar creación de tabla relación
    FOREIGN KEY (EmailAdmin, NombreAdmin) REFERENCES ADMINISTRADOR(Email, Nombre)
);

CREATE TABLE DATOS_EMPRESA_CONTACTO(
	NombreEmpresa VARCHAR(75) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Celular1 VARCHAR(20) NOT NULL,
    Celular2 VARCHAR(20),
    Instagram VARCHAR(45),
    Facebook VARCHAR(45),
    XTwitter VARCHAR(45),
    
    -- Claves foráneas para evitar creación de tabla relación
    FOREIGN KEY (NombreEmpresa, Email) REFERENCES DATOS_EMPRESA(NombreEmpresa, Email)
);

CREATE TABLE DATOS_EMPRESA_DIRECCION(
	NombreEmpresa VARCHAR(75) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Calle VARCHAR(50) NOT NULL,
    Numero VARCHAR (8) NOT NULL,
    
    -- Claves foráneas para evitar creación de tabla relación
    FOREIGN KEY (NombreEmpresa, Email) REFERENCES DATOS_EMPRESA(NombreEmpresa, Email)
);

CREATE TABLE CLIENTE(
	NombreUser VARCHAR(50) NOT NULL,
	Email VARCHAR(50) NOT NULL,
	Contraseña VARCHAR(100) NOT NULL,
	TipoUsuario VARCHAR(3) NOT NULL,
	NroTelefono VARCHAR(15),
	Nacionalidad VARCHAR(25) NOT NULL,
	AñoNacimiento VARCHAR(25) NOT NULL,
    PRIMARY KEY (NombreUser, Email),
    
    -- Claves foráneas para evitar creación de tabla relación
    NombreAdmin VARCHAR(50), 
    EmailAdmin VARCHAR(50),
    FOREIGN KEY (EmailAdmin, NombreAdmin) REFERENCES ADMINISTRADOR(Email, Nombre)
);

CREATE TABLE RESEÑA(
	IdReseña INT NOT NULL,
	Fecha VARCHAR (25) NOT NULL,
    Contenido VARCHAR (250),
    
    -- Claves foráneas para evitar creación de tabla relación
	NombreUser VARCHAR(100) NOT NULL,
    Email VARCHAR(50) NOT NULL,
	FOREIGN KEY (NombreUser, Email) REFERENCES CLIENTE(NombreUser, Email),

	PRIMARY KEY(IdReseña, Fecha, NombreUser)
);

CREATE TABLE REPORTE(
	NroReporte INT PRIMARY KEY NOT NULL,
	Contenido VARCHAR (255) NOT NULL,
	
	-- Claves foráneas para evitar creación de tabla relación
    EmailAdmin VARCHAR(50) NOT NULL,
    NombreAdmin VARCHAR(50) NOT NULL,
	FOREIGN KEY (EmailAdmin, NombreAdmin) REFERENCES ADMINISTRADOR(Email, Nombre) 
);

CREATE TABLE PROMOCION(
	IdPromocion INT PRIMARY KEY NOT NULL,
	FechaInicio VARCHAR (25) NOT NULL,
	Descripcion VARCHAR (175) NOT NULL,
	FechaFin VARCHAR (25) NOT NULL,
	PorcentajeDescuento DECIMAL(2, 2) NOT NULL,

	-- Claves foráneas para evitar creación de tabla relación 
	EmailAdmin VARCHAR(50) NOT NULL,
    NombreAdmin VARCHAR(50) NOT NULL,
	FOREIGN KEY (EmailAdmin, NombreAdmin) REFERENCES ADMINISTRADOR(Email, Nombre)
); 

CREATE TABLE CARRITO(
	IdCarrito INT (20) PRIMARY KEY NOT NULL,
	
	-- Claves foráneas para evitar creación de tabla relación 
    NombreUser VARCHAR(50) NOT NULL,
	Email VARCHAR(50) NOT NULL,
	FOREIGN KEY (NombreUser, Email) REFERENCES CLIENTE(NombreUser, Email) 
);

CREATE TABLE TICKET(
	NroTicket INT PRIMARY KEY NOT NULL,
	Calle VARCHAR(100),
	Numero INT(6),
	Fecha VARCHAR (25) NOT NULL,
	Hora VARCHAR (25) NOT NULL,
	CostoTotal DECIMAL(10, 2) NOT NULL,
	
	-- Claves foráneas para evitar creación de tabla relación  
    IdCarrito INT (20) NOT NULL,
	FOREIGN KEY (IdCarrito) REFERENCES CARRITO(IdCarrito) 
);

CREATE TABLE CATEGORIA(
	NombreCategoria VARCHAR(75) PRIMARY KEY 
);

CREATE TABLE HISTORIETA(
	ISBN VARCHAR(35) PRIMARY KEY NOT NULL,
	Nombre VARCHAR(100) NOT NULL,
	Imagen VARCHAR(200) ,
	Editorial VARCHAR(100) NOT NULL,
	Autores VARCHAR(85) NOT NULL,
	Paginas INT NOT NULL,
	Tamaño VARCHAR(75) NOT NULL,
	Contenido TEXT NOT NULL,
	Formato VARCHAR(20) NOT NULL,
	Edad INT NOT NULL,
	Interior VARCHAR(50),
	Precio DECIMAL(6, 2) NOT NULL,
    
	-- Claves foráneas para evitar creación de tabla relación
    NombreCategoria VARCHAR(75) NOT NULL, 
	FOREIGN KEY (NombreCategoria) REFERENCES CATEGORIA(NombreCategoria) 
);

CREATE TABLE PROMOCION_APLICA_HISTORIETA(
	IdPromocion INT (5) NOT NULL,
	ISBN VARCHAR(35) NOT NULL, 

	-- Claves foráneas para evitar creación de tabla relación
	FOREIGN KEY (IdPromocion) REFERENCES PROMOCION(IdPromocion),
	FOREIGN KEY (ISBN) REFERENCES HISTORIETA(ISBN),

	PRIMARY KEY (IdPromocion, ISBN) 
);

CREATE TABLE CARRITO_AGREGA_HISTORIETA(
	Fecha VARCHAR (25) NOT NULL,
	Hora VARCHAR (25) NOT NULL,
    IdCarrito INT NOT NULL,
	ISBN VARCHAR(35) NOT NULL,
	
    -- Claves foráneas para evitar creación de tabla relación
	FOREIGN KEY (IdCarrito) REFERENCES CARRITO(IdCarrito),
	FOREIGN KEY (ISBN) REFERENCES HISTORIETA(ISBN), 
    
	PRIMARY KEY (IdCarrito, ISBN, Fecha, Hora) 
);