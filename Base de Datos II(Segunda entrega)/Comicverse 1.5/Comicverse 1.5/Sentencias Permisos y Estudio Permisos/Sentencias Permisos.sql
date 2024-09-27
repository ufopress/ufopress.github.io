/*
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
*/

-- Permisos para ADMINISTRADOR
GRANT ALL PRIVILEGES ON *.* TO 'jose.artigas@example.com'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'ana.lopez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'solo.admin@example.com'@'localhost';

-- Permisos para CLIENTE
GRANT SELECT ON *.* TO 'juan.perez@example.com'@'localhost';
GRANT SELECT ON *.* TO 'maria.gomez@example.com'@'localhost';
GRANT SELECT ON *.* TO 'pedro.sanchez@example.com'@'localhost';
GRANT SELECT ON *.* TO 'ana.martinez@example.com'@'localhost';
GRANT SELECT ON *.* TO 'miguel.torres@example.com'@'localhost';
GRANT SELECT ON *.* TO 'carlos.rodriguez@example.com'@'localhost';
GRANT SELECT ON *.* TO 'laura.fernandez@example.com'@'localhost';
GRANT SELECT ON *.* TO 'lucia.ramirez@example.com'@'localhost';
GRANT SELECT ON *.* TO 'jorge.lopez@example.com'@'localhost';
GRANT SELECT ON *.* TO 'sofia.gonzalez@example.com'@'localhost';
GRANT SELECT ON *.* TO 'solo.registrado@example.com'@'localhost';
