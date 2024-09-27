-- Ids de carritos generados con productos de la categoría  “nombre”.
SELECT DISTINCT a.IdCarritoCE
FROM AGREGA a
JOIN CATEGORIA c ON a.NombreCategoriaCE = c.NombreCategoria
WHERE c.NombreCategoria = 'nombre';
