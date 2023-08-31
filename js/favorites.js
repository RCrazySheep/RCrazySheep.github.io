
let starButtons = document.querySelectorAll('.star-btn') 

starButtons.forEach(function(starButton) { 
    starButton.addEventListener('click', function() { 
        let currentColor = starButton.style.background 
        if (currentColor == 'black') { 
            starButton.style.background = 'yellow' 
        } else { 
            starButton.style.background = 'black' 
        } 
    }) 
})
