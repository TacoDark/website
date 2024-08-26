const codeCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-`~[]\{}|;\':",./<>?';
const container = document.createElement('div'); // Create a separate container
container.style.position = 'fixed';
container.style.top = '0';
container.style.left = '0';
container.style.width = '100%';
container.style.height = '100%';
container.style.pointerEvents = 'none'; // Make it non-interactive
document.body.appendChild(container); // Append to the body

function createFallingCode() {
  const codeElement = document.createElement('span');
  codeElement.textContent = codeCharacters.charAt(Math.floor(Math.random() * codeCharacters.length));
  codeElement.style.position = 'absolute';
  codeElement.style.left = `${Math.random() * 100}%`;
  codeElement.style.top = `${Math.random() * 100}%`;
  codeElement.style.fontSize = `${Math.random() * 20 + 5}px`;
  codeElement.style.opacity = '0.6'; 
  codeElement.style.animation = 'fall 1s linear infinite, rainbow 5s linear infinite'; 
  container.appendChild(codeElement); 
}

function fallAnimation() {
  const codeElements = container.querySelectorAll('span'); // Select spans within the container
  codeElements.forEach((codeElement, index) => {
    codeElement.style.top = `${Math.random() * 100}%`;
    codeElement.style.left = `${Math.random() * 100}%`;
  });
}

function initFallingCode() {
  for (let i = 0; i < 70; i++) {
    createFallingCode();
  }
  setInterval(fallAnimation, 1); 
}

initFallingCode();

// CSS for the rainbow animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes rainbow {
    0% {
      color: red;
    }
    17% {
      color: orange;
    }
    33% {
      color: yellow;
    }
    50% {
      color: green;
    }
    67% {
      color: blue;
    }
    83% {
      color: indigo;
    }
    100% {
      color: violet;
    }
  }
`;
document.head.appendChild(style);