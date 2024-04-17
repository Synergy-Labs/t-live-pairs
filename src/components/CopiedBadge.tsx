import React, { useEffect, useState } from "react";

interface CopiedBadgeProps {
	active: boolean;
	setActive: (active: boolean) => void;
}

const CopiedBadge: React.FC<CopiedBadgeProps> = ({ active, setActive }) => {
	const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number; }>({ x: 0, y: 0 });

	const throttle = (func: (e: MouseEvent) => void, limit: number) => {
		let inThrottle: boolean;
		return function (this: any) {
			const args = arguments as unknown as [MouseEvent];
			const context = this;
			if (!inThrottle) {
				func.apply(context, args);
				inThrottle = true;
				setTimeout(() => (inThrottle = false), limit);
			}
		};
	};

	useEffect(() => {
		const updateCursorPosition = (e: MouseEvent) => {
			setCursorPosition({ x: e.clientX, y: e.clientY });
		};

		const throttledUpdate = throttle(updateCursorPosition, 100);

		window.addEventListener("click", updateCursorPosition);
		window.addEventListener("mousemove", throttledUpdate);

		if (active) {
			const timeout = setTimeout(() => {
				setActive(false);
			}, 1000);

			return () => {
				clearTimeout(timeout);
				window.removeEventListener("mousemove", throttledUpdate);
				window.removeEventListener("click", updateCursorPosition);
			};
		}
	}, [active, setActive]);

	return (
		<div
			className={`absolute border-[1px] border-outline text-white bg-foreground transition-all rounded-full text-xs py-2 px-4 ${active ? "opacity-100" : "opacity-0"
				}`}
			style={{
				left: cursorPosition.x,
				top: cursorPosition.y,
			}}
		>
			Copied 🫡
		</div>
	);
};

export default CopiedBadge;
