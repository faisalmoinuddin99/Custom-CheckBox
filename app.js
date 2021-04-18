const emojiInput = document.getElementById("emojiInput")
const emoji = document.getElementById("emoji")


emojiInput.addEventListener("click",() => {
    console.log(emojiInput.checked);
    if(emojiInput.checked == true){
        emoji.innerHTML = '🤮'
    } else {
        emoji.innerHTML = '🤢'
    }
})
