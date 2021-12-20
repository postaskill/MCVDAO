import dotenv from "dotenv";
import {ethers} from "ethers";

import sdk from "./1-initialize-sdk.js";

dotenv.config();

if (!process.env.TOKEN_ADDRESS || process.env.TOKEN_ADDRESS == "") {
  throw new Error("🛑 Token address not found.");
}

const tokenModule = sdk.getTokenModule(process.env.TOKEN_ADDRESS);

(async () => {
  try {
    const amount = 1234567;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();

    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$BOREDOM in circulation",
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();