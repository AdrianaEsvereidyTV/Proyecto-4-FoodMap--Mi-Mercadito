const apareceScroll = () => {
  let imgScroll = document.getElementsByTagName('html')[0];
  let elementoAparece = document.getElementsByClassName('aparece');

  document.addEventListener('wheel', function() {
    let topVent = imgScroll.scrollTop;
    for (let j = 0; j < elementoAparece.length; j++) {
      let topAparece = elementoAparece[i];
      if (topVent > topAparece - 400) {
        elementoAparece[i].style.opacity = 1;
      }
    }
  });
};
apareceScroll();

