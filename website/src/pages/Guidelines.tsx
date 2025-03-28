const Guidelines = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full p-4 text-xl text-black mt-16">
            <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
                <h1 className="mb-4 text-2xl font-bold">Allowed Parts</h1>
                <h2 className="mb-2 text-xl font-semibold">MCU:</h2>
                <ul className="mb-4 list-disc list-inside">
                    <li>Xiao RP2040</li>
                    <li>Bare RP2040 (using PCBA)</li>
                </ul>
                <h2 className="mb-2 text-xl font-semibold">NEOPIXELS:</h2>
                <ul className="mb-4 list-disc list-inside">
                    <li>WS2812B-5050</li>
                    <li>SK6812 (5050 asw)</li>
                    <li>SK6812MINI-EA</li>
                </ul>
                <p className="mb-4">* If I'm soldering: max. 50 neopixels</p>
                <p className="mb-4">* If soldering yourself: no limit but please dont go crazy with it</p>
                <h2 className="mb-2 text-xl font-semibold">SOLDERING IRON:</h2>
                <p className="mb-4">Generic Amazon soldering iron if you need one</p>

                <h2 className="mb-2 text-xl font-semibold">GUIDELINES:</h2>
                <p className="mb-4">PCB should be 2 layered</p>
                <p className="mb-4">It should also be max 100x100mm</p>
                <p className="mb-4">Any other things you can think of</p>

                <h2 className="mb-2 text-xl font-semibold">SUBMISSIONS:</h2>
                <p className="mb-4">Make a PR to the GitHub repo: <a href="https://github.com/m0hid/pixeldust" className="text-blue-500 hover:underline">m0hid/pixeldust</a></p>
                <p className="mb-4">Then you should put a README with the format:</p>
                <p className="mb-4">board-name:</p>
                <p className="mb-4">slack-id:</p>
                <p className="mb-4">wokwi-link:</p>
                <p className="mb-4">Images and description of your board</p>
            </div>
        </div>
    );
};

export default Guidelines; 