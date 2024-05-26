import { faker } from "@faker-js/faker";

const mount = (el) => {
  let list = "";
  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    list += `<div style="
    background-color: #f8f9fa;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #333;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  ">${name}</div>`;
  }

  const containerStyle = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

  el.innerHTML = `<div style="${containerStyle}">${list}</div>`;

  // Add hover effect
  const items = el.querySelectorAll("div");
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.05)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
    });
  });
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-list");

  if (el) {
    mount(el);
  }
}

export { mount };
