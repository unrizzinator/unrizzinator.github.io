const bg_shape = document.getElementById('bg-shape')
const typewrite = document.getElementById('typewrite')

const creator = "hello there"

// function _typewrite(creator_name) {
//     let i = 0
//     function _iterate () {
//         setTimeout(function(){
//             typewrite.innerHTML += creator_name.split('')[i]
//             i++
//             if (i < creator_name.length) {
//                 _iterate()
//             }
//         }, 20)
//     }

//     _iterate()
// } _typewrite(creator)

function bg_shape_fade() {
    setTimeout(function() {
        bg_shape.style.animation = "5s ease-in-out 0s infinite alternate fadeinout"
    }, 3100)
} bg_shape_fade()
