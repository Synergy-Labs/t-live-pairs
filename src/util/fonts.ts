import { Inter, Lexend, IBM_Plex_Mono } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});
export const lexend = Lexend({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-lexend",
});
export const ibm_plex_mono = IBM_Plex_Mono({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-ibm-plex-mono",
});
