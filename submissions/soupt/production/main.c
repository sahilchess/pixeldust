#include <Arduino.h>
#include <Adafruit_NeoPixel.h>
#include <math.h> // For sine wave

#define LED_PIN     D2
#define NUM_LEDS    11
#define BRIGHTNESS  50
#define WAVE_SPEED  0.1   // Adjusts how fast the wave moves
#define WAVE_LENGTH 0.5   // Adjusts how wide the wave is

Adafruit_NeoPixel strip(NUM_LEDS, LED_PIN, NEO_GRB + NEO_KHZ800);

float wavePosition = 0;

void setup() {
  strip.begin();
  strip.setBrightness(BRIGHTNESS);
  strip.show();
}

void loop() {
  wavePattern();
}

void wavePattern() {
  for (int i = 0; i < NUM_LEDS; i++) {
    float wave = sin(wavePosition + i * WAVE_LENGTH); // Create wave effect
    uint8_t brightness = (wave + 1.0) * 127.5; // Map from [-1,1] to [0,255]

    uint8_t red = brightness;
    uint8_t blue = 255 - brightness;
    strip.setPixelColor(i, strip.Color(red, 0, blue));
  }
  strip.show();

  wavePosition += WAVE_SPEED; // Move the wave forward
  delay(20); // Small delay for smooth animation
}
