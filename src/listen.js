export default function listen (elements, eventName, handler) {
	const iteration = (Array.isArray(elements) ? elements : [elements]);

	iteration.forEach(el => el.addEventListener(eventName, handler));

	return () => iteration.forEach(el => el.removeEventListener(eventName, handler));
};
