-- select por grupo de regiao somando as regioes
select 
    regiao as 'Região',
    sum(populacao) as Total
from estados
group by regiao
order by Total desc     

-- somente o total da populacao
select 
--    regiao as 'Região',
    sum(populacao) as Total
from estados
-- group by regiao
order by Total desc     

-- media total
select 
--    regiao as 'Região',
    avg(populacao) as Total
from estados
-- group by regiao
order by Total desc     
