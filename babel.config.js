const env = process.env.BABEL_ENV || process.env.NODE_ENV
const isTest = env === 'test'

const targets = isTest ? { node: 'current' } : undefined


module.exports = {
  presets: [
    ['poi/babel', { 
       jsx: 'react'
    }]
  ]
}
