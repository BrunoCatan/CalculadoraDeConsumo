import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

import "./global.css";
import Result from "./components/Result/Result";
import Title from "./components/Title/Title";

function App() {
    const [input1, setInput1] = useState<number | "">("");
    const [input2, setInput2] = useState<number | "">("");
    const [result, setResult] = useState<number>(0);

    const handleInput1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setInput1(value || "");
    };

    const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setInput2(value || "");
    };

    const handleSum = () => {
        if (input1 !== "" && input2 !== "") {
            const sum = input1 / input2;
            setResult(sum);
        }
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
