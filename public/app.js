
var btn = document.querySelector("#btnint");

btn.addEventListener("click", function () {

  const variavel = document.getElementById('varInt').value
  intResult = Math.round(variavel)

  const resultado = document.querySelector('.resultadoInt')
  resultado.innerHTML = `<p>Inteiro mais próximo: <h4>${intResult}</h4></p>`

})

var btnPot = document.getElementById("btnExpo")

btnPot.addEventListener("click", function () {

  const varBase = document.getElementById("varB").value
  const varExpon = document.getElementById("varE").value

  varResult = Math.pow(varBase, varExpon)

  // console.log("Resultado: ", varResult)
  /*resultPotencia */

  const resultado = document.querySelector('.resultPotencia')
  resultado.innerHTML = `<p>Resultado de ${varBase}<sup>${varExpon}</sup>: <h4>${varResult}</h4></p>`

})

var chamaCircunf = document.getElementById("btnCircunf")

chamaCircunf.addEventListener("click", function () {

  const varRaio = document.getElementById("raio").value

  resultCircunf = (2 * Math.PI * varRaio).toFixed(3)

  /*console.log("Resultado circunferencia:", resultCircunf)*/

  const resultado = document.querySelector('.resultCircunf')
  resultado.innerHTML = `<p>Valor da circunferência: <h4>${resultCircunf}m</h4></p>`
})

var calcArea = document.getElementById("btnArea")

calcArea.addEventListener("click", function () {

  const varRaio = document.getElementById("raio").value

  varArea = (Math.PI * Math.pow(varRaio, 2)).toFixed(3)

  const resultado = document.querySelector('.resultArea')
  resultado.innerHTML = `<p>Área do círculo(m<sup>2</sup>): <h4>${varArea}m<sup>2</sup></h4></p>`

})

function calcBase() {

  const varLado = document.getElementById('lado').value

  varBase = (Math.pow(varLado, 2)).toFixed(2)

  /*console.log("Valor do lado", varBase)*/

  const resultado = document.querySelector('.resultAbase')
  resultado.innerHTML = `<p>Resultado da area da base(M): <h4>${varBase}(m<sup>2</sup>)</h4></p>`

  /*Chamanco a função do calculo da Area total*/
  calcATotal()

  /*Chamanco a função do calculo do Volume Total*/
  calcVTotal()

}


function calcATotal() {

  const varLado = document.getElementById('lado').value

  varATotal = (6 * (Math.pow(varLado, 2))).toFixed(2)

  const resultado = document.querySelector('.resultATotal')
  resultado.innerHTML = `<p>Resultado da área(M): <h4>${varATotal}(m<sup>2</sup>)</h4></p>`

}

function calcVTotal() {

  const varLado = document.getElementById('lado').value

  vTotal = Math.pow(varLado, 3).toFixed(3)

  // console.log("Testando vTotal", vTotal)

  const resultado = document.querySelector('.resultVCubo')
  resultado.innerHTML = `<p>Volume do Cubo(m<sup>3</sup>): <h4>${vTotal}(m<sup>3</sup>)</h4></p>`

}