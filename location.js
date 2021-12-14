export function location() {
    fetch( `https://freegeoip.app/json/`).then((responze) => responze.json()).then((json)=> {
        let locationBlock = document.createElement('div')
        locationBlock.classList.add('location-block')
        document.body.append(locationBlock)
        locationBlock.innerHTML = `
        <p>${json.ip}</p>
        <p>${json.country_code}</p>
        `
        console.log(json);
    })
}