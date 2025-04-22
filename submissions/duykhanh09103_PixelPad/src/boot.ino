#include <Adafruit_NeoPixel.h>
#define NUMPIXELS 9
#define NEOPIXEL_PIN 3
Adafruit_NeoPixel pixels(NUMPIXELS, NEOPIXEL_PIN, NEO_GRB + NEO_KHZ800);
void setup() {
  pixels.begin();
  // put your setup code here, to run once:
  Serial1.begin(115200);
  Serial1.println("Hello, Raspberry Pi Pico!");
}

void loop() {
  // put your main code here, to run repeatedly:
   // this speeds up the simulation
  pixels.clear();

  for(int i=0; i<NUMPIXELS; i++) {

    pixels.setPixelColor(i, pixels.Color(0, 150, 0));
    pixels.show();
    delay(500);
  }
}
