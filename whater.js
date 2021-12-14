export function whater() {
    fetch( `https://goweather.herokuapp.com/weather/Armenia`).then((responze) => responze.json()).then((json)=> {
        let whaterBlock = document.createElement('div')
        whaterBlock.classList.add('whater-block')
        document.body.append(whaterBlock)
        whaterBlock.innerHTML = `
        <p>${json.temperature}</p>
        `
    })
}
