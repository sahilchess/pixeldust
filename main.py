#extremely basic starting code, way more will be added when i can mess with the real one
#literally never written something for a microcontroller before, closest i've gotten was robot control but that's a little different
import time
time.sleep(0.1) # Wait for USB to become ready
import machine, neopixel
from machine import Pin
from neopixel import NeoPixel
import random
keylights = NeoPixel(Pin(0, Pin.OUT), 9)
outerlights = NeoPixel(Pin(7, Pin.Out), 10)

a = Pin(3, Pin.IN, Pin.PULL_UP)
b = Pin(26, Pin.IN, Pin.PULL_UP)
c = Pin(27, Pin.IN, Pin.PULL_UP)
d = Pin(28, Pin.IN, Pin.PULL_UP)
e = Pin(29, Pin.IN, Pin.PULL_UP)
f = Pin(6, Pin.IN, Pin.PULL_UP)
push = Pin(1, Pin.IN, Pin.PULL_UP) #encoder push
enc_a = Pin(4, Pin.IN, Pin.PULL_UP) #encoder A
enc_b = Pin(2, Pin.IN, Pin.PULL_UP) #encoder B
#operational loop
while True:
    if a.value() == 0:
        outerlights[0] = (0,100,0)
    else:
        outerlights[0] = (0,0,0)
    if b.value() == 0:
        keylights[2] = (0,100,0)
    else:
        keylights[2] = (0,0,0)
    if c.value() == 0:
        keylights[1] = (0,100,0)
    else:
        keylights[1] = (0,0,0)
    if d.value() == 0:
        keylights[0] = (0,100,0)
    else:
        keylights[0] = (0,0,0)
    if e.value() == 0:
        keylights[5] = (0,100,0)
    else:
        keylights[5] = (0,0,0)
    if f.value() == 0:
        keylights[4] = (0,100,0)
    else:
        keylights[4] = (0,0,0)
    keylights.write()
    outerlights.write()
    time.sleep(0.1) #prevent infinite loop running too fast

#to do:
# - add encoder functionality
# - add hid device control
# - effects