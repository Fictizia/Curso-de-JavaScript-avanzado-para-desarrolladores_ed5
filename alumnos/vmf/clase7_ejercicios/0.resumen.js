/*
flags
-----
g: La busqueda es global, por defecto es hasta la primera ocurrencia.
i: La busqueda es case-insentive.
m: La busqueda es multilinea.

Métodos
-------
.test(string) > true/false
.exec(string) > Objeto con info con ocurrencias.
Si lo usamos con g podemos usar exec varias veces para encontrar todas las ocurrencias

También se pueden usar regExp como parámetros en:
.match, .search, .replace, .replaceAll .split


Mas cosas
---------
[] grupo de caracteres
[^] grupo de caracteres negativo "lo que no esté en el grupo"

Metacaracteres
--------------
^    Fuera de un grupo, indica que es el comienzo del string
$    Indica el final del string.
\d   Digito numérico. Equivalente a [0-9].
\w   Palabra, equivale a [a-zA-Z0-9_] (no contempla tildes ni espacios)
\W   Cualquier cosa que no sea una palabra
\s   Espacio en blanco
.    Cualquier cosa que NO sea salto de linea // comodin.
/[.]/ Referencia al carácter.

Repeticiones
------------
|  OR entre dos elementos
?  algo aparece 0 o 1 vez.
*  algo se repite 0 o a saber cuantas veces.
+  algo aparece 1 o más veces.

Repeticiones acotadas
---------------------
{num}     Algo se repite exactamente num veces.
{min,}    Algo se repite mínimo min veces
{min,max} Algo se repite mínimo num veces

---- PRO regex people
()     Grupos de captura
(?)    Crea un grupo de no-captura.
(?:)   Sirve para agrupar caracteres sin crear un grupo de captura
\n     Utiliza el valor capturado de índice n.

*/