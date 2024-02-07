//function that puts svg file structure together
function buildSVG(text, shape) {
    return `<svg width="300" height="200">\n${shape}\n${text}\n</svg>`
}

exports.buildSVG = buildSVG;