const { goto, write, textBox, focus, press, click, above } = require('taiko');
const path = require("path");
const fs = require("fs");
const { assert } = require('console');
const baseUrl = "https://odus3-master.okd.cantaa.de/odus3"

step("Goto O3D page", async function () {
    await goto(baseUrl);
});

step("Enter credentials", async function () {
    await write('aUser');
    await focus(textBox('Password'));
    await write('aPassword');
    await press('Enter');
});

step("Browse PDL Zubehör", async function () {
    await click('Zubehör');
    await click('Trägersysteme');
    await click('Dachträger');
    await focus(textBox(above('Alle Marken')));
    await write('Dachbox');
    await press('Enter');
});

step("Goto PDP", async function () {
    await click('A0008401100');
});

step("Download a PDF", async function () {
    await click('PDF erstellen');

    //HIER funktioniert noch nicht wie gewünscht!

    const directoryPath = 'C:\Users\forest\Downloads';
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            assert.strictEqual(file, "ODUS_Produktinformationsblatt_Mercedes_Benz_Dachbox_400_beidseitig_öffnend.pdf");
            console.log(file);
        });
    });
});