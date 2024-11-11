DROP DATABASE IF EXISTS comicverse;

CREATE DATABASE IF NOT EXISTS comicverse;

USE comicverse;

CREATE TABLE
    DATOS_EMPRESA (
        NombreEmpresa VARCHAR(40) NOT NULL,
        Email VARCHAR(40) NOT NULL,
        Rubro VARCHAR(30) NOT NULL,
        Logo VARCHAR(30) NOT NULL,
        PRIMARY KEY (NombreEmpresa, Email)
    );

CREATE TABLE
    DATOS_EMPRESA_CONTACTO (
        NombreEmpresa VARCHAR(40) NOT NULL,
        Email VARCHAR(40) NOT NULL,
        Celular1 VARCHAR(15) NOT NULL,
        Celular2 VARCHAR(15) NOT NULL,
        Instagram VARCHAR(30) NOT NULL,
        Facebook VARCHAR(30) NOT NULL,
        X_Twitter VARCHAR(30) NOT NULL,
        FOREIGN KEY (NombreEmpresa, Email) REFERENCES DATOS_EMPRESA (NombreEmpresa, Email) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    DATOS_EMPRESA_DIRECCION (
        NombreEmpresa VARCHAR(40) NOT NULL,
        Email VARCHAR(40) NOT NULL,
        Calle VARCHAR(40) NOT NULL,
        Numero VARCHAR(10) NOT NULL,
        FOREIGN KEY (NombreEmpresa, Email) REFERENCES DATOS_EMPRESA (NombreEmpresa, Email) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    ADMINISTRADOR (
        IdUsuario INT (10) NOT NULL AUTO_INCREMENT,
        NombreEmpresaCE VARCHAR(50) NOT NULL,
        FechaNacimiento VARCHAR(10) NOT NULL,
        TipoUsuario VARCHAR(30) NOT NULL,
        NroTelefono VARCHAR(15) NOT NULL,
        Nombre VARCHAR(40) NOT NULL,
        Apellido VARCHAR(40) NOT NULL,
        Email VARCHAR(40) NOT NULL,
        Contraseña VARCHAR(10) NOT NULL,
        PRIMARY KEY (IdUsuario, Email),
        FOREIGN KEY (NombreEmpresaCE) REFERENCES DATOS_EMPRESA (NombreEmpresa) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    REPORTE (
        NroReporte INT (10) NOT NULL AUTO_INCREMENT,
        IdUsuarioCE INT (10) NOT NULL,
        Contenido VARCHAR(50) NOT NULL,
        PRIMARY KEY (NroReporte),
        FOREIGN KEY (IdUsuarioCE) REFERENCES ADMINISTRADOR (IdUsuario) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    CATEGORIA (
        NombreCategoria VARCHAR(40) NOT NULL,
        PRIMARY KEY (NombreCategoria)
    );

CREATE TABLE
    HISTORIETA (
        ISBN VARCHAR(30) NOT NULL,
        NombreCategoriaCE VARCHAR(40) NOT NULL,
        Nombre VARCHAR(100) NOT NULL,
        Imagen VARCHAR(30),
        EditOrg VARCHAR(40) NOT NULL,
        Autores VARCHAR(80) NOT NULL,
        Paginas INT (5) NOT NULL,
        Tamaño VARCHAR(10) NOT NULL,
        Contenido VARCHAR(100) NOT NULL,
        Formato VARCHAR(20) NOT NULL,
        Edad INT (5) NOT NULL,
        Interior VARCHAR(20) NOT NULL,
        Precio VARCHAR(10) NOT NULL,
        PRIMARY KEY (ISBN),
        FOREIGN KEY (NombreCategoriaCE) REFERENCES CATEGORIA (NombreCategoria) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    CLIENTE (
        IdCliente INT (10) NOT NULL AUTO_INCREMENT,
        IdUsuarioCE INT (10),
        NombreUser VARCHAR(40) NOT NULL,
        Email VARCHAR(40) NOT NULL,
        Contrasenia VARCHAR(100) NOT NULL,
        TipoUsuario VARCHAR(30) NOT NULL,
        NroTelefono VARCHAR(15) NOT NULL,
        Nacionalidad VARCHAR(30) NOT NULL,
        AñoNacimiento INT (5) NOT NULL,
        PRIMARY KEY (IdCliente, Email),
        FOREIGN KEY (IdUsuarioCE) REFERENCES ADMINISTRADOR (IdUsuario) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    CARRITO (
        IdCarrito INT (10) NOT NULL AUTO_INCREMENT,
        IdClienteCE INT (10) NOT NULL,
        PRIMARY KEY (IdCarrito),
        FOREIGN KEY (IdClienteCE) REFERENCES CLIENTE (IdCliente) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    TICKET (
        NroTicket INT (10) NOT NULL AUTO_INCREMENT,
        IdCarritoCE INT (10) NOT NULL,
        dirEnvio VARCHAR(40) NOT NULL,
        Fecha DATE NOT NULL,
        Hora VARCHAR(10) NOT NULL,
        Total VARCHAR(10) NOT NULL,
        PRIMARY KEY (NroTicket),
        FOREIGN KEY (IdCarritoCE) REFERENCES CARRITO (IdCarrito) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    RESEÑA (
        IdReseña INT (10) NOT NULL AUTO_INCREMENT,
        IdClienteCE INT (10) NOT NULL,
        IdUsuarioCE INT (10),
        Fecha DATE NOT NULL,
        Contenido VARCHAR(100) NOT NULL,
        PRIMARY KEY (IdReseña),
        FOREIGN KEY (IdClienteCE) REFERENCES CLIENTE (IdCliente) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (IdUsuarioCE) REFERENCES CLIENTE (IdUsuarioCE) ON UPDATE CASCADE ON DELETE CASCADE
    );

-- Tablas de Relaciones
CREATE TABLE
    APLICA (
        NombreCategoriaCE VARCHAR(40) NOT NULL,
        NombrePromocion VARCHAR(100) NOT NULL,
        Procentaje INT (5) NOT NULL,
        FechaInicio DATE NOT NULL,
        FechaFin DATE NOT NULL,
        PRIMARY KEY (NombreCategoriaCE, FechaInicio, FechaFin),
        FOREIGN KEY (NombreCategoriaCE) REFERENCES CATEGORIA (NombreCategoria) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    CREA (
        IdUsuarioCE INT (10) NOT NULL,
        FOREIGN KEY (IdUsuarioCE) REFERENCES ADMINISTRADOR (IdUsuario) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    AGREGA (
        IdCarritoCE INT (10) NOT NULL,
        ISBNCE VARCHAR(30) NOT NULL,
        Fecha DATE NOT NULL,
        Hora VARCHAR(8) NOT NULL,
        FOREIGN KEY (IdCarritoCE) REFERENCES CARRITO (IdCarrito) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (ISBNCE) REFERENCES HISTORIETA (ISBN) ON UPDATE CASCADE ON DELETE CASCADE
    );