import {useState} from "react";

type ValidationResult = {
    result: boolean;
    time: string;
}

const ReDoS: React.FC = () => {
    const [input, setInput] = useState("");
    const [validation, setValidation] = useState<ValidationResult | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const vulnerableRegexString = "^(\\w+\\s?)*$";
        const vulnerableRegex = new RegExp(vulnerableRegexString);

        const startTime = performance.now();
        const result = vulnerableRegex.test(input);
        const endTime = performance.now();

        const time = (endTime-startTime).toFixed(2);

        setValidation({result, time})
    };

    return (
        <div className={"flex items-center justify-center h-screen w-screen"}>
            <h2 className={"font-semibold mb-4"}>ReDoS example</h2>
            <form onSubmit={handleSubmit} className={"flex flex-col items-center gap-2"}>
                <input className={"border-blue border-solid border-2"} type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className={"border-blue border-solid border-2"} type="submit">Test Regex</button>
            </form>

            {validation && (
                <div className={"mt-4 text-center"}>
                    <p>Result: {validation.result ? "Match" : "No Match"}</p>
                    <p>Time: {validation.time} ms</p>
                </div>
            )}
        </div>
    )
}

export default ReDoS;