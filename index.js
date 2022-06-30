function distanceFromHqInBlocks(stNumber){
    return Math.abs(stNumber - 42);
}

function distanceFromHqInFeet(stNumber){
   return distanceFromHqInBlocks(stNumber) * 264;
}

function distanceTravelledInFeet(start, destination){
    let distInBlocks = Math.abs(destination - start);
    let distInFeet = distInBlocks * 264;
    return distInFeet;
}


function calculatesFarePrice(start, destination){
    let distInFeet1 = distanceTravelledInFeet(start, destination);
    if (distInFeet1 < 400) {
        return 0;
    } else if (distInFeet1 >=400 && distInFeet1 <= 2000) {
        let freeSample = distInFeet1 - 400;
        return freeSample * 0.02;
    } else if (distInFeet1 > 2000 && distInFeet1 <= 2500) {
        return 25;
    } else if (distInFeet1 > 2500) {
        return 'cannot travel that far';
    }
}