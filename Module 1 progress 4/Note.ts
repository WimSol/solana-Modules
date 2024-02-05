import * as web3 from "@solana/web3.js";
import "dotenv/config";
import base58 from "bs58";
import { getKeypairFromEnvironment, requestAndConfirmAirdropIfRequired } from "@solana-developers/helpers";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

async function main() {
    const payer = getKeypairFromEnvironment('SECRET_KEY');
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'));

    const newBalance = await requestAndConfirmAirdropIfRequired(
      connection,
      payer.publicKey,
      2 * LAMPORTS_PER_SOL,
      0.5 * LAMPORTS_PER_SOL,
    );

    console.log(`New balance: ${newBalance}`);
}

// Call the async function
main().catch(console.error);