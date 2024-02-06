//Function to create SVG text element to be returned and written to a file later.
function createText(data) {
    const text= data.text;
    const color = data.textColor;
    return `<text x="150" y="125" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-size="30">${text}</text>`;
}

exports.createText = createText;