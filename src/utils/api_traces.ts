import axios from 'axios';

// Lab4ce API to get traces of students.
// The traces of a student are composed of all the command that we wrote
// and all the scripts that were saved, for a given period of time

const API_URL = 'https://traffic.irit.fr/lab4ce/rest-global-analytics';
const CONFIG = { headers: { 'x-api-token': 'FEs#sjh2sjha4f$saZ' } };

export default function getAllTracesFromUser(studentName: String) { 
    // TODO request the API

    // TODO format to the correct json format
    return studentName;
}