const { buildSVG } = require('../lib/buildSVG');

describe('buildSVG', () => {
  it('should correctly construct the pieces of the svg file to make a complete logo', () => {

    const text = `<text x="150" y="125" font-size="35" text-anchor="middle" fill="white">ABC</text>`;
    const shape = `<rect x="75" y="35" width="150" height="150" fill="blue" />`;

    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n${shape}\n${text}\n</svg>`;

    const resultSVG = buildSVG(text, shape);

    expect(resultSVG).toBe(expectedSVG);
  });
});