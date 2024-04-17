"use client";

import { FC, useEffect, useState } from "react";
import { Clock } from "tabler-icons-react";
import { formatUnits } from "viem";
import { LivePair } from "../util/globalData";
import { formatCurrency } from "../util/math";
import PairComponent from "./PairComponent";

export const getTimeDifference = (past: number, now: number): string => {
	let differenceInSeconds = (now - past) / 1000;

	const daysDifference = Math.floor(differenceInSeconds / 86400);
	differenceInSeconds -= daysDifference * 86400;

	const hoursDifference = Math.floor(differenceInSeconds / 3600);
	differenceInSeconds -= hoursDifference * 3600;

	const minutesDifference = Math.floor(differenceInSeconds / 60);
	differenceInSeconds -= minutesDifference * 60;

	const secondsDifference = Math.floor(differenceInSeconds);

	let result = "";
	if (daysDifference > 10) {
		result = `${daysDifference}d`;
	} else if (hoursDifference > 0) {
		result = `${hoursDifference}h ${minutesDifference}m`;
	} else {
		result = `${minutesDifference}m ${secondsDifference}s`;
	}

	return result;
};

const Pair: FC<{ pair: LivePair; }> = ({
	pair,
}) => {
	const [timeDifference, setTimeDifference] = useState("");

	useEffect(() => {
		setTimeDifference(getTimeDifference(new Date(pair.poolVariation.added).getTime(), Date.now()));
		const interval = setInterval(() => {
			setTimeDifference(getTimeDifference(new Date(pair.poolVariation.added).getTime(), Date.now()));
		}, 1000);
		return () => clearInterval(interval);
	}, [pair]);

	const weth =
		pair.token0data.address.toLowerCase() === "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
			? 0
			: pair.token1data.address.toLowerCase() === "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
				? 1
				: false;

	return (
		<tr className="text-white hover:bg-[#0E1217] cursor-pointer h-16 row-hover">
			<td className="pl-6 whitespace-nowrap text-sm">
				<PairComponent
					ticker={weth === 0 ? pair.token1data.symbol : pair.token0data.symbol}
					pairTicker={weth === 0 ? pair.token0data.symbol : pair.token1data.symbol}
					address={pair.address}
				/>
			</td>
			<td className="whitespace-nowrap h-16 text-sm flex flex-row items-center space-x-2 font-number text-left">
				{timeDifference && (
					<>
						<Clock size={15} color="#696F8C" />
						<p>{timeDifference}</p>
					</>
				)}
			</td>
			<td className="whitespace-nowrap text-sm text-left font-number">
				{formatCurrency(
					formatUnits(
						BigInt(weth === 0 ? pair.poolVariation.initialReserve0 : pair.poolVariation.initialReserve1),
						weth === 0 ? pair.token0data.decimals : pair.token1data.decimals
					)
				)}{" "}
				{weth === 0 ? pair.token0data.symbol : pair.token1data.symbol}
				<span className="text-gray">
					{" "}
					+{" "}
					{formatCurrency(
						formatUnits(
							BigInt(
								weth === 0 ? pair.poolVariation.initialReserve1 : pair.poolVariation.initialReserve0
							),
							weth === 0 ? pair.token1data.decimals : pair.token0data.decimals
						)
					)}{" "}{weth === 0 ? pair.token1data.symbol : pair.token0data.symbol}
				</span>
			</td>
			<td className="whitespace-nowrap text-sm text-left font-number">
				{formatCurrency(
					formatUnits(
						BigInt(weth === 0 ? pair.reserve0 : pair.reserve1),
						weth === 0 ? pair.token0data.decimals : pair.token1data.decimals
					)
				)}{" "}{weth === 0 ? pair.token0data.symbol : pair.token1data.symbol}
				<span className="text-gray">
					{" "}
					+{" "}
					{formatCurrency(
						formatUnits(
							BigInt(weth === 0 ? pair.reserve1 : pair.reserve0),
							weth === 0 ? pair.token1data.decimals : pair.token0data.decimals
						)
					)}{" "}
					{weth === 0 ? pair.token1data.symbol : pair.token0data.symbol}
				</span>
			</td>
		</tr>
	);
};

export default Pair;
