function printHeader() {
  const header = `
    \x1b[1m\x1b[31m
      \x1b[31m███╗  ██╗\x1b[39m███████╗\x1b[35m████████╗ \x1b[32m██████╗ \x1b[32m███████╗\x1b[34m███╗  ██╗
      \x1b[32m████╗ ██║\x1b[38m██╔════╝\x1b[38m╚══██╔══╝\x1b[31m██╔════╝ \x1b[36m██╔════╝\x1b[35m████╗ ██║
      \x1b[33m██╔██╗██║\x1b[37m█████╗     \x1b[36m██║   \x1b[33m██║  ██╗ \x1b[31m█████╗  \x1b[36m██╔██╗██║
      \x1b[34m██║╚████║\x1b[36m██╔══╝     \x1b[34m██║   \x1b[34m██║  ╚██╗\x1b[34m██╔══╝  \x1b[33m██║╚████║
      \x1b[35m██║ ╚███║\x1b[32m██║        \x1b[32m██║   \x1b[37m╚██████╔╝\x1b[33m███████╗\x1b[32m██║ ╚███║
      \x1b[36m╚═╝  ╚══╝\x1b[34m╚═╝        \x1b[31m╚═╝    \x1b[35m╚═════╝ \x1b[31m╚══════╝\x1b[38m╚═╝  ╚══╝

\x1b[1m\x1b[32m🤝 Buy me a redbull: \x1b[0m\x1b[1m\x1b[36m0xB26b2f9786090A9f647a90979b48C4Be564D7ff9\x1b[0m\n
    \x1b[32mThank you for using NFTGEN, developed by bankkroll.eth.\x1b[0m
              \x1b[34m→ https://twitter.com/bankkroll_eth\x1b[0m\n`;

  const lines = header.split("\n");
  let delay = 0;
  for (const line of lines) {
    setTimeout(() => {
      console.log(line);
    }, delay);
    delay += 50;
  }
}

module.exports = printHeader;
