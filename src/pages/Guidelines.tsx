import { Link } from "react-router-dom";

import schematicEditorButton from "./schematic_editor.png";

import nineNeopixels from "./9_neopixels.png";

import xiaoToNeopixel from "./xiao_to_neopixel.png";

import power from "./power.png";

const Guidelines = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 text-xl text-black mt-16">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Allowed Parts</h1>
        <p className="mb-4">
          Please check{" "}
          <Link to="/parts" className="text-blue-500 hover:underline">
            Allowed Parts
          </Link>
        </p>

        <h1 className="mb-2 text-2xl font-bold">Requirements:</h1>
        <p className="mb-4">PCB should be 2 layered</p>
        <p className="mb-4">Max 100 cm²</p>

        <h1 className="mt-10 mb-2 text-2xl font-bold">Tutorial:</h1>
        <p className="mb-4">
          This tutorial is the bare minimum of what you need to do for the neopixels to work. Actual submissions need to have a spin of your own
          creativity ideas into it! Check out older YSWS-es like{" "}
          <a href="https://hackpad.hackclub.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Hackpad
          </a>
          .
        </p>

        <h2 className="mb-2 text-xl font-semibold">Table of Content</h2>
        <ol className="list-decimal list-inside">
          <li>
            <a href="#resources" className="text-blue-500 hover:underline">
              Resources and tips
            </a>
          </li>

          <li>
            <a href="#getting-started" className="text-blue-500 hover:underline">
              Getting Started
            </a>
          </li>
        </ol>

        <h2 className="mt-8 mb-2 text-xl font-semibold" id="resources">
          Resources and tips
        </h2>
        <p className="mb-4">
          Hackpad have some really good resources and tips for making schematics and pcbs already so im just gonna drop it here:
          <a href="https://hackpad.hackclub.com/resources" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            https://hackpad.hackclub.com/resources
          </a>
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold" id="getting-started">
          Getting Started:
        </h2>
        <h3 className="text-lg font-semibold">1. You need an EDA</h3>
        <small>
          <s>tbh i am not stopping you from drawing the pcb on microsoft paint</s>
        </small>

        <p className="mt-4 mb-4">I like KiCad; I use KiCad; I recommend using KiCad; we will use KiCad 🔥</p>
        <p className="mb-4">
          Download KiCad here:{" "}
          <a href="https://www.kicad.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            https://www.kicad.org/
          </a>
        </p>

        <p className="mt-4 mb-4">For this project, we will use a XIAO RP2040 as our MCU</p>
        <p className="mb-4">
          Download the XIAO RP2040 footprint here:{" "}
          <a
            href="https://github.com/Seeed-Studio/OPL_Kicad_Library/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            https://github.com/Seeed-Studio/OPL_Kicad_Library/
          </a>
        </p>

        <p className="mt-4 mb-4">There are many tutorials on how to install libraries! A wise man once said:</p>
        <blockquote className="pl-4 italic border-l-4 border-blue-500">
          <a
            href="https://hackpad.hackclub.com/guide#:~:text=Google is your best friend here :)"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            Google is your best friend here :)
          </a>
        </blockquote>

        <h3 className="mt-8 text-lg font-semibold">2. Draw the schematic</h3>
        <small>This is the easy part, just connect the dots. /s</small>

        <p className="mt-4 mb-4">After creating a project in KiCad, click on the "Schematic Editor" button:</p>
        <img src={schematicEditorButton} alt="Schematic Editor Button" />

        <p className="mt-4 mb-4">
          Once you're in, press the <code>A</code> key on your keyboard. This should open up a menu where you can add symbols for your different
          components! Search for the following to add them:
        </p>
        <ul className="list-disc list-inside">
          <li>XIAO-RP2040-DIP (your microcontroller)</li>
          <li>
            A neopixel choice from{" "}
            <Link to="/parts#neopixels" className="text-blue-500 hover:underline">
              Allowed Parts
            </Link>
          </li>
          <li>
            <code>C</code> for capacitors, we will use them as decoupling capacitors to prevent voltage drop brownouts.
          </li>
        </ul>

        <p className="mb-4">
          To start, add 9 neopixels. To rotate the symbols, click R. And to mirror them, click X. Connect the neopixels in series with their DIN and
          DOUT pins:
        </p>
        <img src={nineNeopixels} alt="9 Neopixels" />

        <p className="mb-4">Connect the first neopixel DIN to a GPIO pin on the XIAO:</p>
        <img src={xiaoToNeopixel} alt="XIAO to Neopixel" />

        <p className="mb-4">Don't forget their power! Press P and search for +5V and GND. It should look like this:</p>
        <img src={power} alt="Power" />

        <h2 className="mt-8 mb-2 text-xl font-semibold">SUBMISSIONS:</h2>
        <p className="mb-4">
          Make a PR to the GitHub repo:{" "}
          <a href="https://github.com/m0hid/pixeldust" className="text-blue-500 hover:underline">
            m0hid/pixeldust
          </a>
        </p>
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
