let UserWeight = Number(prompt("Please Inter Your Weight(In Kilogram)"));
let UserHeight = Number(prompt("Please Inter Your Height(In Kilogram)"));

let Index = BMIcalculator(UserWeight, UserHeight);
let Status = SHOWstatus(Index);
document.write(Status);