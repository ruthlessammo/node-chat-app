const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should gen the correct message object', () => {
    const from = 'Jen';
    const text = 'Blah';
    const message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
