const mainData = [
  {
    id: "1",
    category: "Mobile",
    name: "POCO C51 (Power Black, 64 GB)  (4 GB RAM)",
    LongName: "POCO C51 (Power Black, 64 GB)  (4 GB RAM)",
    price: "₹6,999",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/t/a/c51-mzb0e6din-poco-original-imagzdzzraqzsrzc.jpeg?q=70",
  },
  {
    id: "2",
    category: "Laptop",
    name: "APPLE 2020 Macbook Air M1",
    LongName:
      "APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
    price: "₹81,990",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
  },
  {
    id: "3",
    category: "Monitor",
    name: "SAMSUNG 24 inch Full HD LED Backlit",
    LongName:
      "SAMSUNG 24 inch Full HD LED Backlit IPS Panel with 3-Sided Borderless Display, Game & Free Sync Mode, Eye Saver Mode & Flicker Free Monitor (LS24C310EAWXXL/LF24T350FHWXXL)  (AMD Free Sync, Response Time: 5 ms, 75 Hz Refresh Rate)",
    price: "₹8,999",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70",
  },
  {
    id: "4",
    category: "Smart Watch",
    name: "Fastrack Revoltt FS1|1.83 Display|BT Calling|Fastcharge|",
    LongName:
      "Fastrack Revoltt FS1|1.83 Display|BT Calling|Fastcharge|110+ Sports Mode|200+ WatchFaces Smartwatch  (Green Strap, Free Size)",
    price: "₹1,200",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/s/o/d/1-83-38083pp04-android-ios-fastrack-yes-original-imagnhzegqur9fd7.jpeg?q=70",
  },
  {
    id: "5",
    category: "Printer",
    name: "Canon ImageCLASS MF3010",
    LongName:
      "Canon ImageCLASS MF3010 Multi-function Monochrome Laser Printer  (Black, Toner Cartridge)",
    price: "₹17,499",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/kb89ea80/printer/4/h/f/canon-imageclass-mf3010-original-imafsmk9hhrrtjrx.jpeg?q=70",
  },
  {
    id: "6",
    category: "Laptop",
    name: "DELL Inspiron 3000 Core i3 13th Gen - (8 GB/512 GB SSD/Windows 11 Home) 3530 Thin and Light Laptop  (15.6 inch, Platinum Silver, 1.62 kg, With MS Office)",
    LongName:
      "DELL Inspiron 3000 Core i3 13th Gen - (8 GB/512 GB SSD/Windows 11 Home) 3530 Thin and Light Laptop  (15.6 inch, Platinum Silver, 1.62 kg, With MS Office)",
    price: "₹49,999",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/j/b/k/inspiron-15-thin-and-light-laptop-dell-original-imagrgyf8px89mhp.jpeg?q=70",
  },
  {
    id: "7",
    category: "Camera",
    name: "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless  (Black)",
    LongName: "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless  (Black)",
    price: "₹4,99,989",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/kthjy4w0/dslr-camera/c/q/o/alpha-ilce-1-full-frame-digital-slr-camera-8k-50mop-30-fps-real-original-imag6thaygyzrgnx.jpeg?q=70",
  },
  {
    id: "8",
    category: "Monitor",
    name: "MSI Optix 23.6 inch Curved Full HD VA Panel Gaming Monitor (Optix G24C4)  (AMD Free Sync, Response Time: 1 ms, 144 Hz Refresh Rate)",
    LongName:
      "MSI Optix 23.6 inch Curved Full HD VA Panel Gaming Monitor (Optix G24C4)  (AMD Free Sync, Response Time: 1 ms, 144 Hz Refresh Rate)",
    price: "₹13,499",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/ktlu9ow0/monitor/h/q/x/optix-g24c4-full-hd-optix-g24c4-msi-original-imag6wthhjgv7gf8.jpeg?q=70",
  },
  {
    id: "9",
    category: "Laptop",
    name: "Lenovo Ideapad Gaming 3 AMD Ryzen 5 Hexa Core 5600H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) 15ACH6 Gaming Laptop  (15.6 Inch, Shadow Black, 2.25 Kg)",
    LongName:
      "Lenovo Ideapad Gaming 3 AMD Ryzen 5 Hexa Core 5600H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) 15ACH6 Gaming Laptop  (15.6 Inch, Shadow Black, 2.25 Kg)",
    price: "₹49,990",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/kynb6vk0/computer/k/j/a/-original-imagaufne7h4hgbz.jpeg?q=70",
  },
  {
    id: "10",
    category: "TV",
    name: "LG UQ7550 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV  (55UQ7550PSF)",
    LongName:
      "LG UQ7550 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV  (55UQ7550PSF)",
    price: "₹45,990",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/television/w/g/6/55uq7550psf-lg-original-imagrephdrbguqug.jpeg?q=70",
  },
  {
    id: "11",
    category: "Laptop",
    name: "Infinix ZEROBOOK 13 Intel Core i7 13th Gen - (16 GB/512 GB SSD/Windows 11 Home) ZL513 Thin and Light Laptop  (15.6 inch, Grey With Meteorite Phase Design, 1.80 Kg, With MS Office)",
    LongName:
      "Infinix ZEROBOOK 13 Intel Core i7 13th Gen - (16 GB/512 GB SSD/Windows 11 Home) ZL513 Thin and Light Laptop  (15.6 inch, Grey With Meteorite Phase Design, 1.80 Kg, With MS Office)",
    price: "₹64,990",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/7/d/i/zl12-business-laptop-infinix-original-imagm83gc6xr8sau.jpeg?q=70",
  },
  {
    id: "12",
    category: "Headphone",
    name: "realme Buds Air 3 Neo with up to 30 hours Playback & Fast Charge Bluetooth Headset  (Starry Blue, True Wireless)",
    LongName:
      "realme Buds Air 3 Neo with up to 30 hours Playback & Fast Charge Bluetooth Headset  (Starry Blue, True Wireless)",
    price: "₹1,799",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/l572ufk0/headphone/x/o/p/air-3-neo-realme-original-imagfxcbkt8rmqbg.jpeg?q=70",
  },
  {
    id: "13",
    category: "Speaker",
    name: "Intex 2622 55 W Portable Bluetooth Home Theatre  (Black, 4.1 Channel)",
    LongName:
      "Intex 2622 55 W Portable Bluetooth Home Theatre  (Black, 4.1 Channel)",
    price: "₹2,299",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/kfvfwy80pkrrdj-0/speaker/home-audio-speaker/s/s/l/it-4-1-xv-2622-tufb-tufb-os-intex-original-imafwah6gumuvd6y.jpeg?q=70",
  },
  {
    id: "14",
    category: "Mobile",
    name: "APPLE iPhone 14 Pro Max (Deep Purple, 1 TB)",
    LongName: "APPLE iPhone 14 Pro Max (Deep Purple, 1 TB)",
    price: "₹1,77,999",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/x/j/-original-imaghxejqvpwfqh2.jpeg?q=70",
  },
  {
    id: "15",
    category: "Mobile",
    name: "REDMI 11 Prime (Flashy Black, 128 GB)  (6 GB RAM)",
    LongName: "REDMI 11 Prime (Flashy Black, 128 GB)  (6 GB RAM)",
    price: "₹10,749",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/h/z/11-prime-mzb0cerin-redmi-original-imagzqvrgdz98jch.jpeg?q=70",
  },
  {
    id: "16",
    category: "Mobile",
    name: "SAMSUNG Galaxy F04",
    LongName: "SAMSUNG Galaxy F04 (Opal Green, 64 GB)  (4 GB RAM)",
    price: "₹8,499",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/w/d/o/-original-imaghgbyhy6banxv.jpeg?q=70",
  },
];

const categoryData = [
  {
    id: "1",
    category: "Mobile",
    firstHeading: "Smart Phone",
    secondHeading: "CheckNew Phones",
    imgUrl:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70",
  },
  {
    id: "2",
    category: "Laptop",
    firstHeading: "Laptops",
    secondHeading: "Light and Thin",
    imgUrl:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/j/m/2/-original-imagpa5gadtkbm6y.jpeg?q=70",
  },
  {
    id: "3",
    category: "Camera",
    firstHeading: "Cameras",
    secondHeading: "Explore DSLR",
    imgUrl:
      "https://rukminim1.flixcart.com/image/416/416/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70",
  },
  {
    id: "4",
    category: "TV",
    firstHeading: "Smart TV",
    secondHeading: "4K OLED Display",
    imgUrl:
      "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/e/b/b/32hd2a00-32-y1s-oneplus-original-imagbgcewfqywgk7.jpeg?q=70",
  },
];
export default mainData;
export { categoryData };
