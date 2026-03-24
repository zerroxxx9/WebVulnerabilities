interface CardProps {
    children: React.ReactNode;
}

const DefaultCard= ({children}: CardProps ) => {
    return (
        <div
            className={"w-1/5 h-96 bg-gray-600 m-5 p-3 b-4 rounded-2xl"}
        >
            {" "}
            {children}
        </div>
    );
};

export default DefaultCard