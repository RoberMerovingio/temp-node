// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)

//Desestructurando
const { john, peter } = require('./4-names')
//Sin desestructurar
const names = require('./4-names')
const saiHy = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')

saiHy('susan')
saiHy(john)
saiHy(peter)
saiHy(names.john)
saiHy(names.peter)

