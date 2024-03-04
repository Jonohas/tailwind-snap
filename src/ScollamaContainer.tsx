export const ScollamaContainer = () => {
    return (
        <div
            className={"snap-always snap-start relative"}
        >

            <div className={"h-screen absolute w-full z-10 top-0 pointer-events-none"}>
                <div className={"h-screen w-full sticky top-0 text-9xl"}>ABSOLUTE</div>
            </div>

            <div
                className={"snap-y snap-mandatory overflow-y-scroll h-screen w-full"}
            >
                <div className={"snap-always snap-center h-screen bg-amber-200 flex justify-center items-center text-6xl"}>1</div>
                <div className={"snap-always snap-center h-screen bg-green-200 flex justify-center items-center text-6xl"}>2</div>
            </div>
        </div>
    );
};
