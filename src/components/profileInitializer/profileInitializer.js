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
rawdata = fs.readFileSync('./src/components/profileInitializer/new_framework.json');
let fw_louis = JSON.parse(rawdata);
rawdata = fs.readFileSync('./src/components/profileInitializer/framework_reco.json');
let fw_reco = JSON.parse(rawdata);

let newJSON = fw_louis;

console.log(data["frameworkName"]);
console.log(fw_louis["name"]);
console.log(fw_reco["frameworkName"]);

for (key of Object.keys(data)){
    if(!Object.keys(newJSON).includes(key)){
        newJSON[key] = data[key];
    }
}
for (key of Object.keys(fw_reco)){
    if(!Object.keys(newJSON).includes(key)){
        newJSON[key] = fw_reco[key];
    }
}

for (object of newJSON["objects"]){
    object["trust"] = 1;
    object["cover"] = 1;
    object["mastery"] = findMasteryValue(data,object["name"]);
    object["evaluationResult"] = {};
}

for (resource of newJSON["resources"]){
    resource["text"] = "";
}

let json = JSON.stringify(newJSON, null, 2);

fs.writeFileSync('profile_data_values.json', json, 'utf-8');

let n = 0;
for (object of newJSON["objects"]){
    n = Math.random();
    n = Math.round(n * 100) / 100
    object["mastery"] = n;
}

json = JSON.stringify(newJSON, null, 2);

fs.writeFileSync('profile_randomized.json', json, 'utf-8');
