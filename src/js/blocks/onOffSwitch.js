import { toggleListClasses } from '../utils/domHelper'

const toggleButton = element => {
	element.classList.toggle('onoffswitch_checked')
}

const toggleTheme = () => {
	const theme = {
		default: 'theme_color_project-default',
		inverse: 'theme_color_project-inverse'
	}

	const themeElements = document.getElementsByClassName('theme')

	for (const element of themeElements) {
		const classList = element.classList
		if (classList.contains(theme.default) || classList.contains(theme.inverse)) { toggleListClasses(classList, theme) }
	}
}

export const onOffSwitch = element => {
	// change button state
	toggleButton(element)

	// change page theme
	toggleTheme()
}
