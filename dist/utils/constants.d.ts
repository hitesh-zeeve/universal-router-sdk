import { BigNumber } from 'ethers';
declare type ChainConfig = {
    router: string;
    creationBlock: number;
    weth: string;
};
export declare const CHAIN_CONFIGS: {
    [key: number]: ChainConfig;
};
export declare const UNIVERSAL_ROUTER_ADDRESS: (chainId: number) => string;
export declare const UNIVERSAL_ROUTER_CREATION_BLOCK: (chainId: number) => number;
export declare const WETH_ADDRESS: (chainId: number) => string;
export declare const PERMIT2_ADDRESS = "0x000000000022D473030F116dDEE9F6B43aC78BA3";
export declare const CONTRACT_BALANCE: BigNumber;
export declare const ETH_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare const MAX_UINT256: BigNumber;
export declare const MAX_UINT160: BigNumber;
export declare const SENDER_AS_RECIPIENT = "0x0000000000000000000000000000000000000001";
export declare const ROUTER_AS_RECIPIENT = "0x0000000000000000000000000000000000000002";
export declare const OPENSEA_CONDUIT_SPENDER_ID = 0;
export declare const SUDOSWAP_SPENDER_ID = 1;
export {};
