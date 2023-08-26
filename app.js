
const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if(input.value === '') {
        alert('Введите что-то')
    }else{
        const div = document.createElement('div')
        const divButton = document.createElement('div')
        const text = document.createElement('h3')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        divButton.setAttribute('class', 'div_button')
        deleteButton.setAttribute('class', 'delete_button')
        editButton.setAttribute('class', 'edit_button')

        deleteButton.innerText = 'DELETE'
        text.innerHTML = input.value
        editButton.innerText = 'edit'

        divButton.append(deleteButton, editButton)
        div.append(text, divButton)

        todoList.prepend(div)
        input.value = ''
        deleteButton.onclick = () =>{
            divButton.parentElement.remove()
        }
    }
}
createButton.onclick = () => createTodo()

function f(...books) {
    const newArr = []
    for (let book of books) {
        for (let letter of book) {
            if (letter.toLowerCase () === "н") {
                newArr.push(book)
                break
            }
        }
    }
    return newArr
}

console.log(f('Неуютная ферма', 'Крах и восход'))

















