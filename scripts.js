const bg_shape = document.getElementById('bg-shape')
const back_to_top = document.body.querySelector('#back_to_top')
const slide_in_objects = document.body.querySelectorAll('[content-slide-in]')

function stt() {setTimeout(function(){window.scrollTo(0, 0);}, 10)}

function sts(section_num) {
    sections = document.body.querySelectorAll('.section');
    window.scrollTo({
        left: 0,
        top: section_num * window.innerHeight,
        behavior: 'smooth'
    });
}

function bg_shape_fade() {
    setTimeout(function() {
        bg_shape.style.animation = "5s ease-in-out 0s infinite alternate fadeinout"
    }, 3100)
} bg_shape_fade()

function check_LoS() {
    let TH = (window.scrollY + window.innerHeight) - 20 // Threshold is set 20 pixel from bottom
    slide_in_objects.forEach(obj => {
        if (obj.clientTop < TH) {obj.classList.remove('hidden')}
        else {console.log(obj); obj.classList.add('hidden')}
    })

    if (window.scrollY > window.innerHeight) {
        back_to_top.classList.remove('sts_hidden')
    } else {
        back_to_top.classList.add('sts_hidden')
        
    }
}

slide_in_objects.forEach(obj => {
    obj.classList.add('hidden')
})

document.addEventListener('scroll', check_LoS)
