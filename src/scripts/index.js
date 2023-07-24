
let itensAtuais = insertedValues


const render = (arr) => {
  const mainList = document.querySelector('.itens__card')

  mainList.innerHTML = ''

  arr.forEach(insertVelue => {
    const card = createCard(insertVelue)

    mainList.appendChild(card)
  })
  calculateTotal(arr)
}

const createCard = (insertVelue) => {
  const card = document.createElement('li')
  const valor = document.createElement('h2')
  const control = document.createElement('div')
  const trashValor = document.createElement('div')
  const EntradaOuSaida = document.createElement('p')
  const trashConteiner = document.createElement('div')
  const trash = document.createElement('img')

  trashValor.classList.add('trash__valores')
  card.dataset.insertVelueId = insertVelue.id
  card.classList.add('list__itens')

  control.classList.add('control')
  valor.innerText = `R$ ${insertVelue.value}`
  EntradaOuSaida.innerText = valuesCategory[insertVelue.categoryID]
  
  valor.classList.add('valores')
  trash.src = "/src/assets/trash.png"
  trash.classList.add('trash')
  trashConteiner.classList.add('trash__conteiner')

  trash.addEventListener('click', () => {
    removerValor(insertVelue.id)
  })

  card.append(valor, control)
  trashValor.append(EntradaOuSaida)
  control.append(trashValor, trashConteiner)
  trashConteiner.append(trash)

  return card


}




const calculateTotal = (itens) => {
  const totalContainer = document.querySelector(".soma__valores p")
  const total = itens.reduce((acc, item) => acc + item.value, 0)
  totalContainer.textContent = `R$ ${total.toFixed(2)}`
}

const initializeFilter = () => {
  const filterItems = (category) => {
    if(category === "Todos"){
      itensAtuais = insertedValues
    }else{
      const categoryId =valuesCategory.indexOf(category)
      itensAtuais = insertedValues.filter((item) => item.categoryID === categoryId)
    }
    render(itensAtuais)
    calculateTotal(itensAtuais)
  }

  const allButton = document.querySelector('.button__todos')
  const entradasButton = document.querySelector('.button__Entradas')
  const saidasButton = document.querySelector('.saidas__button')
  
  allButton.addEventListener('click', () => filterItems('Todos'))
  entradasButton.addEventListener('click', () => filterItems('Entrada'))
  saidasButton.addEventListener('click', () => filterItems('Saída'))
}



const newValue = () => {

  const valor = document.getElementById('valor')

  const valorEntradaSaida = Array.from(document.getElementsByName('tipoValor')).find(item => item.checked).value

  

  insertedValues.push({
    id: insertedValues.length +1,
    value: Number(valor.value),
    categoryID: Number(valorEntradaSaida) 
  }
  )
valor.value = ''
  itensAtuais = insertedValues

  
  render(insertedValues)
  return false
}


const removerValor = (id) => {
  const indice = insertedValues.findIndex(item => item.id==id)

  insertedValues.splice(indice, 1 )
  render(insertedValues)
}




initializeFilter()
render(itensAtuais)
calculateTotal(itensAtuais)

