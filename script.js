const result = document.querySelector('.result')
const nbPokemon = 151

var types = {
    normal: ["#bfbfbf",{iconType:'<i class="fa-regular fa-circle"></i>', iconColor:'#a3a3a3'}],
    fire: ["#d69360",{iconType:'<i class="fa-solid fa-fire"></i>', iconColor:'red'}],
    water: ["#7998db",{iconType:'<i class="fa-solid fa-droplet"></i>', iconColor:'blue'}],
    electric: ["#dbc772",{iconType:'<i class="fa-solid fa-bolt"></i>', iconColor:'yellow'}],
    grass: ["#a2b8a3",{iconType:'<i class="fa-solid fa-leaf"></i>', iconColor:'green'}],
    ice: ["#a5cfcd",{iconType:'<i class="fa-solid fa-snowflake"></i>', iconColor:'cyan'}],
    fighting: ["#8a3c38",{iconType:'<i class="fa-solid fa-hand-fist"></i>', iconColor:'#bd2b41'}],
    poison: ["#97899c",{iconType:'<i class="fa-solid fa-skull-crossbones"></i>', iconColor:'#852bbd'}],
    ground: ["#E2BF65",{iconType:'<i class="fa-solid fa-mountain"></i>', iconColor:'#bd652b'}],
    flying: ["#A98FF3",{iconType:'<i class="fa-solid fa-feather-pointed"></i>', iconColor:'#5e2deb'}],
    psychic: ["#f57fa3",{iconType:'<i class="fa-solid fa-brain"></i>', iconColor:'#f70c54'}],
    bug: ["#b2ba77",{iconType:'<i class="fa-solid fa-bug"></i>', iconColor:'#515e46'}],
    rock: ["#b5aa70",{iconType:'<i class="fa-solid fa-gem"></i>', iconColor:'#543727'}],
    ghost: ["#735797",{iconType:'<i class="fa-solid fa-ghost"></i>', iconColor:'#4a1d85'}],
    dragon: ["#756996",{iconType:'<i class="fa-solid fa-dragon"></i>', iconColor:'#4d05fc'}],
    dark: ["#705746",{iconType:'<i class="fa-solid fa-moon"></i>', iconColor:'#363045'}],
    steel: ["#B7B7CE",{iconType:'<i class="fa-solid fa-gear"></i>', iconColor:'#6a6a7d'}],
    fairy: ["#D685AD",{iconType:'<i class="fa-solid fa-star-of-life"></i>', iconColor:'pink'}],
}

for(i = 1; i != nbPokemon + 1; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data)=> { 
        var div = document.createElement("div")
        div.classList.add('card')
        result.appendChild(div)
        div.style.backgroundColor = types[data.types[0].type.name][0]
        

        var div2 = document.createElement("div")
        div.appendChild(div2)
        div2.innerHTML = ("00" + data.id).slice(-3)

        var div3 = document.createElement("div")
        div.appendChild(div3)
        let name = data.species.name
        let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
        div3.innerHTML += nameCapitalized        
        div3.style.fontWeight = "bold"

        var div4 = document.createElement("div")
        div.appendChild(div4)
        div4.innerHTML += "<img src="+`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`+">"

        var div6 = document.createElement("div")
        div.appendChild(div6)
        div6.innerHTML += types[data.types[0].type.name][1].iconType
        div6.style.color = types[data.types[0].type.name][1].iconColor
                
        var div5 = document.createElement("div")
        div.appendChild(div5)
        div5.innerHTML += data.types[0].type.name
    })
}
