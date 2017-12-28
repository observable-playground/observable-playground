# RxJS Playground

**Play, test, hack on RxJS features in a sexy eternity-safe playground**

https://kosich.github.io/reactive-playground/

## Reactive

The playground is agnostic of the library api, so expect addition of [kefirjs](https://kefirjs.github.io/kefir/),
[baconjs](https://baconjs.github.io/) and [hopefully this](https://github.com/tc39/proposal-observable) soon

## Time-bending

No matter how long your observables would delay or iterate — environment for the scripts is tweaked to run the scripts in a syncronous way

**So you'll get results instantly!**

Please, see [mock-delayed-execution.js](https://github.com/kosich/reactive-playground/blob/master/src/mock-delayed-execution/mock-delayed-execution.js) for details

## Examples and chart api

For the examples two objects are provided:

- RxJS — via `require('rxjs/Rx')`

- Chart api — via `require('rp-api').chart` (see section below)

### Chart api

`const line = chart.createLine()` — will draw a line on the chart, with current time as a starting mark

`line` now consists of three public methods:

- `onEvent` — will draw an event mark `--o--`

- `onError` — will draw an error mark `--x`

- `onComplete` — will draw an end mark `--|`


## Development

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You will find some information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

## Credits

This project is inspired by [rxmarbles.com](http://rxmarbles.com/), [learnrxjs.io](https://www.learnrxjs.io/) and great talks by [Bret Victor](http://worrydream.com/)

Also, here's a super-awesome [RxViz](https://github.com/moroshko/rxviz) project — it already does much better job in most cases! Sadly, I found it after I've kickstarted this one, so... I'll pretend I never saw it :)