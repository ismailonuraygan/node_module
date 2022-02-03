const circleArea = (r)  =>  {
    area = Math.PI*r*r;
    console.log(`Dairenin alani ${area}`);
}

const circleCircumference = (r) => {
    circumference = 2*Math.PI*r;
    console.log(`Dairenin cevresi ${circumference}`);
}

module.exports = {
    circleArea,
    circleCircumference
 }