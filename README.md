# RxJS, KefirJS, BaconJS marble diagram playground

https://thinkrx.io

## Reactive

The playground is agnostic of the library api, so apart from [RxJS](https://thinkrx.io/rxjs/) you can also run [kefirjs](https://thinkrx.io/kefir/),
[baconjs](https://thinkrx.io/baconjs/) and [hopefully this](https://github.com/tc39/proposal-observable) soon

## Time-bending

No matter how long your observables would delay or iterate — environment for the scripts is tweaked to run the scripts in a syncronous way

**So you'll get results instantly!**

Please, see [mock-delayed-execution.js](https://github.com/observable-playground/observable-playground/blob/master/src/core/mock-delayed-execution/mock-delayed-execution.js) for details

## Chart api for the examples 

Chart api is exposed via `require('api/v0.3')`, e.g. for RxJS:

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');

const observer = rxObserver('Title')

timer(5).subscribe(observer);
```

This example will draw a timeline on the chart, with an event at 5ms [ `'----o` ].

Returned `rxObserver` implements [Observer](http://reactivex.io/rxjs/class/es6/MiscJSDoc.js~ObserverDoc.html) interface:

- `next` — will draw an event mark [ `--o--` ]

- `error` — will draw an error mark [ `--x` ]

- `complete` — will draw an end mark [ `--|` ]

Therefore

```js
interval(2).pipe(
  take(4)
)
  .subscribe(rxObserver('source$'));
```

will output
```
source$

'-o-o-o-o|
```

E.g. [rxjs-interval](https://thinkrx.io/rxjs/interval/)

## Contributing

You're welcome to participate in this project!

Just check the issues tab at the top and find one that you want to work with, then:

```
git clone https://github.com/observable-playground/observable-playground.git
npm i
npm start
```

This should start a dev server.

All the examples are contained in markdown .md files, that are pretty easy to update, even via github.com itself.

NOTE: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You will find some information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

## Credits

This project is inspired by [rxmarbles.com](http://rxmarbles.com/), [learnrxjs.io](https://www.learnrxjs.io/) and great talks by [Bret Victor](http://worrydream.com/)

Also, here's a super-awesome [RxViz](https://github.com/moroshko/rxviz) project — it already does much better job in most cases! Sadly, I found it after I've kickstarted this one, so... I'll pretend I never saw it :)
