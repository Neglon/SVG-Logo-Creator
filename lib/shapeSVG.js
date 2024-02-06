//Function to create SVG shape element to be returned and written to a file later

function createShape (data) {
    const shape = data.shape;
    const color = data.shapeColor;
    switch (shape) {
        case 'square':
            return `<rect x="75" y="35" width="150" height="150" fill=${color}" />`;  
        case 'circle':
            return `<cx="150" cy="112" r="60" fill="${color}" />`;
        case 'triangle':
            return `<polygon points="150,40 75,160 225,160" fill="${color}" />`;
        default:
            return '';
    }
}

exports.createShape = createShape;