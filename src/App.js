import logo from './logo.svg';
import './App.css';
import styles from "./App.module.css"
import {useState} from "react";

function App() {
    const [operand1, setOperand1] = useState("");
    const [operand2, setOperand2] = useState("");
    const [operator, setOperator] = useState("");
    const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    const [solutionColor, setSolutionColor] = useState(styles["calculator-screen"]);

    const solution = (string) => {

        if (string.indexOf("+") !== -1) {
            const operands = string.split("+")
            return (Number(operands[0]) + Number(operands[1])).toString();
        } else if (string.indexOf("-") !== -1) {
            const operands = string.split("-")
            return (Number(operands[0]) - Number(operands[1])).toString();
        } else {
            return string;
        }

    }

    return (
    <div className="calculator">
        <input type="text" className={solutionColor} disabled value={operand1 + operator + operand2}/>
            <div className={styles["calculator-buttons"]}>
                {nums.map((item) =>
                    <button className={
                        styles.btn
                    } onClick={() => operator ? setOperand2(operand2 + item): setOperand1(operand1 + item) }  >{item}</button>)}

                <button className={styles.btn + " " + styles.operator} onClick={() => {setOperator("+"); setSolutionColor(styles["calculator-screen"])}} >+</button>

                <button className={styles.btn + " " + styles.operator} onClick={() => {setOperator("-"); setSolutionColor(styles["calculator-screen"])}}>-</button>

                <button className=
                            {styles.btn + " " +styles.clear}
                        onClick={() => {
                            setOperator("");
                            setOperand1("");
                            setOperand2("");

                        }} >C</button>
                <button className={
                    styles.btn + " " +styles.equal
                }
                        onClick={() => {
                            setOperand1(solution(operand1 + operator + operand2));
                            setOperator("");
                            setOperand2("");
                            setSolutionColor(solutionColor + " " + styles.red)
                        } }
                >=</button>
            </div>
    </div>
);
}

export default App;
