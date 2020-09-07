let Victor = {
    fullName: 'Victor Rivera',
    weight: 45,
    height: 1.74,
    calculateBMI: function() {
        this.bmi = (this.weight / (this.height*this.height));
        return this.bmi;
    }

};

let John = {
    fullName: 'John Young',
    weight: 48,
    height: 1.78,
    calculateBMI: function() {
        this.bmi = Math.round(this.weight / (this.height*this.height));
        return this.bmi;
    }
};

function checkHighestBMI() {
  if (Victor.calculateBMI() > John.calculateBMI()) {
    console.log(Victor.fullName + " has the highest BMI with a BMI of " + Victor.calculateBMI() + ".");
  } else if (Victor.calculateBMI() < John.calculateBMI()) {
    console.log(John.fullName + " has the highest BMI with a BMI of " + John.calculateBMI() + ".");
  } else {
    console.log("They have the same BMI with a BMI of " + Victor.calculateBMI() + ".");
  }
}


checkHighestBMI(Victor, John);
