#include <Adafruit_NeoPixel.h>

#define LED_PIN0 0  // Row 0
#define LED_PIN1 1  // Row 1

#define LED_COUNT0 96
#define LED_COUNT1 96

Adafruit_NeoPixel strip0(LED_COUNT0, LED_PIN0, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel strip1(LED_COUNT1, LED_PIN1, NEO_GRB + NEO_KHZ800);

void setup() {
  strip0.setBrightness(64);
  strip1.setBrightness(64);
  strip0.begin();
  strip1.begin();

  strip0.show();  // Clear all
  strip1.show();
}

void loop() {
  // Row 0
  for (int i = 0; i <= 95; i++) {
    strip0.setPixelColor(i, strip0.Color(0, 255, 0));   // Green
    strip1.setPixelColor(i, strip1.Color(255, 0, 0));   // Red
  }



  strip0.show();
  strip1.show();

  delay(1000);
}
