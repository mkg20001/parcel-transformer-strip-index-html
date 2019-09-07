'use strict'

/* eslint-env mocha */

const logic = require('../src/logic')
const assert = require('assert').strict

describe('logic.js processes html page correctly', () => {
  it('works', async () => {
    assert.deepEqual(logic('<a href="/my-page/index.html"></a>'), '<a href="/my-page/"></a>')
    assert.deepEqual(logic('<a href="index.html"></a>'), '<a href="/"></a>')
  })
})
