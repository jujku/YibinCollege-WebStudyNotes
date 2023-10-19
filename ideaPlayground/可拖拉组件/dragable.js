class DraggableComponent {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.isDragging = false;
    this.initialX = 0;
    this.initialY = 0;

    this.element.addEventListener("mousedown", this.handleMouseDown.bind(this));
    document.addEventListener("mousemove", this.handleMouseMove.bind(this));
    document.addEventListener("mouseup", this.handleMouseUp.bind(this));
  }

  handleMouseDown(e) {
    this.isDragging = true;
    this.initialX = e.clientX - this.element.getBoundingClientRect().left;
    this.initialY = e.clientY - this.element.getBoundingClientRect().top;
    this.element.style.cursor = "grabbing";
  }

  handleMouseMove(event) {
    if (!this.isDragging) return;

    const offsetX = event.clientX - this.initialX;
    const offsetY = event.clientY - this.initialY;

    this.element.style.left = offsetX + "px";
    this.element.style.top = offsetY + "px";
  }

  handleMouseUp() {
    this.isDragging = false;
    this.element.style.cursor = "grab";
  }
}
