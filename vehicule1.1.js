class vehicule {

}

constructor (name) (
  this.name = name || "vehicule";
}
}

class voiture extends vehicule {

  constructor() (
    super();
    this.name = "voiture";
    this.roues = 4;
    this.porte = 5;
    this.moteur = {
      puissance: 60;
    };
    this.voyants = {
      marche: false
    }

  }
  contact() {
    console.log("on allume le contact");
    this.allumelesVoyants();
  }

allumelesVoyants(){
  console.log("Les voyants s'allume");
  this.voyants.marche = true;
}

decontact(){
  console.log("on coupe le contact");
  this.eteindreLesVoyants();
}

eteindreLesVoyants(){
  console.log("Les voyants s'éteigne");
  this.voyants.marche = false;
}

  demarre() {
    console.log("demarre le moteur");
  }
  coupe(){
    console.log("on coupe le moteur");
    this.moteur.marche = false;
  }
}

class sportive extends Voiture {

constructor(name) {
  super(name || "voiture");
  this.porte = 5;
  this.moteur.puissance = 450;

}

}

const test_vehicule = () => (

  console.log("test vehicule");

  let maVoiture = new sportive(ma porche);

  console.log(maVoiture.moteur);

  maVoiture.contact();
  maVoiture.demarre();
};

class deuxRoues extends Vehicule{
	
}

class velo extends Vehicule{
	constructor() {
		super()
		this.name : "Velo";
		this.roues : 2;
		this.pedale : 2;
		this.guidon : 1;
		this.frein : 2;
		this.sell : 1;
	};
	 this.pedale = {
      marche: false
    }
	 asssis() {
    console.log("On pedale");
    this.pedale();
  }
frener() {
	console.log("On freine");
	this.freine();
}
Arret() {
	console.log("On descend du velo");
this.descendre();

class veloElectrique extends Velo{
	constructor(veloElectrique) {
		super()
		this.moteur = {
			puissance = 30;
		};
const test_vehicule = () => (

  console.log("test velo");

  let monVelo = new veloElectrique(Penelope);

  console.log(monVeloElectrique.moteur);

  monVeloElectrique.assis();
};