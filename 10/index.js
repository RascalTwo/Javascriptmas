const previous = document.getElementById("previous")
const next = document.getElementById("next")
const img = document.getElementById("img")
const destImg = document.getElementById("dest-img")
const imgs = [
    {src: "imgs/village.jpg",
    alt: "christmas village at night with snow and christmas tree"},
    {src: "imgs/present.jpg",
    alt: "white and gold wrapped present on white table with snowflake decorations"},
    {src: "imgs/doggies.jpg",
    alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"}]

let imgNum = 0
  
const changeImage = (amount) => {
  [previous, next].forEach(btn => btn.disabled = true);

  imgNum = (imgNum + amount) % imgs.length;
  if (imgNum < 0) imgNum = imgs.length - 1;

  Object.assign(destImg, imgs[imgNum]);
  img.classList.add('transition');
  setTimeout(() => {
    Object.assign(img, imgs[imgNum]);
    img.classList.remove('transition');

    [previous, next].forEach(btn => btn.disabled = false);
  }, 1000);
}

previous.addEventListener('click', changeImage.bind(null, -1))
next.addEventListener('click', changeImage.bind(null, 1))

// Task:
// - Wire up the buttons to switch through the images in the imgs array. 
// - Make sure that the gallery works no matter how many images are added.
// - Decide/implement what to do when you reach either end of the array - do nothing and disable buttons, loop back round to the other end, or something else?
// - Remember to also update the alt tags.

// Stretch goals:
// - Add transitions for a smooth effect.
// - Allow the user to zoom in and out of the images.