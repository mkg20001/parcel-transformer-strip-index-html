'use strict'

const {Transformer} = require('@parcel/plugin')
const logic = require('./logic')

module.exports = new Transformer({
  async transform ({asset, config, options}) {
    if (!options.hmr) {
      const {processedHtml} = logic(asset.getCode())

      asset.setCode(processedHtml)
    }

    return [asset]
  }
})
