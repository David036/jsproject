export function addProjects() {
let projectsSection = document.querySelector('.projects-section')
let inputName = document.querySelector('.inputName')
let inputDeadline = document.querySelector('.inputDeadline')
let inputEmail = document.querySelector('.inputEmail')
let inputBudget = document.querySelector('.inputBudget')
let inputWrite = document.querySelector('.inputWrite')
let addBtn = document.querySelector('.add-btn')
addBtn.addEventListener('click',()=> {
    if (inputName.value != '' && inputEmail.value != '' && inputBudget.value != '') {
        let newProject = document.createElement('div')
        newProject.classList.add('block')
        newProject.innerHTML = `
        <h2>${inputName.value}</h2>
        <h3>${inputDeadline.value}</h3>
        <h4>${inputWrite.value}</h4>
        <div class="block-bottom">
            <h5>${inputEmail.value}</h5>
        <h6>${inputWrite.value}</h6>
        </div>
        <button class="remove-btn">Remove</button>
        `
        projectsSection.append(newProject)
        inputName.value = ''
        inputDeadline.value = ''
        inputWrite.value = ''
        inputEmail.value = ''
        inputWrite.value = ''
        inputBudget.value = ''
        let removeBtn = newProject.querySelector('.remove-btn')
        removeBtn.addEventListener('click', ()=> {
            newProject.remove()
        })
    } else {
        alert('Empty value')
    }
})
}