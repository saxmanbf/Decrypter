// import the decrypt... function from our
// main program file (decrpyt.js)

var decrypt = require('../decrypt');

describe("A program to decrypt a square cipher", () => {

  it("can break an input string into rows", () => {
    expect(decrypt.toRow("aaoce snbrd ecey nedp ttet"))
      .toEqual(["aaoce","snbrd","ecey","nedp","ttet"]);
  });

  it("can assemble the rows into the original message", () => {
  	expect(decrypt.reorder(["aaoce","snbrd","ecey","nedp","ttet"]))
  	.toBe('asentancetobedecrypted');
  });

 });