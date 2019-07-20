ALTER TABLE empresas MODIFY cnpj VARCHAR(14);    

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', '46592535468597'),    
    ('Vale', '74652316534659'),
    ('Cielo', '06598562356457');


select * from empresas;

desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),    
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1)