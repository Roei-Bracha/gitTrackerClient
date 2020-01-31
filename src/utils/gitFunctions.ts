const simpleGit = require('simple-git/promise')
const { exec } = require('child_process')

export const getModifiedFiles = async (path: string): Promise<ModifiedFiles> => {
    const git = simpleGit(path);
    const status = await git.status()
    return {
        branch: status.tracking,
        files:[...status.modified, ...status.not_added, ...status.deleted]
    }
}

export const getDiff = async (path: string): Promise<string> => {
    const git = simpleGit(path);
    const diff = await git.diff()
    return diff
}

export const getBranches = async (path: string): Promise<string> => {
    const git = simpleGit(path);
    const branches = await git.listRemote()
    return (branches)
}

export const getUserName = async (): Promise<string>=> {
    return new Promise((resolve, reject) => {
        exec('git config user.name', (err:string, stdout:string, stderr:string) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(stdout)
            }
        })
    })
}

export const getRepo = async (path:string): Promise<string>=> {
    return new Promise((resolve, reject) => {
        exec(`cd ${path} && git config remote.origin.url`, (err:string, stdout:string, stderr:string) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(stdout)
            }
        })
    })
}

interface ModifiedFiles  {
    branch: string,
    files:string[]
}