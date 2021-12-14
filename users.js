
export function addUsers() {
    let usersSection = document.querySelector('.users-section')
    fetch( `https://reqres.in/api/users/`).then((responze) => responze.json()).then((json)=> {
    console.log(json.data);
    json.data.forEach(element => {
        let userBlock = document.createElement('div')
        userBlock.classList.add('user-block')
        userBlock.innerHTML = `
        <img src="${element.avatar}">
                <h2>${element.first_name}</h2>
                <h3>${element.email}</h3>
                <div class="icons-block">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-linkedin"></i>
                </div>
        `
        usersSection.append(userBlock)
    });
})
}

