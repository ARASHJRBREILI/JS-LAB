
function BUScapacity(Cap, On, Wait) {
    if (Number(Cap) - (Number(On) + Number(Wait)) > 0) {
        document.write("They have a place to seat")
    }
    if (Number(Cap) - (Number(On) + Number(Wait)) < 0) {
        document.write(Number(Cap) - (Number(On) + Number(Wait)) + "They have no place to seat")
    }
}