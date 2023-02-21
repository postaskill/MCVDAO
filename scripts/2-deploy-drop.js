import dotenv from "dotenv";
import {readFileSync} from "fs";
import {ethers} from "ethers";

import sdk from "./1-initialize-sdk.js";

dotenv.config();

if (!process.env.ALCHEMY_APP_ADDRESS || process.env.ALCHEMY_APP_ADDRESS == "") {
  throw new Error("🛑 App address not found.");
}

const app = sdk.getAppModule(process.env.ALCHEMY_APP_ADDRESS);

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "MCVDAO Membership",
      description: "This NFT will give you access to MCVDAO",
      image: readFileSync("scripts/assets/mcvdaoNFT.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()
