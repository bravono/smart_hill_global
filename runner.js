const { exec } = require('child_process');
const fs = require('fs');

const cmd = 'node_modules\\.bin\\next.cmd dev --port 3000';
const logFile = 'dev-server.log';

const child = exec(cmd, { cwd: process.cwd() });

child.stdout.on('data', (data) => {
  fs.appendFileSync(logFile, data);
});

child.stderr.on('data', (data) => {
  fs.appendFileSync(logFile, `ERROR: ${data}`);
});

console.log('Dev server started with logging to dev-server.log');
