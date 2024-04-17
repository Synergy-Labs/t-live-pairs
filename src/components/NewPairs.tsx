"use client";

import { FC } from "react";
import { LivePair } from "../util/globalData";
import Pair from "./Pair";

const columns = [
	"Pair Info",
	"Listed Since",
	"Initial Liquidity",
	"Current Liquidity",
];

const NewPairs: FC<{ pairs: LivePair[]; }> = ({ pairs }) => {
	return (
		<div className="min-h-[12rem] text-white w-full flex flex-col rounded-box border-[1px] border-outline bg-foreground">
			<div className="mt-8 mx-8 mb-4 flex flex-col justify-between">
				<p className="text-2xl font-bold">Live new pairs</p>
				<p className="text-14 text-[#696F8C]">
					New pairs listed on Ethereum exchanges in real time
				</p>
			</div>
			<div className="overflow-x-auto max-h-[60vh] scrollBarBlue overflow-y-auto">
				<div className="align-middle inline-block w-full sm:rounded-lg ">
					<table className="w-full first:divide-none divide-y divide-outline">
						<thead className="h-10 w-full bg-[#0F141D] sticky z-20 border-t-[1px] border-outline top-0 outline-1 outline outline-outline">
							<tr>
								{columns.map((key) => (
									<th
										key={key}
										scope="col"
										className={`first:pl-8 py-3 text-xs text-gray font-light tracking-wider cursor-pointer text-left relative`}
									>
										<div className="relative flex-row items-center inline-flex">
											<p className="flex items-center gap-2">
												{key}
											</p>
										</div>
									</th>
								))}
							</tr>
						</thead>
						<tbody className="divide-y divide-outline bg-transparent w-full overflow-y-scroll">
							{pairs.map((pairData, index) => (
								<Pair key={index} pair={pairData} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default NewPairs;
