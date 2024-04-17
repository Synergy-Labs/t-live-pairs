import { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import Footer from "../components/Footer";
import { ibm_plex_mono, inter } from "../util/fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Task - SynergyAI",
	description: "SynergyAI Take-home task",
};

export const viewport: Viewport = {
	themeColor: "#06080B",
	colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode; }) {
	return (
		<html lang="en">
			<body className={`overflow-hidden bg-black ${inter.className} ${inter.variable} ${ibm_plex_mono.variable} font-sans px-4 pt-4`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
