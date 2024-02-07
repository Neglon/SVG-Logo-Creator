const { createShape } = require('../lib/shapeSVG');

describe('createShape', () => {
  it('should generate correct square for SVG', () => {
    const data = {
      shape: 'square',
      shapeColor: 'red' 
    };
    const expectedOutput = `<rect x="75" y="35" width="150" height="150" fill="${data.shapeColor}" />`;
    expect(createShape(data)).toBe(expectedOutput);
  });

  it('should generate correct circle for SVG', () => {
    const data = {
      shape: 'circle',
      shapeColor: 'green'
    };
    const expectedOutput = `<circle cx="150" cy="112" r="60" fill="${data.shapeColor}" />`;
    expect(createShape(data)).toBe(expectedOutput);
  });

  it('should generate correct triangle for SVG', () => {
    const data = {
      shape: 'triangle',
      shapeColor: '#0000FF' 
    };
    const expectedOutput = `<polygon points="150,40 75,160 225,160" fill="${data.shapeColor}" />`;
    expect(createShape(data)).toBe(expectedOutput);
  });

  it('should return an empty string for an unknown shape', () => {
    const data = {
      shape: 'unknown',
      shapeColor: 'pink' 
    };
    const expectedOutput = '';
    expect(createShape(data)).toBe(expectedOutput);
  });
});
