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
('cliente2', 'cliente2@example.com', 'password2', 'CLI', '0987654321', 'Argentino', '1992', 'Juan', 'admin1@example.com'),
('lector_entusiasta', 'lector1@comicverse.com', 'hashed_password1', 'CLI', '091234567', 'Uruguaya', '1990', NULL, NULL),
('comic_lover', 'comiclover@comicverse.com', 'hashed_password2', 'CLI', '092345678', 'Uruguaya', '1985', NULL, NULL),
('aventurero92', 'aventurero92@comicverse.com', 'hashed_password3', 'CLI', '093456789', 'Uruguaya', '1992', NULL, NULL),
('drama_fan', 'dramafan@comicverse.com', 'hashed_password4', 'CLI', '094567890', 'Uruguaya', '1991', NULL, NULL),
('ficcion_fan', 'ficcionfan@comicverse.com', 'hashed_password5', 'CLI', '095678901', 'Uruguaya', '1993', NULL, NULL),
('coleccionista', 'coleccionista@comicverse.com', 'hashed_password6', 'CLI', '096789012', 'Uruguaya', '1987', NULL, NULL),
('manga_fan', 'mangafan@comicverse.com', 'hashed_password7', 'CLI', '097890123', 'Uruguaya', '1995', NULL, NULL),
('novato_comics', 'novatocomics@comicverse.com', 'hashed_password8', 'CLI', '098901234', 'Uruguaya', '1998', NULL, NULL);

-- Poblar la tabla RESEÑA
INSERT INTO RESEÑA (IdReseña, Fecha, Contenido, NombreUser, Email) VALUES
(1, '2024-09-03', 'Una colección impresionante, ¡me encanta el arte y las historias!', 'lector_entusiasta', 'lector1@comicverse.com'),
(2, '2024-09-04', 'Los mejores cómics que he leído en mucho tiempo. Volveré a comprar.', 'comic_lover', 'comiclover@comicverse.com'),
(3, '2024-09-05', 'Historietas llenas de acción y tramas intrigantes. ¡Recomendado!', 'aventurero92', 'aventurero92@comicverse.com'),
(4, '2024-09-06', 'El drama está perfectamente equilibrado con la acción. Historietas que te atrapan.', 'drama_fan', 'dramafan@comicverse.com'),
(5, '2024-09-07', 'Las historietas de ciencia ficción tienen un nivel excepcional. ¡Grandes títulos!', 'ficcion_fan', 'ficcionfan@comicverse.com'),
(6, '2024-09-08', 'Soy coleccionista y esta tienda tiene lo que necesito. Buenos precios y calidad.', 'coleccionista', 'coleccionista@comicverse.com'),
(7, '2024-09-09', 'El mejor lugar para conseguir mangas difíciles de encontrar. ¡Excelente servicio!', 'manga_fan', 'mangafan@comicverse.com'),
(8, '2024-09-10', 'Soy nuevo en el mundo de los cómics y me han ayudado mucho a encontrar mi primera colección.', 'novato_comics', 'novatocomics@comicverse.com');

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
('Superhéroes'),
('Aventura'),
('Terror'),
('Fantasía'),
('Ciencia Ficción'),
('Clásicos'),
('Misterio'),
('Alternativa'),
('Romance'),
('Tragedia'),
('Futurista'),
('Origen'),
('Tensión'),
('Psicológico'),
('Deportes');

-- Insertar datos en la tabla HISTORIETA
INSERT INTO HISTORIETA (ISBN, Nombre, Imagen, Editorial, Autores, Paginas, Tamaño, Contenido, Formato, Edad, Interior, Precio, NombreCategoria)
VALUES 
('9784065137003', 'VINLAND SAGA VOL. 10', '9784065137003.png', 'Kodansha', 'Makoto Yukimura', 250, '13x18', 'Capítulos 55-60', 'Rústica', 12, 'Blanco y Negro', 600.00, 'Acción'),
('9780785192964', 'Hulk: Gris', '9780785192964.png', 'Marvel Comics', 'Jeph Loeb, Tim Sale', 160, '20x30', 'Hulk: Gray 1-6', 'Rústica', 16, 'Color', 800.00, 'Superhéroes'),
('9780785192954', 'Venom: Protector Letal', '9780785192954.png', 'Marvel Comics', 'David Michelinie, Todd McFarlane', 120, '20x30', 'Venom: Lethal Protector 1-6', 'Rústica', 16, 'Color', 700.00, 'Acción'),
('9780785192955', 'Venom (2018)', '9780785192955.png', 'Marvel Comics', 'Donny Cates', 160, '20x30', 'Venom 1-6', 'Rústica', 16, 'Color', 800.00, 'Terror'),
('9780785192956', 'El Asombroso Hombre Araña', '9780785192956.png', 'Marvel Comics', 'Stan Lee, Steve Ditko', 150, '20x30', 'Amazing Spider-Man 1-6', 'Rústica', 12, 'Color', 750.00, 'Aventura'),
('9780785192957', 'Ultimate Hombre Araña', '9780785192957.png', 'Marvel Comics', 'Brian Michael Bendis', 200, '20x30', 'Ultimate Spider-Man 1-6', 'Rústica', 12, 'Color', 900.00, 'Fantasía'),
('9780785192958', 'Planeta Hulk', '9780785192958.png', 'Marvel Comics', 'Greg Pak', 192, '20x30', 'Planet Hulk 1-6', 'Rústica', 16, 'Color', 800.00, 'Ciencia Ficción'),
('9781401263119', 'El Regreso del Caballero Oscuro', '9781401263119.png', 'DC Comics', 'Frank Miller', 224, '20x30', 'The Dark Knight Returns 1-4', 'Cartoné', 16, 'Color', 950.00, 'Clásicos'),
('9781401234516', 'Hush', '9781401234516.png', 'DC Comics', 'Jeph Loeb, Jim Lee', 384, '20x30', 'Batman: Hush 1-12', 'Cartoné', 16, 'Color', 1200.00, 'Misterio'),
('9781401238964', 'All-Star Superman', '9781401238964.png', 'DC Comics', 'Grant Morrison', 256, '20x30', 'All-Star Superman 1-12', 'Cartoné', 12, 'Color', 1100.00, 'Superhéroes'),
('9781401290962', 'Superman: Hijo Rojo', '9781401290962.png', 'DC Comics', 'Mark Millar', 200, '20x30', 'Superman: Red Son 1-3', 'Cartoné', 12, 'Color', 900.00, 'Alternativa'),
('9780785192959', 'Hombre Araña: Azul', '9780785192959.png', 'Marvel Comics', 'Jeph Loeb, Tim Sale', 160, '20x30', 'Spider-Man: Blue 1-6', 'Rústica', 12, 'Color', 700.00, 'Romance'),
('9780785192960', 'Hombre Araña: Historia de Vida', '9780785192960.png', 'Marvel Comics', 'Nick Spencer', 160, '20x30', 'Spider-Man: Life Story 1-6', 'Rústica', 12, 'Color', 800.00, 'Drama'),
('9780785192961', 'Hombre Araña: La Última Cacería de Kraven', '9780785192961.png', 'Marvel Comics', 'J.M. DeMatteis', 160, '20x30', 'Kraven’s Last Hunt', 'Rústica', 12, 'Color', 700.00, 'Tragedia'),
('9780785192962', 'Hombre Araña: La Noche que Murió Gwen Stacy', '9780785192962.png', 'Marvel Comics', 'Gerry Conway', 160, '20x30', 'The Night Gwen Stacy Died', 'Rústica', 12, 'Color', 700.00, 'Misterio'),
('9780785192963', 'Hulk: Futuro Imperfecto', '9780785192963.png', 'Marvel Comics', 'Peter David', 128, '20x30', 'Hulk: Future Imperfect 1-2', 'Rústica', 16, 'Color', 600.00, 'Futurista'),
('9780785192965', 'Hulk: El Fin', '9780785192965.png', 'Marvel Comics', 'Peter David', 112, '20x30', 'Hulk: The End', 'Rústica', 16, 'Color', 600.00, 'Ciencia Ficción'),
('9780785192966', 'Batman: Año Uno', '9780785192966.png', 'DC Comics', 'Frank Miller', 48, '20x30', 'Batman: Year One', 'Rústica', 12, 'Color', 400.00, 'Origen'),
('9780785192967', 'Batman: El Largo Halloween', '9780785192967.png', 'DC Comics', 'Jeph Loeb', 384, '20x30', 'Batman: The Long Halloween 1-13', 'Cartoné', 16, 'Color', 1200.00, 'Misterio'),
('9780785192968', 'Batman: La Broma Asesina', '9780785192968.png', 'DC Comics', 'Alan Moore', 48, '20x30', 'Batman: The Killing Joke', 'Rústica', 12, 'Color', 400.00, 'Tensión'),
('9780785192969', 'Batman: Asilo Arkham', '9780785192969.png', 'DC Comics', 'Grant Morrison', 160, '20x30', 'Arkham Asylum: A Serious House on Serious Earth', 'Cartoné', 16, 'Color', 800.00, 'Psicológico'),
('9780785192970', 'Superman: Para Todas las Estaciones', '9780785192970.png', 'DC Comics', 'Jeph Loeb', 144, '20x30', 'Superman: For All Seasons', 'Cartoné', 12, 'Color', 700.00, 'Clásicos'),
('9780785192971', 'Superman: Legado', '9780785192971.png', 'DC Comics', 'Mark Waid', 384, '20x30', 'Superman: Birthright', 'Cartoné', 16, 'Color', 1200.00, 'Clásicos'),
('9780785192972', 'Superman: Identidad Secreta', '9780785192972.png', 'DC Comics', 'Kurt Busiek', 200, '20x30', 'Superman: Secret Identity', 'Cartoné', 12, 'Color', 900.00, 'Alternativa'),
('9780785192973', 'Superman: ¿Qué le Sucedió al Hombre del Mañana?', '9780785192973.png', 'DC Comics', 'Alan Moore', 80, '20x30', 'Superman: Whatever Happened to the Man of Tomorrow?', 'Rústica', 12, 'Color', 500.00, 'Clásicos'),
('9780785192974', 'Venom: Origen Oscuro', '9780785192974.png', 'Marvel Comics', 'Mike Costa', 112, '20x30', 'Venom: Dark Origin 1-5', 'Rústica', 16, 'Color', 600.00, 'Terror'),
('9784088744458', 'NARUTO VOL. 44', '9784088744458.png', 'Shueisha', 'Masashi Kishimoto', 200, '11x17', 'Naruto 44', 'Rústica', 12, 'Blanco y Negro', 400.00, 'Aventura'),
('9781928374611', 'SAINT SEIYA ED. KANZENBAN 13', '9781928374611.png', 'Akita Shoten', 'Masami Kurumada', 200, '13x18', 'Saint Seiya 13', 'Cartoné', 12, 'Color', 600.00, 'Fantasía'),
('9781421580851', 'HAIKYU!! 29', '9781421580851.png', 'Shueisha', 'Haruichi Furudate', 192, '11x17', 'Haikyuu!! 29', 'Rústica', 12, 'Blanco y Negro', 400.00, 'Deportes'),
('9784088721459', 'HUNTER X HUNTER 34', '9784088721459.png', 'Shueisha', 'Yoshihiro Togashi', 200, '11x17', 'Hunter x Hunter 31-34', 'Rústica', 12, 'Blanco y Negro', 400.00, 'Aventura'),
('9784063743609', 'VAGABOND VOL. 34', '9784063743609.png', 'Kodansha', 'Takehiko Inoue', 220, '13x18', 'Vagabond 33-34', 'Cartoné', 16, 'Blanco y Negro', 700.00, 'Acción'),
('9784048917346', 'MONOGATARI VOL. 12', '9784048917346.png', 'Kodansha', 'Nisio Isin', 224, '13x18', 'Monogatari 12', 'Cartoné', 16, 'Blanco y Negro', 700.00, 'Fantasía'),
('9784065188551', 'WIND BREAKER VOL. 13', '9784065188551.png', 'Kodansha', 'Hiroshi Takahashi', 192, '13x18', 'Wind Breaker 13', 'Rústica', 12, 'Blanco y Negro', 600.00, 'Acción'),
('9784088744526', 'POKÉMON RUBY & SAPPHIRE VOL. 3', '9784088744526.png', 'Shogakukan', 'Hidenori Kusaka', 192, '11x17', 'Pokémon Ruby & Sapphire 3', 'Rústica', 12, 'Color', 400.00, 'Aventura'),
('9784088744533', 'POKÉMON GOLD & SILVER VOL. 6', '9784088744533.png', 'Shogakukan', 'Hidenori Kusaka', 192, '11x17', 'Pokémon Gold & Silver 6', 'Rústica', 12, 'Color', 400.00, 'Aventura'),
('9784063732047', 'SPY\'S WIFE', '9784063732047.png', 'Kodansha', 'Shinjiro', 180, '11x17', 'Spy\'s Wife', 'Rústica', 12, 'Color', 500.00, 'Drama'),
('9781975327004', 'SOLO LEVELING VOL. 7', '9781975327004.png', 'Yen Press', 'Chugong', 180, '13x18', 'Solo Leveling 7', 'Rústica', 12, 'Color', 600.00, 'Fantasía');