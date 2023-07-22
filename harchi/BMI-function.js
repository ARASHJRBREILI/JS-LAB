function BMIcalculator(Weight, Height) {
    return Weight / (Height * Height)
}

function ShowStatus(BMIindex) {
    if (BMIindex > 40) {
        return "OVERWEIGHT"
    }
    if (BMIindex < 40 && BMIindex > 25) {
        return "NORMAL"
    }
    if (BMIindex < 25 && BMIindex > 19) {
        return "UNDERWEIGHT"
    }
}