export default function findOne (elements, selector) {
	const result = (Array.isArray(elements) ? elements : [elements]).reduce(
		(found, el) => found || el.querySelector(selector),
		null
	);

	return result;
}
