'use strict';

const dependencies = require('./node-stack-queues.js');
const Node = dependencies.Node;
const Stack = dependencies.Stack;
const Queue = dependencies.Queues;

module.exports = function multiBracketValidation(str){

  const opens = new Stack();
  opens.push('base value');

  for(let i = 0; i < str.length; i++){

    let character = str.charAt(i);
    if(character === '{'){
      opens.push(character);
    }
    else if(character === '('){
      opens.push(character);
    }
    else if(character === '['){
      opens.push(character);
    }
     
    else if(character === ']'){
      let open = opens.pop();
      if(!(open === '[' && character === ']')){return false;}
    }
    else if(character === ')'){
      let open = opens.pop();
      if(!(open === '(' && character === ')')){return false;}

    }
    else if(character === '}'){
      let open = opens.pop();
      if(!(open === '{' && character === '}')){return false;}
      
    }
  }
  
  return true;
};
