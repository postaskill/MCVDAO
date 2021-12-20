import dotenv from "dotenv";
import {ethers} from "ethers";

import sdk from "./1-initialize-sdk.js";

dotenv.config();

if (!process.env.VOTING_ADDRESS || process.env.VOTING_ADDRESS == "") {
  throw new Error("🛑 Voting address not found.");
}

if (!process.env.TOKEN_ADDRESS || process.env.TOKEN_ADDRESS == "") {
  throw new Error("🛑 Token address not found.");
}

if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS == "") {
  throw new Error("🛑 Wallet address not found.");
}

const TREASURY_PERCENTAGE = 50;

const voteModule = sdk.getVoteModule(process.env.VOTING_ADDRESS);
const tokenModule = sdk.getTokenModule(process.env.TOKEN_ADDRESS);

(async () => {
  try {
    await tokenModule.grantRole("minter", voteModule.address);

    console.log(
      "Successfully gave vote module permissions to act on token module"
    );
  } catch (error) {
    console.error(
      "failed to grant vote module permissions on token module",
      error
    );
    process.exit(1);
  }

  try {
    const ownedTokenBalance = await tokenModule.balanceOf(
      process.env.WALLET_ADDRESS
    );

    const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
    const treasuryAmount = ownedAmount.div(100).mul(TREASURY_PERCENTAGE);

    await tokenModule.transfer(
      voteModule.address,
      treasuryAmount
    );

    console.log("✅ Successfully transferred tokens to vote module");
  } catch (err) {
    console.error("failed to transfer tokens to vote module", err);
  }
})();
