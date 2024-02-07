//Function to create SVG text element to be returned and written to a file later.
function createText(data) {
    const text= data.text;
    const color = data.textColor;
    return `<text x="150" y="125"  font-size="35" text-anchor="middle" fill="${color}">${text}</text>`;
}

exports.createText = createText;