import * as web3 from "@solana/web3.js";
import { Connection, PublicKey, clusterApiUrl, Keypair, VersionedTransaction  } from "@solana/web3.js";
import "dotenv/config";
import { Wallet } from '@project-serum/anchor';
import bs58 from 'bs58';
import { getKeypairFromEnvironment, requestAndConfirmAirdropIfRequired } from "@solana-developers/helpers";

// Wrap your existing code in an async function
async function main() {
    const payer = getKeypairFromEnvironment('SECRET_KEY');
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'));

    const PING_PROGRAM_ADDRESS = new web3.PublicKey('ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa');
    const PING_PROGRAM_DATA_ADDRESS =  new web3.PublicKey('Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod');

    const transaction = new web3.Transaction();
    const programId = new web3.PublicKey(PING_PROGRAM_ADDRESS);
    const pingProgramDataId = new web3.PublicKey(PING_PROGRAM_DATA_ADDRESS);

    const instruction = new web3.TransactionInstruction({
      keys: [
        {
          pubkey: pingProgramDataId,
          isSigner: false,
          isWritable: true
        },
      ],
      programId,
    });

    transaction.add(instruction);

    // Now you can use await because it's inside an async function
    const signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [payer]
    );

    console.log(`✅ Transaction completed! Signature is ${signature}`);
}

// Call the async function
main().catch(console.error);
