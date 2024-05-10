const fs = require('fs');

function findMasteryValue(data, name){
    let value = 0;
    for (object of data["objects"]){
        if (object["name"]===name)
            value = object["mastery"];
    }
    return value;
}

let rawdata = fs.readFileSync('./src/components/profileInitializer/profile.json');
let data = JSON.parse(rawdata);


let newJSON = data;


for (object of newJSON["objects"]){
    object["trust"] = 1;
    object["cover"] = 1;
}

let n = 0;
for (object of newJSON["objects"]){
    n = Math.random();
    n = Math.round(n * 100) / 100
    object["mastery"] = 0;
}

json = JSON.stringify(newJSON, null, 2);

fs.writeFileSync('profile_zero.json', json, 'utf-8');
