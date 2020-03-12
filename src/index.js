import {niceMessage} from "./say-hello";

const _ = require('lodash');
const $ = require('jquery');

const sayHello = () => console.log('Hello');

sayHello();

console.log(_.random(0,3));

$('.fancy-header').html('Nap Time!');

niceMessage();