let itemCount = 0;

const addToCart = () => {
  itemCount++;
  const icon = document.querySelector(".icon");

  icon.setAttribute("data-count", itemCount);
};
