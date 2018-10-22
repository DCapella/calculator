export class Check {
  static wordToItem(word) {
    const mapWord = {
      "ONE": '1', "TWO": '2', "THREE": '3', "FOUR": '4', "FIVE": '5',
      "SIX": '6', "SEVEN": '7', "EIGHT": '8', "NINE": '9', "ZERO": '0',
      "ADD": '+', "SUBTRACT": '-', "DIVIDE": '/', "MULTIPLY": '*'
    };
    return mapWord[word];
  }

  static number(word, state) {
    const num = this.wordToItem(word);
    if ('+-/*'.indexOf(state.number) !== -1) {
      let numJoin = state.number.join('');
      let tExp = [...state.tExp, numJoin];
      return {...state, number: [num], tExp: tExp};
    }
    if (state.number.length === 1 && state.number[0] == '0') {
      return (num === undefined) ? {...state, number: [0]} : {...state, number: [num]};
    } else {
      return {...state, number: [...state.number, num]};
    }
  }

  static symbol(word, state) {
    const symbol = this.wordToItem(word);
    let num = [...state.number];
    if ('+-/*'.indexOf(state.number) !== -1) {
      return {...state, number: [symbol]};
    } else if (num[0] < 0 && state.tExp[state.tExp.length-1] === '-') {
      let popTExp = [...state.tExp];
      popTExp.pop();
      popTExp.push('+');
      num[0] *= -1;
      return {...state, number: [symbol], tExp: [...popTExp, num]};
    } else {
      let tExp = [...state.tExp, num.join('')];
      return {...state, number: [symbol], tExp: tExp};
    }
  }

  static decimal(state) {
    if (state.number.indexOf('.') !== -1 || '+-/*'.indexOf(state.number) !== -1) {
      return {...state};
    } else {
      return {...state, number: [...state.number, '.']};
    }
  }

  static back(state) {
    if ('+-/*'.indexOf(state.number) !== -1) {
      return {...state};
    } else {
      return {...state, number: [0]};
    }
  }

  static plusMinus(state) {
    if ('+-/*'.indexOf(state.number) !== -1 || state.number == 0) {
      return {...state};
    } else {
      let tempPlusMinus = [...state.number];
      tempPlusMinus[0] *= -1;
      return {...state, number: tempPlusMinus};
    }
  }

  static percent(state) {
    if ('+-/*'.indexOf(state.number) !== -1) {
      return {...state};
    } else {
      let numJoin = Number([...state.number].join(''));
      numJoin /= 100;
      return {...state, number: [numJoin]};
    }
  }

  static equals(state) {
    let number = [...state.number].join('');
    let expression = []
    if ('+-/*'.indexOf(state.number) !== -1) {
      expression = eval([...state.tExp].join(''));
    } else if (number < 0 && state.tExp[state.tExp.length-1] === '-') {
      number *= -1;
      expression = [...state.tExp, number];
      expression[expression.length-2] = '+';
      expression = eval(expression.join(''));
    } else {
      expression = [...state.tExp, number].join('');
      expression = eval(expression);
    }
    return {...state, tExp: [], number: [expression]};
  }
}
