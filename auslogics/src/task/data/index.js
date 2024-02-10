function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const strings = ['Mike', 'Russia', 'Valod', 'esim', 'John']
const dataSource = [];

for (let i = 0; i < 10; i++) {
    dataSource.push({
        key: i,
        row1:strings[getRandomInt(0,4)],
        row2:strings[getRandomInt(0,4)],
        number1: getRandomInt(1,3000),
        number2: getRandomInt(1,3000),
        date1: Date.now() + getRandomInt(1,1000),
        date2: Date.now() + getRandomInt(1,1000),
    })
}

export default dataSource