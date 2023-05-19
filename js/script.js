let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size)
};

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diifY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diifY * diifY))
};

let getDistanceHint = function (distance) {
    if (distance < 10) {
        return 'Boiling hot!'
    } else if (distance < 20) {
        return 'Really hot'
    } else if (distance < 40) {
        return 'Hot'
    } else if (distance < 80) {
        return 'Warm'
    } else if (distance < 160) {
        return 'Cold'
    } else if (distance < 320) {
        return 'Really Cold'
    } else if (distance < 640) {
        return 'Really really cold'
    } else {
        return 'Freezing!'
    }
};

let width = 700;
let height = 700;
let clicks = 0;
let clicksLimit = 30;
let number = 30;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
};

$('#map').click(function (event) {
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $('#distance').text(distanceHint);
    if (distance < 8) {
        alert('Found the treasure is ' + clicks + 'cliskc!')
    };
    if (clicks > clicksLimit) {
        alert('GAME OVER');
        return
    };
    $('#try').text(number);
    number--;
});