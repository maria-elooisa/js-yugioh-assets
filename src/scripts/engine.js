const state = {
    score:{
        playerScore:0,
        computerScore:0,
        scoreBox: document.getElementById("score_points"),
    },

    cardSprites: {
        avatar: document.getElementById("card-image"),
        name:document.getElementById("card-name"),
        type:document.getElementById("card-type"),
    },

    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },

    playerSides: {
        player1: "player-card",
        player1Box: document.querySelector("#computer-card"),
        computer: "computer-card",
        computerBox: document.querySelector("#player-card"),
    },

    actions:{
        buttom: document.getElementById("next-duel"),
    },
};

const players = {
    player1: "player-cards",
};

const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type:"Paper",
        img: "./src/assets/icons/dragon.png",
        WinOf:[1],
        LoseOf:[2],
    },
    {
        id: 1,
        name: "Dark Magican",
        type:"Rock",
        img: "./src/assets/icons/magician.png",
        WinOf:[2],
        LoseOf:[0],
    },
    {
        id: 2,
        name: "Exodia",
        type:"Scissors",
        img: "./src/assets/icons/exodia.png",
        WinOf:[0],
        LoseOf:[1],
    },
];

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}


async function creatCardIdImage(IdCard, fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");

    if (fieldSide === state.playerSides.player1){

        cardImage.addEventListener("mouseover", ()=>{
            drawSelectCards(IdCard);
        });

        cardImage.addEventListener("click", ()=>{
            setCardField(cardImage.getAttribute("data-id"));
        })
    
    };

    return cardImage;
};

async function setCardField(cardId){

    await removeAllCardsImage();

    let computerCardId = await getRandomCardId();

    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    let duelResults = await checkDuelResults(cardId, computerCardId);

    await updateScore();
    await drawButton(duelResults);
};

async function updateScore(){
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`
};

async function drawButton(text){
    state.actions.buttom.innerText = text
    state.actions.buttom.style.display = "block";
};

async function checkDuelResults(playerCardId, computerCardId){
    let duelResults = "Draw";
    let playerCard = cardData[playerCardId];

    if(playerCard.WinOf.includes(computerCardId)){
        duelResults = "win";
        await playerAudio(duelResults);
        state.score.playerScore++;
    }

    if(playerCard.LoseOf.includes(computerCardId)){
        duelResults = "lose";
        await playerAudio(duelResults);
        state.score.computerScore++;
    }

    return duelResults
};

function removeAllCardsImage(){
    let cards = state.playerSides.computerBox;
    let imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    cards = state.playerSides.player1Box;
    imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
};  


async function drawSelectCards(index){
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Attibute : " + cardData[index].type;
};

async function drawCards(cardNumbers, fieldSide) {
    const fieldElement = document.getElementById(fieldSide);
    if (!fieldElement) {
        console.error(`Elemento com id "${fieldSide}" não encontrado.`);
        return;
    }

    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await creatCardIdImage(randomIdCard, fieldSide);

        if (!(cardImage instanceof HTMLElement)) {
            console.error("A função creatCardIdImage não retornou um elemento válido.");
            continue;
        }

        fieldElement.appendChild(cardImage);
    }
}

async function resetDuel(){
    state.cardSprites.avatar.src = "";
    state.actions.buttom.style.display = "none";
    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";

    init();
};

async function playerAudio(status){
    const audio = new Audio (`./src/assets/audios/${status}.wav`);
    audio.play();
}

function init(){
    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";

    drawCards(5, state.playerSides.player1); 
    drawCards(5, state.playerSides.computer); 

    const bgm = document.getElementById("bgm");
    bgm.play();
}

init();