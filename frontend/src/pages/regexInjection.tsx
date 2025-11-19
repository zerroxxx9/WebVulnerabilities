import {useState} from "react";

const RegexInjection: React.FC = () => {
    const [username, setUsername] = useState("");
    const [passwd, setPasswd] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const regexPass = new RegExp(username);
        const match = regexPass.test(passwd)
        console.log(match)
        //user:"(a+)+$" passwd:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!"
    };

    return (
        <div className={"flex items-center justify-center h-screen w-screen"}>
            <h2 className={"font-semibold mb-4"}>Regex Injection</h2>
            <br/>
            <form onSubmit={handleSubmit} className={"flex flex-col items-center gap-2"}>
                <label>Username:</label>
                <input className={"border-blue border-solid border-2"} type="text" value={username}
                       onChange={(e) => setUsername(e.target.value)}/>
                <label>Password:</label>
                <input className={"border-blue border-solid border-2"} type="text" value={passwd}
                       onChange={(e) => setPasswd(e.target.value)}/>

                <button className={"border-blue border-solid border-2"} type="submit">Login</button>
            </form>
        </div>
    )
}

export default RegexInjection;