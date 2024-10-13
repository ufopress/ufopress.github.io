use comicverse;

-- Poblar la tabla ADMINISTRADOR
INSERT INTO ADMINISTRADOR (Email, Nombre, Apellido, FechaNacimiento, TipoUsuario, NroTelefono, Contraseña) VALUES
('admin1@example.com', 'Juan', 'Pérez', '1985-01-15', 'ADM', '123456789', 'password1'),
('admin2@example.com', 'María', 'González', '1990-03-22', 'ADM', '987654321', 'password2');

-- Poblar la tabla DATOS_EMPRESA
INSERT INTO DATOS_EMPRESA (NombreEmpresa, Email, Rubro, Logo, NombreAdmin, EmailAdmin) VALUES
('ComicVerse', 'comicverse@example.com', 'Comics', 'img/LogoComicVerse.png', 'Juan', 'admin1@example.com');

-- Poblar la tabla DATOS_EMPRESA_CONTACTO
INSERT INTO DATOS_EMPRESA_CONTACTO (NombreEmpresa, Email, Celular1, Celular2, Instagram, Facebook, XTwitter) VALUES
('ComicVerse', 'comicverse@example.com', '1234567890', '0987654321', '@comicverse', '@comicverseFB', '@comicverseTwitter');

-- Poblar la tabla DATOS_EMPRESA_DIRECCION
INSERT INTO DATOS_EMPRESA_DIRECCION (NombreEmpresa, Email, Calle, Numero) VALUES
('ComicVerse', 'comicverse@example.com', 'Av. Libertador', '1000');

-- Poblar la tabla CLIENTE
INSERT INTO CLIENTE (NombreUser, Email, Contraseña, TipoUsuario, NroTelefono, Nacionalidad, AñoNacimiento, NombreAdmin, EmailAdmin) VALUES
('cliente1', 'cliente1@example.com', 'password1', 'CLI', '1234567890', 'Uruguayo', '1995', 'Juan', 'admin1@example.com'),
('cliente2', 'cliente2@example.com', 'password2', 'CLI', '0987654321', 'Argentino', '1992', 'Juan', 'admin1@example.com');

-- Poblar la tabla RESEÑA
INSERT INTO RESEÑA (IdReseña, Fecha, Contenido, NombreUser, Email) VALUES
(1, '2024-09-01', 'Excelente historia!', 'cliente1', 'cliente1@example.com'),
(2, '2024-09-02', 'No me gustó mucho.', 'cliente2', 'cliente2@example.com');

-- Poblar la tabla REPORTE
INSERT INTO REPORTE (NroReporte, Contenido, EmailAdmin, NombreAdmin) VALUES
(1, 'Reporte sobre el cliente1', 'admin1@example.com', 'Juan'),
(2, 'Reporte sobre el cliente2', 'admin2@example.com', 'María');

-- Poblar la tabla PROMOCION
INSERT INTO PROMOCION (IdPromocion, FechaInicio, Descripcion, FechaFin, PorcentajeDescuento, EmailAdmin, NombreAdmin) VALUES
(1, '2024-01-01', 'Descuento de Año Nuevo', '2024-01-15', 0.15, 'admin1@example.com', 'Juan'),
(2, '2024-06-01', 'Promoción de Verano', '2024-06-30', 0.10, 'admin2@example.com', 'María');

-- Poblar la tabla CARRITO
INSERT INTO CARRITO (IdCarrito, NombreUser, Email) VALUES
(1, 'cliente1', 'cliente1@example.com'),
(2, 'cliente2', 'cliente2@example.com');

-- Poblar la tabla TICKET
INSERT INTO TICKET (NroTicket, Calle, Numero, Fecha, Hora, CostoTotal, IdCarrito) VALUES
(1, 'Av. Libertador', 1000, '2024-09-10', '12:00', 20.00, 1),
(2, 'Calle Falsa', 123, '2024-09-11', '12:30', 15.00, 2);

-- Poblar la tabla CATEGORIA
INSERT INTO CATEGORIA (NombreCategoria) VALUES
('Acción'),
('Drama'),
('Aventura'),
('Deportes');

-- Poblar la tabla HISTORIETA
INSERT INTO HISTORIETA (ISBN, Nombre, Imagen, Editorial, Autores, Paginas, Tamaño, Contenido, Formato, Edad, Interior, Precio, NombreCategoria) VALUES
('00001', 'NARUTO VOL. 44', 'img/00001.avif', 'Shonen Jump', 'Masashi Kishimoto', 200, '13x18', 'Naruto y sus amigos luchan por proteger su hogar de un enemigo poderoso.', 'Manga', 12, 'Color', 10.00, 'Acción'),
('00002', 'SAINT SEIYA ED. KANZENBAN 13', 'img/00002.avif', 'IVREA', 'Masami Kurumada', 250, '13x18', 'Los Santos de Atena deben enfrentarse a nuevos desafíos en su búsqueda por proteger a la diosa.', 'Manga', 12, 'Color', 12.00, 'Acción'),
('00003', 'HAIKYU!! 29', 'img/00003.avif', 'Shonen Jump', 'Haruichi Furudate', 190, '13x18', 'El equipo de voleibol se prepara para su gran partido contra su rival más fuerte.', 'Manga', 10, 'Color', 9.00, 'Deportes'),
('00004', 'HUNTER X HUNTER 34', 'img/00004.avif', 'Shonen Jump', 'Yoshihiro Togashi', 210, '13x18', 'Gon y sus amigos deben superar pruebas peligrosas para lograr sus objetivos.', 'Manga', 12, 'Color', 10.00, 'Acción'),
('00005', 'VAGABOND VOL. 34', 'img/00005.avif', 'Kodansha', 'Takehiko Inoue', 300, '13x18', 'La historia de Musashi Miyamoto y su búsqueda por convertirse en el mejor espadachín.', 'Manga', 16, 'Color', 12.00, 'Aventura'),
('00006', 'MONOGATARI VOL. 12', 'img/00006.avif', 'Panini', 'Nisio Isin', 200, '13x18', 'Un joven se enfrenta a misterios y criaturas sobrenaturales en su vida diaria.', 'Manga', 12, 'Color', 9.00, 'Drama'),
('00007', 'WIND BREAKER VOL. 13', 'img/00007.avif', 'Kodansha', 'Satoru Nii', 180, '13x18', 'Un grupo de jóvenes se enfrenta a desafíos mientras luchan por ser los mejores en su deporte.', 'Manga', 10, 'Color', 8.00, 'Acción'),
('00008', 'POKÉMON RUBY & SAPPHIRE VOL. 3', 'img/00008.avif', 'Viz Media', 'Mitsuhiro Arita', 220, '13x18', 'Los entrenadores se embarcan en nuevas aventuras mientras buscan Pokémon legendarios.', 'Manga', 12, 'Color', 11.00, 'Aventura'),
('00009', 'POKÉMON GOLD & SILVER VOL. 6', 'img/00009.avif', 'Viz Media', 'Mitsuhiro Arita', 200, '13x18', 'Ash y sus amigos luchan en emocionantes batallas Pokémon.', 'Manga', 12, 'Color', 10.00, 'Aventura'),
('00010', 'SPY\'S WIFE', 'img/00010.avif', 'Kodansha', 'Masasumi Kakizaki', 150, '13x18', 'Una historia de intriga y secretos en un mundo de espionaje.', 'Manga', 18, 'Color', 10.00, 'Drama'),
('00011', 'SOLO LEVELING VOL. 7', 'img/00011.avif', 'Yen Press', 'Chugong', 250, '13x18', 'Un cazador se esfuerza por volverse más fuerte en un mundo lleno de monstruos.', 'Manga', 12, 'Color', 12.00, 'Acción'),
('00012', 'VINLAND SAGA VOL. 10', 'img/00012.avif', 'Kodansha', 'Makoto Yukimura', 250, '13x18', 'Un joven vikingo busca venganza y redención en un mundo cruel.', 'Manga', 12, 'Color', 11.00, 'Aventura');

-- Poblar la tabla PROMOCION_APLICA_HISTORIETA
INSERT INTO PROMOCION_APLICA_HISTORIETA (IdPromocion, ISBN) VALUES
(1, '00001'),
(2, '00002'),
(1, '00003'),
(2, '00004');

-- Poblar la tabla CARRITO_AGREGA_HISTORIETA
INSERT INTO CARRITO_AGREGA_HISTORIETA (Fecha, Hora, IdCarrito, ISBN) VALUES
('2024-09-12', '10:00', 1, '00001'),
('2024-09-12', '10:30', 1, '00002'),
('2024-09-12', '11:00', 2, '00003');