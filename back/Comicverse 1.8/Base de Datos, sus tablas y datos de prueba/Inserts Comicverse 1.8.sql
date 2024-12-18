-- Insertar datos en la tabla DATOS_EMPRESA
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
('ComicVerse', 'admin1@example.com', 'Juan', 'Pérez', '1985-01-15', 'ADM', '1234567890', '$2y$10$nCNU9ESv9ZFreiaUPeQwxeFi5WmiSt4TizLgLxlZIPY/PZB5kNXsS'), /*password1*/
('ComicVerse', 'admin2@example.com', 'María', 'González', '1990-03-22', 'ADM', '9876543210', '$2y$10$.bb40Em5dyIjlS7b7Y8wzuGUGQBy02cnbYHt1yDPdAcjDHU7ZagzW'), /*password2*/
('ComicVerse', 'jose.artigas@example.com', 'Jose Gervasio', 'Artigas', '1980-01-01', 'ADM', '1234567891', '$2y$10$BEXsJJiMR7WK3AgnquHEWetj1nYmGrbk1Ynt9RzlDe4bzm25F460S'), /*password12*/
('ComicVerse', 'ana.lopez@example.com', 'Ana', 'Lopez', '1985-05-15', 'ADM', '1234567892', '$2y$10$ObGG5tlfykf0EciB6hWtr.QhMw/nK5ZZnn9FykbC795HwK6LCzUw6'), /*password34*/
('ComicVerse', 'solo.admin@example.com', 'Solo', 'Admin', '1990-07-20', 'ADM', '1234567893', '$2y$10$Uhrzit79wUY/76L4nOHjqeWP13I/CjkRQTzkefPsdAr4dsV7R8uTO'); /*password56*/

-- Insertar datos en la tabla CLIENTE
INSERT INTO CLIENTE (IdUsuarioCE, NombreUser, Email, Contrasenia, TipoUsuario, NroTelefono, Nacionalidad, AñoNacimiento)
VALUES 
(1, 'Juan Perez', 'juan.perez@example.com', 'pass123', 'CLI', 123456789, 'Uruguaya', 1990),
(1, 'Maria Gomez', 'maria.gomez@example.com', 'pass123', 'CLI', 987654321, 'Uruguaya', 1985),
(1, 'Pedro Sanchez', 'pedro.sanchez@example.com', 'pass123', 'CLI', 123456781, 'Uruguaya', 1991),
(1, 'Ana Martinez', 'ana.martinez@example.com', 'pass123', 'CLI', 987654322, 'Uruguaya', 1987),
(1, 'Miguel Torres', 'miguel.torres@example.com', 'pass123', 'CLI', 123456782, 'Uruguaya', 1993),
(2, 'Carlos Rodriguez', 'carlos.rodriguez@example.com', 'pass123', 'CLI', 123456780, 'Uruguaya', 1992),
(2, 'Laura Fernandez', 'laura.fernandez@example.com', 'pass123', 'CLI', 987654320, 'Uruguaya', 1988),
(2, 'Lucia Ramirez', 'lucia.ramirez@example.com', 'pass123', 'CLI', 987654323, 'Uruguaya', 1986),
(2, 'Jorge Lopez', 'jorge.lopez@example.com', 'pass123', 'CLI', 123456783, 'Uruguaya', 1994),
(2, 'Sofia Gonzalez', 'sofia.gonzalez@example.com', 'pass123', 'CLI', 987654324, 'Uruguaya', 1989),
(2, 'Solo Registrado', 'solo.registrado@example.com', 'pass123', 'CLI', 123456799, 'Uruguaya', 1995);

-- Insertar datos en la tabla CATEGORIA
INSERT INTO CATEGORIA (NombreCategoria) 
VALUES 
('Acción'),
('Superhéroes'),
('Terror'),
('Aventura'),
('Fantasía'),
('Ciencia Ficción'),
('Clásicos'),
('Misterio'),
('Alternativa'),
('Romance'),
('Drama'),
('Tragedia'),
('Futurista'),
('Origen'),
('Tensión'),
('Psicológico'),
('Deportes');

-- Insertar datos en la tabla HISTORIETA
INSERT INTO HISTORIETA (ISBN, NombreCategoriaCE, Nombre, Imagen, EditOrg, Autores, Paginas, Tamaño, Contenido, Formato, Edad, Interior, Precio)
VALUES 
('9784065137003', 'Acción', 'VINLAND SAGA VOL. 10', '9784065137003.png', 'Kodansha', 'Makoto Yukimura', 250, '13x18', 'Capítulos 55-60', 'Rústica', 12, 'Blanco y Negro', 600.00),
('9780785192964', 'Superhéroes', 'Hulk: Gris', '9780785192964.png', 'Marvel Comics', 'Jeph Loeb, Tim Sale', 160, '20x30', 'Hulk: Gray 1-6', 'Rústica', 16, 'Color', 800.00),
('9780785192954', 'Acción', 'Venom: Protector Letal', '9780785192954.png', 'Marvel Comics', 'David Michelinie, Todd McFarlane', 120, '20x30', 'Venom: Lethal Protector 1-6', 'Rústica', 16, 'Color', 700.00),
('9780785192955', 'Terror', 'Venom (2018)', '9780785192955.png', 'Marvel Comics', 'Donny Cates', 160, '20x30', 'Venom 1-6', 'Rústica', 16, 'Color', 800.00),
('9780785192956', 'Aventura', 'El Asombroso Hombre Araña', '9780785192956.png', 'Marvel Comics', 'Stan Lee, Steve Ditko', 150, '20x30', 'Amazing Spider-Man 1-6', 'Rústica', 12, 'Color', 750.00),
('9780785192957', 'Fantasía', 'Ultimate Hombre Araña', '9780785192957.png', 'Marvel Comics', 'Brian Michael Bendis', 200, '20x30', 'Ultimate Spider-Man 1-6', 'Rústica', 12, 'Color', 900.00),
('9780785192958', 'Ciencia Ficción', 'Planeta Hulk', '9780785192958.png', 'Marvel Comics', 'Greg Pak', 192, '20x30', 'Planet Hulk 1-6', 'Rústica', 16, 'Color', 800.00),
('9781401263119', 'Clásicos', 'El Regreso del Caballero Oscuro', '9781401263119.png', 'DC Comics', 'Frank Miller', 224, '20x30', 'The Dark Knight Returns 1-4', 'Cartoné', 16, 'Color', 950.00),
('9781401234516', 'Misterio', 'Hush', '9781401234516.png', 'DC Comics', 'Jeph Loeb, Jim Lee', 384, '20x30', 'Batman: Hush 1-12', 'Cartoné', 16, 'Color', 1200.00),
('9781401238964', 'Superhéroes', 'All-Star Superman', '9781401238964.png', 'DC Comics', 'Grant Morrison', 256, '20x30', 'All-Star Superman 1-12', 'Cartoné', 12, 'Color', 1100.00),
('9781401290962', 'Alternativa', 'Superman: Hijo Rojo', '9781401290962.png', 'DC Comics', 'Mark Millar', 200, '20x30', 'Superman: Red Son 1-3', 'Cartoné', 12, 'Color', 900.00),
('9780785192959', 'Romance', 'Hombre Araña: Azul', '9780785192959.png', 'Marvel Comics', 'Jeph Loeb, Tim Sale', 160, '20x30', 'Spider-Man: Blue 1-6', 'Rústica', 12, 'Color', 700.00),
('9780785192960', 'Drama', 'Hombre Araña: Historia de Vida', '9780785192960.png', 'Marvel Comics', 'Nick Spencer', 160, '20x30', 'Spider-Man: Life Story 1-6', 'Rústica', 12, 'Color', 800.00),
('9780785192961', 'Tragedia', 'Hombre Araña: La Última Cacería de Kraven', '9780785192961.png', 'Marvel Comics', 'J.M. DeMatteis', 160, '20x30', 'Kraven’s Last Hunt', 'Rústica', 12, 'Color', 700.00),
('9780785192962', 'Misterio', 'Hombre Araña: La Noche que Murió Gwen Stacy', '9780785192962.png', 'Marvel Comics', 'Gerry Conway', 160, '20x30', 'The Night Gwen Stacy Died', 'Rústica', 12, 'Color', 700.00),
('9780785192963', 'Futurista', 'Hulk: Futuro Imperfecto', '9780785192963.png', 'Marvel Comics', 'Peter David', 128, '20x30', 'Hulk: Future Imperfect 1-2', 'Rústica', 16, 'Color', 600.00),
('9780785192965', 'Ciencia Ficción', 'Hulk: El Fin', '9780785192965.png', 'Marvel Comics', 'Peter David', 112, '20x30', 'Hulk: The End', 'Rústica', 16, 'Color', 600.00),
('9780785192966', 'Origen', 'Batman: Año Uno', '9780785192966.png', 'DC Comics', 'Frank Miller', 48, '20x30', 'Batman: Year One', 'Rústica', 12, 'Color', 400.00),
('9780785192967', 'Misterio', 'Batman: El Largo Halloween', '9780785192967.png', 'DC Comics', 'Jeph Loeb', 384, '20x30', 'Batman: The Long Halloween 1-13', 'Cartoné', 16, 'Color', 1200.00),
('9780785192968', 'Tensión', 'Batman: La Broma Asesina', '9780785192968.png', 'DC Comics', 'Alan Moore', 48, '20x30', 'Batman: The Killing Joke', 'Rústica', 12, 'Color', 400.00),
('9780785192969', 'Psicológico', 'Batman: Asilo Arkham', '9780785192969.png', 'DC Comics', 'Grant Morrison', 160, '20x30', 'Arkham Asylum: A Serious House on Serious Earth', 'Cartoné', 16, 'Color', 800.00),
('9780785192970', 'Clásicos', 'Superman: Para Todas las Estaciones', '9780785192970.png', 'DC Comics', 'Jeph Loeb', 144, '20x30', 'Superman: For All Seasons', 'Cartoné', 12, 'Color', 700.00),
('9780785192971', 'Clásicos', 'Superman: Legado', '9780785192971.png', 'DC Comics', 'Mark Waid', 384, '20x30', 'Superman: Birthright', 'Cartoné', 16, 'Color', 1200.00),
('9780785192972', 'Alternativa', 'Superman: Identidad Secreta', '9780785192972.png', 'DC Comics', 'Kurt Busiek', 200, '20x30', 'Superman: Secret Identity', 'Cartoné', 12, 'Color', 900.00),
('9780785192973', 'Clásicos', 'Superman: ¿Qué le Sucedió al Hombre del Mañana?', '9780785192973.png', 'DC Comics', 'Alan Moore', 80, '20x30', 'Superman: Whatever Happened to the Man of Tomorrow?', 'Rústica', 12, 'Color', 500.00),
('9780785192974', 'Terror', 'Venom: Origen Oscuro', '9780785192974.png', 'Marvel Comics', 'Mike Costa', 112, '20x30', 'Venom: Dark Origin 1-5', 'Rústica', 16, 'Color', 600.00),
('9784088744458', 'Aventura', 'NARUTO VOL. 44', '9784088744458.png', 'Shueisha', 'Masashi Kishimoto', 200, '11x17', 'Naruto 44', 'Rústica', 12, 'Blanco y Negro', 400.00),
('9781928374611', 'Fantasía', 'SAINT SEIYA ED. KANZENBAN 13', '9781928374611.png', 'Akita Shoten', 'Masami Kurumada', 200, '13x18', 'Saint Seiya 13', 'Cartoné', 12, 'Color', 600.00),
('9781421580851', 'Deportes', 'HAIKYU!! 29', '9781421580851.png', 'Shueisha', 'Haruichi Furudate', 192, '11x17', 'Haikyuu!! 29', 'Rústica', 12, 'Blanco y Negro', 400.00),
('9784088721459', 'Aventura', 'HUNTER X HUNTER 34', '9784088721459.png', 'Shueisha', 'Yoshihiro Togashi', 200, '11x17', 'Hunter x Hunter 31-34', 'Rústica', 12, 'Blanco y Negro', 400.00),
('9784063743609', 'Acción', 'VAGABOND VOL. 34', '9784063743609.png', 'Kodansha', 'Takehiko Inoue', 220, '13x18', 'Vagabond 33-34', 'Cartoné', 16, 'Blanco y Negro', 700.00),
('9784048917346', 'Fantasía', 'MONOGATARI VOL. 12', '9784048917346.png', 'Kodansha', 'Nisio Isin', 224, '13x18', 'Monogatari 12', 'Cartoné', 16, 'Blanco y Negro', 700.00),
('9784065188551', 'Acción', 'WIND BREAKER VOL. 13', '9784065188551.png', 'Kodansha', 'Hiroshi Takahashi', 192, '13x18', 'Wind Breaker 13', 'Rústica', 12, 'Blanco y Negro', 600.00),
('9784088744526', 'Aventura', 'POKÉMON RUBY & SAPPHIRE VOL. 3', '9784088744526.png', 'Shogakukan', 'Hidenori Kusaka', 192, '11x17', 'Pokémon Ruby & Sapphire 3', 'Rústica', 12, 'Color', 400.00),
('9784088744533', 'Aventura', 'POKÉMON GOLD & SILVER VOL. 6', '9784088744533.png', 'Shogakukan', 'Hidenori Kusaka', 192, '11x17', 'Pokémon Gold & Silver 6', 'Rústica', 12, 'Color', 400.00),
('9784063732047', 'Drama', 'SPY\'S WIFE', '9784063732047.png', 'Kodansha', 'Shinjiro', 180, '11x17', 'Spy\'s Wife', 'Rústica', 12, 'Color', 500.00),
('9781975327004', 'Fantasía', 'SOLO LEVELING VOL. 7', '9781975327004.png', 'Yen Press', 'Chugong', 180, '13x18', 'Solo Leveling 7', 'Rústica', 12, 'Color', 600.00);

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
INSERT INTO TICKET (IdCarritoCE, dirEnvio, Fecha, Hora, Total, Contenido)
VALUES 
(1, '123 Comic St', '2024-09-01', '10:00', '800.00', 'Venom (2018)'),
(2, '456 Comic St', '2024-09-01', '11:00', '800.00', 'Venom (2018)'),
(3, '789 Comic St', '2024-09-10', '12:00', '900.00', 'Ultimate Hombre Araña'),
(4, '101 Comic St', '2024-09-10', '13:00', '900.00', 'Ultimate Hombre Araña'),
(5, '202 Comic St', '2024-08-15', '14:00', '800.00', 'Venom (2018)'),
(6, '303 Comic St', '2024-11-15', '15:00', '800.00', 'Venom (2018)');


-- Insertar datos en la tabla AGREGA
INSERT INTO AGREGA (IdCarritoCE, ISBNCE, Fecha, Hora)
VALUES 
(1, '9780785192955', '2024-08-15', '10:00'),
(2, '9780785192955', '2024-09-01', '11:00'),
(3, '9780785192957', '2024-09-10', '12:00'),
(4, '9780785192957', '2024-08-20', '13:00'),
(5, '9780785192955', '2024-08-25', '14:00'),
(6, '9780785192955', '2024-09-05', '15:00');

-- Insertar datos en la tabla CREA
INSERT INTO CREA (IdUsuarioCE)
VALUES 
(1),
(2),
(1),
(2),
(1),
(2);

-- Insertar datos en la tabla REPORTE
INSERT INTO REPORTE (IdUsuarioCE, Contenido)
VALUES 
(1, 'Reclamo sobre entrega'),
(2, 'Problema con el pago'),
(3, 'Consulta sobre el producto'),
(4, 'Reclamo de garantía');

-- Insertar datos en la tabla RESEÑA
INSERT INTO RESEÑA (IdClienteCE, IdUsuarioCE, Fecha, Contenido)
VALUES 
(1, 1, '2024-04-30', 'Mala facturación'),
(2, 2, '2024-05-01', 'Producto defectuoso'),
(3, 2, '2024-04-30', 'Mala facturación'),
(4, 2, '2024-05-01', 'Producto defectuoso'),
(5, 1, '2024-06-15', 'Excelente calidad'),
(6, 1, '2024-07-20', 'Entrega rápida y eficiente'),
(7, 2, '2024-08-01', 'Me encantó el producto, volveré a comprar'),
(8, 2, '2024-08-15', 'Buen servicio al cliente'),
(9, 1, '2024-09-10', 'Recomiendo este sitio, buena experiencia');

-- Insertar datos en la tabla APLICA
INSERT INTO APLICA (NombreCategoriaCE, NombrePromocion, Procentaje, FechaInicio, FechaFin) VALUES
('Acción', 'Descuento Verano', 15, '2024-01-01', '2024-03-31'),
('Superhéroes', 'Black Friday', 25, '2024-11-01', '2024-11-30'),
('Terror', 'Oferta de Halloween', 20, '2024-10-01', '2024-10-31'),
('Aventura', 'Descuento Navidad', 30, '2024-12-01', '2024-12-25'),
('Fantasía', 'Descuento Primavera', 10, '2024-03-01', '2024-05-31'),
('Ciencia Ficción', 'Semana del Comic', 15, '2024-08-01', '2024-08-07'),
('Clásicos', 'Rebaja de Fin de Año', 20, '2024-12-26', '2025-01-10');