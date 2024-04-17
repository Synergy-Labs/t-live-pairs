export interface LivePair {
	address: string;
	variation?: number;
	poolVariation: {
		added: number;
		initialReserve0: string;
		initialReserve1: string;
	};
	token0data: {
		address: string;
		symbol: string;
		decimals: number;
	};
	token1data: {
		address: string;
		symbol: string;
		decimals: number;
	};
	reserve0: string;
	reserve1: string;
}
