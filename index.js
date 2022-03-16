// Code your solution in this file!
function distanceFromHqInBlocks(a){
    if(a < 42) return 42-a
    else return a - 42;
}

function distanceFromHqInFeet(a){
    let x  = distanceFromHqInBlocks(a) * 264
    return x;
}

function distanceTravelledInFeet(start, destination){
    let s = distanceFromHqInFeet(start);
    let d = distanceFromHqInFeet(destination);
    return d-s;
}

function calculatesFarePrice(start, destination){
    let total = distanceTravelledInFeet(start,destination)
    if(total < 400){
        return 0;
    }
    else if(total > 400 && total < 2000){
        return (total-400) * 0.02;
    }
    else if(total > 2000 && total < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}
