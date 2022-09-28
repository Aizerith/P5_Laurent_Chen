import {Generateur} from './generateur.js';

let themeOne = {
    firstPart : ["Ce matin", "Aujourd'hui", "Dans la jungle", "Bonjour", "La boulangère"],
    secondPart : ["je me promène", "fais", "utilise", "ramène", "bois"],
    thirdPart : ["en chantant", "pendant des heures", "des glaçon", "un sceau", "du sable"]
  };

let themeTwo = {
    firstPart : ["Ces félons", "Les actionnaires", "Les gourous", "Les botaniste", "Ils"],
    secondPart : ["balafreront", "nient", "font", "séjournent", "aspirent"],
    thirdPart : ["une païenne", "honte au frein", "à l'ombre", "le sol", "les vieilles radioactives"]
};

const gen = new Generateur("#generateur", themeOne, themeTwo);

// créer le générateur en inserant le code html avec la methode build
gen.build();

// génère les phrase lorsqu'on clique sur le bouton générer phrase
gen.btnAction();

// cache tout les choix et boutons lorsqu'on clique sur le bouton quitter
gen.btnStop();
