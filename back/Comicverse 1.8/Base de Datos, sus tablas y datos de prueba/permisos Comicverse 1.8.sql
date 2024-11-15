-- Conceder privilegios a los administradores
GRANT ALL PRIVILEGES ON comicverse.* TO 'admin1@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.* TO 'admin2@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.* TO 'jose.artigas@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.* TO 'ana.lopez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.* TO 'solo.admin@example.com'@'localhost';

-- Conceder privilegios sobre RESEÑA
GRANT ALL PRIVILEGES ON comicverse.RESEÑA TO 'juan.perez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.RESEÑA TO 'maria.gomez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.RESEÑA TO 'pedro.sanchez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.RESEÑA TO 'ana.martinez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.RESEÑA TO 'miguel.torres@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.RESEÑA TO 'carlos.rodriguez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.RESEÑA TO 'laura.fernandez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.RESEÑA TO 'lucia.ramirez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.RESEÑA TO 'jorge.lopez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.RESEÑA TO 'sofia.gonzalez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.RESEÑA TO 'solo.registrado@example.com'@'localhost';

-- Conceder privilegios sobre CARRITO
GRANT ALL PRIVILEGES ON comicverse.CARRITO TO 'juan.perez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CARRITO TO 'maria.gomez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CARRITO TO 'pedro.sanchez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CARRITO TO 'ana.martinez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CARRITO TO 'miguel.torres@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CARRITO TO 'carlos.rodriguez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CARRITO TO 'laura.fernandez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CARRITO TO 'lucia.ramirez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CARRITO TO 'jorge.lopez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CARRITO TO 'sofia.gonzalez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CARRITO TO 'solo.registrado@example.com'@'localhost';

-- Conceder privilegios sobre CLIENTE
GRANT ALL PRIVILEGES ON comicverse.CLIENTE TO 'juan.perez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CLIENTE TO 'maria.gomez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CLIENTE TO 'pedro.sanchez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CLIENTE TO 'ana.martinez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CLIENTE TO 'miguel.torres@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CLIENTE TO 'carlos.rodriguez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CLIENTE TO 'laura.fernandez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CLIENTE TO 'lucia.ramirez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CLIENTE TO 'jorge.lopez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CLIENTE TO 'sofia.gonzalez@example.com'@'localhost';
GRANT ALL PRIVILEGES ON comicverse.CLIENTE TO 'solo.registrado@example.com'@'localhost';

-- Conceder privilegios sobre HISTORIETA
GRANT SELECT ON comicverse.HISTORIETA TO 'juan.perez@example.com'@'localhost';
GRANT SELECT ON comicverse.HISTORIETA TO 'maria.gomez@example.com'@'localhost';
GRANT SELECT ON comicverse.HISTORIETA TO 'pedro.sanchez@example.com'@'localhost';
GRANT SELECT ON comicverse.HISTORIETA TO 'ana.martinez@example.com'@'localhost';
GRANT SELECT ON comicverse.HISTORIETA TO 'miguel.torres@example.com'@'localhost';
GRANT SELECT ON comicverse.HISTORIETA TO 'carlos.rodriguez@example.com'@'localhost';
GRANT SELECT ON comicverse.HISTORIETA TO 'laura.fernandez@example.com'@'localhost';
GRANT SELECT ON comicverse.HISTORIETA TO 'lucia.ramirez@example.com'@'localhost';
GRANT SELECT ON comicverse.HISTORIETA TO 'jorge.lopez@example.com'@'localhost';
GRANT SELECT ON comicverse.HISTORIETA TO 'sofia.gonzalez@example.com'@'localhost';
GRANT SELECT ON comicverse.HISTORIETA TO 'solo.registrado@example.com'@'localhost';

-- Conceder privilegios sobre TICKET
GRANT SELECT ON comicverse.TICKET TO 'juan.perez@example.com'@'localhost';
GRANT SELECT ON comicverse.TICKET TO 'maria.gomez@example.com'@'localhost';
GRANT SELECT ON comicverse.TICKET TO 'pedro.sanchez@example.com'@'localhost';
GRANT SELECT ON comicverse.TICKET TO 'ana.martinez@example.com'@'localhost';
GRANT SELECT ON comicverse.TICKET TO 'miguel.torres@example.com'@'localhost';
GRANT SELECT ON comicverse.TICKET TO 'carlos.rodriguez@example.com'@'localhost';
GRANT SELECT ON comicverse.TICKET TO 'laura.fernandez@example.com'@'localhost';
GRANT SELECT ON comicverse.TICKET TO 'lucia.ramirez@example.com'@'localhost';
GRANT SELECT ON comicverse.TICKET TO 'jorge.lopez@example.com'@'localhost';
GRANT SELECT ON comicverse.TICKET TO 'sofia.gonzalez@example.com'@'localhost';
GRANT SELECT ON comicverse.TICKET TO 'solo.registrado@example.com'@'localhost';

-- Aplicar cambios
FLUSH PRIVILEGES;

