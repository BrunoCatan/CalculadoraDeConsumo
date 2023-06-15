import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";

import "./global.css";

function App() {
    return (
        <main className="primary">
            <div className="second">
                <div className="margin">
                    <Input
                        for_="Km Rodados"
                        place="Km rodados:"
                        type="number"
                    ></Input>
                    <Input
                        for_="Qtd de litros"
                        place="Quantidade de litros usados:"
                        type="number"
                    ></Input>
                    <Button></Button>
                    <Result></Result>
                </div>
            </div>
        </main>
    );
}

export default App;
