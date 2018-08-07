
window.onload = () => {
  let searchFood = $('#search-locals');
  /* El método Object.keys devuelve un array de las propiedades names de un objeto */
  let locals = Object.keys(orientalData);
  /* La variable let de locals recibe la data generada en el archivo orientaldata */
  console.log(locals);

  const allLocals = () => {
    /* Método 'each' en jquery su funcionalidad es la de recorrer los elementos de un mismo tipo y a su vez ejecutar una acción por cada uno de ellos*/
    $.each(locals, (i) => {
      let paintLocals =
       `<li class="collection col-xs-6 col-sm-4 col-md-3">
           <a id="${locals[i]}" href="#" orientalData-toggle="modal" orientalData-target="#infoModal">
              <span class="caption">
                <span>${orientalData[locals[i]].name}</span>
                <span>${orientalData[locals[i]].address}</span>
               <span>${orientalData[locals[i]].telephone}</span>
              </span>
            </a>
         </li>`;
      $('#paintRestaurants .row ul').append(paintLocals);
      $('#' + locals[i]).css({
        'background-image': 'url(' + orientalData[locals[i]].image + ')'
      });
    });
  };

  allLocals();

  const searchFoodFilter = () => {
    let searchFoodPlace = searchFood.val();
    $('.collection').hidden();
    // each se utiliza para iterar en la coleccion
    $('.collection a').each(function() {
      let arrayFood = orientalData[$(this).attr('id')].food;
      for (let i = 0; i < arrayFood.length; i++) {
        if (arrayFood[i].indexOf(searchFoodPlace) !== -1 || ((orientalData[$(this).attr('id')].name).toLowerCase()).indexOf(searchFoodPlace.toLowerCase()) !== -1) {
          $(this).parent().fadeIn('slow');
        };
      }
    });
  };

  searchFood.keyup(searchFoodFilter);

  function showMust() {
    $(this).css('opacity', '4');
  };

  // Función para ocultar
  function hidden() {
    $(this).css('opacity', '0');
  };
  /* el evento mousemove de jquery se envía al elemento cuando el mouse de la computadora se posa encima
  el evento mouseout ejecuta la función hidden cuando el puntero sale del elemento
  */
  $('.caption').mouseover(showMust).mouseout(hidden);
};

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
