#!/bin/bash

# Define the URL of the repository to clone
repo_url="https://github.com/BankkRoll/NFTGEN-nft-generator.git"

# Define the header (truncated for brevity)
header="
\x1b[1m\x1b[31m
  \x1b[31m███╗  ██╗\x1b[39m███████╗\x1b[35m████████╗ \x1b[32m██████╗ \x1b[32m███████╗\x1b[34m███╗  ██╗
  \x1b[32m████╗ ██║\x1b[38m██╔════╝\x1b[38m╚══██╔══╝\x1b[31m██╔════╝ \x1b[36m██╔════╝\x1b[35m████╗ ██║
  \x1b[33m██╔██╗██║\x1b[37m█████╗     \x1b[36m██║   \x1b[33m██║  ██╗ \x1b[31m█████╗  \x1b[36m██╔██╗██║
  \x1b[34m██║╚████║\x1b[36m██╔══╝     \x1b[34m██║   \x1b[34m██║  ╚██╗\x1b[34m██╔══╝  \x1b[33m██║╚████║
  \x1b[35m██║ ╚███║\x1b[32m██║        \x1b[32m██║   \x1b[37m╚██████╔╝\x1b[33m███████╗\x1b[32m██║ ╚███║
  \x1b[36m╚═╝  ╚══╝\x1b[34m╚═╝        \x1b[31m╚═╝    \x1b[35m╚═════╝ \x1b[31m╚══════╝\x1b[38m╚═╝  ╚══╝

\x1b[1m\x1b[32m🤝 Buy me a redbull: \x1b[0m\x1b[1m\x1b[36m0xB26b2f9786090A9f647a90979b48C4Be564D7ff9\x1b[0m
\x1b[32mThank you for using NFTGEN, developed by bankkroll.eth.\x1b[0m
          \x1b[34m→ https://twitter.com/bankkroll_eth\x1b[0m
"

# Print the header
echo -e "$header"

# Run the git clone command in the background and redirect its output to /dev/null
git clone "$repo_url" &>/dev/null &

# Get the process ID of the background git clone command
git_clone_pid=$!

# Loop and display a loading animation while the git clone command is running
while kill -0 "$git_clone_pid" 2>/dev/null; do
  for i in '|' '/' '-' '\\'; do
    printf "\r%c" "$i"
    sleep 0.2
  done
done

# Print a new line and a completion message
echo -e "\nClone complete!"
