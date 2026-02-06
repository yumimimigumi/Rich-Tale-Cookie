document.querySelector('.hamburger').addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('open');
});


const heading = document.querySelector('#heading');

const keyframe = {
  opacity: [0, 1],
  translate:['0px, 50px', 0],
};
const options = {
  duration: 8000,
  easing: 'ease',
};
heading.animate (keyframe, options);


