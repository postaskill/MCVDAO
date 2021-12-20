import dotenv from "dotenv";

import sdk from "./1-initialize-sdk.js";

dotenv.config();

if (!process.env.BUNDLE_DROP_ADDRESS || process.env.BUNDLE_DROP_ADDRESS == "") {
  throw new Error("🛑 bundleDrop address not found.");
}

const bundleDrop = sdk.getBundleDropModule(process.env.BUNDLE_DROP_ADDRESS);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 12345,
      maxQuantityPerTransaction: 1,
    });


    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})()