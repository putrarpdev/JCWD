function majority(nums) {
    let map= new Map();

    for(let i of nums){
        if(map.has(i)){
            map.set(i,map.get(i)+1);
        } else {
            map.set(i,1);
        }
        console.log(map)
        if(map.get(i)>nums.length/2) {
            return i   
        }
    }
};

console.log(majority([4,4,1,3,4]));