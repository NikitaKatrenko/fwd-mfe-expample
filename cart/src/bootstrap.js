import { faker } from "@faker-js/faker";

const mount = (el) => {
  const randomNumber = faker.number.int({ min: 1, max: 10 });
  const cartHtml = `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      ">
        <div style="
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
          font-size: 18px;
          color: #333;
          text-align: center;
          transition: transform 0.3s ease-in-out;
        ">
          You have <span style="
            color: #007bff;
            font-weight: bold;
            font-size: 24px;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          ">${randomNumber}</span> items in your cart
        </div>
      </div>
    `;
  el.innerHTML = cartHtml;

  // Add hover effect
  const cartEl = el.querySelector("div");
  cartEl.addEventListener("mouseenter", () => {
    cartEl.style.transform = "scale(1.05)";
  });
  cartEl.addEventListener("mouseleave", () => {
    cartEl.style.transform = "scale(1)";
  });
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

export { mount };
