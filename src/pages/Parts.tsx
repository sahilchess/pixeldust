const Parts = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-4rem)] text-2xl text-black">
            <h1>Allowed Parts</h1>
            <h2>MCU:</h2>
            <ul>
                <li>Xiao RP2040 (will be soldered by you!)</li>
                <li>Custom RP2040 for ppl who know a lot about pcb design</li>
            </ul>
            <h2>LEDS:</h2>
            <ul>
                <li>WS2812B</li>
                <li>SK6812</li>
            </ul>
        </div>
    );
};

export default Parts; 