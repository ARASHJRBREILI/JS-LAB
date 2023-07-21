
function SHOWPremeterOrArea(Width, Lenght) {
    if (Number(Width) === Number(Lenght)) {
        document.write(Number(Width) * Number(Lenght))
    } else {
        document.write((Number(Width) + Number(Lenght)) * 2)
    }
}