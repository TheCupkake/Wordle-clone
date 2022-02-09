let targetWords = [
    "ashley",
    "ramsey",
    "aarons",
    "adrian",
    "aguero",
    "telles",
    "arnold",
    "alonso",
    "alzate",
    "ampadu",
    "andone",
    "archer",
    "areola",
    "aurier",
    "ayling",
    "austin",
    "bailey",
    "bailly",
    "barnes",
    "baxter",
    "benson",
    "braore",
    "bishop",
    "bogusz",
    "bolton",
    "bowden",
    "bridge",
    "bordao",
    "bahill",
    "carson",
    "cavani",
    "soares",
    "chauke",
    "cirkin",
    "baines",
    "conteh",
    "cooper",
    "cornet",
    "coufal",
    "cundle",
    "dallas",
    "darlow",
    "dawson",
    "davies",
    "deeney",
    "dennis",
    "diallo",
    "peters",
    "bonner",
    "dobbin",
    "elanga",
    "engels",
    "fofana",
    "foster",
    "fraser",
    "garcia",
    "garner",
    "gibson",
    "giroud",
    "gordon",
    "grujic",
    "guaita",
    "hanley",
    "hayden",
    "heaton",
    "hoever",
    "hughes",
    "jensen",
    "mcneil",
    "jansen",
    "justin",
    "kamara",
    "camara",
    "drogba",
    "karius",
    "kenedy",
    "kilman",
    "konate",
    "krafth",
    "lamela",
    "lazaar",
    "lemina",
    "lennon",
    "levitt",
    "lloris",
    "lowton",
    "lukaku",
    "mahrez",
    "marcal",
    "martin",
    "martyn",
    "masina",
    "mateta",
    "maupay",
    "mbeumo",
    "mcatee",
    "mclean",
    "mejbri",
    "miazga",
    "milner",
    "elneny",
    "moreno",
    "morgan",
    "morris",
    "morton",
    "mundle",
    "murphy",
    "murray",
    "nartey",
    "nelson",
    "semedo",
    "ngakia",
    "niguez",
    "norris",
    "offiah",
    "onyeka",
    "oxlade",
    "partey",
    "harris",
    "farrel",
    "ramsay",
    "romero",
    "rondon",
    "rogers",
    "saivet",
    "saliba",
    "sancho",
    "sanson",
    "santon",
    "sarkic",
    "savage",
    "simons",
    "steele",
    "stones",
    "taylor",
    "thiago",
    "thomas",
    "tomori",
    "torres",
    "valery",
    "varane",
    "modric",
    "vlasic",
    "walker",
    "walton",
    "prowse",
    "werner",
    "wesley",
    "wilson",
    "wilmot",
    "zeqiri",
    "ziyech",
    "suarez",
    "stegen",
    "hazard",
    "umtiti",
    "albiol",
    "asenjo",
    "borges",
    "banega",
    "aduriz",
    "bonera",
    "cuenca",
    "nolito",
    "dejong",
    "vaclik",
    "duarte",
    "puerto",
    "juanma",
    "joselu",
    "corona",
    "ghilas",
    "iborra",
    "parejo",
    "buffon",
    "pandev",
    "baresi",
    "rooney",
    "zidane",
    "armano",
    "davids",
    "acerbi",
    "abukar",
    "sandro",
    "amione",
    "armini",
    "aresti",
    "arthur",
    "audero",
    "badelj",
    "balogh",
    "abidal",
    "vieira",
    "lauren",
    "araujo",
    "barrow",
    "benali",
    "branco",
    "bianco",
    "valero",
    "bremer",
    "carlos",
    "caputo",
    "chiesa",
    "hakimi",
    "mbappe",
    "icardi",
    "neymar",
    "bernat",
    "kehrer",
    "mendes",
    "ebimbe",
    "simons",
    "gharbi",
    "pavard",
    "gnabry",
    "moting",
    "wanner",
    "muller",
    "dahoud",
    "schulz",
    "akanji",
    "brandt",
    "witsel",
    "heskey",
    "howard",
    "seaman",
    "hyypia",
    "powell"
  
   
  ]

const dictionary = [
  "ashley",
  "ramsey",
  "aarons",
  "adrian",
  "aguero",
  "telles",
  "arnold",
  "alonso",
  "alzate",
  "ampadu",
  "andone",
  "archer",
  "areola",
  "aurier",
  "ayling",
  "austin",
  "bailey",
  "bailly",
  "barnes",
  "baxter",
  "benson",
  "braore",
  "bishop",
  "bogusz",
  "bolton",
  "bowden",
  "bridge",
  "bordao",
  "bahill",
  "carson",
  "cavani",
  "soares",
  "chauke",
  "cirkin",
  "baines",
  "conteh",
  "cooper",
  "cornet",
  "coufal",
  "cundle",
  "dallas",
  "darlow",
  "dawson",
  "davies",
  "deeney",
  "dennis",
  "diallo",
  "peters",
  "bonner",
  "dobbin",
  "elanga",
  "engels",
  "fofana",
  "foster",
  "fraser",
  "garcia",
  "garner",
  "gibson",
  "giroud",
  "gordon",
  "grujic",
  "guaita",
  "hanley",
  "hayden",
  "heaton",
  "hoever",
  "hughes",
  "jensen",
  "mcneil",
  "jansen",
  "justin",
  "kamara",
  "camara",
  "drogba",
  "karius",
  "kenedy",
  "kilman",
  "konate",
  "krafth",
  "lamela",
  "lazaar",
  "lemina",
  "lennon",
  "levitt",
  "lloris",
  "lowton",
  "lukaku",
  "mahrez",
  "marcal",
  "martin",
  "martyn",
  "masina",
  "mateta",
  "maupay",
  "mbeumo",
  "mcatee",
  "mclean",
  "mejbri",
  "miazga",
  "milner",
  "elneny",
  "moreno",
  "morgan",
  "morris",
  "morton",
  "mundle",
  "murphy",
  "murray",
  "nartey",
  "nelson",
  "semedo",
  "ngakia",
  "niguez",
  "norris",
  "offiah",
  "onyeka",
  "oxlade",
  "partey",
  "harris",
  "farrel",
  "ramsay",
  "romero",
  "rondon",
  "rogers",
  "saivet",
  "saliba",
  "sancho",
  "sanson",
  "santon",
  "sarkic",
  "savage",
  "simons",
  "steele",
  "stones",
  "taylor",
  "thiago",
  "thomas",
  "tomori",
  "torres",
  "valery",
  "varane",
  "modric",
  "vlasic",
  "walker",
  "walton",
  "prowse",
  "werner",
  "wesley",
  "wilson",
  "wilmot",
  "zeqiri",
  "ziyech",
  "suarez",
  "stegen",
  "hazard",
  "umtiti",
  "albiol",
  "asenjo",
  "borges",
  "banega",
  "aduriz",
  "bonera",
  "cuenca",
  "nolito",
  "dejong",
  "vaclik",
  "duarte",
  "puerto",
  "juanma",
  "joselu",
  "corona",
  "ghilas",
  "iborra",
  "parejo",
  "buffon",
  "pandev",
  "baresi",
  "rooney",
  "zidane",
  "armano",
  "davids",
  "acerbi",
  "abukar",
  "sandro",
  "amione",
  "armini",
  "aresti",
  "arthur",
  "audero",
  "badelj",
  "balogh",
  "abidal",
  "vieira",
  "lauren",
  "araujo",
  "barrow",
  "benali",
  "branco",
  "bianco",
  "valero",
  "bremer",
  "carlos",
  "caputo",
  "chiesa",
  "hakimi",
  "mbappe",
  "icardi",
  "neymar",
  "bernat",
  "kehrer",
  "mendes",
  "ebimbe",
  "simons",
  "gharbi",
  "pavard",
  "gnabry",
  "moting",
  "wanner",
  "muller",
  "dahoud",
  "schulz",
  "akanji",
  "brandt",
  "witsel",
  "heskey",
  "howard",
  "seaman",
  "hyypia",
  "powell"

 
]

function shuffle(array){
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
}

shuffle(targetWords)
console.log(targetWords)


const FLIP_ANIMATION_DURATION = 500
const DANCE_ANIMATION_DURATION = 500
const keyboard = document.querySelector("[data-keyboard]")
const WORD_LENGTH = 6
const alertContainer = document.querySelector("[data-alert-container]")
const guessGrid = document.querySelector("[data-guess-grid]")
const offsetFromDate = new Date(2022, 0, 6)
const msOffset = Date.now() - offsetFromDate
const dayOffset = msOffset / 1000 / 60 / 60 / 24
const targetWord = targetWords[Math.floor(dayOffset)]
let checkWordle





  function startInteraction() {
      document.addEventListener("click", handleMouseClick)
      document.addEventListener("keydown", handleKeyPress)
  }

  function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
  }

  function handleMouseClick(e) {
      console.log(e)
      if (e.target.matches("[data-key]")) {
          pressKey(e.target.dataset.key)
          return
      }

      if(e.target.matches("[data-enter]")) {
          submitGuess()
          return
      }
      if(e.target.matches("[data-delete]")){
          deleteKey()
          return
      }


  }

  function handleKeyPress(e) {
      if (e.key === "Enter") {
          submitGuess()
          return
      }

      if (e.key === "Backspace" || e.key === "Delete") {
          deleteKey()
          return
      }

      if (e.key.match(/^[a-z]$/)){
          pressKey(e.key)
          return

      }

  }



function pressKey(key){
    const activeTiles = getActiveTiles()
    if (activeTiles.length >= WORD_LENGTH) return
    const nextTile =guessGrid.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.textContent = key
    nextTile.dataset.state = "active"
}

function deleteKey(){
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length-1]
    if (lastTile == null) return
    lastTile.textContent = ""
    delete lastTile.dataset.state
    delete lastTile.dataset.letter
}

function submitGuess(){
    
    const activeTiles = [...getActiveTiles()]
    if (activeTiles.length !== WORD_LENGTH) {
        showAlert("Not long enough")
        shakeTiles(activeTiles)
        return
    }

    const guess = activeTiles.reduce((word, tile) => {
        return word + tile.dataset.letter
    }, "")
    if (!dictionary.includes(guess)) {
        showAlert("Not in word list")
        shakeTiles(activeTiles)
        return
    }

    stopInteraction()
    activeTiles.forEach((...params) => flipTiles(...params, guess))

}

function flipTiles(tile, index, array, guess) {
    const letter = tile.dataset.letter
    const key = keyboard.querySelector(`[data-key="${letter}"i]`)
    checkWordle = targetWord
    setTimeout(() => {
      
        
        tile.classList.add("flip")
    }, index * FLIP_ANIMATION_DURATION / 2)

    tile.addEventListener("transitionend", () => {
        
       
        tile.classList.remove("flip")
        if (targetWord[index] === letter){
            tile.dataset.state = "correct"
            key.classList.add("correct")
            checkWordle = checkWordle.replace(letter, '')
            
        } else if (checkWordle.indexOf(letter) != -1){
            tile.dataset.state = "wrong-location"
            key.classList.add("wrong-location")
            checkWordle = checkWordle.replace(letter, '')
            
        } else {
            tile.dataset.state = "wrong"
            key.classList.add("wrong")
        }

        if (index === array.length -1) {
            tile.addEventListener("transitionend", () => {
                startInteraction()
                checkWinLose(guess, array)
            }, {once: true})
            
        }
    }, {once: true})
}

function getActiveTiles(){
    return guessGrid.querySelectorAll('[data-state="active"]')
}

function showAlert(message, duration = 1000){
    const alert = document.createElement("div")
    alert.textContent = message
    alert.classList.add("alert")
    alertContainer.prepend(alert)
    if (duration == null) return
    setTimeout(() => {
        alert.classList.add("hide")
        alert.addEventListener("transitionend", () =>{
            alert.remove()
        })

    }, duration)
}

function shakeTiles(tiles){
    tiles.forEach(tile => {
        tile.classList.add("shake")
        tile.addEventListener("animationend", () => {
            tile.classList.remove("shake")

        }, {once: true})
    })
}

function checkWinLose(guess, tiles){
    if (guess === targetWord) {
        showAlert("You Win", 5000)
        danceTiles(tiles)
        stopInteraction()
        return
    }

    const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])")
    if (remainingTiles.length === 0){
        showAlert(targetWord.toUpperCase(), null)
        stopInteraction()
    }
}

function danceTiles(tiles){
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add("dance")
            tile.addEventListener("animationend", () => {
            tile.classList.remove("dance")

        }, {once: true})

        }, index * DANCE_ANIMATION_DURATION / 5)
        
    })
}


startInteraction()