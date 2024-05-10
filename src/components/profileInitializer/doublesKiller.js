const fs = require('fs');

rawdata = fs.readFileSync('./src/components/profileInitializer/framework_louis.json');
let fw_louis = JSON.parse(rawdata);

let seenObjects = [];
let newObjects = [];
let objectName = "";

for (object of fw_louis["objects"]){
    objectName = object["name"];
    if(!seenObjects.includes(objectName)){
        for(relation of Object.keys(object["relations"])){
            object["relations"][relation] = object["relations"][relation].filter((item,index) => object["relations"][relation].indexOf(item)===index);
        }
        newObjects.push(object);
        seenObjects.push(objectName);
    }
}

fw_louis["objects"] = newObjects;

let json = JSON.stringify(fw_louis, null, 2);

fs.writeFileSync('./new_framework.json', json, 'utf-8');