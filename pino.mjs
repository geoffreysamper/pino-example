import pinoInitializer, { stdTimeFunctions } from 'pino'
import { setTimeout, setInterval } from 'timers/promises'
import pkg from './package.json' assert { type: 'json' };


let pino = pinoInitializer(
    {
        timestamp: stdTimeFunctions.isoTime,
        useLevelLabels: true
    })


async function writeLogEntries() {
    //let pkg= await fs.readFile("./package.json",'utf-8')

    pino.warn("Warning there is an invalid use of a pointer \n this entry should generate one line")
    await setTimeout(1000)
    pino.info(pkg, "this is the package.json")
    try {
       
        abc("abc")
    }
    catch (e) {
        pino.error(e, 'this is a custom errorr')

    }
    
   
}

const interval = 1000 * 1 * 60 * 10;

async function main() {
    await pino.info("starting programs to generate log entries")
    writeLogEntries();

    for await (const startTime of setInterval(interval)) {
        await writeLogEntries()

    }
}


await main()

