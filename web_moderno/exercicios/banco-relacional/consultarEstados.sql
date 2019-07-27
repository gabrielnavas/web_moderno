-- select normal
select * from estados;

-- select pegando somente algumas colunas
select nome, sigla from estados;

-- select com apeludo na sigla
select nome, sigla as 'Nome do Estado' from estados;

-- select com where filtrando linhas
select nome, sigla from estados 
where regiao = 'sul';

-- usar backticks
select est.nome from estados est 
where sigla = 'MA'

-- select com where e ordenado de forma acendente
select 
    nome, 
    regiao, 
    populacao 
from estados
where populacao >= 10
order by populacao

-- select com where e ordenado de forma decrescente
select 
    nome, 
    regiao, 
    populacao 
from estados
where populacao >= 10
order by populacao desc