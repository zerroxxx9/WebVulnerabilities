import DefaultNavlink from "../atoms/DefaultNavlink.tsx";

const Navbar = () => {
    return (
        <nav>
            <div className={'hidden w-full md:block md:w-auto" id=navbar-default'}>
                <ul
                    className={
                    "h-10 font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 bg-blue-300 border-red-50"
                    }
                >
                    <li>
                        <DefaultNavlink location={"/redos"}>ReDoS</DefaultNavlink>
                    </li>
                    <li>
                        <DefaultNavlink location={"/magic"}>Magic Bytes</DefaultNavlink>
                    </li>
                    <li>
                        <DefaultNavlink location={"/regex"}>Regex Injection</DefaultNavlink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;