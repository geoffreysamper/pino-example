import { setTimeout, setInterval } from 'timers/promises'
import pkg from './package.json' assert { type: 'json' };


async function writeLogEntries() {
    //let pkg= await fs.readFile("./package.json",'utf-8')

    console.warn("Warning there is an invalid use of a pointer \n this entry should\n generate one line")
    await setTimeout(1000)
    
    try {
       
        abc("abc")
    }
    catch (e) {
        console.error('this is a custom errorr',e)

    }  
}

const interval = 1000 * 1 * 60   ;

async function main() {
     console.info("starting programs to generate\n log entries in using console.log")
     console.info("starting programs2 to generate log entries in using console.log")
    writeLogEntries();

    for await (const startTime of setInterval(interval)) {
        await writeLogEntries()

    }
}


await main()

