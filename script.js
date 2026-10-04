"use strict";
var _a;
const navigationButton = document.querySelector(".mobile-menu-btn");
const navigation = document.querySelector(".navbar nav");
if (navigationButton && navigation) {
    const setNavigationOpen = (isOpen) => {
        navigation.classList.toggle("mobile-open", isOpen);
        navigationButton.classList.toggle("menu-open", isOpen);
        navigationButton.setAttribute("aria-expanded", String(isOpen));
        navigationButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        navigationButton.textContent = isOpen ? "×" : "☰";
    };
    navigationButton.addEventListener("click", () => {
        setNavigationOpen(navigationButton.getAttribute("aria-expanded") !== "true");
    });
    navigation.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            setNavigationOpen(false);
        }
    });
    document.addEventListener("click", (event) => {
        if (event.target instanceof Node && !navigation.contains(event.target) && !navigationButton.contains(event.target)) {
            setNavigationOpen(false);
        }
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setNavigationOpen(false);
        }
    });
    window.addEventListener("resize", () => {
        if (window.matchMedia("(min-width: 769px)").matches) {
            setNavigationOpen(false);
        }
    });
}
document.querySelectorAll(".menu-item-row").forEach((menuItem) => {
    var _a;
    const dish = (_a = menuItem.querySelector(".menu-item-left[data-dish]")) === null || _a === void 0 ? void 0 : _a.dataset.dish;
    if (!dish) {
        return;
    }
    const orderLink = document.createElement("a");
    orderLink.className = "btn btn-primary menu-order-link";
    orderLink.href = `contact.html?dish=${encodeURIComponent(dish)}`;
    orderLink.textContent = "Order this item";
    orderLink.setAttribute("aria-label", `Order ${dish}`);
    menuItem.append(orderLink);
});
const bookingForm = document.querySelector("#booking-form");
if (bookingForm) {
    const params = new URLSearchParams(window.location.search);
    const dish = (_a = params.get("dish")) === null || _a === void 0 ? void 0 : _a.trim();
    const isOrder = params.get("intent") === "order" || Boolean(dish);
    const bookingTitle = document.querySelector("#booking-title");
    const bookingHeading = document.querySelector(".hero-contact h1");
    const bookingSubmit = document.querySelector("#booking-submit");
    const bookingNote = document.querySelector("#booking-note");
    const bookingIntro = document.querySelector("#booking-intro");
    const orderSelection = document.querySelector("#order-selection");
    const guestLabel = bookingForm.querySelector('label[for="guests"]');
    const quantity = bookingForm.querySelector("#guests");
    const message = bookingForm.querySelector("#message");
    if (isOrder) {
        if (bookingTitle)
            bookingTitle.textContent = "Place an order";
        if (bookingHeading)
            bookingHeading.textContent = "Order for collection";
        if (bookingIntro)
            bookingIntro.textContent = "Fill in your details and continue to WhatsApp to request your order.";
        if (bookingSubmit)
            bookingSubmit.textContent = "Continue to WhatsApp";
        if (bookingNote)
            bookingNote.textContent = "Your order is confirmed when we reply on WhatsApp.";
        if (guestLabel)
            guestLabel.textContent = "Number of items";
        if (quantity)
            quantity.value = "1";
        if (dish && orderSelection) {
            orderSelection.textContent = `Selected item: ${dish}`;
            orderSelection.hidden = false;
        }
        document.title = "Place an order | Baobab Bites Café";
    }
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(bookingForm);
        const details = [
            `Hi Baobab Bites, I would like to ${isOrder ? "place an order" : "book a table"}.`,
            `Name: ${String(formData.get("name")).trim()}`,
            `Phone / WhatsApp: ${String(formData.get("phone")).trim()}`,
            `Preferred time: ${String(formData.get("time")).trim()}`,
            `${isOrder ? "Number of items" : "Number of guests"}: ${String(formData.get("guests")).trim()}`,
        ];
        if (dish) {
            details.push(`Item: ${dish}`);
        }
        const additionalMessage = message === null || message === void 0 ? void 0 : message.value.trim();
        if (additionalMessage) {
            details.push(`Additional details: ${additionalMessage}`);
        }
        window.location.href = `https://wa.me/2207480021?text=${encodeURIComponent(details.join("\n"))}`;
    });
}
