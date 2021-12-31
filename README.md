# Buildspace: Build your own DAO

A repository for the [Buildspace](https://buildspace.so)'s *"[Build your own DAO with just Javascript in a weekend](https://app.buildspace.so/projects/COb520aae3-7925-42f4-a5e7-eaf718933766)"* project.



## Debriefing

During the project, the following tasks have been accomplished:
- Deploy a custom ERC-20 token ([Etherscan link](https://rinkeby.etherscan.io/token/0xf9f1cf9cb231ef07933f66e2e0857f865893e707))
- Deploy a custom ERC-1155 NFT ([Etherscan link](https://rinkeby.etherscan.io/address/0x67a8115E4ADe095e73327b90C25592a0fa693e8d))
- Deploy a custom DAO governance contract & treasury ([Etherscan link](https://rinkeby.etherscan.io/address/0xF9F1cf9Cb231ef07933F66E2E0857F865893e707))
- Build and deploy a dapp for NFT minting and DAO interaction ([Website link](https://buildspace-thirdweb-boringdao.netlify.app/))

<hr />

## Requirements

- [Node.js](https://nodejs.org/en/)

## Development

1. Install project dependencies:
    ```
    npm install
    ```
2. Copy the `.env.example` file as `.env` and provide values for all required fields.

#### Blockchain scripts

- Execute individual scripts in the `scripts` folder:
	```
    node scripts/<file-name>
    ```
#### Frontend client

- Start the application in development mode:
	```
    npm run start
    ```

## Deployment

1. Copy the `.env.example` file as `.env` and provide values for all required fields.
2. If not done during development, install project dependencies:
	```
    npm install
    ```
3. Generate the production build of the application:
	```
    npm run build
    ```
4. Using the web server of your preference, publish the contents of the generated `build` directory.

## Resources
- [Buildspace: Build your own DAO with just Javascript in a weekend](https://app.buildspace.so/projects/COb520aae3-7925-42f4-a5e7-eaf718933766)
- [Thirdweb](https://thirdweb.com/)
- [Alchemy](https://www.alchemy.com/)