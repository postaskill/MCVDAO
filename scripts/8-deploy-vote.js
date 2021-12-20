import dotenv from "dotenv";

import sdk from "./1-initialize-sdk.js";

dotenv.config();

if (!process.env.ALCHEMY_APP_ADDRESS || process.env.ALCHEMY_APP_ADDRESS == "") {
  throw new Error("🛑 App address not found.");
}

if (!process.env.TOKEN_ADDRESS || process.env.TOKEN_ADDRESS == "") {
  throw new Error("🛑 Token address not found.");
}

const appModule = sdk.getAppModule(process.env.ALCHEMY_APP_ADDRESS);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "BoringDAO's Boring Proposals",
      votingTokenAddress: process.env.TOKEN_ADDRESS,
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 60 * 60 * 24 * 30,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();
