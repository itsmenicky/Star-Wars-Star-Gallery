function viraCard() {
  const cards = document.querySelectorAll('.listCard')

  for(let indice = 0; indice < cards.length; indice++) {
    const card = cards[indice]

    card.addEventListener('click', function() {
      card.classList.toggle('flip')
    })
  }
}


async function renderizaCardsPeople() {
  let lista = document.querySelector('#cardList')

  lista.innerHTML = ""

  let listaDeDados = await fetch('https://swapi.dev/api/people', {
    method: "GET"
  })
  .then(function (resposta){
    return resposta.json()
  })

  for(let indice = 0; indice < listaDeDados.results.length; indice++) {
    let elemento = listaDeDados.results[indice]

    let li = document.createElement("li")
    let divFrente = document.createElement('div')
    let divVerso = document.createElement('div')
    let divNomeFrente = document.createElement('div')
    let divNomeVerso = document.createElement('div')
    let listaDados = document.createElement('ul')
    const anoNasc = document.createElement('li')
    const planeta = document.createElement('li')
    let imagem = document.createElement('img')

    li.classList.add('card', 'listCard')
    divFrente.classList.add("face");
    divFrente.classList.add("front");

    divNomeFrente.classList.add("titleCard")
    divNomeFrente.innerText = elemento.name

    divNomeVerso.classList.add("titleCard")
    divNomeVerso.innerText = elemento.name

    listaDados.classList.add("cardData")

    anoNasc.innerText = 'Ano de Nascimento: ' + elemento.birth_year

    const nomePlaneta = await fetch(elemento.homeworld, {
      method: "GET"
    })
    .then(function(resposta) {
      return resposta.json()
    })

    planeta.innerText = 'Planeta: ' + nomePlaneta.name

    divVerso.classList.add('face', 'back')

    imagem.src = "./assets/starduck.png"
    imagem.alt = "starduck"

    listaDados.append(anoNasc, planeta)
    divFrente.append(divNomeFrente, listaDados)
    divVerso.append(divNomeVerso, imagem)
    li.append(divFrente, divVerso)
    lista.append(li)
  }
  viraCard()
}

async function renderizaCardsPlanets(){
     let lista = document.querySelector('#cardList')

     lista.innerHTML = ""


     let listaDeDados = await fetch('https://swapi.dev/api/planets', {
      method:'GET'})
      .then(function(resposta){
        return resposta.json()
      })

      for(let indice = 0; indice < listaDeDados.results.length; indice++) {
        let elemento = listaDeDados.results[indice]
    
        let li = document.createElement("li")
        let divFrente = document.createElement('div')
        let divVerso = document.createElement('div')
        let divNomeFrente = document.createElement('div')
        let divNomeVerso = document.createElement('div')
        let listaDados = document.createElement('ul')
        let imagem = document.createElement('img')
        const populacao = document.createElement('li')
        const gravidade = document.createElement('li')

        li.classList.add('card', 'listCard')
        divFrente.classList.add("face");
        divFrente.classList.add("front");

        divNomeFrente.classList.add("titleCard")
        divNomeFrente.innerText = elemento.name

        divNomeVerso.classList.add("titleCard")
        divNomeVerso.innerText = elemento.name

        listaDados.classList.add("cardData")

        populacao.innerText = 'População: ' + elemento.population
        gravidade.innerText = 'Gravidade: ' + elemento.gravity

        divVerso.classList.add('face', 'back')

        imagem.src = "./assets/starduck.png"
        imagem.alt = "starduck"

        listaDados.append(populacao, gravidade)
        divFrente.append(divNomeFrente, listaDados)
        divVerso.append(divNomeVerso, imagem)
        li.append(divFrente, divVerso)
        lista.append(li)
      }
      viraCard()


}

async function renderizaCardsShips(){
  let lista = document.querySelector('#cardlist')
  lista.innerHTML = ''

  let listaDeDados = await fetch('https://swapi.dev/api/starships', {
    method:'GET'
  })
  .then(function(resposta){
    return resposta.json()
  })
  
  for(let indice = 0; indice < listaDeDados.results.length; indice++) {
    let elemento = listaDeDados.results[indice]

    let li = document.createElement("li")
    let divFrente = document.createElement('div')
    let divVerso = document.createElement('div')
    let divNomeFrente = document.createElement('div')
    let divNomeVerso = document.createElement('div')
    let listaDados = document.createElement('ul')
    let imagem = document.createElement('img')
    const fabricante = document.createElement('li')
    const passageiros = document.createElement('li')
  }
}