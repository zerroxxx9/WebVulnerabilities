import DefaultCard from "../atoms/DefaultCard";

const Maintenance = () => {
    return (
        <div className={"h-screen w-screen bg-gray-800"}>
            <div className={"text-white font-bold"}>
                <DefaultCard>
                    WebVulnerabilities
                    <div className={"w-7/8 h-5/6 bg-gray-700 m-5 p-3 b-4 rounded-xl flex flex-col space-y-10"}>
                        <div>
                            <div className={"flex flex-row space-x-1"}>
                                <div className={"text-gray-400"}>
                                    user@webvulns
                                </div>
                                <div className={"text-blue-400"}>
                                    [/root]
                                </div>
                                <div className={"text-gray-400"}>
                                    curl
                                </div>
                                <div className={"text-red-500"}>
                                    $URL
                                </div>
                            </div>
                        </div>
                        <div className={"text-8xl text-white font-serif"}>
                            OOPS
                        </div>
                        <div>
                            <div className={"text-gray-400"}>
                                Sorry, something went wrong while loading this page.
                            </div>
                        <div className={"flex flex-row space-x-1"}>
                            <div className={"text-gray-400"}>
                                Error code:
                            </div>
                            <div className={"text-red-500"}>
                                404
                            </div>
                        </div>
                        </div>
                    </div>
                </DefaultCard>
            </div>
            <div className={"flex flex-row space-x-1"}>
                <button className={"bg-gray-700 text-white b-1 rounded p-5 font-bold w-2/21 ml-6 hover:bg-gray-600"}>Go Back</button>
                <button className={"bg-blue-400 text-black b-1 rounded p-5 font-bold w-2/21 hover:bg-blue-500"}>Go to Dashboard</button>
            </div>
        </div>    
    )
}

export default Maintenance;