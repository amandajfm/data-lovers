window.onload = function () {
  showPokemons();
};

function getPokemons(search) {
  function filterByName(pokemon) {
    return (search === undefined || search === pokemon.name)
  }
  return POKEMON["pokemon"].filter(filterByName);
}

function showPokemons(namePokemon) {
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = `
     ${getPokemons(namePokemon).map((monster) => `
        <div class="each_pokemon">
          <img src="${monster["img"]}" class="pokemon-img"/>
          <div class="text-name">
            <h3 class="pokemon-name">${monster["name"]}</h3>
          </div>
        </div>
      `).join("")}
       `
}

btnsubmit.addEventListener('click', searchTypedMonster);

function searchTypedMonster(event) {
  let search = document.getElementById("txtSearch").value;
  document.getElementById("txtSearch").value = "";
  showPokemons(search)
}

let monsterList = getPokemons()

superRare.addEventListener('click', listSuperRare);

function listSuperRare() {
  const monsterList1 = monsterList.filter(superRareTest => superRareTest["spawn_chance"] <= "0.005");
  let sum = monsterList1.reduce(function (prevVal, elem) {
    return prevVal + elem.avg_spawns / 13;
  }, 0);
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
  <div class="sum">
   ${"A cada 10.000 encontros com pokemons, você pode encontrar um desses em média " + (sum.toFixed(2)) + " vezes."} 
  </div>
  ${monsterList1.map((monster) => `
     <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
       <div class="text-name">
       Chance de Spawn - ${monster["spawn_chance"]}
     </div>
     </div>
   `).join("")}
    `
}

rare.addEventListener('click', listRare);

function listRare() {
  monsterList2 = monsterList.filter(rareTest => rareTest["spawn_chance"] > "0.005" && rareTest["spawn_chance"]
    < "0.1");
  let sum = monsterList2.reduce(function (prevVal, elem) {
    return prevVal + elem.avg_spawns / 68;
  }, 0);
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
    <div class="sum">
      ${"A cada 10.000 encontros com pokemons, você pode encontrar um desses em média " + parseInt(sum) + " vezes."} 
    </div>
  ${monsterList2.map((monster) => `
     <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
       <div class="text-name">
       Chance de Spawn - ${monster["spawn_chance"]}
     </div>
     </div>
   `).join("")}
    `
}

commom.addEventListener('click', listCommom);

function listCommom() {
  let monsterList3 = monsterList.filter(commomTest => commomTest["spawn_chance"] >= "0.1");
  var sum = monsterList3.reduce(function (prevVal, elem) {
    return prevVal + elem.avg_spawns / 71;
  }, 0);
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `     
    <div class="sum">
      ${"A cada 10.000 encontros com pokemons, você pode encontrar um desses em média " + parseInt(sum) + " vezes."} 
    </div>
    ${monsterList3.map((monster) => `
      <div class="each_pokemon">
        <img src="${monster["img"]}" class="pokemon-img"/>
        <div class="text-name">
          <h3 class="pokemon-name">${monster["name"]}</h3>
        </div>
        <div class="text-name">
        Chance de Spawn - ${monster["spawn_chance"]}
      </div>
      </div>
   `).join("")}
    `
}

morning.addEventListener('click', listChanceMorning);

function listChanceMorning() {
  let monsterList4 = monsterList.filter(morningPokemons => morningPokemons["spawn_time"] >= "06:00" &&
    morningPokemons["spawn_time"] <= "12:00");
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
  ${monsterList4.map((monster) => `
     <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
       <div class="text-name">
       Horário com maior spawn - ${monster["spawn_time"]}
       </div>
     </div>
   `).join("")}
    `
}

afternoon.addEventListener('click', listChanceAfternoon);

function listChanceAfternoon() {
  let monsterList5 = monsterList.filter(afternoonPokemons => afternoonPokemons["spawn_time"] > "12:00" &&
    afternoonPokemons["spawn_time"] < "18:00");
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
  ${monsterList5.map((monster) => `
       <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
       <div class="text-name">
       Horário com maior spawn - ${monster["spawn_time"]}
       </div>
     </div>
   `).join("")}
    `
}

night.addEventListener('click', listChanceNight);

function listChanceNight() {
  let monsterList6 = monsterList.filter(nightPokemons => nightPokemons["spawn_time"] >= "18:00" &&
    nightPokemons["spawn_time"] < "00:00" || nightPokemons["spawn_time"] >= "00:00" && nightPokemons["spawn_time"]
    < "06:00");
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
  ${monsterList6.map((monster) => `
     <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
       <div class="text-name">
       Horário com maior spawn - ${monster["spawn_time"]}
       </div>
     </div>
   `).join("")}
    `
}

let orderUp = document.getElementById("orderUp")
orderUp.addEventListener('click', orderNameUp)

function orderNameUp() {
  let data = POKEMON.pokemon;
  data = (data.sort((a, b) => a.name.localeCompare(b.name)));

  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
 
  ${data.map((monster) => `
     <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>      
     </div>
   `).join("")}
    `
}

let orderDown = document.getElementById("orderDown")
orderDown.addEventListener('click', orderNameDown)

function orderNameDown() {
  let data2 = POKEMON.pokemon;
  data2 = (data2.sort((a, b) => a.name.localeCompare(b.name))).reverse(data2);

  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
 
  ${data2.map((monster) => `
     <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
     </div>
   `).join("")}
    `
}

let divModal = document.querySelector('#pokemons-div');
divModal.innerHTML = `
  ${getPokemons().map((monster) => `
    <div class="each_pokemon" data-name="${monster["name"]}">
      <img src="${monster["img"]}" class="pokemon-img" data-name="${monster["name"]}" />
      <div class="text-name">
        <h3 class="pokemon-name" data-name="${monster["name"]}">${monster["name"]}</h3>
      </div>
    </div>
  `).join("")}
  `

let elements = document.querySelectorAll('.each_pokemon');
elements.forEach(function(element) {
  element.addEventListener('click', function(event){
    const pokemonName = event.target.dataset.name;
    const myPokemon = getPokemons(pokemonName)[0];
    const modal = document.getElementById("modal-pokemon");
    if(modal) {
      modal.classList.add('show');
      modal.addEventListener('click', (e)=> {
        if(e.target.id == "modal-pokemon" || e.target.className == 'close') {
          modal.classList.remove('show');
        }
      });
      const modalBody = document.querySelector(".modal");
      modalBody.innerHTML = `
      <button class="close">x</button>
      <img src="${myPokemon.img}" class="pokemon-img"/>
      <div class="text-name">
        <h3 class="pokemon-name">Nome: ${myPokemon.name}</h3>
        <h3 class="pokemon-name">Spawn Chance: ${myPokemon.spawn_chance}</h3>
        <h3 class="pokemon-name">Spawn Time: ${myPokemon.spawn_time}</h3>
        <h3 class="pokemon-name">Tipo: ${myPokemon.type}</h3>
        <h3 class="pokemon-name">Fraquezas: ${myPokemon.type}</h3>
      </div>      
      `
    }
  });
})
