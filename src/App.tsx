import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

import "./global.css";
import Result from "./components/Result/Result";
import Title from "./components/Title/Title";

function App() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [result, setResult] = useState(0);

    const handleInput1Change = (event) => {
        setInput1(Number(event.target.value));
    };

    const handleInput2Change = (event) => {
        setInput2(Number(event.target.value));
    };

    const handleSum = () => {
        const sum = input1 / input2;

        setResult(sum);
    };

    return (
        <main className="primary">
            <div className="second">
                <div className="margin">
                    <Title />
                    <Input
                        label="Km/s rodados:"
                        htmlFor="Km Rodados"
                        placeholder="Somente numero!"
                        type="number"
                        value={input1}
                        onChange={handleInput1Change}
                    />
                    <Input
                        label="Quantidade de litros usados:"
                        htmlFor="Quantidade de litros usados"
                        placeholder="Somente numero!"
                        type="number"
                        value={input2}
                        onChange={handleInput2Change}
                    />
                    <Result value={result} />
                    <Button onClick={handleSum} />
                </div>
            </div>
        </main>
    );
}

export default App;
