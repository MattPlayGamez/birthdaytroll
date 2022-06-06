//Import the button "hide" element and the iframe
const btn = document.getElementById('clickme')
const hide = document.getElementById('hide')
const iframe = document.getElementById('iframe')

//variable for "friendsname"
const friendsname = 'Dante' // Type your friends name here


// Execution code when clicking the button
btn.addEventListener('click', (e) => {
    e.preventDefault() // preventing it from reloading
    hide.classList.add('hidden') // adding the "hidden" tag to the "hide" id
    btn.classList.add('hidden') // adding the "hidden" tag to the button
    alert('Happy Birthday ' + friendsname) // showing a message
    iframe.classList.remove('visually-hidden') // removing the "visually-hidden" class from the iframe
    iframe.requestFullscreen() // setting the iframe to fullscreen
    iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' // new source url with autoplay enabled (autoplay=1)
})
