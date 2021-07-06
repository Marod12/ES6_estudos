"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Classes
console.log(' Classes ');

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.usuario = 'Matheus';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostrarUsuario",
    value: function mostrarUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function () {
  MinhaLista.add('Novo Todo');
};

MinhaLista.mostrarUsuario(); // ** Classes
// Operações em Array

console.log('-> Operações em Array');
var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
var newArr2 = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr, newArr2);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); // ** Operações em Array
// Arrow functions

console.log('-> Arrow functions');
var arrFun = [1, 3, 4, 5, 6];
/*
const newArrFun = arrFun.map(item => {
    return item * 2;
});
*/

var newArrFun = arrFun.map(function (item) {
  return item * 2;
});
console.log(newArrFun);

var test = function test() {
  return {
    nome: 'Matheus'
  };
};

console.log(test()); // ** Arrow functions
// Desestruturação

console.log('-> Desestruturação');
var usuarioDes = {
  nome: 'Matheus',
  idade: 27,
  endereco: {
    cidade: 'Brasília',
    estadio: 'DF'
  }
};
var nome = usuarioDes.nome,
    idade = usuarioDes.idade,
    cidade = usuarioDes.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); // ** Desestruturação
// Operadores rest/spread

console.log('-> Operadores rest/spread'); //REST

var usuarioRes = {
  name: 'Matheus',
  idade: 27,
  empresa: 'MRS'
};

var name = usuarioRes.name,
    resto = _objectWithoutProperties(usuarioRes, ["name"]);

console.log(nome);
console.log(resto);
var arrRes = [1, 2, 3, 4];
var a = arrRes[0],
    b = arrRes[1],
    c = arrRes.slice(2);
console.log(a);
console.log(b);
console.log(c);

function soma(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params;
}

console.log(soma(1, 2, 3, 5, 8, 9)); //SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var usuarioSpr1 = {
  nome: 'Matheus',
  idade: 27,
  empresa: 'MRS'
};

var usuarioSpr2 = _objectSpread(_objectSpread({}, usuarioSpr1), {}, {
  nome: 'Diego'
});

console.log(usuarioSpr2); // ** Operadores rest/spread
// Template Literals

console.log('-> Template Literals');
var nomeTL = 'Matheus';
var idadeTL = 27; // console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');

console.log("Meu nome \xE9 ".concat(nomeTL, " e tenho ").concat(idadeTL, " anos")); // ** Template Literals
// Object Short Syntax

console.log('-> Object Short Syntax');
var nomeOS = 'Matheus';
var idadeOS = 27;
var objShort = {
  nomeOS: nomeOS,
  idadeOS: idadeOS,
  empresa: 'MRS'
};
console.log(objShort); // ** Object Short Syntax
