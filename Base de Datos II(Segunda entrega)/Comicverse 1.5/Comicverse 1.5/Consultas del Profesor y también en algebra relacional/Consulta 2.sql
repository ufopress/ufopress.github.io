-- Nro de tickets los cuales hayan sido comprados con promoción el último mes.
SELECT DISTINCT T.NroTicket, T.Fecha
FROM TICKET T
JOIN CARRITO C ON T.IdCarritoCE = C.IdCarrito
JOIN AGREGA A ON C.IdCarrito = A.IdCarritoCE
JOIN APLICA AP ON A.ISBNCE = AP.ISBNCE
WHERE AP.IdPromocionCE IS NOT NULL
AND T.Fecha >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
AND T.Fecha <= CURDATE();