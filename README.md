# dom-ops

> functional dom operations

## Installation

npm:
```
npm install --save @grebaldi/dom-ops
```

yarn:
```
yarn add @grebaldi/dom-ops
```

## Usage

### find

```js
import {find} from '@grebaldi/dom-ops';

const allSectionsOnPage = find(document, 'section');
const allButtonsInSections = find(allSectionsOnPage, 'button');
```

Signature: `find: (element: HTMLElement|[HTMLElement], selector: string) -> result: [HTMLElement]`

Uses `querySelectorAll` internally, but converts the result into a regular Array.

### findOne

```js
import {findOne} from '@grebaldi/dom-ops';

const firstSectionOnPage = findOne(document, 'section');
const firstButtonInSection = findOne(firstSectionOnPage, 'button');
```

Signature: `findOne: (element: HTMLElement|[HTMLElement], selector: string) -> result: HTMLElement`

### listen

```js
import {findOne, listen} from '@grebaldi/dom-ops';

const button = findOne(document, 'button');

listen(button, 'click', () => alert('Button clicked!'));
```

Signature: `listen: (element: HTMLElement|[HTMLElement], eventName: string, handler: function) -> unsubscribe: function`

### listenOnce

```js
import {findOne, listenOnce} from '@grebaldi/dom-ops';

const button = findOne(document, 'button');

listenOnce(button, 'click', () => alert('Will fire just once!'));
```

Signature: `listen: (element: HTMLElement|[HTMLElement], eventName: string, handler: function) -> unsubscribe: function`

## License

MIT, see [LICENSE.md](./LICENSE.md)
