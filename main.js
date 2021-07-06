// Classes
console.log(' Classes ');

class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Matheus';
    }

    mostrarUsuario() {
        console.log(this.usuario);
    }
    
}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function() {
  MinhaLista.add('Novo Todo');  
}

MinhaLista.mostrarUsuario();

// ** Classes


// Operações em Array
console.log('-> Operações em Array');

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item) {
    return item * 2;
});

const newArr2 = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr, newArr2);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    return item === 4;
});

console.log(find);

// ** Operações em Array


// Arrow functions
console.log('-> Arrow functions');

const arrFun = [1, 3, 4, 5, 6];

/*
const newArrFun = arrFun.map(item => {
    return item * 2;
});
*/

const newArrFun = arrFun.map(item => item * 2);

console.log(newArrFun);

const test = () => ({ nome: 'Matheus' }); 

console.log(test());

// ** Arrow functions


// Desestruturação
console.log('-> Desestruturação');

const usuarioDes = {
    nome: 'Matheus',
    idade: 27,
    endereco: {
        cidade: 'Brasília',
        estadio: 'DF',
    },
};

const { nome, idade, endereco: { cidade } } = usuarioDes;

console.log(nome);
console.log(idade);
console.log(cidade);

// ** Desestruturação


// Operadores rest/spread
console.log('-> Operadores rest/spread');

//REST
const usuarioRes = {
    name: 'Matheus',
    idade: 27,
    empresa: 'MRS'
};

const { name, ...resto } = usuarioRes;

console.log(nome);
console.log(resto);

const arrRes = [1, 2, 3, 4];
const [ a, b, ...c ] = arrRes;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b, ...params) {
    return params;
}

console.log(soma(1, 2, 3, 5, 8, 9))

//SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [ ...arr1, ...arr2];

console.log(arr3);

const usuarioSpr1 = {
    nome: 'Matheus',
    idade: 27,
    empresa: 'MRS',
};

const usuarioSpr2 = { ...usuarioSpr1, nome: 'Diego'};

console.log(usuarioSpr2);

// ** Operadores rest/spread


// Template Literals
console.log('-> Template Literals');

const nomeTL = 'Matheus';
const idadeTL = 27;

// console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
console.log(`Meu nome é ${nomeTL} e tenho ${idadeTL} anos`);

// ** Template Literals


// Object Short Syntax
console.log('-> Object Short Syntax');

const nomeOS = 'Matheus';
const idadeOS = 27;

const objShort = {
    nomeOS,
    idadeOS,
    empresa: 'MRS',
}

console.log(objShort);

// ** Object Short Syntax