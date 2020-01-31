const { exec } = require('child_process');

exec('git status', (err, stdout, stderr) => {
    console.log(stdout)
    console.log(err)
    console.log(stderr)
})
