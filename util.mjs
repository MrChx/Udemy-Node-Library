import util from "util";

const firstName = "acha";
const lastName = "qilal";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "acha",
    lastName: "qilal"
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
