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

    fildCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },

    actions:{
        buttom: document.getElementById("next-duel"),
    },
};

const playerSides = {
    player1: "player-card",
    computer: "computer-card",
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

    if (fieldSide === playerSides.player1){
        cardImage.addEventListener("click", ()=>{
            setCardField(cardImage.getAttribute("data-id"));
        })
    };

    cardImage.addEventListener("mouseover", ()=>{
        drawSelectCards(IdCard);
    });

    return cardImage;
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




function init(){
    drawCards(5, playerSides.player1); 
    drawCards(5, playerSides.computer); 
}

init();