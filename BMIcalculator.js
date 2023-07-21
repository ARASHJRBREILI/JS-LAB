
let UserWeight = Number(prompt("Please Inter Your Weight(In Kilogram)"));
let UserHeight = Number(prompt("Please Inter Your Height(In Meter)"));
debugger
let Index = BMIcalculator(UserWeight, UserHeight);
let Status = ShowStatus(Index);
document.write(Status);
