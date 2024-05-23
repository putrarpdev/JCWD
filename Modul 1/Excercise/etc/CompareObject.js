obj1 = {
    a:1,
    b:{
        c:1
    }
}

obj2 = {
    b:{
        c:1
    },
    a:1,
}

console.log(isObjEqual(obj1, obj2));

function isObjEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }

        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            if (!isObjEqual(obj1[key], obj2[key])) {
                return false;
            }
        } else {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    }

    return true;
}