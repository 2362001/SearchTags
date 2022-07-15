var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemove = document.querySelector('.remove')


var tags = ['Nodejs', 'Reactjs']

function render() {
    content.innerHTML=''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += ` <li>
                                 ${tag}
                                <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
                            </li>`
    }

    content.appendChild(input)
    input.focus()
}

render()



input.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
            tags.push(input.value.trim())
            input.value = null
            render()
    }
})



function removeTag(index) {
    tags.splice(index, 1)
    render()
}

btnRemove.addEventListener('click', function(){
    tags= []
    render()
})