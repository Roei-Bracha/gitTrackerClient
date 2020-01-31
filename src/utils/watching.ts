import fs from 'fs'
import { getModifiedFiles,getUserName,getRepo} from './gitFunctions'

/**
 * the function send to the call back
 * @param workDir 
 * @param callback 
 */
export const watchDir = (workDir: string, callback: (gitData:GitData)=> void) : fs.FSWatcher => {
    return fs.watch(workDir, async (eventType: any, filename: string) => {
        const promisesAns = await Promise.all([getModifiedFiles(workDir), getUserName(), getRepo(workDir)])
        const ans = {
            branch: promisesAns[0].branch,
            files: promisesAns[0].files,
            username: promisesAns[1],
            repo: promisesAns[2]
        }
        callback(ans)
    })
}

interface GitData {
    branch: string,
    files: string[],
    username: string,
    repo: string
}