import { FC, useState } from "react";
import { Copy } from "tabler-icons-react";
import AddressIcon from "./AddressIcon";
import CopiedBadge from "./CopiedBadge";

type PairComponentProps = {
	ticker: string;
	pairTicker: string;
	address: string;
};

const PairComponent: FC<PairComponentProps> = ({ ticker, pairTicker, address }) => {
	const truncatedAddress = `${address.slice(0, 4)}...${address.slice(-4)}`;

	const [showCopied, setShowCopied] = useState(false);
	return (
		<div className="flex flex-row items-center h-10 ml-2">
			<div>
				<AddressIcon address={address} className="mr-1" />
			</div>
			<div className="flex flex-col ml-4">
				<p className="text-base">
					{ticker}
					<span className="text-[#696F8C]">/{pairTicker}</span>
				</p>
				<div className="flex flex-row hide-address items-center space-x-2 text-[#696F8C]">
					<p>{truncatedAddress}</p>
					<button
						className="text-gray hover:text-blue duration-150 transition"
						onClick={(event) => {
							event?.stopPropagation();
							setShowCopied(true);
							navigator.clipboard.writeText(address);
						}}
					>
						<Copy size={15} />
					</button>
				</div>
			</div>
			<CopiedBadge active={showCopied} setActive={setShowCopied} />
		</div>
	);
};

export default PairComponent;
