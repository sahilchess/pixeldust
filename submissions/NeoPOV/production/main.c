#include <Adafruit_NeoPixel.h>

#define LED_COUNT    49
#define LED_PIN      4
#define BUTTON_RED   3
#define BUTTON_GREEN 2
#define BUTTON_BLUE  1

Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_BRG + NEO_KHZ800);

void setup() {
  pinMode(BUTTON_RED, INPUT_PULLUP);
  pinMode(BUTTON_GREEN, INPUT_PULLUP);
  pinMode(BUTTON_BLUE, INPUT_PULLUP);
  
  strip.begin();
  strip.setBrightness(255);
  strip.fill(strip.Color(100, 100, 100));
  strip.show();
}

void loop() {
  if (digitalRead(BUTTON_RED) == LOW) {
    strip.fill(strip.Color(255, 0, 0));
    strip.show();
    while (digitalRead(BUTTON_RED) == LOW);
  }
  if (digitalRead(BUTTON_GREEN) == LOW) {
    strip.fill(strip.Color(0, 0, 255));
    strip.show();
    while (digitalRead(BUTTON_GREEN) == LOW);
  }
  if (digitalRead(BUTTON_BLUE) == LOW) {
    strip.fill(strip.Color(0, 255, 0));
    strip.show();
    while (digitalRead(BUTTON_BLUE) == LOW);
  }
}
