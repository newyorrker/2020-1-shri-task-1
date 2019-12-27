import '../scss/style.scss';

import BodyClickHandler from './BodyClickHandler';

BodyClickHandler.on();

window.testOff = function testOff() {
    BodyClickHandler.off();
}