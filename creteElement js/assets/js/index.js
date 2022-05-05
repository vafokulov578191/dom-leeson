import {
    arr
} from '../js/arr.js'

let item = document.createElement('div')
let block_top_img = document.createElement('div')
let block_bottom_about = document.createElement('div')
let block_bottom_title = document.createElement('div')
let block_bottom_head_t = document.createElement('div')
let grade = document.createElement('div')
let grade_item = document.createElement('div')
let grade_item1 = document.createElement('div')
let grade_item2 = document.createElement('div')
let favorites = document.createElement('div')
//divs
let img_top = document.createElement('img')
let img_svg = document.createElement('img')
let img_svg1 = document.createElement('img')
let img_svg2 = document.createElement('img')
//img
let bottom__block_head_t_sp = document.createElement('span')
let grade__block_head_t_sp1 = document.createElement('span')
let grade__block_head_t_sp2 = document.createElement('span')
let grade__block_head_t_sp3 = document.createElement('span')
//span
let p__bottom__block__head = document.createElement('p')
//p
let favorites_btn = document.createElement('button')

item.classList.add('item')
block_top_img.classList.add('block_top_img')
block_bottom_about.classList.add('block_bottom_about')
block_bottom_title.classList.add('block_bottom_title')
block_bottom_head_t.classList.add('block_bottom_head_t')
grade.classList.add('grade')
grade_item.classList.add('grade_item')
grade_item1.classList.add('grade_item1')
grade_item2.classList.add('grade_item2')
favorites.classList.add('favorites')
//
img_top.classList.add('img_top')
img_svg.classList.add('img_svg')
img_svg1.classList.add('img_svg1')
img_svg2.classList.add('img_svg2')
//img
bottom__block_head_t_sp.classList.add('bottom__block_head_t_sp')
grade__block_head_t_sp1.classList.add('grade__block_head_t_sp1')
grade__block_head_t_sp2.classList.add('grade__block_head_t_sp2')
grade__block_head_t_sp3.classList.add('grade__block_head_t_sp3')
//p
p__bottom__block__head.classList.add('p__bottom__block__head')
//button
favorites_btn.classList.add('favorites_btn')

img_top.setAttribute('src', './assets/img/81fPKd-2AYL 1.png')
img_svg.setAttribute('src', './assets/img/Group 7.svg')
img_svg1.setAttribute('src', '/assets/img/Group 10.svg')
img_svg2.setAttribute('src', '/assets/img/Group 9.svg')

document.body.prepend(item)
item.prepend(block_top_img, block_bottom_about)

block_top_img.prepend(img_top)
block_bottom_about.prepend(block_bottom_title, favorites)
block_bottom_title.prepend(block_bottom_head_t, grade)
block_bottom_head_t.prepend(bottom__block_head_t_sp, p__bottom__block__head)
grade.prepend(grade_item, grade_item1, grade_item2)
grade_item.prepend(img_svg, grade__block_head_t_sp1)
grade_item1.prepend(img_svg1, grade__block_head_t_sp2)
grade_item2.prepend(img_svg2, grade__block_head_t_sp3)
favorites.prepend(favorites_btn)

favorites_btn.innerHTML = "В избранное"
grade__block_head_t_sp3.innerHTML = "120"
grade__block_head_t_sp2.innerHTML = "3,9"
grade__block_head_t_sp1.innerHTML = "109"
bottom__block_head_t_sp.innerHTML = "MEN’S CLOTHING (120)"
p__bottom__block__head.innerHTML = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"




for (let product of arr) {

    let item = document.createElement('div')
    let block_top_img = document.createElement('div')
    let block_bottom_about = document.createElement('div')
    let block_bottom_title = document.createElement('div')
    let block_bottom_head_t = document.createElement('div')
    let grade = document.createElement('div')
    let grade_item = document.createElement('div')
    let grade_item1 = document.createElement('div')
    let grade_item2 = document.createElement('div')
    let favorites = document.createElement('div')
    //divs
    let img_top = document.createElement('img')
    let img_svg = document.createElement('img')
    let img_svg1 = document.createElement('img')
    let img_svg2 = document.createElement('img')
    //img
    let bottom__block_head_t_sp = document.createElement('span')
    let grade__block_head_t_sp1 = document.createElement('span')
    let grade__block_head_t_sp2 = document.createElement('span')
    let grade__block_head_t_sp3 = document.createElement('span')
    //span
    let p__bottom__block__head = document.createElement('p')
    //p
    let favorites_btn = document.createElement('button')

    item.classList.add('item')
    block_top_img.classList.add('block_top_img')
    block_bottom_about.classList.add('block_bottom_about')
    block_bottom_title.classList.add('block_bottom_title')
    block_bottom_head_t.classList.add('block_bottom_head_t')
    grade.classList.add('grade')
    grade_item.classList.add('grade_item')
    grade_item1.classList.add('grade_item1')
    grade_item2.classList.add('grade_item2')
    favorites.classList.add('favorites')
    //
    img_top.classList.add('img_top')
    img_svg.classList.add('img_svg')
    img_svg1.classList.add('img_svg1')
    img_svg2.classList.add('img_svg2')
    //img
    bottom__block_head_t_sp.classList.add('bottom__block_head_t_sp')
    grade__block_head_t_sp1.classList.add('grade__block_head_t_sp1')
    grade__block_head_t_sp2.classList.add('grade__block_head_t_sp2')
    grade__block_head_t_sp3.classList.add('grade__block_head_t_sp3')
    //p
    p__bottom__block__head.classList.add('p__bottom__block__head')
    //button
    favorites_btn.classList.add('favorites_btn')

    img_top.setAttribute('src', product.image)

    img_svg.setAttribute('src', './assets/img/Group 7.svg')
    img_svg1.setAttribute('src', '/assets/img/Group 10.svg')
    img_svg2.setAttribute('src', '/assets/img/Group 9.svg')

    document.body.prepend(item)
    item.prepend(block_top_img, block_bottom_about)

    block_top_img.prepend(img_top)
    block_bottom_about.prepend(block_bottom_title, favorites)
    block_bottom_title.prepend(block_bottom_head_t,)
    block_bottom_head_t.prepend(bottom__block_head_t_sp, p__bottom__block__head)
    grade.prepend(grade_item, grade_item1, grade_item2)
    favorites.prepend(grade, favorites_btn)
    grade_item.prepend(img_svg, grade__block_head_t_sp1)
    grade_item1.prepend(img_svg1, grade__block_head_t_sp2)
    grade_item2.prepend(img_svg2, grade__block_head_t_sp3)

    bottom__block_head_t_sp.innerHTML = product.category
    p__bottom__block__head.innerHTML = product.description
    grade__block_head_t_sp1.innerHTML = product.price
    grade__block_head_t_sp2.innerHTML = product.rating.rate
    grade__block_head_t_sp3.innerHTML = product.rating.count
    favorites_btn.innerHTML = "В избранное"
}