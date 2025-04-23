---
name: "Reem Ahrabar"
slack_id: "U07D59XCG4U"
github_handle: "@cloudTwelve"
tutorial: https://pixeldust.hackclub.com/guidelines
wokwi: [https://wokwi.com/projects/428996000515740673](https://wokwi.com/projects/428996000515740673)
---

# Lyte Hack

Wokwi link: [https://wokwi.com/projects/428996000515740673](https://wokwi.com/projects/428996000515740673)

<!-- Uncomment the line below if you need a soldering iron -->
<!-- ⚠️ I would like to solder the pieces of the board myself, so I would need some solder (I have an iron, but lost my solder). Nevermind, disregard -->

### Description
This is my submission for Hack Club's Pixeldust YSWS, and it's for a light that goes beneath a water bottle to turn it into a lamp. It was inspired by a life hack I heard of when I was younger and loved watching life hack videos, which instructed the viewer to put their phone's flashlight beneath a bottle to turn it into a lamp. I thought it'd be great to make a PCB version of this (with, inshaAllah/God willing, a 3D printed case + model for this later) since I had the opportunity.

### Concept Images
![Image of a water bottle illuminated by a phone flashlight.](https://hc-cdn.hel1.your-objectstorage.com/s/v3/7fab7a1c094140d6322f04b7f2818c0ed7358d74_img_0418.jpeg "How the original life hack works.")

![Diagram of the fully assembled PCB + case.](https://hc-cdn.hel1.your-objectstorage.com/s/v3/7fab7a1c094140d6322f04b7f2818c0ed7358d74_img_0418.jpeg "Basic diagram of the PCB + case setup.")

### Features
- 2 modes:
  -  White
  -  Color
    - Red
    - Orange
    - Yellow
    - Green
    - Turquoise
    - Blue
    - Indigo
    - Purple
    - Cotton candy (interspersed pale blue/pink)


### A simplified BOM table
(pls include rough pricing of any extra components you're using)

| Comment           | Footprint                                      | Quantity | LCSC     | Cost   |
|-------------------|------------------------------------------------|----------|----------|--------|
| 100uF             | C_1206_3216Metric_Pad1.33x1.80mm_HandSolder    | 1        | C15008   | 0.0682$|
| 4.7nF             | C_0402_1005Metric_Pad0.74x0.62mm_HandSolder    | 3        | C1538    | 0.0011$|
| SK6812MINI        | LED_SK6812MINI_PLCC4_3.5x3.5mm_P1.75mm         | 10       |          |
| XIAO-RP2040-DIP   | XIAO-RP2040-DIP                                | 1        |          |
| B3S-1000          | SW_SPST_B3S-1000                               | 2        | C2733655 | 0.2327$ each for 5|

### Planning/Making
I started this when the event was already over, and I had been thinking of chilling with hw late at night using the lamp life hack, realizing it could be translated to a PCB + 3D printed design. Since I had already done Hackpad V2 (still waiting on a PR approval though) for the macropad, I had a small but encouraging history with PCBs. I was ready to try again and make something fun, so I tried speedrunning this.

#### The Schematic
This went quickly. Following the guide given on the pixeldust website, I breezed through. The only new thing was the concept of decoupling capacitors (I should really learn electrical engineering...). I had to change a footprint when filling out the README, since the button I initially used (B3S-1100) was out of stock.

![Schematic of PCB](https://hc-cdn.hel1.your-objectstorage.com/s/v3/180ddaa44e57c66ffd447aa4527bcb9644863e83_screen_shot_2025-04-23_at_2.43.52_am.png "Schematic of PCB on Kicad.")

#### The PCB
This was also simple, I just listened to YouTube lectures and podcasts while I positioned and routed the items. The routing is pretty sloppy, in the future I'd probably watch a video on cleaner routing + good practices before doing this. Nevertheless, Hackpad gave me a good base, and the only issue I had was having to come back when small schematic issues cropped up (eg. changing the footprint for the button) and re-route/reposition items.

![PCB layout on Kicad](https://hc-cdn.hel1.your-objectstorage.com/s/v3/180ddaa44e57c66ffd447aa4527bcb9644863e83_screen_shot_2025-04-23_at_2.43.52_am.png "PCB layout on Kicad.")

#### The Firmware
I had high aspirations that were partially fulfilled. Initially, I wanted 3 modes, static white, static color, and animated color, but I ended up throwing out the animated mode because of time. Some struggles I faced were:
- Finding the button library. Wokwi used MicroPython, not CircuitPython. I'd never used either, but I initially used the button library from CircuitPython.
- Getting the neopixel library to work. Same issue as above.
- Button timing. Often, the button would register multiple times on one click, and to fix it, I disabled the interrupt function, delayed 0.75s, and then enabled it again.

![Screenshot of Wokwi simulation + firmware](https://hc-cdn.hel1.your-objectstorage.com/s/v3/180ddaa44e57c66ffd447aa4527bcb9644863e83_screen_shot_2025-04-23_at_2.43.52_am.png "Screenshot of the Wokwi simulation and firmware.")