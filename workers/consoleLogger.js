function logSuccess(message) {
    console.log(`✅ \x1b[42m\x1b[1m\x1b[30m SUCCESS \x1b[0m\x1b[32m ${message} \x1b[0m`);
}

function logError(message) {
    console.error(`❌ \x1b[41m\x1b[1m\x1b[37m ERROR \x1b[0m\x1b[31m ${message} \x1b[0m`);
}

function logRegular(message) {
    console.log(`🔹 \x1b[34m ${message} \x1b[0m`);
}


module.exports = { logSuccess, logError, logRegular };
