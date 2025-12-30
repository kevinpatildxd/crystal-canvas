---
description: Global installation commands for programming languages and software
---

# Global Installation Commands

This file contains commands for installing programming languages and software **globally** in the home directory so they are accessible to all projects.

// turbo-all

---

## Node.js (via NVM - Node Version Manager)

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Reload shell
source ~/.bashrc

# Install latest LTS Node.js
nvm install --lts

# Set as default
nvm alias default node
```

---

## Python (via Pyenv)

```bash
# Install dependencies
sudo apt-get update
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev

# Install Pyenv
curl https://pyenv.run | bash

# Add to ~/.bashrc
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc

# Reload shell
source ~/.bashrc

# Install Python (example: 3.12)
pyenv install 3.12
pyenv global 3.12
```

---

## Rust

```bash
# Install Rust via rustup (installs to ~/.rustup and ~/.cargo)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Reload shell
source ~/.bashrc
```

---

## Go

```bash
# Download and install Go to home directory
wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
tar -C ~ -xzf go1.22.0.linux-amd64.tar.gz
rm go1.22.0.linux-amd64.tar.gz

# Add to ~/.bashrc
echo 'export PATH=$PATH:~/go/bin' >> ~/.bashrc
source ~/.bashrc
```

---

## Bun (JavaScript runtime)

```bash
# Install Bun to ~/.bun
curl -fsSL https://bun.sh/install | bash

# Reload shell
source ~/.bashrc
```

---

## Deno

```bash
# Install Deno to ~/.deno
curl -fsSL https://deno.land/x/install/install.sh | sh

# Add to ~/.bashrc
echo 'export DENO_INSTALL="$HOME/.deno"' >> ~/.bashrc
echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

---

## Global NPM Packages

```bash
# Install global npm packages (accessible everywhere)
npm install -g typescript ts-node nodemon pm2 yarn pnpm
```

---

## Docker (via official script)

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group (no sudo needed)
sudo usermod -aG docker $USER

# Log out and back in for group changes
```

---

## Common Utilities

```bash
# Install useful CLI tools globally
sudo apt-get update
sudo apt-get install -y git curl wget htop tree jq ripgrep fd-find bat
```

---

## Verify Installations

```bash
node --version
npm --version
python --version
rustc --version
go version
bun --version
deno --version
```
