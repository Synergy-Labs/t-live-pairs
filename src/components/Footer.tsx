const Footer = () => {
	return (
		<footer className="mt-10 text-[#696F8C] text-center max-w-4xl text-xs mx-auto flex flex-col gap-1">
			<hr className="border-[#202937] mb-4" />
			<p>
				SynergyAI is an analysis software for digital assets. Due to its AI architecture, it might be inaccurate
				and no information displayed on this website should be considered financial advice. Please report any
				problems to bugs@synergyai.io
			</p>
			<p>Made with 💙 by 👨‍💻 and 🤖</p>
			<div className="flex flex-row items-center justify-center mx-auto gap-2">
				<a rel="noreferrer" href="https://synergyai.io" target="_blank" className="underline">
					About us
				</a>
			</div>
		</footer>
	);
};

export default Footer;
