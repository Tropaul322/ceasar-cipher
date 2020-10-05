# Ceasar Cipher

# How to use

## Download
  ### 1. Download this repo on your computer
  ### 2. Open folders until you find the file "ceasar-cipher.js"
  ### 3. Open that folder with code editor, or with command line
  ### 4. Install all dependencies with command "npm i"

## Start CLI
  ### 1. When all dependencies are installed, in command line you should type "node ceasar-cipher" and then use flags
-  -a, --action -> decode/encode (necessary)
-  -s, --shift  -> a shift of decode/encode (necessary)
-  -i, --input  -> name of the file that have text for action (is located in folder)
-  -o, --output -> name of the file that will recive data after action ends (is located in folder)
  ### 2. Examples
* "**node caesar-cipher -a encode -s 1 -i input.txt -o output.txt**"
    * *input.txt  -> "This is my code! 1234 Привет Мир"*
    * *output.txt -> "Sghr hr lx bncd! 1234 Привет Мир"*

* "**node caesar-cipher -a encode -s 1 -i input.txt**"
    * *input.txt  -> "This is my code! 1234 Привет Мир"*
    * *output will be in command line -> "Sghr hr lx bncd! 1234 Привет Мир"*

* "**node caesar-cipher -a encode -s 1**"
    * *input will be reciving through command line -> "This is my code! 1234 Привет Мир"*
    * *output will be in command line -> "Sghr hr lx bncd! 1234 Привет Мир"*
 
