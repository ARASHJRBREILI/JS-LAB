function BMIcalculator(Weight, Height) {
    return Weight / (Height * Height);
}

function SHOWstatus(BMIindex) {
    if (BMIindex >= 35) {
        return "OVERWEIGHT"
    }
    if (BMIindex < 35 && BMIindex >= 25) {
        return "NORMAL"
    }
    if (BMIindex < 25 && BMIindex >= 18) {
        return "UNDERWEIGHT"
    }
}