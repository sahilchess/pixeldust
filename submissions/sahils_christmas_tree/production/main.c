#include <Adafruit_NeoPixel.h>

#define PIN_NEOPIXEL D0
#define NUM_PIXELS   12

#define BTN_MODE_1   D3  // Black button (Mode 1)
#define BTN_MODE_2   D1  // Red button (Mode 2)
#define BTN_MODE_3   D2  // Yellow button (Mode 3)

Adafruit_NeoPixel pixels(NUM_PIXELS, PIN_NEOPIXEL, NEO_GRB + NEO_KHZ800);

int currentMode = 1; // Default to Mode 1
unsigned long previousMillis = 0;

// Mode 1: Rainbow
unsigned long rainbowHue = 0;
unsigned long rainbowDelay = 20;  // Delay between rainbow updates

// Mode 2: Theater chase
int chaseIndex = 0;
int chaseColorIndex = 0;
unsigned long chaseDelay = 100;  // Delay between chase updates
uint32_t chaseColors[] = {
  pixels.Color(255, 0, 0),
  pixels.Color(0, 255, 0),
  pixels.Color(0, 0, 255)
};

// Mode 3: Spiral wipe
int spiralIndex = 0;
bool spiralDone = false;
unsigned long wipeDelay = 200;  // Delay between wipe updates
uint32_t wipeColor = pixels.Color(0, 255, 0);
int spiralOrder[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11 };

// Debounce
unsigned long lastButtonPress = 0;
unsigned long debounceDelay = 300; // Time to wait before accepting another button press

void setup() {
  pixels.begin();
  pixels.setBrightness(100);
  pixels.show();

  pinMode(BTN_MODE_1, INPUT);  // Buttons are active-high
  pinMode(BTN_MODE_2, INPUT);
  pinMode(BTN_MODE_3, INPUT);
}

void loop() {
  unsigned long currentMillis = millis();
  
  // Check if enough time has passed since the last button press (debounce)
  if (currentMillis - lastButtonPress > debounceDelay) {
    // Check button presses to switch modes
    if (digitalRead(BTN_MODE_1) == HIGH) {
      currentMode = 1;
      resetModes();
      lastButtonPress = currentMillis;
    } else if (digitalRead(BTN_MODE_2) == HIGH) {
      currentMode = 2;
      resetModes();
      lastButtonPress = currentMillis;
    } else if (digitalRead(BTN_MODE_3) == HIGH) {
      currentMode = 3;
      resetModes();
      lastButtonPress = currentMillis;
    }
  }

  // Run the active mode
  runCurrentMode();
}

void resetModes() {
  // Reset all mode variables and clear the LED strip
  pixels.clear();
  pixels.show();
  previousMillis = 0;  // Ensure we reset timing for each mode
  spiralIndex = 0;
  spiralDone = false;
  chaseIndex = 0;
  chaseColorIndex = 0;
  rainbowHue = 0;
}

void runCurrentMode() {
  switch (currentMode) {
    case 1: rainbowStep(); break;
    case 2: theaterChaseStep(); break;
    case 3: colorWipeStep(); break;
  }
}

// ===== Mode 1: Rainbow =====
void rainbowStep() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= rainbowDelay) {
    previousMillis = currentMillis;
    for (int i = 0; i < NUM_PIXELS; i++) {
      int pixelHue = rainbowHue + (i * 65536L / NUM_PIXELS);
      pixels.setPixelColor(i, pixels.gamma32(pixels.ColorHSV(pixelHue)));
    }
    pixels.show();
    rainbowHue += 256;
    if (rainbowHue >= 5 * 65536L) rainbowHue = 0;
  }
}

// ===== Mode 2: Theater Chase =====
void theaterChaseStep() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= chaseDelay) {
    previousMillis = currentMillis;

    for (int i = 0; i < NUM_PIXELS; i++) {
      pixels.setPixelColor(i, ((i + chaseIndex) % 3 == 0) ? chaseColors[chaseColorIndex] : 0);
    }
    pixels.show();

    chaseIndex = (chaseIndex + 1) % 3;
    if (chaseIndex == 0) {
      chaseColorIndex = (chaseColorIndex + 1) % 3;
    }
  }
}

// ===== Mode 3: Spiral wipe =====
void colorWipeStep() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= wipeDelay) {
    previousMillis = currentMillis;

    if (!spiralDone) {
      if (spiralIndex < NUM_PIXELS) {
        int pixelIndex = spiralOrder[spiralIndex];
        pixels.setPixelColor(pixelIndex, wipeColor);
        spiralIndex++;
      } else if (spiralIndex < 2 * NUM_PIXELS) {
        int pixelIndex = spiralOrder[2 * NUM_PIXELS - 1 - spiralIndex];
        pixels.setPixelColor(pixelIndex, 0);
        spiralIndex++;
      } else {
        spiralIndex = 0;  // Reset for next wipe
      }
      pixels.show();
    }
  }
}
