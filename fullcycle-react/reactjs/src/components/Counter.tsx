import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    console.log("Renderizou contador");
    return (
        <div>
            <p>Contador de cliques: {count}</p>
            <button onClick={(e) => {
                setCount(count + 1);
                }}>Me clique!!!
            </button>
        </div>);
}