import Image from "next/image";

interface Props {
	address?: string;
	className?: string;
	size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
}

const pxSize = {
	xsmall: 16,
	small: 22,
	medium: 32,
	large: 42,
	xlarge: 64,
} as const;

export function getAddressIconURL(address?: string) {
	return `https://app.synergyai.io/token/${address || "empty"}/image`;
}

export default function AddressIcon({ address, className = "", size = "medium" }: Props) {
	return (
		<Image
			src={getAddressIconURL(address)}
			alt={address || ""}
			width={pxSize[size]}
			height={pxSize[size]}
			className={`rounded-full ${className} !shrink-0 !aspect-square`}
			style={{ width: pxSize[size], height: pxSize[size] }}
		/>
	);
}
