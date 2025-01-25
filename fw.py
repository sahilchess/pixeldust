import board
import neopixel
import time
import random

# Configure the NeoPixel
pixel_pin = board.D2  # Change this to your data pin
num_pixels = 36  # 6x6 grid
pixels = neopixel.NeoPixel(pixel_pin, num_pixels, brightness=0.3, auto_write=False)

# Helper function to convert x,y coordinates to LED index (snake pattern)
def xy_to_index(x, y):
    if y % 2 == 0:  # Even rows go left to right
        return y * 6 + x
    else:  # Odd rows go right to left
        return y * 6 + (5 - x)

# Pattern 1: Rainbow wave
def rainbow_wave():
    for j in range(255):
        for y in range(6):
            for x in range(6):
                i = xy_to_index(x, y)
                # Create a rainbow pattern with offset based on position and time
                hue = (j + (x + y) * 8) % 255
                pixels[i] = colorwheel(hue)
        pixels.show()
        time.sleep(0.05)

# Pattern 2: Moving dots
def moving_dots():
    for _ in range(50):
        pixels.fill((0, 0, 0))
        # Create 3 moving dots with different colors
        for i in range(3):
            x = (time.monotonic() * (i + 1)) % 6
            y = (time.monotonic() * (i + 2)) % 6
            idx = xy_to_index(int(x), int(y))
            pixels[idx] = (255 * (i==0), 255 * (i==1), 255 * (i==2))
        pixels.show()
        time.sleep(0.05)

# Pattern 3: Random sparkles
def sparkles():
    for _ in range(50):
        for i in range(num_pixels):
            if random.random() < 0.1:  # 10% chance to light up each LED
                pixels[i] = (random.randint(0, 255), 
                           random.randint(0, 255), 
                           random.randint(0, 255))
            else:
                pixels[i] = (0, 0, 0)
        pixels.show()
        time.sleep(0.05)

# Pattern 4: Expanding squares
def expanding_squares():
    for size in range(4):
        color = (random.randint(0, 255), 
                random.randint(0, 255), 
                random.randint(0, 255))
        # Draw a square border
        for i in range(size + 1):
            # Top and bottom edges
            for x in range(i, 6-i):
                pixels[xy_to_index(x, i)] = color
                pixels[xy_to_index(x, 5-i)] = color
            # Left and right edges
            for y in range(i, 6-i):
                pixels[xy_to_index(i, y)] = color
                pixels[xy_to_index(5-i, y)] = color
        pixels.show()
        time.sleep(0.5)

# Helper function for rainbow colors
def colorwheel(pos):
    if pos < 85:
        return (pos * 3, 255 - pos * 3, 0)
    elif pos < 170:
        pos -= 85
        return (255 - pos * 3, 0, pos * 3)
    else:
        pos -= 170
        return (0, pos * 3, 255 - pos * 3)

# Main loop
while True:
    print("Rainbow Wave")
    rainbow_wave()
    
    print("Moving Dots")
    moving_dots()
    
    print("Sparkles")
    sparkles()
    
    print("Expanding Squares")
    expanding_squares()
    
    # Clear all pixels between patterns
    pixels.fill((0, 0, 0))
    pixels.show()
    time.sleep(1)
