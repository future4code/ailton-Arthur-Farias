CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    sinopse VARCHAR(500) NOT NULL,
    lancamento DATE NOT NULL,
	avaliacao VARCHAR(5)
);
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES ("002","Arthur", 30000,  "2002-08-22", "male");
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES ("004","Paulao", 33700,  "1990-03-22", "male");
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES ("005","renata", 487999,  "1987-02-12", "male");
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES ("006","pietra", 90088,  "1927-01-13", "male");
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES ("007","Fernanda Montenegro", 45000,  "1956-01-10", "male");
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES ("008","Fernanda Nobrega", 100000000,  "1956-01-10", "male");
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES ("009","FERNANDO MOnte", 1000000000,  "1956-01-10", "male");
-- EXERCICIO 1
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- EXERCICIO 2
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES ("003","Juliana Paes", 80000,  "1976-08-12", "male");
-- B)
UPDATE Actor
SET nome = "JULIANA PAES"
WHERE id = "003";
-- C)
UPDATE Actor
SET nome = "RENTA VASCOCELOS"
WHERE id = "005";
-- D)
UPDATE Actor
SET nome = "PEDRAO DO GÁS"
WHERE id = "009";

-- EXERCICIO 3
-- A)
DELETE FROM Actor WHERE nome = "Fernanda Montenegro";
-- B) 
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
-- EXERCICIO 4
-- A)





DESCRIBE Actor;
SELECT * FROM Actor;