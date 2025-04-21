#include <Adafruit_NeoPixel.h>

#define LED_PIN    1
#define BUTTON_PIN 2
#define LED_COUNT  14

Adafruit_NeoPixel pixels(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLDOWN);
  pixels.begin();
  pixels.setBrightness(150);
  pixels.clear();
}

int mode = 0, i = 0;

void loop() {
  if(digitalRead(BUTTON_PIN) == HIGH){
    mode = (mode+1)%2;
    i = 0;
    pixels.clear();
  }
  if(mode == 0){
    pixels.setPixelColor(i, pixels.Color(0,0,255));
    pixels.setPixelColor((i-1+14)%14, 0);
    i = (i+1)%14;
  } else {
    for(int j=0;j<14;j++) pixels.setPixelColor(j, i == 0 ? 0 : pixels.Color(255, 255, 0));
    i = (i+1)%2;
  }
  pixels.show();
  delay(100);
}
