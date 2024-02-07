const { createText } = require('../lib/textSVG');

describe('createText', () => {
    it('should generate a correct <text> SVG element', () => {
      
      const data = {
        text: 'ABC',
        textColor: '#0000FF', 
      };
      const expectedOutput = `<text x="150" y="125"  font-size="35" text-anchor="middle" fill="${data.textColor}">${data.text}</text>`;

      const result = createText(data);
      expect(result).toBe(expectedOutput);
    });
  });