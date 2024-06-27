function calculateHorizontalDistance() {
  // Considerando o efeito do vento na horizontal
  const distanceCalculated = (Math.pow(effectiveWindHorizontal, 2) * Math.sin(2 * thetaRad)) / gravity;

  return { 
    "Velocidade do vento (km/h)": windSpeedHorizontal,
    "Velocidade atual do projétil (m/s)": effectiveWindHorizontal,
    "Distância percorrida (m)": distanceCalculated.toFixed(2)
  };
}

function calculateTotalFlightTime() {
  // Considerando o efeito do vento na vertical
  const totalTime = (2 * effectiveWindVertical * Math.sin(thetaRad)) / gravity;

  return {
    "Velocidade do vento (km/h)": windSpeedVertical,
    "Velocidade atual do projétil (m/s)": effectiveWindVertical,
    "Tempo de voo (s)": totalTime.toFixed(2)
  };
}

const initialVelocity = 20; // em m/s
const launchAngle = 45; // em Graus
const gravity = 9.81; // Gravidade (Terra)
const windSpeedHorizontal = 5; // em m/s (se positivo, vento a favor do projétil na horizontal)
const windSpeedVertical = 3; // em m/s (se positivo, vento a favor do projétil na vertical)
const thetaRad = launchAngle * Math.PI / 180; // Converte o ângulo em graus para radianos
const effectiveWindHorizontal = initialVelocity + windSpeedHorizontal;
const effectiveWindVertical = initialVelocity + windSpeedVertical;

console.log("HORIZONTAL");
console.table([calculateHorizontalDistance()]);

console.log("\nVERTICAL");
console.table([calculateTotalFlightTime()]);
