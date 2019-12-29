export const toggleListClasses = (classList, themes) => {
	for (const theme in themes) {
		if (Object.hasOwnProperty.call(themes, theme)) { classList.toggle(themes[theme]) }
	}
}
