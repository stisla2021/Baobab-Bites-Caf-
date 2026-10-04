const navigationButton = document.querySelector<HTMLButtonElement>(".mobile-menu-btn");
const navigation = document.querySelector<HTMLElement>(".navbar nav");

if (navigationButton && navigation) {
  const setNavigationOpen = (isOpen: boolean): void => {
    navigation.classList.toggle("mobile-open", isOpen);
    navigationButton.classList.toggle("menu-open", isOpen);
    navigationButton.setAttribute("aria-expanded", String(isOpen));
    navigationButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    navigationButton.textContent = isOpen ? "×" : "☰";
  };

  navigationButton.addEventListener("click", () => {
    setNavigationOpen(navigationButton.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event: MouseEvent) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setNavigationOpen(false);
    }
  });

  document.addEventListener("click", (event: MouseEvent) => {
    if (event.target instanceof Node && !navigation.contains(event.target) && !navigationButton.contains(event.target)) {
      setNavigationOpen(false);
    }
  });

  document.addEventListener("keydown", (event: KeyboardEvent) => {
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

document.querySelectorAll<HTMLElement>(".menu-item-row").forEach((menuItem) => {
  const dish = menuItem.querySelector<HTMLElement>(".menu-item-left[data-dish]")?.dataset.dish;
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

const bookingForm = document.querySelector<HTMLFormElement>("#booking-form");

if (bookingForm) {
  const params = new URLSearchParams(window.location.search);
  const dish = params.get("dish")?.trim();
  const isOrder = params.get("intent") === "order" || Boolean(dish);
  const bookingTitle = document.querySelector<HTMLElement>("#booking-title");
  const bookingHeading = document.querySelector<HTMLElement>(".hero-contact h1");
  const bookingSubmit = document.querySelector<HTMLButtonElement>("#booking-submit");
  const bookingNote = document.querySelector<HTMLElement>("#booking-note");
  const bookingIntro = document.querySelector<HTMLElement>("#booking-intro");
  const orderSelection = document.querySelector<HTMLElement>("#order-selection");
  const guestLabel = bookingForm.querySelector<HTMLLabelElement>('label[for="guests"]');
  const quantity = bookingForm.querySelector<HTMLInputElement>("#guests");
  const message = bookingForm.querySelector<HTMLTextAreaElement>("#message");

  if (isOrder) {
    if (bookingTitle) bookingTitle.textContent = "Place an order";
    if (bookingHeading) bookingHeading.textContent = "Order for collection";
    if (bookingIntro) bookingIntro.textContent = "Fill in your details and continue to WhatsApp to request your order.";
    if (bookingSubmit) bookingSubmit.textContent = "Continue to WhatsApp";
    if (bookingNote) bookingNote.textContent = "Your order is confirmed when we reply on WhatsApp.";
    if (guestLabel) guestLabel.textContent = "Number of items";
    if (quantity) quantity.value = "1";
    if (dish && orderSelection) {
      orderSelection.textContent = `Selected item: ${dish}`;
      orderSelection.hidden = false;
    }
    document.title = "Place an order | Baobab Bites Café";
  }

  bookingForm.addEventListener("submit", (event: SubmitEvent) => {
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

    const additionalMessage = message?.value.trim();
    if (additionalMessage) {
      details.push(`Additional details: ${additionalMessage}`);
    }

    window.location.href = `https://wa.me/2207480021?text=${encodeURIComponent(details.join("\n"))}`;
  });
}
