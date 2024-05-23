const obj1 = { a: 1, b: 2, c: 3, d: 5};
const obj2 = { b: 2, c: 4, d: 5 };

console.log(getObjectIntersection(obj1, obj2));

function getObjectIntersection(obj1, obj2) {
    const intersection = {};

    for (let key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            if (obj1[key] === obj2[key]) {
                intersection[key] = obj1[key];
            }
        }
    }

    return intersection;
}