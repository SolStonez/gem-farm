import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'BANkuWBVZK9PkTSyG8KBaU8CmVJAUmQ1ha7C3gZax1WV'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  'FarMhcFL7RqMxn1UXSFD3HLDFRdx7yXMr1huAVreijNm'
);
