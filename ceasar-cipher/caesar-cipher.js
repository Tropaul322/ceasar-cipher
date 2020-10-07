const fs = require("fs");
const caesarCipher = require('./src/caesar-cipher')

const flagInner = {
  action: "",
  shift: 0,
};

const argv = require("minimist")(process.argv.slice(2), {
  string: ["action", "shift", "input", "output"],
  alias: { action: "a", shift: "s", input: "i", output: "o" },
  unknown: (arg) => {
    console.error("Unknown option: ", arg);
    return false;
  },
});

const checkAction = (args, flags) => {
  if (args.action) {
    args.action === "decode" || args.action === "encode"
      ? (flags.action = args.action)
      : console.error('Choose action: encode or decode');;
  } else {
    process.stderr.write("Please set action!");
  }
};
const checkShift = (args, flags) => {
  if (flags.action !== '') {
    if (args.shift) {
      !isNaN(parseInt(args.shift))
        ? (flags.shift = parseInt(args.shift))
        : console.error("Shift must be a number!");
    } else {
      process.stderr.write("Please set Shift!");
    }
  }
};
const checkInput = (args, flags) => {
  if (flags.shift !== 0) {
    if (args.input) {
      const readStream = fs.createReadStream(`${__dirname}/${args.input}`, "utf8");
      readStream.on("error", (err) => console.error('File with this name doesn\'t exist:' + err))
      readStream.on("data", (chunk) => {
        checkOutput(args, flags.action === 'encode' ? caesarCipher.caesarCipherEncode(chunk, flags.shift) : caesarCipher.caesarCipherDecode(chunk, flags.shift));
      })
    } else {
      process.stdin.on("readable", () => {
        const stdin = process.stdin.read();
        if (stdin) {
          checkOutput(args, flags.action === 'encode' ? caesarCipher.caesarCipherEncode(chunk, flags.shift) : caesarCipher.caesarCipherDecode(chunk, flags.shift));
          process.stdin.resume();
        }
      });
      process.stdin.setEncoding("utf8");
    }
  }
};
const checkOutput = (args, input) => {
  if (args.output) {
    const read = fs.readFileSync(`${__dirname}/${args.output}`, 'utf8')
    const writeStream = fs.createWriteStream(`${__dirname}/${args.output}`);
    writeStream.on('error', (err) => err)
    writeStream.write(`${read}\n${input}`)
    console.log("Successful!\nCheck the file");
  } else {
    process.stdout.write(input);
  }
};

checkAction(argv, flagInner);
checkShift(argv, flagInner);
checkInput(argv, flagInner);
