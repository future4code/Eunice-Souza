# execicio 1
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
## exercicio 2
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

### exercicio 3
(a) - ALTER TABLE Actor DROP COLUMN salary;
este comando remolve uma a ou mais colunas, não usadas.

(b) - ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
--este comando remove apenas umaa coluna,, exp:(6).

(c) - ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
--este comando altera o tamanho existente de uma campo.

(d) - -- Agora,  altere a coluna gender da tabela ACTOR 
--para que ele aceite strings com até 100 caracteres
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

