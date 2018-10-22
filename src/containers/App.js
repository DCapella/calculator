import { connect } from "react-redux";

import * as actionCreators from "../actions/index.js";
import { Calculator } from "../components/Calculator.js";


const mapPropsToState = state => state;

export const Container = connect(mapPropsToState, actionCreators)(Calculator);
