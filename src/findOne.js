export default function findOne (elements, selector, handleNotFound) {
	const result = (Array.isArray(elements) ? elements : [elements]).reduce(
		(found, el) => found || el.querySelector(selector),
		null
	);

	if (!result && typeof handleNotFound === 'function') {
		handleNotFound();
	}

	return result;
}
