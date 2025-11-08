let temperatura_corregida = 0
let temperatura = 0
let valor_de_correccion = 3
basic.forever(function () {
    temperatura = input.temperature()
    temperatura_corregida = temperatura - valor_de_correccion
    basic.showNumber(temperatura_corregida)
    basic.pause(500)
})
