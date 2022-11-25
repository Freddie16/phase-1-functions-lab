// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance >=42 && distance < 50){
        return 1
    }
    else {
        return 8
    }
}
function distanceFromHqInFeet(distance) {
    if (distance >=42 && distance < 50){
        return 264

    }
    else {
        return 2112
    }
}
function distanceTravelledInFeet(distance) {
    if (distance >=43 && distance <=48) {
        return 1320
    }
    else if (distance >=50 && distance <=60) {
        return 2640
    }
    else {
        return 1584
    }
}
function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination)
    const dist = distance - 400
    if (distance <= 400) {
        return 0
    }
   else if (distance > 400 && distance < 2000) {
    return 2.56
   }
   else if (distance > 2000 && distance < 2500) {
    return 25
   }
   else {
    return "cannot travel that far"
   }

}