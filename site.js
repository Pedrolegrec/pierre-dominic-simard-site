(() => {
  function splitChars(el) {
    const original = el.textContent || "";
    const trimmed = original.trim();
    if (!trimmed) return;

    // Avoid double-splitting if the user refreshes in a client-side env.
    if (el.dataset.splitDone === "1") return;
    el.dataset.splitDone = "1";

    el.setAttribute("aria-label", trimmed);
    el.textContent = "";

    const container = document.createElement("span");
    container.className = "split";

    let i = 0;
    for (const ch of trimmed) {
      if (ch === " ") {
        const space = document.createElement("span");
        space.className = "char space";
        space.textContent = "\u00A0";
        container.appendChild(space);
        continue;
      }

      const span = document.createElement("span");
      span.className = "char";
      span.textContent = ch;
      span.style.animationDelay = `${i * 14}ms`;
      container.appendChild(span);
      i += 1;
    }

    el.appendChild(container);
  }

  function init() {
    document.querySelectorAll("[data-split='chars']").forEach(splitChars);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

