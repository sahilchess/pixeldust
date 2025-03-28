export default function Parts() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 mt-16 text-xl text-black">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Allowed Parts</h1>
        <p className="mb-4">All parts listed here are all optional to include in your design or not, except obviously the neopixels</p>

        <h2 className="mb-2 text-xl font-semibold">MCU:</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Xiao RP2040</li>
          <li>Bare RP2040 (PCBA otherwise you solder)</li>
          <li></li>
        </ul>

        <h2 className="mb-2 text-xl font-semibold" id="neopixels">
          NEOPIXELS:
        </h2>
        <ul className="mb-4 list-disc list-inside">
          <li>WS2812B-5050</li>
          <li>SK6812-5050</li>
          <li>SK6812MINI-EA</li>
        </ul>
        <p className="mb-4">* If I'm soldering: max. 50 neopixels</p>
        <p className="mb-4">* If soldering yourself: no limit but please dont go crazy with it</p>

        <p className="mb-4">Decoupling caps are optional but recommended.</p>

        <h2 className="mb-2 text-xl font-semibold">USB PD Logic:</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>
            A usb controller. Ex:
            <a
              href="https://www.lcsc.com/product-detail/USB-Converters_STMicroelectronics-STUSB4500QTR_C2678061.html?s_z=n_STUSB4500QTR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              STMicroelectronics STUSB4500QTR
            </a>
          </li>
          <li>
            A USB C port. Ex:{" "}
            <a
              href="https://www.lcsc.com/product-detail/USB-Connectors_Amphenol-ICC-12402012E212A_C5150972.html?s_z=n_12402012E212A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              Amphenol ICC 12402012E212A
            </a>
          </li>
          <li>
            Buck converter to step down the voltage to 5V. Ex:{" "}
            <a
              href="https://www.lcsc.com/product-detail/DC-DC-Converters_Texas-Instruments-TPS568215RNNR_C473367.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              Texas Instruments TPS568215RNNR
            </a>
          </li>
        </ul>

        <h2 className="mb-2 text-xl font-semibold">SOLDERING IRON:</h2>
        <p className="mb-4">Generic Amazon soldering iron if you need one</p>
      </div>
    </div>
  );
}