function samplePromise(){
    return Promise.resolve("chax");
}

const name = await samplePromise();
console.info(name);
