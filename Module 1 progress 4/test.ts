import * as web3 from "@solana/web3.js";
import { Connection, PublicKey, clusterApiUrl, Keypair, VersionedTransaction  } from "@solana/web3.js";
// import "dotenv/config";
import { Wallet } from '@project-serum/anchor';
import bs58 from 'bs58';

const connection = new Connection(clusterApiUrl("devnet"));
const wallet = bs58.decode("KdXJkVzL4sAboZG33Z13XdC1L16FnAGd1otdHkSv8zgydW7hLq7BtU9tQo1yvHVVw3YWWpVCob1cpQ9iHdpqjvJ");

console.log(wallet);