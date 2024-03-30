const main = document.createElement("div");
main.classList.add("main");
document.body.appendChild(main);
main.style.textAlign="center";


const btnDiv= document.createElement("div");
main.appendChild(btnDiv);
main.setAttribute("style", "display: flex; flex-direction:row;");


const popup = document.createElement("button");
popup.innerHTML = "Number of Grid";
popup.setAttribute("style", " padding:8px 15px; ");
btnDiv.appendChild(popup);

const sqDivContainer= document.createElement("div");

sqDivContainer.classList.add("squareDiv-Container");
sqDivContainer.setAttribute("style", "display: flex; gap: 10px; ");
main.appendChild(sqDivContainer);



popup.addEventListener("click", () => {
    deleteDivs();

    let noOfDivs= prompt("Enter no. of divs you want to create");
    let x =1;
    while(x==1){
        if (noOfDivs>100) {
            alert("Enter no till 100 only!!");
            noOfDivs= prompt("Enter no. of divs you want to create");

        }else{
            x=0;
            createDivs(noOfDivs);
        }
    }
});

function deleteDivs() {
    const sqrDivsList = document.querySelectorAll(".grid-divs");
    sqrDivsList.forEach(squareDivs => {
        squareDivs.style.display = "none";
    });
}

function createDivs(noOfDivs) {

    for (let i = 0; i < noOfDivs; i++) {
        const squareDivs = document.createElement("div");
        squareDivs.classList.add("grid-divs");
        sqDivContainer.appendChild(squareDivs);

       
        squareDivs.addEventListener("mouseover", () => {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            squareDivs.style.backgroundColor = "#"+ randomColor;
        });
        squareDivs.addEventListener("mouseout", () => {
            squareDivs.style.backgroundColor = "";
        });
    }
}