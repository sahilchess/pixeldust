import ALink from "../components/ALink";

export default function Resources() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 mt-16 text-xl text-black">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Resources</h1>

        <h2 className="mb-2 text-xl font-semibold">Useful resources:</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>
            <ALink href="https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use">Adafruit Neopixel Uberguide</ALink>
          </li>
          <li>
            <ALink href="https://wiki.seeedstudio.com/XIAO-RP2040/">Seeed Studio Xiao RP2040 Wiki</ALink>
          </li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold">Tips:</h3>
        <ul className="mb-4 list-disc list-inside">
          <li>
            Soldering the leds: basically what i’d do is put solder on one pad, then with the solder still hot, place the led onto it with tweezers
            making sure the pads are aligned then once the first solder has hardened you can just touch the iron to the pads on the pcb on the
            led(they extend slightly up on the side of the led) and put some solder there as well for the remaining 3 pins
          </li>
        </ul>
      </div>
    </div>
  );
}
