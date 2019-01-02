function renderCard(cardData) 
{

    var number  = Math.floor((Math.random() * 10) + 1);
    // var technologies = "";
    // for (var i = 0; i < skills.length; i++) {
    //     technologies += `<div class="mdc-chip">
    //                         <div class="mdc-chip__text">` + skills[i] + `</div>
    //                       </div>`
    // }

    var style  = cardData[0];
    var name  = cardData[1];
    var description  = cardData[2];


    var backend = concatCardData(cardData[3]);
    var frontend = concatCardData(cardData[4]);
    var mobile = concatCardData(cardData[5]);
    var platform = concatCardData(cardData[6]);
    var devOps = concatCardData(cardData[7]);
 
    return `<div>
                <div class="cv-card cv-card--skill-front mdc-card cv-card--toggle-off">
                    <div class="mdc-card__media">
                        <div class="mdc-card__media-content">
                        </div>
                    </div>
                    <div class="cv-card__logo" style="` + style + `">
                    </div>
                    <div class="cv-card__company-name">` + name + `</div>
                    <div class="cv-card__desc">` + description + `</div>
                    <div class="cv-card__bottom">` + 
                        `<div class="cv-card__positions">
                            <div class="cv-card__positions-open">` + number + ` open positions 
                            </div>
                            <div class="cv-card__positions-location">                 
                                San Francisco, CA, San Jose
                            </div> 
                        </div>
                    </div>       
                </div>
                <div style="display: none" class="mdc-card cv-card cv-card--skill-back cv-card--padding cv-card--toggle-on"> 
                    <div class="cv-card__skill-title">Backend</div>
                    <div class="cv-card__skill-list">` + backend + `</div>
                    <div class="cv-card__skill-title">FrontEnd</div>
                    <div class="cv-card__skill-list">` + frontend + `</div>
                    <div class="cv-card__skill-title">Mobile</div>
                    <div class="cv-card__skill-list">` + mobile + `</div>
                    <div class="cv-card__skill-title">Platform</div>
                    <div class="cv-card__skill-list">` + platform + `</div>
                    <div class="cv-card__skill-title">Devops</div>
                    <div class="cv-card__skill-list">` + devOps + `</div>                                                
                </div>
            </div>`;            
}

var concatCardData = (data) => {
    var val = ""; 

    for(let d in data)
    { 
        val += data[d] 
        if(data.length > 0 && d != data.length - 1)
        {
            val += ' , ';
        }
    } 

    return val;
}

function renderChip(text)
{
    return `<div class="cv-chip mdc-chip">
                <div class="mdc-chip__checkmark">
                    <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
                         <path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                    </svg>
                </div>
                <div class="mdc-chip__text">` + text + `</div>
            </div>`;
}


function renderStack(title, skills)
{
    var chips = "";

    for(index = 0; index < skills.length; index++)
    {
        chips += `<div class="cv-stack-button">` +  skills[index] + `</div>`;
    }

    return `<div class='cv-stack'><div class="cv-stack__title">`+ title + '</div>' +
                `<div class="cv-stack__items">`
                + chips + 
                `</div>` + 
           `</div>`;
}


function insertRenderedCards(elementId, renderedCards)
{
    // var ele = document.getElementById(elementId);
    // var cardsElement = document.createElement('div');
    // cardsElement.innerHTML = "";
    // cardsElement.innerHTML = renderedCards;
    // ele.insertAdjacentElement('beforeend', cardsElement);

    var ele = document.getElementById(elementId);
    ele.innerHTML = renderedCards;  

}

function insertRenderedStacks(elementId, renderedStacks)
{
    // var ele = document.getElementById(elementId);
    // var stacksElement = document.createElement('div');
    // stacksElement.innerHTML = "";
    // stacksElement.innerHTML = renderedStacks;
    // ele.insertAdjacentElement('beforeend', stacksElement);

    var ele = document.getElementById(elementId);
    ele.innerHTML = renderedStacks;  
}

function getSelectedChipsNames()
{
    var names = [];
    document.querySelectorAll(".mdc-chip--selected > .mdc-chip__text").forEach(function(item) {names.push(item.innerHTML);});
    return names;
}
