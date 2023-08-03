//video 00015__10
import * as readline from 'node:readline/promises'  //for async and promise
//import * as rl from 'node:readline'  // for CB and sync
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you want?')

console.log(`Your asnwer was: ${answer} ` , typeof input, input)
// rl.close()