const expect = chai.expect

describe('UTM.remove', function() {
    ;[
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
        {
            title: 'only removes utm_ parameters',
            input: 'http://foo.com/?bar=baz&utm_source=12&foo=true',
            output: 'http://foo.com/?bar=baz&foo=true',
        },
    ].forEach(function({ title, input, output }) {
        it(title, function() {
            expect(UTM.remove(input)).to.equal(output)
        })
    })
})
