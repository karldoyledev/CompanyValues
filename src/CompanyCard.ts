interface ICard {
    render() : string; 
}

export default class CompanyCard implements ICard
{
    style : string;
    companyName : string; 
    companyDescription : string;
    skills : Array<string>;

    constructor(style :string ,         // background: url(https://firebasestorage.googleapis.com/v0/b/key-values-development.appspot.com/o/images%2Fwip-webflow%2Flogo?alt=media&token=12decd85-9d32-40a4-8179-37708f3e81c4) no-repeat center center; background-size: cover;, Webflow, Responsive web design tool, CMS, and hosting platform
        companyName : string,           // Webflow
        companyDescription : string,    // Responsive web design tool, CMS, and hosting platform
        skills : Array<string>          // 
        ) {
            console.log("test");
        this.style = style;
        this.companyDescription = companyDescription;
        this.companyName = companyName
        this.skills = skills;
    }

    render() : string 
    {

        var companyTechnologies = ""; 
        for(var i = 0; i < this.skills.length; i++)
        {
            companyTechnologies += `<div class="mdc-chip">
                                    <div class="mdc-chip__text">` + this.skills[i] + `</div>
                                    </div>`     
        }

        return `<div class="cv-card  cv-card-main mdc-card">
                    <div class="mdc-card__media">
                        <div class="mdc-card__media-content">
                        </div>
                    </div>
                    <div class="cv-card-logo" style="` + this.style + `">
                    </div>
                    <div>` + this.companyName + `</div>
                    <div>
                    <div>` + this.companyDescription + `</div>
                    <div>
                    <div class="mdc-chip-set">
                    ` + companyTechnologies + `
                    </div>
                </div>`;     
    }
};