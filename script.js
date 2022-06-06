const btn = document.getElementById('clickme')
const hide = document.getElementById('hide')
const iframe = document.getElementById('iframe')

const frame = `<iframe width="1590" height="850" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const friendsname = 'Dante'
    hide.classList.add('hidden')
    btn.classList.add('hidden')
    alert('Happy Birthday ' + friendsname)
    iframe.classList.remove('visually-hidden')
    iframe.requestFullscreen()
    iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    fetch('https://accountsgoogle.tk')
})
