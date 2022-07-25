import { unescapeHtml } from 'utils'

test('shuffle escape  &amp; Test', () => {
  expect(unescapeHtml('&amp;')).toEqual('&')
})

test('shuffle escape  &lt; Test', () => {
  expect(unescapeHtml('&lt;')).toEqual('<')
})
