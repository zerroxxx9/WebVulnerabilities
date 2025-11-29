import {useState} from "react";

type ValidationResult = {
    result: boolean;
    time: string;
}

const ReDoS: React.FC = () => {
    const [input, setInput] = useState("");
    const [validation, setValidation] = useState<ValidationResult | null>(null)
    const vulnerableRegexString = "^(\\w+\\s?)*$";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const vulnerableRegex = new RegExp(vulnerableRegexString);

        const startTime = performance.now();
        const result = vulnerableRegex.test(input);
        const endTime = performance.now();

        const time = (endTime-startTime).toFixed(2);

        setValidation({result, time})
    };

    return (
        <div className={"flex items-center justify-center h-screen w-screen"}>
            <div className={"flex items-center justify-center h-screen w-screen "}>
                <div className={"bg-blue-50 m-5 p-3 b-4 rounded-2xl"}>
                    <p className={"font-semibold mb-4"}>currently using: '{vulnerableRegexString}' as regex</p>
                    <form onSubmit={handleSubmit} className={"flex flex-col items-center gap-2"}>
                        <input className={"border-blue border-solid border-2 rounded-2xl p-1"} type="text" value={input}
                               onChange={(e) => setInput(e.target.value)}/>
                        <button className={"border-blue border-solid border-2 rounded-2xl p-1 w-30"} type="submit">test</button>
                    </form>
                </div>
                {validation && (
                    <div className={"mt-4 text-center"}>
                    <p>Result: {validation.result ? "Match" : "No Match"}</p>
                        <p>Time: {validation.time} ms</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ReDoS;