const Node = function(info){
    return {
        prox: null,
        info:info
    };
};

function inserir(node, info){
    if(node === null)
        node = new Node(info);
    else
        inserir(node.prox);    
}


function exibir(node){
    if(node !== null){
        console.log(node.info)
        exibir(node.prox);
    }
}

let node = new Node(2);

inserir(node, 1);

inserir(node, 1);
inserir(node, 1);
inserir(node, 1);
inserir(node, 1);

exibir(node);