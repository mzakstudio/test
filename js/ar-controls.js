// Adding Clickable Button with a Link
function addButtonWithLink() {
    const linkUrl = document.getElementById('link-url').value;
    const scene = document.querySelector('a-scene');

    if (linkUrl) {
        const button = document.createElement('a-box');
        button.setAttribute('position', {x: 1, y: 1, z: 0});
        button.setAttribute('rotation', {x: 0, y: 45, z: 0});
        button.setAttribute('color', '#FF6347');
        button.setAttribute('event-set__enter', '_event: mouseenter; color: #42f575');
        button.setAttribute('event-set__leave', '_event: mouseleave; color: #FF6347');
        button.setAttribute('link', `href: ${linkUrl}; title: Visit Link`);

        scene.appendChild(button);
    }
}

// Uploading and Adding Text in AR
function addText() {
    const textBox = document.getElementById('ar-text-box').value;
    const textElement = document.getElementById('ar-text');
    textElement.setAttribute('value', textBox);
}
