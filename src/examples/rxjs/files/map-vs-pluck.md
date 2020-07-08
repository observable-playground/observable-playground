<!--
name:		
title:		map vs pluck
pageTitle:	map vs pluck — RxJS operators comparison + marble diagram
desc:		Compare map operator to pluck in this interactive playground:
docsUrl:	
-->

[map](/rxjs/map/) operator can be easily substituted with a simple [pluck](/rxjs/pluck/), if all we need is to read a property of a value:

```js
const { rxObserver } = require('api/v0.3');
const { of } = require('rxjs');
const { pluck, map } = require('rxjs/operators');

const source$ = of(
  { a: 1 },
  { a: 2 },
  { },
  { a: 3 }
);

source$
  .pipe(
    map(x => x.a)
  )
  .subscribe(rxObserver('map(x => x.a)'));

source$
  .pipe(
    pluck('a')
  )
  .subscribe(rxObserver(`pluck('a')`));

```


Even better when we have nested properties!

```js
const { rxObserver } = require('api/v0.3');
const { of } = require('rxjs');
const { pluck, map } = require('rxjs/operators');

const source$ = of(
  { a: { b: 1 } },
  { a: { b: 2 } },
  { },
  { a: { b: 3 } },
);

source$
  .pipe(
    map(x => x.a && x.a.b)
  )
  .subscribe(rxObserver('map(x => x.a && x.a.b)'));

source$
  .pipe(
    pluck('a', 'b')
  )
  .subscribe(rxObserver(`pluck('a', 'b')`));

```

> Read more about pluck vs map comparison in this article: ["RxJs|Pluck: A pound of pluck is worth a ton of map !"](https://medium.com/@chebbi.lamis/rxjs-pluck-a-pound-of-pluck-is-worth-a-ton-of-map-f7cc600db371) by [chebbi lamis](https://medium.com/@chebbi.lamis)