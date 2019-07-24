select * from estados where id = 23

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 29)

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 23)

-- Usando outro select para pegar o id do FK estado_id
INSERT INTO cidades (nome, area, estado_id)
VALUES (
    'Caruaru', 
    920.6, 
    (select id from estados where sigla = 'PE')
)

-- Usando outro select para pegar o id do FK estado_id
INSERT INTO cidades (nome, area, estado_id)
VALUES (
    'Juazeiro do Norte', 
    248.2, 
    (select id from estados where sigla = 'CE')
)

select * from cidades;
