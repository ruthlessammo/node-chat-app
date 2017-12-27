const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should gen the correct message object', () => {
    const from = 'Jen';
    const text = 'Blah';
    const message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Will';
    const latitude = 15;
    const longitude = 12;
    const url = `http://www.google.com/maps?q=15,12`;
    const message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
