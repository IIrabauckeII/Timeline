// ***GLOBAL VARIABLE DECLARATION***
const EVENTS = document.querySelectorAll('.events');


// ***FUNCTION DECLARATION***

// Expand Events on Click
function expand() {
  const description = this.querySelector('div');
  description.style.display = "grid"
}

// Show Preview on Mousover
function preview() {
  const description = this.querySelector('div');
  if (description.style.display == "grid") {
    return
  } else {
    let text = this.querySelector('h3').innerHTML;
    let span = document.createElement('span');
    span.innerHTML = text;
    span.classList.add("preview");
    this.appendChild(span);
  }
}

// Hide Preview on Mouseout
function hidePreview() {
  let span = this.querySelector('.preview');
  span.parentNode.removeChild(span);
}

// ***EVENT LISTENERS***

// Show Preview on Mousover
EVENTS.forEach((item) => {
  item.addEventListener('mouseenter', preview)
});

// Hide Preview on Mouseout
EVENTS.forEach((item) => {
  item.addEventListener('mouseout', hidePreview)
});

// Expand Events on Click
EVENTS.forEach((item) => {
  item.addEventListener('click', expand)
});

// Hide Preview on Click
EVENTS.forEach((item) => {
  item.addEventListener('click', hidePreview)
});
