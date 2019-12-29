export const accordion = (element, target) => {
	if (element.classList.contains('e-accordion_state_active') && target.closest('.history__show')) {
		element.classList.remove('e-accordion_state_active')
	} else {
		element.classList.add('e-accordion_state_active')
	}
}
