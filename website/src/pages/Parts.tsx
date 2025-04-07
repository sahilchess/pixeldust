import ALink from "../components/ALink";

export default function Parts() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 mt-16 text-xl text-black">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Allowed Parts</h1>
        <p className="mb-4">All parts listed here are all optional to include in your design or not, except obviously the neopixels</p>

        <h2 className="mb-2 text-xl font-semibold">MCU:</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>
            <ALink href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">Xiao RP2040</ALink>
          </li>
          <li>
            <ALink href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">Xiao ESP32-S3</ALink>
          </li>
          <li>ESP32-C3 Super Mini</li>
          <li>
            <ALink href="https://jlcpcb.com/partdetail/RaspberryPi-RP2040/C2040">Bare RP2040 (PCBA)</ALink>
          </li>
          <li>
            <ALink href="https://www.aliexpress.com/item/1005006478706085.html">ESP32-S3-DevKitC-1</ALink>
          </li>
          <li>
            <ALink href="https://www.lcsc.com/product-detail/WIFI-Modules_Espressif-Systems-ESP32-WROOM-32E-4MB_C701341.html">
              ESP32-WROOM-32E (PCBA)
            </ALink>
          </li>
        </ul>

        <h2 className="mb-2 text-xl font-semibold" id="neopixels">
          NEOPIXELS:
        </h2>
        <ul className="mb-4 list-disc list-inside">
          <li>WS2812B-5050</li>
          <li>SK6812-5050</li>
          <li>SK6812MINI-EA</li>

          <li>^^^^ mO.hid will solder for you ^^^^</li>
          <li>vvvv you will have to solder yourself vvvvv</li>

          <li>
            <ALink href="https://www.lcsc.com/product-detail/RGB-LEDs-Built-in-IC_XINGLIGHT-XL-1615RGBC-WS2812B_C5349954.html">
              XL-1615RGBC-WS2812B
            </ALink>
          </li>
          <li>
            <ALink href="https://www.lcsc.com/product-detail/RGB-LEDs-Built-in-IC_OPSCO-Optoelectronics-SKC6812RGBW-WS-B_C5380879.html?s_z=n_rgbw">
              SKC6812RGBW-WS-B
            </ALink>
          </li>
          <li>
            <ALink href="https://www.lcsc.com/product-detail/RGB-LEDs-Built-in-IC_OPSCO-Optoelectronics-SKC6812RGBW-WS-B_C5380879.html?s_z=n_rgbw">
              OPSCO Optoelectronics SKC6812RGBW-WS-B
            </ALink>
          </li>
          <li>
            <ALink href="https://www.lcsc.com/product-detail/Light-Emitting-Diodes-LED_OPSCO-Optoelectronics-SK6812MINI-HS_C2922787.html">
              OPSCO Optoelectronics SK6812MINI-HS
            </ALink>
          </li>
        </ul>
        <p className="mb-4">* If I'm soldering: max. 50 neopixels</p>
        <p className="mb-4">* If soldering yourself: no limit but please dont go crazy with it</p>

        <p className="mb-4">Decoupling caps are optional but recommended.</p>

        <h2 className="mb-2 text-xl font-semibold">Other misc parts:</h2>

        <p className="mb-4">
          If you'd like to use other parts, e.g. a temperature sensor, etc. please message me (@m0.hid) on Slack and I can approve this for you. Try
          to source them somewhere cheap like Aliexpress or LCSC
        </p>

        <p className="mb-4">If you are using a bare MCU chip, you can use economic PCBA from JLCPCB.</p>

        <p className="mb-4">
          Parts below has gotten explicit permissions from mohid to use. If you want to make sure your part is ok to use, please ask in #pixeldust.
        </p>

        <ul className="mb-4 list-disc list-inside">
          <li>Resistors</li>
          <li>Capacitors</li>
          <li>Buttons/Switches</li>
          <li>
            A usb controller. Ex:
            <ALink href="https://jlcpcb.com/partdetail/Stmicroelectronics-STUSB4500QTR/C2678061">STMicroelectronics STUSB4500QTR</ALink>
          </li>
          <li>
            A USB C port. Ex:{" "}
            <ALink href="https://www.lcsc.com/product-detail/USB-Connectors_SHOU-HAN-TYPE-C-6P_C456012.html">SHOU HAN TYPE-C 6P</ALink>
          </li>
          <li>
            Buck converter to step down the voltage to 5V. Ex:{" "}
            <ALink href="https://jlcpcb.com/partdetail/TexasInstruments-TPS54821RHLR/C57461">Texas Instruments TPS54821RHLR</ALink>
          </li>
          <li>AHT20 Temperature and Moisture sensor</li>
        </ul>

        <h2 className="mb-2 text-xl font-semibold">SOLDERING IRON:</h2>
        <p className="mb-4">Generic Amazon soldering iron if you need one</p>
      </div>
    </div>
  );
}
