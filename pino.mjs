import {      setInterval} from 'timers/promises'
import pkg from './package.json'assert {    type: 'json'}
import {rootLogger as log, init as initLogging, rootLogger} from './init-logger.mjs'

initLogging()

async function writeLogEntries() {
    //let pkg= await fs.readFile("./package.json",'utf-8')

    log.warn("Warning there is an invalid use of a pointer \n this entry should generate one line")
    log.info(pkg, "this is the package.json")
    try {

        abc("abc")
    } catch (e) {
        log.error(e, 'this is a custom errorr')
    }
}

const interval = 1000 * 1 * 10;

async function main() {
    await log.info("starting programs to generate log entries")
    writeLogEntries();

    for await (const startTime of setInterval(interval)) {
        await writeLogEntries()

    }
}


    if (process.env.SIMULATE_CRASH == "true"){
    setTimeout(() => {
        throw new Error("fail error, this is triggered on purpose")
    }, interval * 3);
    }



    process.on("uncaughtException", function(e){
        log.fatal(e, "a fatal error occured")
        process.exit(0)

    })

await main()


