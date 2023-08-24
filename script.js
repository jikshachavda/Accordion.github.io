const ourItemDiv = document.getElementsByClassName('item')
const openIcons = document.getElementsByClassName('iconOpen')
const closeIcons = document.getElementsByClassName('iconclose')

// console.log(ourItemDiv)

for (let i = 0; i < ourItemDiv.length; i++) {
    // console.log(closeIcons[i])
    closeIcons[i].style.display = 'none';

    ourItemDiv[i].addEventListener("click", () => {
        const result = ourItemDiv[i].classList.toggle("active")

        if(result){
            closeIcons[i].style.display = "block"; 
            openIcons [i].style.display = "none"; 
        }else{
            closeIcons[i].style.display = "none"; 
            openIcons [i].style.display = "block";  
        }
    })
}
