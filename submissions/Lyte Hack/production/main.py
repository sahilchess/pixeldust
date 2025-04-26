import machine, neopixel, time
num_pixels = 10
pixels = neopixel.NeoPixel(machine.Pin(0), num_pixels)

"""
two buttons in use: one display modes, one toggles within modes
display modes:
- 0: off
- 1: on static white
- 2: on static color
- 3: on animated

color modes:
(if display == 2)
- 0: red
- 1: orange
- 2: yellow
- 3: green
- 4: turquoise
- 5: blue
- 6: dark blue
- 7: purple
- 8: pink
- 9: cotton-candy

animated modes (scrapped bc time):
(if display == 3)
- 0: pulse white
- 1: changing colors
- 2: spinning colors
- 3: cotton candy twinkle
- 4: spinning cotton candy
"""

"""
def white_pulse():
    print("yahoo")

def color_change():
    print("yahoo")
"""

display_mode = 0
color_mode = 0
# animated_mode = 0

red = (215, 0, 64)
orange = (255, 172, 28)
yellow = (252, 245, 95)
green = (170, 255, 0)
turquoise = (150, 222, 209)
blue = (0, 150, 255)
dark_blue = (0, 0, 139)
purple = (93, 63, 211)
pink = (255, 182, 193)

color_arr = [red, orange, yellow, green, turquoise, blue, dark_blue, purple, pink]

cc_blue = (173, 216, 230)
cc_pink = (248, 200, 220)

cc_arr = [cc_blue if i % 2 == 0 else cc_pink for i in range(num_pixels)]

def display_pixels():
    if (display_mode == 0):
        pixels.fill((0,0,0))
    elif (display_mode == 1):
        pixels.fill((255,255,255))
    elif (display_mode == 2):
        if (color_mode == 9):
            for i in range(num_pixels):
                pixels[i] = cc_arr[i]
        else:
            pixels.fill(color_arr[color_mode])
    pixels.write()

"""
    else:
        if (animated_mode == 0):
            white_pulse()
        elif (animated_mode == 1):
            color_change()
    # unfinished
"""

def handle_press(pin):
    global display_mode, color_mode, animated_mode

    mode_btn.irq(handler=None)
    toggle_btn.irq(handler=None)

    if pin == mode_btn:
        display_mode = (display_mode + 1) % 4
        print("display pressed")
    else:
        if display_mode == 2:
            color_mode = (color_mode + 1) % 10
            print("toggle pressed")
            print(color_mode)

    display_pixels()
    time.sleep(0.75)

    mode_btn.irq(trigger=machine.Pin.IRQ_RISING, handler=handle_press)
    toggle_btn.irq(trigger=machine.Pin.IRQ_RISING, handler=handle_press)

"""
        elif display_mode == 3:
            animated_mode = (animated_mode + 1) % 5
"""    

mode_btn = machine.Pin(1, machine.Pin.IN, machine.Pin.PULL_DOWN)
toggle_btn = machine.Pin(2, machine.Pin.IN, machine.Pin.PULL_DOWN)

mode_btn.irq(trigger=machine.Pin.IRQ_RISING, handler=handle_press)
toggle_btn.irq(trigger=machine.Pin.IRQ_RISING, handler=handle_press)
