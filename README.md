
# 🎳 Bowling Score Calculator

A simple Node.js script that calculates bowling scores — including bonuses for strikes and spares — based on the values entered in the frames array.

## 🧩 Features

Detects strikes and spares automatically

Adds bonus rolls (gifts) correctly

Outputs both bonus rolls and the total score

## ⚙️ Setup & Usage
1. Download the File

Clone or download the repository, or just get the file:

bowl_v3.js

2. Run the Script

Open your terminal and execute:

node bowl_v3.js


This will calculate the total bowling score and display it in the console.

## 🎯 Editing Frames

If you want to modify or test different frame scores:

Open bowl_v3.js in your code editor.

Locate the frames variable at the top:

```
const frames = [
    [5, 3],  
    [10],
    [4, 6]
];
```


Edit or add frames as needed.

Each frame is represented as an array of rolls.

A strike = [10]

A spare = [4,6]

Normal frame = [5,3]

## 🧮 Example Output
```
============ 
Total Gifts: 4,6
Total Score: 38
```
🪄 Notes

Works best for up to 10 frames (standard bowling rules).

Uses Array.prototype.flat() and reduce() for calculations.

Designed for Node.js environments — no external dependencies required.

🧑‍💻 Author

Jubil Reign G. Villaruel
Associate Software Engineer | Game Organizer | Developer
