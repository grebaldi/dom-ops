import find from './find';
import listenOnce from './listenOnce';

const trigger = (el, eventName) => {
	const event = document.createEvent('HTMLEvents');
	event.initEvent(eventName, false, true);
	el.dispatchEvent(event)
};

test('event handler should execute, when event is fired', () => {
	document.body.innerHTML = `
		<button id="my-button"></button>
	`;

	const button = document.getElementById('my-button');
	const handler = jest.fn();

	listenOnce(button, 'click', handler);

	trigger(button, 'click');

	expect(handler.mock.calls.length).toBe(1);
});

test('event handler should execute only once, when event is fired multiple times', () => {
	document.body.innerHTML = `
		<button id="my-button"></button>
	`;

	const button = document.getElementById('my-button');
	const handler = jest.fn();

	listenOnce(button, 'click', handler);

	trigger(button, 'click');
	trigger(button, 'click');

	expect(handler.mock.calls.length).toBe(1);
});

test('event handler should execute, when event is fired on multiple elements', () => {
	document.body.innerHTML = `
		<button></button>
		<button></button>
		<button></button>
	`;

	const buttons = find(document, 'button');
	const handler = jest.fn();

	listenOnce(buttons, 'click', handler);
	buttons.forEach(button => trigger(button, 'click'));

	expect(handler.mock.calls.length).toBe(3);
});
