'use strict'

const {Transformer} = require('@parcel/plugin')
const logic = require('./logic')

module.exports = new Transformer({
  async transform ({asset, config, options}) {
    if (!options.hot) {
      const processedHtml = logic(await asset.getCode())

      asset.setCode(processedHtml)
    }

    return [asset]
  }
})
