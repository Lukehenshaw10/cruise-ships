const Port = require('../src/Port')

describe('Port', () => {

    it('returns an object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const port = new Port('Dover');

        expect(port.name).toEqual('Dover');
    });
});