import dotenv from "dotenv";
import {readFileSync} from "fs";

import sdk from "./1-initialize-sdk.js";

dotenv.config();

if (!process.env.BUNDLE_DROP_ADDRESS || process.env.BUNDLE_DROP_ADDRESS == "") {
  throw new Error("🛑 bundleDrop address not found.");
}

const bundleDrop = sdk.getBundleDropModule(process.env.BUNDLE_DROP_ADDRESS);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "MCV DAO MEMBERSHIP NFT",
        description: "This NFT will give you access to MCVDAO",
        image: readFileSync("scripts/assets/boringdao-nft.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
