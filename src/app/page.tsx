import NewPairs from "../components/NewPairs";
import { LivePair } from "../util/globalData";
import { suclient } from "../util/supabase";

const PairsPage = async () => {
	const { data, error } = await suclient
		.from("pair")
		.select(
			"address, poolVariation, reserve0::text, reserve1::text, token0data(address, symbol, decimals), token1data(address, symbol, decimals)"
		)
		.not("poolVariation", "is", "null")
		.order("poolVariation->>added", { ascending: false })
		.limit(10);

	if (error) {
		throw error;
	}

	return <div>{data && <NewPairs pairs={data as unknown as LivePair[]} />}</div>;
};

export default PairsPage;
