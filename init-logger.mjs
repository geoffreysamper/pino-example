import pino, {stdTimeFunctions} from 'pino'


let logFilePath = process.env.LOG_FILEPATH || './multiline.log'
export let rootLogger;

export function init(){





 let targets = [{
     target: 'pino/file',
     options: {
         destination: logFilePath,
         sync : true,
         append:true
     }
 }]
 console.log("node env is set to : ",process.env.NODE_ENV)
 if (process.env.NODE_ENV == "development"){
         targets.push(   {target:  'pino-pretty'})
 }
//  else {
//      targets.push({
//          target: 'pino/file',
//          options: {
//              destination: 1, //write to sdout
//              sync : true
//          }
//      });
//  }
    

    
    let options = {       
        timestamp: stdTimeFunctions.isoTime,
        useLevelLabels: true,
        transport: {
            targets : targets
        },
        
    }

    let log = pino(options)
    rootLogger = log

    return log;
}


function getFormatter(){
    return {
        level: (label) => {
          return {
            level: label
          }
        }
    }
}
