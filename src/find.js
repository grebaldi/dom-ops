export default function find (elements, selector) {
	const result = (Array.isArray(elements) ? elements : [elements]).reduce(
		(list, el) => [...list, ...[].slice.call(el.querySelectorAll(selector))],
		[]
	);

	return result;
}
