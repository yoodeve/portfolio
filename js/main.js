function getDragAfterElement(container, x) {
  const draggableElements = [
    ...container.querySelectorAll(".port-area.draggable:not(.dragging)"),
  ];
  let closest = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  draggableElements.forEach((child) => {
    const box = child.getBoundingClientRect();
    const offset = x - (box.left + box.width / 2);
    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closest = child;
    }
  });

  return closest;
}

function enableDragAndDrop() {
  const draggables = document.querySelectorAll(".port-area.draggable");
  const containers = document.querySelectorAll("section.part-3");

  draggables.forEach((d) => {
    d.setAttribute("draggable", "true");
    d.addEventListener("dragstart", () => d.classList.add("dragging"));
    d.addEventListener("dragend", () => d.classList.remove("dragging"));
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const dragging = document.querySelector(".dragging");
      if (!dragging) return;

      const afterElement = getDragAfterElement(container, e.clientX);

      if (afterElement == null) {
        container.appendChild(dragging);
      } else {
        container.insertBefore(dragging, afterElement);
      }
    });
  });
}

enableDragAndDrop();
