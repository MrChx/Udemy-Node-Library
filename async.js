function samplePromise(){
    return Promise.resolve("Chax");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();
