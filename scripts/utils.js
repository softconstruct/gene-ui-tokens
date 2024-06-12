import { exec } from 'child_process';

/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
const execCommand = (cmd, messageNamespace = '') =>
    new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.warn(error);
            }

            if (messageNamespace && stdout) {
                console.log(`${messageNamespace}: ${stdout}`);
            }

            resolve(stdout || stderr);
        });
    });

export { execCommand };
