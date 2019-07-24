
-- update com where
update estados
set nome = 'Maranhão'
where sigla = 'MA'

-- simple select
select est.nome from estados est where sigla = 'SP'

-- update com vários campos 
update estados
set 
    nome = 'Paraná', 
    populacao = 11.32
where sigla = 'PR'

-- update com vários campos 
update estados
set nome = 'São Paulo'
where sigla = 'SP'

select 
    est.nome,
    sigla,
    populacao
from estados est 
where sigla = 'PR'    