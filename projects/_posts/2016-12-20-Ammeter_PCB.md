---
layout: default
modal-id: 1
title: Improved Ammeter PCB design from scratch + 3D printing
date: 2016-12-20
img: ammeter.jpg
alt: image-alt
project-date: Dec 2016
client: personal
tags: [Hardware, PCB, 3D Printing, Eagle, Autocad, Inventor, Ammeter, SPI communication, I2C, AVR, Embedded system, Embedded C++, Design Verification]
description:  This current meter design is intended to minimize the effects of burden voltage that is present in most Multimeters in the market. The current meter is designed to read up to 7A. The maximum current rating is set to be 8A (the fuse will break at this point) and will only be able to read positive DC currents. The circuit can be powered by a battery with a voltage ranging from 2.5 to 5v, in this design 2-AAA battery is used as a power source i.e 3V source. The Analog current measurement will be sampled at 12kSPS (based on atxmega32 specs), and the digital output will have 12-bit resolution.<p class="text-justify">The current is read by measuring the voltage that flows across a shunt resistor. The shunt resistor is specially chosen to have current sense technology, where the resistors packs have 4 terminals, 2 for current flow, and 2 for current measurement. The voltage across the resistor is read using the Atxmega micro controller’s built in Analog to digital converter(ADC).<p class="text-justify">A LCD touch screen is added to display the current readings such as peak, instantaneous, rms etc. In addition the LCD will be used to graph continuous data assuming I will finish the programming on time. Since the programming had to go through a number of revisions, a PDI communication will be implemented to modify the code as intended. In addition to serving as a normal current meter, A USB port will be added to monitor the current usage of mobile phone or other devices charged using USB. A micro usb port will be used as the input and USB as output.

link: <a href="https://radrajith.github.io/ESE_323_PCB_Design/">Project website Link
---
