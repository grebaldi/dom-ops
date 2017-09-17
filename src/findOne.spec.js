import find from './find';
import findOne from './findOne';

test('findOne should return exactly one dom node matching the given selector.', () => {
	document.body.innerHTML = `
		<div class="someSelector" data-number="1"></div>
		<div class="someSelector" data-number="2"></div>
		<div class="someSelector" data-number="3"></div>
	`;

	const result = findOne(document, '.someSelector');

	expect(Array.isArray(result)).toBe(false);
	expect(result.getAttribute('data-number')).toBe('1');
});

test('findOne should return exactly one dom node matching the given selector, even if multiple elements were passed', () => {
	document.body.innerHTML = `
		<div class="someParent"><div class="someChild" data-number="1"></div></div>
		<div class="someParent"><div class="someChild" data-number="1"></div></div>
		<div class="someParent"><div class="someChild" data-number="1"></div></div>
	`;

	const firstLevel = find(document, '.someParent');
	const result = findOne(firstLevel, '.someChild');

	expect(Array.isArray(result)).toBe(false);
	expect(result.getAttribute('data-number')).toBe('1');
});
