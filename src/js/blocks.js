import { accordion as accordionHandler } from './blocks/accordion';
import { onOffSwitch as onoffswitchHandler } from './blocks/onOffSwitch';

const blocks = [
    {
        selector: '.e-accordion',
        handler: accordionHandler
    },
    {
        selector: '.onoffswitch',
        handler: onoffswitchHandler
    },
]

export { blocks }