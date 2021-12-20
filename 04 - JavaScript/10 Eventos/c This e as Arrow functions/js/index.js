testingArrow = {
  name: "Escola de JS",

  //obedece ao escopo do objeto
  normalFunction: function () {
    console.log(this.name);
  },

  //sempre pega o contexto de onde é executada
  arrowFunction: () => {
    console.log(this.name);
  },
};

testingArrow.normalFunction();
testingArrow.arrowFunction();

testingArrowTwo = {
  name: "Escola de JS",

  //pega o objeto da função
  normalFunctionTwo: function () {
    console.log(this);
  },

  //se refere ao objeto externo, no contexto do navegador
  arrowFunctionTwo: () => {
    console.log(this);
  },
};

testingArrowTwo.normalFunctionTwo();
testingArrowTwo.arrowFunctionTwo();
