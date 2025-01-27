import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("test\n");
writer.write("example\n");
writer.write("example\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});
