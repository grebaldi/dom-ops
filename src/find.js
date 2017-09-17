export default function find (elements, selector, handleNotFound) {
	const result = (Array.isArray(elements) ? elements : [elements]).reduce(
		(list, el) => [...list, ...[].slice.call(el.querySelectorAll(selector))],
		[]
	);

	if (!result.length && typeof handleNotFound === 'function') {
		handleNotFound();
	}

	return result;
}
