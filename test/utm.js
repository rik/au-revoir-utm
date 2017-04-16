const expect = chai.expect;

describe('UTM.remove', function() {
    [
    {
        title: 'removes when first query string parameter',
        input: 'http://foo.com/?utm_source=12',
        output: 'http://foo.com/',
    },
    {
        title: 'removes when second query string parameter',
        input: 'http://foo.com/?bar=baz&utm_source=12',
        output: 'http://foo.com/?bar=baz',
    },
    ].forEach(function({ title, input, output }) {
        it(title, function() {
            expect(UTM.remove(input)).to.equal(output);
        });
    });
});
