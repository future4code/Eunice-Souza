-- Criar tabela
CREATE TABLE Actor(
	id VARCHAR(255) PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   salary FLOAT NOT NULL DEFAULT 100000,
   birth_date DATE NOT NULL,
   gender VARCHAR(6) NOT NULL
);

CREATE TABLE Actor( -- usando o auto_increment
	id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(255) NOT NULL,
   salary FLOAT NOT NULL DEFAULT 100000,
   birth_date DATE NOT NULL,
   gender VARCHAR(6) NOT NULL
);

-- Ver a estrutura de uma tabela
DESCRIBE Actor;

-- Modificar tabela: adicionar, remover e modificar colunas
ALTER TABLE Actor
ADD hometown VARCHAR(255);

ALTER TABLE Actor
DROP COLUMN hometown;

ALTER TABLE Actor
CHANGE salary salary FLOAT DEFAULT 100000;

-- Apagar tabela
DROP TABLE Actor;

-------------------------------------------------------------

-- Inserir valores
INSERT INTO Actor 
   ( name, salary, birth_date, gender) 
VALUES 
   ('Tony Ramos',400000,'1948-08-25','male'),
   ('Camila Pitanga',320000,'1977-06-14','female'),
   ('Antônio Fagundes',230000,'1949-04-10','male'),
   ('Fernanda Montenegro',400000,'1929-10-16','female'),
   ('Moacyr Franco',719333,'1936-10-05','female');

INSERT INTO Actor (name, birth_date, gender) 
VALUES ("Tom Cruise", "1970-01-01", "male");

-- Ler valores
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 2;

SELECT LOWER(name) FROM Actor;

SELECT SUM(salary) FROM Actor;

SELECT AVG(salary) FROM Actor;

SELECT gender, AVG(salary) AS "quantidade" FROM Actor
GROUP BY gender;

SELECT MIN(birth_date) FROM Actor;

SELECT MAX(salary) AS "maxSalary" FROM Actor;

SELECT CURDATE();

SELECT CURRENT_DATE;

SELECT CURRENT_TIMESTAMP;

SELECT DATEDIFF(CURDATE(),'1929-10-16' )/ 365;

SELECT CONCAT(name, " ganha ", salary) AS "frase" FROM Actor;

-- Alterar valores
UPDATE Actor
SET hometown = "Rio de Janeiro"
WHERE id = "001";

-- Deletar valores
DELETE FROM Actor WHERE id = 11;

-- Deletar TODOS os valores
TRUNCATE TABLE Actor;