/**
 * Pretty-prints a number as a currency.
 */
export function formatCurrency(num: number | string, options: Intl.NumberFormatOptions = { maximumFractionDigits: 2 }) {
	if (typeof num === "string") {
		num = Number(num);
	}

	if (num >= 1e9) {
		return (num / 1e9).toFixed(2) + "B";
	} else if (num >= 1e6) {
		return (num / 1e6).toFixed(2) + "M";
	} else if (num >= 1e3) {
		return (num / 1e3).toFixed(2) + "K";
	}

	return num.toLocaleString("en-US", options);
}
