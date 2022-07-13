export const imageAlt = () => {
  const image = document.querySelectorAll("p >img");
  image.forEach((img, index) => {
    const alt = img.getAttribute("alt");
    const p = img.parentNode;
    p.className = "relative";
    if (alt) {
      const cite = document.createElement("cite");
      cite.className =
        "absolute top-2 right-2 text-sm w-20 rounded-md bg-black text-white p-1";
      cite.innerHTML = `Hình ${index + 1}. ${alt}`;
      img.parentNode.appendChild(cite);
    }
  });
};
