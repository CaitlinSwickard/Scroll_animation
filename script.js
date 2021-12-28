const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

// call function first to allow for content boxes to currently be visible in the view port
checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    // getBoundingClientRect returns a dom rectangle providing info from where it is in the viewport
    const boxTop = box.getBoundingClientRect().top

    // as soon as the top of the next box is less than the trigger bottom point
    // we add class of 'show' and the boxes appear. As we scroll up the function is checked again 
    // and will remove content boxes as well.
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show');
    }
  })
}