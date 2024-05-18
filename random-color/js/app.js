const getColor = () => {
    //hex code
    const randomnum = Math.floor(Math.random() * 16777215);

    const randomCode = "#" + randomnum.toString(16);
    //console.log(randomCode);

    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    //copy to clipboard
    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener("click", getColor);

//call as you start
getColor();
