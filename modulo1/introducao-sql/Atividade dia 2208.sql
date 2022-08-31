-- create table usuario_mercado(
-- id int primary key,
-- nome varchar(255) not null,
-- email varchar(255) not null unique,
-- idade int not null,
-- telefone varchar(255)
-- );

-- Deletar Tabela
-- drop table usuario_mercado;

-- Inserir TODOS os dados na tabela
-- insert into usuario_mercado values(1, "fulano", "fulano@gmail.com", 40, "(12)99999-9999");
-- insert into usuario_mercado values(3, "arthur", "arthur@gmail.com", 30, "(14)99999-9999");
-- insert into usuario_mercado values(4, "beto", "beto@gmail.com", 60, "(16)99999-9999");

-- Inserir ALGUNS dados na tabela
-- insert into usuario_mercado(id, nome, email, idade)
-- values(2,"ciclano","ciclano@gmail.com", 90);

-- Selecionar tudo da tabela usuario_mercado
-- select * from usuario_mercado;

-- Selecionar dado ESPECIFICO 
-- select nome, idade from usuario_mercado
-- where telefone = "(16)99999-9999";

-- Deletar usuario (WHERE É MUITO IMPORTANTE)
-- delete from usuario_mercado 
-- where id = 2;

-- Estrutura da tabela
-- describe usuario_mercado



-- EXERCICIO DO DIA 22/08/2002

CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
-- EXERCICIO 1
-- A) VARCHAR referente ao numero de caracteres que podem ser recebidos. 
-- PRIMARY KEY chave unica. NOT NULL não pode receber valor nulo
-- B)
-- C) Ele mostra na tela tudo que tem no table criado (se é null, number, etc)
	describe Actor;
-- EXERCICIO 2
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
-- A)
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"23-08-1963",
"male"
);
select * from Actor