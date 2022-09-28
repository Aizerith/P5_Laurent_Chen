export class Generateur {
    constructor(parentElt, themeOne, themeTwo){
        this.parentElt = document.querySelector(parentElt);
        this.themeOne = themeOne;
        this.themeTwo = themeTwo;
    }
    
    // insère le code html nécessaire pour créer le générateur

    build(){
        this.parentElt.innerHTML = `
        <h1> Générateur de phrase </h1>
        <article id="citation">
            <p>Bonjour, choisissez entre 1 et 5 phrases à générer et un theme.</p>
        </article>
        <form id="choice">
            <input id="nbrcitation" type="number" min="1" max="5"/>
            <input type="radio" name="theme" value="themeOne">Thème 1
            <input type="radio" name="theme" value="themeTwo">Thème 2

            <button id="generateSentence">Générer phrases</button>
            <button style="display:none" id="stop">Quitter</button>
        </form>
        `
    }

    // retourne un nombre aléatoire en fonction de la taille du tableau

    getRandomNum(tableLength) {
        return Math.floor(Math.random() * tableLength);
    }

    // retourne une chaine de caractère avec des morceaux de phrases aléatoire

    createSentence(a, b, c) {
        return (`${a[this.getRandomNum(a.length)]} ${b[this.getRandomNum(b.length)]} ${c[this.getRandomNum(c.length)]}.`);
    }

    // récupère la valeur choisit dans l'input

    getNbrInput(){
        return document.querySelector('#nbrcitation').value;
    }

    // récupère la valeur de thème coché dans l'input
    
    getRadioValue() {
        const elt = document.getElementsByName('theme');
        
        for(let i = 0; i < elt.length; i++) {
            if(elt[i].checked){
                return elt[i].value;
            }
        }
    }

    // efface le contenu dans article

    cleanDomELt(){
        const citationsEl = document.getElementById('citation');
        citationsEl.innerHTML = "";
    }

    // affiche les messages d'information

    displayMessage(message) {
        this.cleanDomELt();
        let citation = document.createElement('p');
        citation.textContent = message;
        document.getElementById('citation').appendChild(citation);
        return null;
    }

    // affiche les citations et le bouton quitter

    displayCitation (theme, nbrCitation) {
        this.cleanDomELt();
        for(let i = 0; i < nbrCitation; i++) {
            let citation = document.createElement('p');
            citation.textContent = this.createSentence(theme.firstPart, theme.secondPart, theme.thirdPart); 
            document.getElementById('citation').appendChild(citation);
        }
        document.getElementById('stop').style.display = "inline";
        document.getElementById('generateSentence').textContent = "générer à nouveau";
        return null;
    }

    // écoute les évènements sur le bouton générer et affiche les citations en fontion du nombre et du thème choisi si cliqué
    
    btnAction(){
        const btnGenerateSentence = document.getElementById('generateSentence');
        const gen = this;
        btnGenerateSentence.addEventListener('click', function(e) {
        
            e.preventDefault();
        
            const numCite = gen.getNbrInput();
            const theme = gen.getRadioValue();
            if (numCite > 0  && numCite < 6 ) {
                if(theme === "themeOne")
                    gen.displayCitation(gen.themeOne, numCite);
                else if (theme === "themeTwo")
                    gen.displayCitation(gen.themeTwo, numCite);
                else
                    gen.displayMessage("Erreur : veuillez choisir un theme!");
            }
            else {
                gen.displayMessage("Erreur : Veuillez choisir entre 1 et 5 phrases a générer!")
            }
        });
    }

    // ecoute les évènements sur le bouton quitter, cache tout et affiche un message si cliqué

    btnStop(){
        const btnStop = document.getElementById('stop');
        const gen = this;
        btnStop.addEventListener('click', function(e) {
    
            e.preventDefault();
            document.getElementById('choice').style.display = "none";
            gen.displayMessage("Merci d'avoir utilisé notre générateur, au revoir!");
        });
    }
}

