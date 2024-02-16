let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll(".card");
// console.log(cards)


for(let i = 0; i < cards.length; i++){
    const element = cards[i];
    
    element.addEventListener("click", function(){
        
        const title = element.querySelector('h3');
        const titleText = title.innerText
        console.log(titleText)

        const price = parseFloat(element.querySelector('span').innerText.split(" ")[1]);
        

        const titleContainer = document.getElementById('title-container');
        // console.log(titleContainer)

        const p = document.createElement("p");
        p.innerText =titleCount +". "+ titleText;
        titleContainer.appendChild(p);

        titleCount++;

        //calculate the price
        totalPrice += price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    });
};

const btn = 