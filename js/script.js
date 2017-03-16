var script = (function() {

  var count = 3;

  var addCard = function () {
    var val, card;
    val = $('.input').val();
    if (val == "") {
      $('.input').addClass('input-error');
    } else {
      card = "<div class='col-xs-12 col-sm-6 col-md-6 col-lg-4 card' id='card" + count + "'><div class='card-content border'><div class='remove' id='card" + count + "'><button class='btn border removeBtn'>x</button></div><div class='message'><p>" + val + "</p></div></div></div>";
      $('.row').append(card);
      count++;
      $('.input').removeClass('input-error');
    }
  };

  var removeCard = function (e) {
    var removeID, cardID;
    removeID = e.currentTarget.id;
    cardID = "#" + removeID;
    $(cardID).remove();
  };

  var setupEventListeners = function () {
    $('.add').click(addCard);
    $(document).on('click', '.remove', removeCard);
  };

  var setupDefaultCards = function () {
    var cardOne, cardTwo, cardThree;
    cardOne = "<div class='col-xs-12 col-sm-6 col-md-6 col-lg-4 card' id='card0'><div class='card-content border'><div class='remove' id='card0'><button class='btn border removeBtn'>x</button></div><div class='message'><p>Text 1</p></div></div></div>";
    cardTwo = "<div class='col-xs-12 col-sm-6 col-md-6 col-lg-4 card' id='card1'><div class='card-content border'><div class='remove' id='card1'><button class='btn border removeBtn'>x</button></div><div class='message'><p>Text 2</p></div></div></div>";
    cardThree = "<div class='col-xs-12 col-sm-6 col-md-6 col-lg-4 card' id='card2'><div class='card-content border'><div class='remove' id='card2'><button class='btn border removeBtn'>x</button></div><div class='message'><p>Text 3</p></div></div></div>";
    $('.row').append(cardOne);
    $('.row').append(cardTwo);
    $('.row').append(cardThree);
  };

  return {
    init: function() {
      console.log("App has started.");
      setupEventListeners();
      setupDefaultCards();
    }
  };

})();

script.init();
