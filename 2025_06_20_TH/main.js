
import { add, subtract } from './math.js';

const a = 10;
const b = 5;

document.getElementById("result").innerHTML = `
  <p>${a} + ${b} = ${add(a, b)}</p>
  <p>${a} - ${b} = ${subtract(a, b)}</p>
`;
