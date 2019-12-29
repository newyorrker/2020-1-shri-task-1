import { toggleListClasses } from '../utils/domHelper';

const toggleButton = (element) => {
    element.classList.toggle('onoffswitch_checked');
}

const toggleTheme = () => {
    
    let theme = {
        default: 'theme_color_project-default',
        inverse: 'theme_color_project-inverse'
    }
    
    let themeElements = document.getElementsByClassName('theme');

    for (let element of themeElements) {

        let classList = element.classList;
        if(classList.contains(theme.default) || classList.contains(theme.inverse)) {
            toggleListClasses(classList, theme);
        }
    };
}

export const onOffSwitch = (element) => {

    //change button state 
    toggleButton(element);

    //change page theme
    toggleTheme();

};