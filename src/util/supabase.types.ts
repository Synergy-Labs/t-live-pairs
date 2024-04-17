export type Json = string | number | boolean | null | { [key: string]: Json | undefined; } | Json[];

export interface Database {
	public: {
		Tables: {
			pair: {
				Row: {
					address: string;
					chainid: number | string;
					poolVariation: Json | null;
					reserve0: number | string;
					reserve1: number | string;
					token0: string;
					token1: string;
				};
				Insert: {
					address: string;
					chainid: number | string;
					poolVariation?: Json | null;
					reserve0: number | string;
					reserve1: number | string;
					token0: string;
					token1: string;
				};
				Update: {
					address?: string;
					chainid?: number | string;
					poolVariation?: Json | null;
					reserve0?: number | string;
					reserve1?: number | string;
					token0?: string;
					token1?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
