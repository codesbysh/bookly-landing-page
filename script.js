const faqQuestions = document.querySelectorAll("#faq .faq-question");

faqQuestions.forEach((question) => {
	question.addEventListener("click", () => {
		const currentItem = question.parentElement;
		const currentAnswer = currentItem.nextElementSibling;
		const isOpen = currentItem.classList.contains("open");

		document.querySelectorAll("#faq dt.open, #faq dd.open").forEach((item) => {
			item.classList.remove("open");
		});

		if (!isOpen) {
			currentItem.classList.add("open");
			currentAnswer.classList.add("open");
		}
	});
});

// Select the navbar and the mobile menu button.
const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");

// Only run the mobile menu code if the button exists.
if (navbar && navToggle) {
	// When the button is clicked, switch the menu open and closed state.
	navToggle.addEventListener("click", () => {
		navbar.classList.toggle("nav-open");

		const isOpen = navbar.classList.contains("nav-open");

		// Change the button text to show a close icon when the menu is open.
		navToggle.textContent = isOpen ? "✕" : "☰";
	});
}
