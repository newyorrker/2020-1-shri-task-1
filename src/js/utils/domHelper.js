export const toggleListClasses = (classList, themes) => {
    for (const theme in themes) {
        if (themes.hasOwnProperty(theme)) {
            classList.toggle(themes[theme]);
        }
    }
}