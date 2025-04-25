import machine, time
from machine import Pin

class HCSR04:

      def __init__(self, trigger_pin, echo_pin):
          self.echo_timeout_us = 500*2*30
          self.trigger = Pin(trigger_pin, mode=Pin.OUT, pull=None)
          self.trigger.value(0)
          self.echo = Pin(echo_pin, mode=Pin.IN, pull=None)

      def _send_pulse_and_wait(self):
          self.trigger.value(0)
          time.sleep_us(5)
          self.trigger.value(1)
          time.sleep_us(10)
          self.trigger.value(0)
          try:
              pulse_time = machine.time_pulse_us(self.echo, 1, self.echo_timeout_us)
              return pulse_time
          except OSError as ex:
              if ex.args[0] == 110: # 110 = Time Out
                  raise OSError('Out of range')
              raise ex

      def get_distance_mm(self):
          pulse_time = self._send_pulse_and_wait()
          mm = pulse_time * 100 // 582
          return mm

      def get_distance_cm(self):
          pulse_time = self._send_pulse_and_wait()
          cms = int((pulse_time / 2) // 29.1)
          return cms