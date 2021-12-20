import dotenv from "dotenv";

import sdk from "./1-initialize-sdk.js";

dotenv.config();

if (!process.env.ALCHEMY_APP_ADDRESS || process.env.ALCHEMY_APP_ADDRESS == "") {
  throw new Error("🛑 App address not found.");
}

const app = sdk.getAppModule(process.env.ALCHEMY_APP_ADDRESS);

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "BoringDAO Governance Token",
      symbol: "BOREDOM",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();