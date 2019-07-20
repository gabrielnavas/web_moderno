select * from cidades;
select * from prefeitos;

-- inner join
select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

-- left join
select * from cidades c left join prefeitos p on c.id = p.cidade_id;

-- right join
select * from cidades c right join prefeitos p on c.id = p.cidade_id;

-- full join
select * from cidades c left join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right join prefeitos p on c.id = p.cidade_id;