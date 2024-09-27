-- Nombre de los clientes dados de alta por el administrador “Jose Gervasio Artigas”.
SELECT c.NombreUser
FROM CLIENTE c
JOIN ADMINISTRADOR a ON c.IdUsuarioCE = a.IdUsuario
WHERE a.Nombre = 'Jose Gervasio' AND a.Apellido = 'Artigas';
