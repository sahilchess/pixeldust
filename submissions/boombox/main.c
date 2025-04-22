#include <Adafruit_NeoPixel.h>

#define LED_PIN     18    // GPIO pin
#define LED_COUNT   3     // Number of NeoPixels

Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  Serial.begin(115200);
  Serial.println("Hello, ESP32!");
  strip.begin();           // Initialize the NeoPixel strip
  strip.show();            // Turn off all pixels initially
  strip.setBrightness(50); // Adjust brightness (0-255)
}

void loop() {
  // Bounce light back and forth
  for (int i = 0; i < LED_COUNT; i++) {
    showOnePixel(i, strip.Color(255, 0, 0)); // Red pixel moving right
    delay(200);
  }
  for (int i = LED_COUNT - 2; i > 0; i--) {
    showOnePixel(i, strip.Color(0, 0, 255)); // Blue pixel moving left
    delay(200);
  }
}

void showOnePixel(int index, uint32_t color) {
  strip.clear();
  strip.setPixelColor(index, color);
  strip.show();
}
