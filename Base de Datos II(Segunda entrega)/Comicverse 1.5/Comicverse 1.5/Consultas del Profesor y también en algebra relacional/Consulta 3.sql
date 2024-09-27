-- Nombre del cliente que generó una queja por mala facturación el 30/04/24 y nombre de quien le contestó.
SELECT c1.NombreUser AS Cliente, a.Nombre AS Administrador
FROM RESEÑA r
JOIN CLIENTE c1 ON r.IdClienteCE = c1.IdCliente
JOIN ADMINISTRADOR a ON r.IdUsuarioCE = a.IdUsuario
WHERE r.Fecha = '2024-04-30' AND r.Contenido = 'Mala facturación';