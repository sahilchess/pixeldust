from neopixel import NeoPixel
# from gpio import UltraSonic
from machine import Pin
from time import sleep, sleep_us
from hcsr04 import HCSR04

WIDTH = 7
HEIGHT = 7
NUM_PIXELS = WIDTH * HEIGHT
CENTER = (WIDTH // 2, HEIGHT // 2)
np = NeoPixel(Pin(26), NUM_PIXELS)

def get_color(distance, max_distance):
    ratio = max(0, min(1, 1 - distance / max_distance))
    r = int(255 * ratio)
    g = int(255 * (1 - ratio))
    return (r, g, 0)

def draw_circle(distance):
    max_distance = 300
    max_radius = 6
    radius = int(max_radius * (1 - min(distance / max_distance, 1)))
    for i in range(NUM_PIXELS):
        np[i] = (0, 0, 0)
    cx, cy = CENTER
    color = get_color(distance, max_distance)
    for y in range(HEIGHT):
        for x in range(WIDTH):
            if (x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2:
                index = y * WIDTH + x
                np[index] = color
    np.write()

sensor = HCSR04(27, 28)

def main():
    while True:
        draw_circle(sensor.get_distance_cm())
        sleep(0.1)

if __name__ == "__main__":
    main()
