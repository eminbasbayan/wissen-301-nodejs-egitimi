const fs = require("node:fs");

// Senkron dosya okuma
// const txtFile = fs.readFileSync("./file.txt", "utf-8");
// console.log(txtFile);

// Asenkron dosya okuma
// console.log("first");
// fs.readFile("./file.txt", (err, data) => {
//   setTimeout(() => {
//     if (err) {
//       console.log("Dosya okunurken bir hata oluştur:" + err);
//     } else {
//       console.log(data.toString());
//     }
//   }, 3000);
// });
// console.log("second");

// Senkron dosya yazdırma
// fs.writeFileSync("./file2.txt", "Hello World!!!!");

// Asenkron dosya yazdırma
// fs.writeFile("./file.txt", "Hello", (err) => {
//   if (err) {
//     console.log("Dosya okunurken bir hata oluştur:" + err);
//   } else {
//     console.log("Dosya yazdırma işlemi başarılı!");
//   }
// });

// Yazıyı sonuna ekleme
fs.writeFile("./file.txt", " World!", { flag: "a" }, (err) => {
  if (err) {
    console.log("Dosya okunurken bir hata oluştur:" + err);
  } else {
    console.log("Dosya yazdırma işlemi başarılı!");
  }
});
