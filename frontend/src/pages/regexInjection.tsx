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
            <br/>
            <div className={"w-1/4 h-1/3 bg-blue-50 m-5 p-3 b-4 rounded-2xl"}>
                <form onSubmit={handleSubmit} className={"flex flex-col items-center gap-2"}>
                    <p>Super real login</p>
                    <label>Username:</label>
                    <input className={"border-blue border-solid border-2 rounded-2xl p-1"} type="text" value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                    <label>Password:</label>
                    <input className={"border-blue border-solid border-2 rounded-2xl p-1"} type="text" value={passwd}
                           onChange={(e) => setPasswd(e.target.value)}/>

                    <button className={"border-blue border-solid border-2 p-1 w-30 rounded-2xl"} type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

            export default RegexInjection;