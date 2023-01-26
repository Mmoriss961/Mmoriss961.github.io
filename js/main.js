function myfunc(card) {
    console.log(card.className)
    if (card.className=='card__caption-btn')
    {
        var card__caption=card.parentNode;
        var card__caption_hidden=card.parentNode.parentNode.querySelector('.card__caption--hidden');
        var сat__сard = card.parentNode.parentNode.querySelector('.card');

    }
       
    else{
        var card__caption=card.parentNode.querySelector('.card__caption');
        var card__caption_hidden=card.parentNode.querySelector('.card__caption--hidden');
        var сat__сard=card;
    }
    var className=сat__сard.getAttribute("class");
    if(className=="card") 
    {           
        сat__сard.className = "card card--selected";
    }
    else
    {
        сat__сard.className = "card";       
    }   
    card__caption.className="card__caption--hidden";
    card__caption_hidden.className="card__caption";      
  }
