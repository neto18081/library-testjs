var data_height = document.querySelector('#p-el0').getAttribute('data-color')
var color_el = document.querySelectorAll('[data-color]')
for (var i of color_el) {
  i.style.backgroundColor = i.getAttribute('data-color')
}