export function randomUsers() {
    let randomSection = document.querySelector('.random-section')
    let randomBlocks = document.querySelectorAll('.random-block')
    fetch( `https://randomuser.me/api/`).then((responze) => responze.json()).then((json)=> {
    console.log(json);
    json.results.forEach(element => {
        console.log(element.picture.large);
        let url = element.picture.large
        console.log(url);
        for (let i = 0; i < randomBlocks.length; i++) {
            randomBlocks[i].setAttribute('src',`${url}`)
            randomBlocks[i].setAttribute('alt','')
        }
    });
})
}