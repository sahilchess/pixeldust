#include <Adafruit_NeoPixel.h>

// Argument order: NUMPIXELS, PIN, ...
Adafruit_NeoPixel temperatureLeds(10, 10, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel humidityLeds(7, 9, NEO_GRB + NEO_KHZ800);

void setup() {
  Serial.begin(115200);
  Serial.println("NeoPixel Thermometer has loaded! :yippee:");
  humidityLeds.begin();
  temperatureLeds.begin();
}

float getTemperature() {
  // This would be replaced by code that obtains data from the I2C bus
  long value = random(15, 25);
  return (float)value;
}

float getHumidity() {
  // This would be replaced by code that obtains data from the I2C bus
  long value = random(30, 100);
  return (float)value;
}

#define LIGHT_BLUE temperatureLeds.Color(75, 161, 241)
#define BLUE temperatureLeds.Color(68, 101, 233)
#define YELLOW temperatureLeds.Color(241, 172, 75)
#define ORANGE temperatureLeds.Color(225, 105, 25)
#define RED temperatureLeds.Color(224, 49, 49)

#define BAD humidityLeds.Color(224, 49, 49) // Red
#define OKAY humidityLeds.Color(241, 172, 75) // Yellow
#define GOOD humidityLeds.Color(9, 146, 104) // Green

void loop() {
  float temperature = getTemperature();
  float humidity = getHumidity();

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.print("; Humidity: ");
  Serial.print(humidity);
  Serial.println("");

  // Update temperature LEDs
  temperatureLeds.clear();
  if (temperature >= 15) {
    temperatureLeds.setPixelColor(0, LIGHT_BLUE);
  }
  if (temperature >= 16) {
    temperatureLeds.setPixelColor(1, LIGHT_BLUE);
  }
  if (temperature >= 17) {
    temperatureLeds.setPixelColor(2, BLUE);
  }
  if (temperature >= 18) {
    temperatureLeds.setPixelColor(3, BLUE);
  }
  if (temperature >= 19) {
    temperatureLeds.setPixelColor(4, YELLOW);
  }
  if (temperature >= 20) {
    temperatureLeds.setPixelColor(5, YELLOW);
  }
  if (temperature >= 21) {
    temperatureLeds.setPixelColor(6, ORANGE);
  }
  if (temperature >= 22) {
    temperatureLeds.setPixelColor(7, ORANGE);
  }
  if (temperature >= 23) {
    temperatureLeds.setPixelColor(8, RED);
  }
  if (temperature >= 24) {
    temperatureLeds.setPixelColor(9, RED);
  }
  temperatureLeds.show();

  // Update humidity LEDs
  humidityLeds.clear();
  if (humidity >= 30) {
    humidityLeds.setPixelColor(0, BAD);
  }
  if (humidity >= 40) {
    humidityLeds.setPixelColor(1, OKAY);
  }
  if (humidity >= 50) {
    humidityLeds.setPixelColor(2, GOOD);
  }
  if (humidity >= 60) {
    humidityLeds.setPixelColor(3, GOOD);
  }
  if (humidity >= 70) {
    humidityLeds.setPixelColor(4, GOOD);
  }
  if (humidity >= 80) {
    humidityLeds.setPixelColor(5, OKAY);
  }
  if (humidity >= 90) {
    humidityLeds.setPixelColor(6, BAD);
  }
  humidityLeds.show();

  // Sleep so that we only take temperature readings every 2 seconds
  delay(2000);
}
