import find from './find';

test('find should return at least one occurence of a dom node matching the given selector.', () => {
	document.body.innerHTML = `
		<div id="some-id"></div>
	`;

	const result = find(document, '#some-id');

	expect(Array.isArray(result)).toBe(true);
	expect(result.length).toBe(1);
	expect(result[0].outerHTML).toBe('<div id="some-id"></div>');
});

test('find should return all occurences of dom nodes matching the given selector.', () => {
	document.body.innerHTML = `
		<div class="someSelector"></div>
		<div class="someSelector"></div>
		<div class="someSelector"></div>
	`;

	const result = find(document, '.someSelector');

	expect(Array.isArray(result)).toBe(true);
	expect(result.length).toBe(3);
	expect(result[0].outerHTML).toBe('<div class="someSelector"></div>');
	expect(result[1].outerHTML).toBe('<div class="someSelector"></div>');
	expect(result[2].outerHTML).toBe('<div class="someSelector"></div>');
});

test('find should return an empty array, if no dom node matching the given selector could be found.', () => {
	const result = find(document, '#some-id');

	expect(Array.isArray(result)).toBe(true);
	expect(result.length).toBe(0);
});
