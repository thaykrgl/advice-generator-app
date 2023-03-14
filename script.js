let adviceButton = document.getElementById("advice-button");
let advice = document.getElementById("advice");
let adviceID = document.getElementById("advice-id");


adviceButton.addEventListener("click", () => {
    let URL = "https://api.adviceslip.com/advice";

    fetch(URL)
        .then(data => data.json())
        .then(data => {
            advice.innerHTML = data.slip.advice;
            adviceID.innerHTML = "#" + data.slip.id;
        });
})