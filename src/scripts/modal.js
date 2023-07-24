const handleModal = () => {
    const button = document.querySelector('.button__title')
    const modalController = document.querySelector('.modal__controller')
    const cancelar = document.querySelector('.button__cancelar')
    const closeModal = document.querySelector('.close__button')
    const buttonInserirValor = document.querySelector('.button__inserir-valor')

    buttonInserirValor.addEventListener('click', (e) => {
        e.preventDefault()
        newValue()
        modalController.close()
    })

    closeModal.addEventListener('click', () => {
        modalController.close()
    })

    cancelar.addEventListener('click', () => {
        modalController.close()

    })

    button.addEventListener('click', () => {
        modalController.showModal()
    })
}





handleModal()

