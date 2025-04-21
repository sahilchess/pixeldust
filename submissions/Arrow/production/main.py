#include <FastLED.h>

#define LED_PIN     5           
#define NUM_LEDS    8
#define BRIGHTNESS  255
#define LED_TYPE    SK6812      
#define COLOR_ORDER GRB
CRGB leds[NUM_LEDS];

uint8_t startHue = 0;

void setup() {
  FastLED.addLeds<LED_TYPE, LED_PIN, COLOR_ORDER>(leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(BRIGHTNESS);
}

void loop() {
  // Loop through LEDs with staggered hue
  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i] = CHSV(startHue + (i * 16), 255, BRIGHTNESS);  // Each LED with slightly different hue
    FastLED.show();
    delay(10); // Delay between lighting each LED
  }

  startHue += 4; // Shift hue over time for continuous rainbow flow
}
