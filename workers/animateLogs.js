function animateConsoleLog(text, delay) {
    let i = 0;
    const intervalId = setInterval(() => {
    process.stdout.write(text[i++]);
    if (i === text.length) {
        clearInterval(intervalId);
        console.log();
    }
    }, delay);
}

module.exports = animateConsoleLog;
