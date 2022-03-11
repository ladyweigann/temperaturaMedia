
        var temperaturas = [27, 29, 31, 35, 27, 29, 26, 31, 32, 28, 27, 29, 31, 35, 27, 29, 26, 31, 32, 28, 27, 29, 31, 35, 27, 29, 26, 31, 32, 28]

        var soma = 0

        for (let i = 0; i < temperaturas.length; i++) {
            soma += temperaturas[i]
        }

        var media = soma / 30
        var entradaTemperatura
        var telaResposta = document.querySelector("#idP")

        function entradaDeDados() {
            entradaTemperatura = document.querySelector("#idTemperatura").value
            console.log(entradaTemperatura)
            var resultado
            if (entradaTemperatura <= media) {
                resultado = "Dentro da média"
            } else {
                resultado = "Acima da média"
            }

            telaResposta.innerHTML = resultado

        }