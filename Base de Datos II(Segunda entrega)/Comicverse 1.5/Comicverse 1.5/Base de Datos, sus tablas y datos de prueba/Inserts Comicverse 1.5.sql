-- Inserciones para la tabla DATOS_EMPRESA
INSERT INTO DATOS_EMPRESA (NombreEmpresa, Direccion, Rubro, Logo, Instagram, Facebook, X_Twitter, Celular1, Celular2, Email)
VALUES 
('Comicverse', '123 Comic St, Montevideo', 'Comics', 'logo.png', '@comicverse', 'ComicverseFB', '@comicverse', '099123456', '099654321', 'info@comicverse.com');

-- Insertar datos en la tabla ADMINISTRADOR
INSERT INTO ADMINISTRADOR (IdUsuario, NombreEmpresaCE, FechaNacimiento, TipoUsuario, NroTelefono, Nombre, Apellido, Email, Contraseña)
VALUES 
(1, 'Comicverse', '1980-01-01', 'Admin', 1234567890, 'Jose Gervasio', 'Artigas', 'jose.artigas@example.com', 'password12'),
(2, 'Comicverse', '1985-05-15', 'Admin', 1234567891, 'Ana', 'Lopez', 'ana.lopez@example.com', 'password34'),
(NULL, 'Comicverse', '1990-07-20', 'Admin', 1234567892, 'Solo', 'Admin', 'solo.admin@example.com', 'password56');

-- Insertar datos en la tabla CLIENTE
INSERT INTO CLIENTE (IdCliente, IdUsuarioCE, NombreUser, Email, Contrasenia, TipoUsuario, NroTelefono, Nacionalidad, AñoNacimiento)
VALUES 
(1, 1, 'Juan Perez', 'juan.perez@example.com', 'pass123', 'Cliente', 123456789, 'Uruguaya', 1990),
(2, 1, 'Maria Gomez', 'maria.gomez@example.com', 'pass123', 'Cliente', 987654321, 'Uruguaya', 1985),
(3, 1, 'Pedro Sanchez', 'pedro.sanchez@example.com', 'pass123', 'Cliente', 123456781, 'Uruguaya', 1991),
(4, 1, 'Ana Martinez', 'ana.martinez@example.com', 'pass123', 'Cliente', 987654322, 'Uruguaya', 1987),
(5, 1, 'Miguel Torres', 'miguel.torres@example.com', 'pass123', 'Cliente', 123456782, 'Uruguaya', 1993),
(6, 2, 'Carlos Rodriguez', 'carlos.rodriguez@example.com', 'pass123', 'Cliente', 123456780, 'Uruguaya', 1992),
(7, 2, 'Laura Fernandez', 'laura.fernandez@example.com', 'pass123', 'Cliente', 987654320, 'Uruguaya', 1988),
(8, 2, 'Lucia Ramirez', 'lucia.ramirez@example.com', 'pass123', 'Cliente', 987654323, 'Uruguaya', 1986),
(9, 2, 'Jorge Lopez', 'jorge.lopez@example.com', 'pass123', 'Cliente', 123456783, 'Uruguaya', 1994),
(10, 2, 'Sofia Gonzalez', 'sofia.gonzalez@example.com', 'pass123', 'Cliente', 987654324, 'Uruguaya', 1989),
(11, NULL, 'Solo Registrado', 'solo.registrado@example.com', 'pass123', 'Cliente', 123456799, 'Uruguaya', 1995);

-- Insertar datos en la tabla PROMOCION
INSERT INTO PROMOCION (IdPromocion, FechaInicio, FechaFin, Descripcion, PorcentajeDescuento)
VALUES 
(1, '2024-08-01', '2024-08-31', 'Descuento de verano', 20),
(2, '2024-09-01', '2024-09-30', 'Descuento de otoño', 15),
(3, '2024-10-01', '2024-10-31', 'Descuento de invierno', 10),
(4, '2024-11-01', '2024-11-30', 'Descuento de primavera', 25),
(5, '2024-12-01', '2024-12-31', 'Descuento de fin de año', 30),
(6, '2024-01-01', '2024-01-31', 'Descuento de año nuevo', 20);

-- Insertar datos en la tabla CATEGORIA
INSERT INTO CATEGORIA (NombreCategoria)
VALUES 
('nombre'),
('accion'),
('Superhéroes'),
('Ciencia Ficción'),
('Fantasía'),
('Terror'),
('Aventura'),
('Romance'),
('Misterio'),
('Histórico'),
('Humor'),
('Infantil');

-- Insertar datos en la tabla HISTORIETA
INSERT INTO HISTORIETA (ISBN, NombreCategoriaCE, Nombre, EditOrg, Autores, Paginas, Tamaño, Contenido, Formato, Edad, Interior, Precio)
VALUES 
('9783161484100', 'nombre', 'Comic A', 'Editorial A', 'Autor A', 100, '20x30', 'Accion', 'Digital', 12, 'Color', '15.00'),
('9783161484101', 'accion', 'Comic B', 'Editorial B', 'Autor B', 120, '20x30', 'Aventura', 'Impreso', 15, 'Blanco y Negro', '20.00');
-- Insertar datos en la tabla HISTORIETA (Para el catalogo)
INSERT INTO HISTORIETA (ISBN, NombreCategoriaCE, Nombre, Imagen, EditOrg, Autores, Paginas, Tamaño, Contenido, Formato, Edad, Interior, Precio) VALUES
('9780785192954', 'Superhéroes', 'Venom: Protector Letal', NULL, 'Marvel Comics', 'David Michelinie, Mark Bagley', 144, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '18.00'),
('9780785192955', 'Superhéroes', 'Venom (2018)', NULL, 'Marvel Comics', 'Donny Cates, Ryan Stegman', 160, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '20.00'),
('9780785192956', 'Superhéroes', 'El Asombroso Hombre Araña', NULL, 'Marvel Comics', 'Stan Lee, Steve Ditko', 320, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '25.00'),
('9780785192957', 'Superhéroes', 'Ultimate Hombre Araña', NULL, 'Marvel Comics', 'Brian Michael Bendis, Mark Bagley', 432, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '30.00'),
('9780785192958', 'Superhéroes', 'Planeta Hulk', NULL, 'Marvel Comics', 'Greg Pak, Carlo Pagulayan', 416, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '35.00'),
('9781401263119', 'Superhéroes', 'El Regreso del Caballero Oscuro', NULL, 'DC Comics', 'Frank Miller', 224, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '20.00'),
('9781401234516', 'Superhéroes', 'Hush', NULL, 'DC Comics', 'Jeph Loeb, Jim Lee', 320, '20x30', 'Superhéroes', 'Impreso', 15, 'Color', '28.00'),
('9781401238964', 'Superhéroes', 'All-Star Superman', NULL, 'DC Comics', 'Grant Morrison, Frank Quitely', 320, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '25.00'),
('9781401290962', 'Superhéroes', 'Superman: Hijo Rojo', NULL, 'DC Comics', 'Mark Millar, Dave Johnson', 160, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '20.00'),
('9780785192959', 'Superhéroes', 'Hombre Araña: Azul', NULL, 'Marvel Comics', 'Jeph Loeb, Tim Sale', 144, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '18.00'),
('9780785192960', 'Superhéroes', 'Hombre Araña: Historia de Vida', NULL, 'Marvel Comics', 'Chip Zdarsky, Mark Bagley', 208, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '20.00'),
('9780785192961', 'Superhéroes', 'Hombre Araña: La Última Cacería de Kraven', NULL, 'Marvel Comics', 'J.M. DeMatteis, Mike Zeck', 160, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '18.00'),
('9780785192962', 'Superhéroes', 'Hombre Araña: La Noche que Murió Gwen Stacy', NULL, 'Marvel Comics', 'Gerry Conway, Gil Kane', 144, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '18.00'),
('9780785192963', 'Superhéroes', 'Hulk: Futuro Imperfecto', NULL, 'Marvel Comics', 'Peter David, George Pérez', 128, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '15.00'),
('9780785192964', 'Superhéroes', 'Hulk: Gris', NULL, 'Marvel Comics', 'Jeph Loeb, Tim Sale', 160, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '18.00'),
('9780785192965', 'Superhéroes', 'Hulk: El Fin', NULL, 'Marvel Comics', 'Peter David, Dale Keown', 144, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '18.00'),
('9780785192966', 'Superhéroes', 'Batman: Año Uno', NULL, 'DC Comics', 'Frank Miller, David Mazzucchelli', 144, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '18.00'),
('9780785192967', 'Superhéroes', 'Batman: El Largo Halloween', NULL, 'DC Comics', 'Jeph Loeb, Tim Sale', 384, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '30.00'),
('9780785192968', 'Superhéroes', 'Batman: La Broma Asesina', NULL, 'DC Comics', 'Alan Moore, Brian Bolland', 64, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '15.00'),
('9780785192969', 'Superhéroes', 'Batman: Asilo Arkham', NULL, 'DC Comics', 'Grant Morrison, Dave McKean', 216, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '25.00'),
('9780785192970', 'Superhéroes', 'Superman: Para Todas las Estaciones', NULL, 'DC Comics', 'Jeph Loeb, Tim Sale', 208, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '20.00'),
('9780785192971', 'Superhéroes', 'Superman: Legado', NULL, 'DC Comics', 'Mark Waid, Leinil Francis Yu', 304, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '25.00'),
('9780785192972', 'Superhéroes', 'Superman: Identidad Secreta', NULL, 'DC Comics', 'Kurt Busiek, Stuart Immonen', 208, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '20.00'),
('9780785192973', 'Superhéroes', 'Superman: ¿Qué le Sucedió al Hombre del Mañana?', NULL, 'DC Comics', 'Alan Moore, Curt Swan', 128, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '18.00'),
('9780785192974', 'Superhéroes', 'Venom: Origen Oscuro', NULL, 'Marvel Comics', 'Zeb Wells, Angel Medina', 120, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', '17.00');
-- Insertar datos en la tabla CARRITO
INSERT INTO CARRITO (IdCarrito, IdClienteCE)
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8);

-- Insertar datos en la tabla TICKET
INSERT INTO TICKET (NroTicket, IdCarritoCE, dirEnvio, Fecha, Hora, Total)
VALUES 
(1, 1, '123 Comic St', '2024-09-01', '10:00', '12.00'),
(2, 2, '456 Comic St', '2024-09-01', '11:00', '15.00'),
(3, 3, '789 Comic St', '2024-09-10', '12:00', '17.00'),
(4, 4, '101 Comic St', '2024-09-10', '13:00', '18.00'),
(5, 5, '202 Comic St', '2024-08-15', '14:00', '20.00'),
(6, 6, '303 Comic St', '2024-11-15', '15:00', '22.00'),
(7, 7, '404 Comic St', '2024-12-25', '16:00', '25.00'),
(8, 8, '505 Comic St', '2024-01-10', '17:00', '27.00');

-- Insertar datos en la tabla RESEÑA
INSERT INTO RESEÑA (IdReseña, IdClienteCE, IdUsuarioCE, Fecha, Contenido)
VALUES 
(1, 1, 1, '2024-04-30', 'Mala facturación'),
(2, 2, 2, '2024-05-01', 'Producto defectuoso'),
(3, 3, 2, '2024-04-30', 'Mala facturación'),
(4, 4, 2, '2024-05-01', 'Producto defectuoso');

-- Insertar datos en la tabla AGREGA
INSERT INTO AGREGA (IdCarritoCE, NombreCategoriaCE, ISBNCE, Fecha, Hora)
VALUES 
(1, 'nombre', '9783161484100', '2024-08-15', '10:00'),
(2, 'nombre', '9783161484100', '2024-09-01', '11:00'),
(3, 'accion', '9783161484101', '2024-09-10', '12:00'),
(4, 'accion', '9783161484101', '2024-08-20', '13:00'),
(5, 'nombre', '9783161484100', '2024-08-25', '14:00'),
(6, 'nombre', '9783161484100', '2024-09-05', '15:00');

-- Insertar datos en la tabla CREA
INSERT INTO CREA (IdUsuarioCE, IdPromocionCE)
VALUES 
(1, 1),
(2, 2),
(1, 3),
(2, 4),
(1, 5),
(2, 6);

-- Insertar datos en la tabla APLICA
INSERT INTO APLICA (IdPromocionCE, NombreCategoriaCE, ISBNCE)
VALUES 
(1, 'nombre', '9783161484100'),
(2, 'nombre', '9783161484100'),
(3, 'accion', '9783161484101'),
(4, 'accion', '9783161484101'),
(5, 'nombre', '9783161484100'),
(6, 'nombre', '9783161484100');

-- Insertar datos en la tabla REPORTE
INSERT INTO REPORTE (IdUsuarioCE, Contenido)
VALUES 
(1, 'Revisión de inventario'),
(2, 'Actualización de precios'),
(1, 'Problemas con el sistema de facturación'),
(3, 'Revisión de políticas de devolución'),
(2, 'Evaluación de desempeño del personal');