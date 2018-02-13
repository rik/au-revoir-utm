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
        {
            title: 'removes all utm_ parameters',
            input: 'http://foo.com?utm_one=one&utm_two=two',
            output: 'http://foo.com/',
        },
        {
            title: 'removes utm_ parameters in hash',
            input:
                'http://www.fredzone.org/la-terre-a-t-elle-ete-ensemencee-par-des-particules-extraterrestres-554#utm_source=feed&utm_medium=feed&utm_campaign=feed',
            output:
                'http://www.fredzone.org/la-terre-a-t-elle-ete-ensemencee-par-des-particules-extraterrestres-554',
        },
    ].forEach(function({ title, input, output }) {
        it(title, function() {
            expect(UTM.remove(input)).to.equal(output)
        })
    })
})
