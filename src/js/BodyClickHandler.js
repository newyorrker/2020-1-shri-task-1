import { blocks } from './blocks';

const checkClick = (event) => {

    if(!event) return;

    const target = event.target;

    if(blocks.length > 0) {
        blocks.some((block) => {

            const element = target.closest(block.selector);

            if(element) {
                block.handler(element, target);
                return true;
            }
            
        });
    }
}

export default {
    on() {

        if(document.body) {
            document.body.addEventListener('click', checkClick)
        } else {
            console.error('document is ' + document);
        }

    },
    off() {

        if(document.body) {
            document.body.removeEventListener('click', checkClick)
        } else {
            console.error('document is ' + document);
        }

    }
}