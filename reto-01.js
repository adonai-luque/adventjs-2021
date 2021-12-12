function contarOvejas(ovejas) {
  return ovejas.filter(({name, color}) => /a/i.test(name) && /n/i.test(name) && (color === 'rojo'))
}
