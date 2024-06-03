const button = document.querySelector(".convert-button") /* aqui pegamos o botão */
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputValor = document.querySelector(".input-valor").value /* VALOR EM REAL QUE FOI COLOCADO NO INPUT*/
    const convertValueToConvert = document.querySelector(".convert-value-to-convert") // valor em real 
    const convertValue = document.querySelector(".convert-value") //  outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.5



    if (currencySelect.value == 'dolar') {
        convertValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor / dolarToday) /* PEGUEI O VALOR CONVERTIDO E COLOQUEI NA TELA, formatado bonitinho*/
    }

    if (currencySelect.value == 'euro') {
        convertValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / euroToday)
    }

    if (currencySelect.value == 'libra') {
        convertValue.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GPB"
        }).format(inputValor / libraToday)
    }


    convertValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor) /* PEGUEI O VALOR DO INPUT E COLOQUEI NA TELA, formatado bonitinho */


} /* aqui temos a função, que esta responsável por pegar o valor do input e converter*/


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".imagembandeira")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/BandeiraEUA.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
        currencyImage.src = "./assets/libra.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues) /* aqui temos um ouvinte, que fica responsável por saber quando o botão é clicado e avisar a função */