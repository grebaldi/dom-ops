export default function listen (elements, eventName, handler) {
	const iteration = (Array.isArray(elements) ? elements : [elements]);

	iteration.forEach(el => {
		const selfUnsubscribingHandler = (...args) => {
			handler(...args);
			el.removeEventListener(eventName, selfUnsubscribingHandler);
		};
		el.addEventListener(eventName, selfUnsubscribingHandler);
	});

	return () => iteration.forEach(el => el.removeEventListener(eventName, handler));
};
