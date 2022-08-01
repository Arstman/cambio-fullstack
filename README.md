# The Cambio Fullstack Project

This is the fullstack substrate project, include a full node of substrate, and the frontend.

## Features

1. full substrate node, substrate is a blockchain framework written in rust
2. super fast and stable
3. frontend with sveltekit, unlike other polkadotjs project, we love sveltekit
4. it also the basic project for Cambio Network

## Usage

### backend

1. you must have rust toolchain installed, check [this link](https://docs.substrate.io/main-docs/install/) for more information 

2. run `cargo install` and then `cargo build --release`

3. you will see a execute binary lay inside of ./target/release named 'cambio', run it 
   
   ![](https://github.com/Arstman/cambio-fullstack/raw/main/pic/benchmark_weight.png)

### front end

1. run `pnpm install` inside the frontend file

2. run `pnpm run dev`
   
   ![](https://github.com/Arstman/cambio-fullstack/raw/main/pic/erc20-approval.png)

## License

This project under MIT License
