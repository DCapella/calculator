import { Check } from "../library/library.js";


const defaultState = {
  number: [0],
  tExp: [],
  displayItems: ['AC', '+/-', '%', '/', '7', '8', '9', 'x',
  '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', 'C', '='],
};


const mainReducer = (state=defaultState, action) => {
  switch (action.type) {
    case "CLEAR":
      return {...state, number: [0], exp: [], tExp: []};
    case "PLUSMINUS":
      return Check.plusMinus({...state});
    case "PERCENT":
      return Check.percent({...state});
    case "DIVIDE":
    case "MULTIPLY":
    case "SUBTRACT":
    case "ADD":
      return Check.symbol(action.type, {...state});
    case "DECIMAL":
      return Check.decimal({...state});
    case "BACK":
      return Check.back({...state});
    case "EQUALS":
      return Check.equals({...state});
    default:
      return Check.number(action.type, {...state});
  }
};

export default mainReducer;
