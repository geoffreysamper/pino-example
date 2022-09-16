import yargs from 'yargs/yargs'

let args = yargs(process.argv).argv;
console.log(args)

if (args.console){
    import('./plain-console.mjs')
}
else {
    import('./pino.mjs')
}


//