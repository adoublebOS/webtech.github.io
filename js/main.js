const AvatarAPI = "https://i.pravatar.cc/50"
let avatars = document.getElementsByClassName("coach");


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPercentage() {
    return Math.floor(getRandomInt(30, 150));
}


document.getElementById("customer-count").innerHTML = getRandomInt(1000, 5000);
document.getElementById("increase").innerHTML = randomPercentage() + "%";

