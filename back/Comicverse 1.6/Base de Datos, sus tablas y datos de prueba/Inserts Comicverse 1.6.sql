-- Poblar la tabla DATOS_EMPRESA
INSERT INTO DATOS_EMPRESA (NombreEmpresa, Email, Rubro, Logo) VALUES
('ComicVerse', 'comicverse@example.com', 'Comics', 'img/LogoComicVerse.png');

-- Insertar datos en la tabla DATOS_EMPRESA_CONTACTO
INSERT INTO DATOS_EMPRESA_CONTACTO (NombreEmpresa, Email, Celular1, Celular2, Instagram, Facebook, X_Twitter) VALUES
('ComicVerse', 'comicverse@example.com', '1234567890', '0987654321', '@comicverse', '@comicverseFB', '@comicverseTwitter');

-- Insertar datos en la tabla DATOS_EMPRESA_DIRECCION
INSERT INTO DATOS_EMPRESA_DIRECCION (NombreEmpresa, Email, Calle, Numero) VALUES
('ComicVerse', 'comicverse@example.com', 'Av. Libertador', '1000');

-- Insertar datos en la tabla ADMINISTRADOR
INSERT INTO ADMINISTRADOR (NombreEmpresaCE, Email, Nombre, Apellido, FechaNacimiento, TipoUsuario, NroTelefono, Contraseña) VALUES
('ComicVerse', 'admin1@example.com', 'Juan', 'Pérez', '1985-01-15', 'ADM', '1234567890', 'password1'),
('ComicVerse', 'admin2@example.com', 'María', 'González', '1990-03-22', 'ADM', '9876543210', 'password2'),
('ComicVerse', 'jose.artigas@example.com', 'Jose Gervasio', 'Artigas', '1980-01-01', 'ADM', '1234567891', 'password12'),
('ComicVerse', 'ana.lopez@example.com', 'Ana', 'Lopez', '1985-05-15', 'ADM', '1234567892', 'password34'),
('ComicVerse', 'solo.admin@example.com', 'Solo', 'Admin', '1990-07-20', 'ADM', '1234567893', 'password56');

-- Insertar datos en la tabla CLIENTE
INSERT INTO CLIENTE (IdUsuarioCE, NombreUser, Email, Contrasenia, TipoUsuario, NroTelefono, Nacionalidad, AñoNacimiento)
VALUES 
(1, 'Juan Perez', 'juan.perez@example.com', 'pass123', 'Cliente', 123456789, 'Uruguaya', 1990),
(1, 'Maria Gomez', 'maria.gomez@example.com', 'pass123', 'Cliente', 987654321, 'Uruguaya', 1985),
(1, 'Pedro Sanchez', 'pedro.sanchez@example.com', 'pass123', 'Cliente', 123456781, 'Uruguaya', 1991),
(1, 'Ana Martinez', 'ana.martinez@example.com', 'pass123', 'Cliente', 987654322, 'Uruguaya', 1987),
(1, 'Miguel Torres', 'miguel.torres@example.com', 'pass123', 'Cliente', 123456782, 'Uruguaya', 1993),
(2, 'Carlos Rodriguez', 'carlos.rodriguez@example.com', 'pass123', 'Cliente', 123456780, 'Uruguaya', 1992),
(2, 'Laura Fernandez', 'laura.fernandez@example.com', 'pass123', 'Cliente', 987654320, 'Uruguaya', 1988),
(2, 'Lucia Ramirez', 'lucia.ramirez@example.com', 'pass123', 'Cliente', 987654323, 'Uruguaya', 1986),
(2, 'Jorge Lopez', 'jorge.lopez@example.com', 'pass123', 'Cliente', 123456783, 'Uruguaya', 1994),
(2, 'Sofia Gonzalez', 'sofia.gonzalez@example.com', 'pass123', 'Cliente', 987654324, 'Uruguaya', 1989),
(2, 'Solo Registrado', 'solo.registrado@example.com', 'pass123', 'Cliente', 123456799, 'Uruguaya', 1995);

-- Insertar datos en la tabla PROMOCION
INSERT INTO PROMOCION (FechaInicio, FechaFin, Descripcion, PorcentajeDescuento)
VALUES 
('2024-08-01', '2024-08-31', 'Descuento de verano', 20),
('2024-09-01', '2024-09-30', 'Descuento de otoño', 15),
('2024-10-01', '2024-10-31', 'Descuento de invierno', 10),
('2024-11-01', '2024-11-30', 'Descuento de primavera', 25),
('2024-12-01', '2024-12-31', 'Descuento de fin de año', 30),
('2024-01-01', '2024-01-31', 'Descuento de año nuevo', 20);

-- Insertar datos en la tabla HISTORIETA
INSERT INTO HISTORIETA (ISBN, Nombre, Imagen, EditOrg, Autores, Paginas, Tamaño, Contenido, Formato, Edad, Interior, Precio)
VALUES 
('9783161484100', 'Comic A', '9783161484100.png', 'Editorial A', 'Autor A', 100, '20x30', 'Accion', 'Digital', 12, 'Color', 15.00),
('9783161484101', 'Comic B', '9783161484101.png', 'Editorial B', 'Autor B', 120, '20x30', 'Aventura', 'Impreso', 15, 'Blanco y Negro', 20.00),
('9780785192954', 'Venom: Protector Letal', '9780785192954.png', 'Marvel Comics', 'David Michelinie, Mark Bagley', 144, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 18.00),
('9780785192955', 'Venom (2018)', '9780785192955.png', 'Marvel Comics', 'Donny Cates, Ryan Stegman', 160, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 20.00),
('9780785192956', 'El Asombroso Hombre Araña', '9780785192956.png', 'Marvel Comics', 'Stan Lee, Steve Ditko', 320, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 25.00),
('9780785192957', 'Ultimate Hombre Araña', '9780785192957.png', 'Marvel Comics', 'Brian Michael Bendis, Mark Bagley', 432, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 30.00),
('9780785192958', 'Planeta Hulk', '9780785192958.png', 'Marvel Comics', 'Greg Pak, Carlo Pagulayan', 416, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 35.00),
('9781401263119', 'El Regreso del Caballero Oscuro', '9781401263119.png', 'DC Comics', 'Frank Miller', 224, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 20.00),
('9781401234516', 'Hush', '9781401234516.png', 'DC Comics', 'Jeph Loeb, Jim Lee', 320, '20x30', 'Superhéroes', 'Impreso', 15, 'Color', 28.00),
('9781401238964', 'All-Star Superman', '9781401238964.png', 'DC Comics', 'Grant Morrison, Frank Quitely', 320, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 25.00),
('9781401290962', 'Superman: Hijo Rojo', '9781401290962.png', 'DC Comics', 'Mark Millar, Dave Johnson', 160, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 20.00),
('9780785192959', 'Hombre Araña: Azul', '9780785192959.png', 'Marvel Comics', 'Jeph Loeb, Tim Sale', 144, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 18.00),
('9780785192960', 'Hombre Araña: Historia de Vida', '9780785192960.png', 'Marvel Comics', 'Chip Zdarsky, Mark Bagley', 208, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 20.00),
('9780785192961', 'Hombre Araña: La Última Cacería de Kraven', '9780785192961.png', 'Marvel Comics', 'J.M. DeMatteis, Mike Zeck', 160, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 18.00),
('9780785192962', 'Hombre Araña: La Noche que Murió Gwen Stacy', '9780785192962.png', 'Marvel Comics', 'Gerry Conway, Gil Kane', 144, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 18.00),
('9780785192963', 'Hulk: Futuro Imperfecto', '9780785192963.png', 'Marvel Comics', 'Peter David, George Pérez', 128, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 15.00),
('9780785192964', 'Hulk: Gris', '9780785192964.png', 'Marvel Comics', 'Jeph Loeb, Tim Sale', 160, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 18.00),
('9780785192965', 'Hulk: El Fin', '9780785192965.png', 'Marvel Comics', 'Peter David, Dale Keown', 144, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 18.00),
('9780785192966', 'Batman: Año Uno', '9780785192966.png', 'DC Comics', 'Frank Miller, David Mazzucchelli', 144, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 18.00),
('9780785192967', 'Batman: El Largo Halloween', '9780785192967.png', 'DC Comics', 'Jeph Loeb, Tim Sale', 384, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 30.00),
('9780785192968', 'Batman: La Broma Asesina', '9780785192968.png', 'DC Comics', 'Alan Moore, Brian Bolland', 64, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 15.00),
('9780785192969', 'Batman: Asilo Arkham', '9780785192969.png', 'DC Comics', 'Grant Morrison, Dave McKean', 216, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 25.00),
('9780785192970', 'Superman: Para Todas las Estaciones', '9780785192970.png', 'DC Comics', 'Jeph Loeb, Tim Sale', 208, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 20.00),
('9780785192971', 'Superman: Legado', '9780785192971.png', 'DC Comics', 'Mark Waid, Leinil Francis Yu', 304, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 25.00),
('9780785192972', 'Superman: Identidad Secreta', '9780785192972.png', 'DC Comics', 'Kurt Busiek, Stuart Immonen', 208, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 20.00),
('9780785192973', 'Superman: ¿Qué le Sucedió al Hombre del Mañana?', '9780785192973.png', 'DC Comics', 'Alan Moore, Curt Swan', 128, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 18.00),
('9780785192974', 'Venom: Origen Oscuro', '9780785192974.png', 'Marvel Comics', 'Zeb Wells, Angel Medina', 120, '20x30', 'Superhéroes', 'Impreso', 16, 'Color', 17.00),
('9784088744458', 'NARUTO VOL. 44', '9784088744458.png', 'Shonen Jump', 'Masashi Kishimoto', 200, '13x18', 'Naruto y sus amigos luchan por proteger su hogar de un enemigo poderoso.', 'Manga', 12, 'Color', 10.00),
('9781928374611', 'SAINT SEIYA ED. KANZENBAN 13', '9781928374611.png', 'IVREA', 'Masami Kurumada', 250, '13x18', 'Los Santos de Atena deben enfrentarse a nuevos desafíos en su búsqueda por proteger a la diosa.', 'Manga', 12, 'Color', 12.00),
('9781421580851', 'HAIKYU!! 29', '9781421580851.png', 'Shonen Jump', 'Haruichi Furudate', 190, '13x18', 'El equipo de voleibol se prepara para su gran partido contra su rival más fuerte.', 'Manga', 10, 'Color', 9.00),
('9784088721459', 'HUNTER X HUNTER 34', '9784088721459.png', 'Shonen Jump', 'Yoshihiro Togashi', 210, '13x18', 'Gon y sus amigos deben superar pruebas peligrosas para lograr sus objetivos.', 'Manga', 12, 'Color', 10.00),
('9784063743609', 'VAGABOND VOL. 34', '9784063743609.png', 'Kodansha', 'Takehiko Inoue', 300, '13x18', 'La historia de Musashi Miyamoto y su búsqueda por convertirse en el mejor espadachín.', 'Manga', 16, 'Color', 12.00),
('9784048917346', 'MONOGATARI VOL. 12', '9784048917346.png', 'Panini', 'Nisio Isin', 200, '13x18', 'Un joven se enfrenta a misterios y criaturas sobrenaturales en su vida diaria.', 'Manga', 12, 'Color', 9.00),
('9784065188551', 'WIND BREAKER VOL. 13', '9784065188551.png', 'Kodansha', 'Satoru Nii', 180, '13x18', 'Un grupo de jóvenes se enfrenta a desafíos mientras luchan por ser los mejores en su deporte.', 'Manga', 10, 'Color', 8.00),
('9784088744526', 'POKÉMON RUBY & SAPPHIRE VOL. 3', '9784088744526.png', 'Viz Media', 'Mitsuhiro Arita', 220, '13x18', 'Los entrenadores se embarcan en nuevas aventuras mientras buscan Pokémon legendarios.', 'Manga', 12, 'Color', 11.00),
('9784088744533', 'POKÉMON GOLD & SILVER VOL. 6', '9784088744533.png', 'Viz Media', 'Mitsuhiro Arita', 200, '13x18', 'Ash y sus amigos luchan en emocionantes batallas Pokémon.', 'Manga', 12, 'Color', 10.00),
('9784063732047', 'SPY\'S WIFE', '9784063732047.png', 'Kodansha', 'Masasumi Kakizaki', 150, '13x18', 'Una historia de intriga y secretos en un mundo de espionaje.', 'Manga', 18, 'Color', 10.00),
('9781975327004', 'SOLO LEVELING VOL. 7', '9781975327004.png', 'Yen Press', 'Chugong', 250, '13x18', 'Un cazador se esfuerza por volverse más fuerte en un mundo lleno de monstruos.', 'Manga', 12, 'Color', 12.00),
('9784065137003', 'VINLAND SAGA VOL. 10', '9784065137003.png', 'Kodansha', 'Makoto Yukimura', 250, '13x18', 'Un joven vikingo busca venganza y redención en un mundo cruel.', 'Manga', 12, 'Color', 11.00);

-- Insertar datos en la tabla CARRITO
INSERT INTO CARRITO (IdClienteCE)
VALUES 
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8);

-- Insertar datos en la tabla TICKET
INSERT INTO TICKET (IdCarritoCE, dirEnvio, Fecha, Hora, Total)
VALUES 
(1, '123 Comic St', '2024-09-01', '10:00', '12.00'),
(2, '456 Comic St', '2024-09-01', '11:00', '15.00'),
(3, '789 Comic St', '2024-09-10', '12:00', '17.00'),
(4, '101 Comic St', '2024-09-10', '13:00', '18.00'),
(5, '202 Comic St', '2024-08-15', '14:00', '20.00'),
(6, '303 Comic St', '2024-11-15', '15:00', '22.00'),
(7, '404 Comic St', '2024-12-25', '16:00', '25.00'),
(8, '505 Comic St', '2024-01-10', '17:00', '27.00');

-- Insertar datos en la tabla RESEÑA
INSERT INTO RESEÑA (IdClienteCE, IdUsuarioCE, Fecha, Contenido)
VALUES 
(1, 1, '2024-04-30', 'Mala facturación'),
(2, 2, '2024-05-01', 'Producto defectuoso'),
(3, 2, '2024-04-30', 'Mala facturación'),
(4, 2, '2024-05-01', 'Producto defectuoso');

-- Insertar datos en la tabla AGREGA
INSERT INTO AGREGA (IdCarritoCE, ISBNCE, Fecha, Hora)
VALUES 
(1, '9783161484100', '2024-08-15', '10:00'),
(2, '9783161484100', '2024-09-01', '11:00'),
(3, '9783161484101', '2024-09-10', '12:00'),
(4, '9783161484101', '2024-08-20', '13:00'),
(5, '9783161484100', '2024-08-25', '14:00'),
(6, '9783161484100', '2024-09-05', '15:00');

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
INSERT INTO APLICA (IdPromocionCE, ISBNCE)
VALUES 
(1, '9783161484100'),
(2, '9780785192954'),
(3, '9783161484101'),
(4, '9780785192955'),
(5, '9780785192956'),
(6, '9780785192957');

-- Insertar datos en la tabla REPORTE
INSERT INTO REPORTE (IdUsuarioCE, Contenido)
VALUES 
(1, 'Reclamo sobre entrega'),
(2, 'Problema con el pago'),
(3, 'Consulta sobre el producto'),
(4, 'Reclamo de garantía');

