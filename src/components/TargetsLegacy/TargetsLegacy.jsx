/* eslint-disable */
import './styles/TargetsLegacy.css'
import React, { useState, setState } from 'react';
import { Link } from 'react-router-dom';
import Script from '@gumgum/react-script-tag';
import { useCookies } from 'react-cookie';
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faBookOpen, faCompass, faConciergeBell, faHammer, faRocket, faTrash, faPlusSquare, faRedoAlt, faTree, faChartPie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var jwt = require('jwt-simple');
const fs = require('fs')

const TargetsLegacy = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['Theme']);

    const [recommandations, setRecommandations] = useState([{title: "test"}]);
    const [logoVisu, setlLogoVisu] = useState('chart-pie');

    //API profil request

    var url = "https://traffic.irit.fr/comper/recommendations/api/generate/"
    var privateKey = "-----BEGIN RSA PRIVATE KEY-----\nMIIJJwIBAAKCAgEAvSmougC9Bv3L5+Toqg2MRiJYVxgIFC7JtVg+PkOTYHbjDdEd\nhzKyJDOlf8kqpL/MwbS4qlMAblSVexTw6i+hV8m/VNOUWOoGeg12G0OHsIgIVIJY\ncBdwZcZn/NM9f+r5k4rL8UdZvryjTR2nNXH7lKi89me4k+HUaEA0lvO40NLF51Gb\n8YQG+/YS8xZsrtjNxxN8ilT0+45DiX5gpwOdkB0NI4WjR25IQczn6Iv50X9kZkv8\nZq23QzVUOgzq6wCDta2m0XVpFS3PfphfmIKjcGLQWMADcKf6H6ijxRHJw6CEZNOF\ngVHXuuWBv5HDCA2/uJdZ5jmqKfLACCBKtp5fJV8gk0DuGGAu1HEr6W6/C9taOYW+\nJAQ+oSwH9R93S1Snruz5cyjVJcrBnMzyUeXphPfyo+YNRJviGWY4yWAebo0lUgtA\nINS7OmCJ+uuATbVam4LxdY/LbjyWoZCn3drJxAEsDnPXzMfZqYylGLQE9GgTWDfN\npfUdqtk3FoCYvshfuk7WSD/nbPIAGVtgDmHIqDReRz9EFwrtcHsQWrB7cg1tkBlA\nkmHQpJ7fWD7j+41blZaCQIMiTOPVQowr74rEZJ9X4nNbCxxoiPEiKaMBLI85u5dq\nFV3wY4JmXmIKwCGuYmEK3qQ1tmT8tfwO0K9YYc1pDIEqqxvKeEm42oY9euUCAwEA\nAQKCAgA8bP1YBXpcrGAhgI8OG2vOz5PWpneWMuf+ROUFMML4UqHvPPiownoDdHgO\nnO1BWX+H9Tn0NrVxiRWDDspylKp+h5TV/QxrZr6Q6JHs3aKPsrSugkDL9cDS0hFP\nww7nOOFmzzScq4Uwl8O2k51hRjruXwSV1cYxfzdB4hiqi8pi8qGDZh9hhCJTBGVD\nP8uSAvGhAUmMSt1DKkvKtRMc5tvDOHSE/2CMJd9xHYqLT4OK953Ty7wh9KYREw0H\nyi6UyUJJm+IpEM9zk4Gv1+7Zogmhkf8qCpROvWn6CP3fqvH/ytvf9W21RLacHkpX\nLrHVdcbjqX1vPMZtxfyv29jiAy8zDVphyrd/nM1TMBTFe3ePJgr7FnT+LV9fQydP\nRqae+RirwIejSKzzgucEqg01sRltAmsXOEGPH0Obmb8y8fNT2cYq7HVV6MkebGD4\nb2UCEws5xEsvfU97eTV0fR8JSSUDxeG0ftkR0afveOeAgVZUSV2SevsoUV+PvQug\nuqByRySnFrqHalH/hBKh6j/R2JGUoUcUFUJDV5M4oiUwF+JkzwhwHxZgJTzVwl2O\nNTHYB2Teh/hLBm2I2j91Q48RWrF9cnd93+LMCWZIUSo6UMr3A5JZLknZUUhyjuun\nztoA9Vbh/HrEGOEQtVabXXzDGl3/7NYWhPTcz+3O77mRBeDv4QKCAQEA3eaxquwV\nK7IT2s4NZsB+IwVDxJVoWTvJq+SHs9CSJpzuhVh0BlVYn6936r9XC53SqK96ggfL\n3+nDI00sEH2jgpOxc972uzNmrB89o/51Simh2q1OR/a17cvxfSIMIYKYZtJLPnIJ\nqrxzwMZZBN7eAzbe8VnUui2zxtPNrrTl4Uw+8MIPWCB6AgrIv+gclwdRL+b+nvqW\nxcFsfBGtLU1NTaDai58yKHsFzn74KEiFkzPbEnSmi0AhlpVdpaJ5GphPy57fhLgY\nxOKGIz2kqDiCkWi5TRS6KCNVi8Leju+bcn7mjKNmRcRO/qMAhIEypTp9AAerzHUH\n6foaz2v3TLuYbQKCAQEA2jsT6qL1LOsy2ynoHCJG+MkqBnfhGC3KyfQsAv2DK7kU\nmCiJpCQcdWA9TX30dBolYUxDlFzWoCElAFoQgySIBD8gYcR0NtErf4ALG7AM7S/d\nYQlsZrhUE3LUus/hmAmpsMJiK4jZa+qblj/My3799AtfCeb0n+69rUeQyu4SQi2P\n5OnGqHEMB2wvw3I4cUmfRr8+NBYvA9RAGAQkE8+ZD1FDKb5LAzZNvNswjDG4Q5Zo\ndzpO6gvgZMkKcPhDuvAmC4iVRrJa8+t8LVo/dhpjZyvYDuQjmBhbx63ljt/QVEHx\nyrwPBrcJezhnC6xgaDyoGlVEchjfiB0mAOdSfBdRWQKCAQAKjqU5So4fTBOhv1fn\n4ZSeuetleO5EAJIxuWezaGLrr1+xvGmYu4rB3ilIY94SUWnqWJ7tfM14U7jS/yLv\njeqvlbNFngADHAjwe3QFT1/pLV3j94bX6abyL1fH6kzFc18o1Sx7RhWrp9eh/k3R\n64CIip3Ewc9bJD1/YihQ/Y5KT8RW1ATC3pivbC/s4XAqx1BXhRfsHGP7+J3esUCZ\n/SmGXfbH2cUbI+88ydGoqPqh7D+p+x7JVT3D2ktgTACTAVgaie58c/3JsDVNi+s/\njaC4plDal/fbXQL+6UCJcGDm656wZj3BZ/uSJdMqerMcJVI5JCRKT+8WdK293Jch\ncXNpAoIBAEUyyHz1UUL+DXE7V5NcNx76Qq4sYx7UnmHtX+tO0cISfPpGmGaI4NFD\nRA0HbHVIOSQiF6e6zH+YIvB6npPHCK44Ch+WOLeNGfri8iLEb0TikZMMdugXeOl1\n1wiplEIuhjU7Xf+p9C9pBA7fiiPYz9QLqwYrytPP0ytX7wy58uYzJlaS3mBZAFR2\nNKsH0+fwTWYUjDfd9OiE7BHxdjMl98XIocBhy81n8bx50GoT9fbQga2UuqMyQuQS\nb5Ik1u026wlrNNJnCbogqI6E+GyNr4lueKM4KiU3TBsEBC+KvreI9Y+wlB8v+Pyu\nhNZJwYQr/63h7cM0KeUyQPO2ZgxdJHkCggEAEbYn8iha3Wd5cMNqlQxCw5JFvOxE\n6o1jsdq7KJmug3zq2hDZPA/PU64RAUU7QGZII6BKUMcSaNrH3vbNhfDuwVV6hqAB\nml5slNXfoKBxVDmEZ+ZbpBhGCRPNwy8CI7BKkFVZWZBHinPgzeCH5nThZdEL3yMz\nuivFIVpupsYFY5KLDrT7H2os8AjDurv+WNSezzxoTshgv7qxcVC0JHcq2Sn9shNb\nX98RMNjfcVQIm/yB0nHuUncZ4f4v7+F7xGGYeFpn5t0+V5x52ZMq1/dSGOdy8ffm\nZDDS0nDDpOT8j3oKdTsg2OJzuTqT/QeYnMc7A3E4NA9zq2tsPJBAeM+iYQ==\n-----END RSA PRIVATE KEY-----\n"
    

    var data = {
        "user": "asker:ext_Fabrice.Batista ",
        "role": "learner",
        "username": "ext_Fabrice.Batista ",
        "fwid" : 83,
        "exp": 1622104347730,
        "iat": 1622104511,
        "objectives": [["Ecrire_des_scripts_interactifs", "Decouverte"],["Connaître_les_opérateurs_de_comparaison_de_caractères", "Decouverte"]]
    }
    
    const [methode, setMethode] = useState(null);
    const [themeList, setThemeList] = useState(cookies.Theme);
    const [profilStudent, setProfilStudent] = useState(null);

    var tabThemes = []

    var data_profil = {
        user : "asker:ext_Fabrice.Batista",
        username : "ext_Fabrice.Batista ",
        role : "learner",
        keyid: "traffic",
        fwid : "83",
        exp: Date.now() + 900
    }

    const cle_profil= "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9fPX509S6DA85\nbSwDapRvmKtUlZ1oYNYX/txmUa0CyXVHo1tyBwekdYkdVRKa1NEt4U6HDlbQwyy7\nirw0DVihngvk4lexK70qRjDrxmF7WeFlY4FAZaiMz4pnRP50m+Lx+lKS/uUQ+0/z\ngQXMguOl7gcpXe29SBn6fN4pQJzrrivn1Ss2YT7U8M2elFgBmc7I3TVXl1xtHXW9\nYmUu6vlEkN+v5pBuakQo63WWPrk32rRsneiRaHLTwaj9Ib8VahjoDdnkPbCG/3aZ\nQmnCHLN4SVO11zGDkYUbPmvP7jq5gSNa8wAaLLkVVkjdnbLhwtWH7lUDjTNQ7pvp\nDFhH5Nc7AgMBAAECggEADxY993A4Rb/kDmx0zqjTvLbpHUj0SXU8VpjCL5tdLRWh\nMtz80O1iXGPHUQCPBKjhJsgDmpk3rFN94ki/h11wqx2MUOL8nGyhGRaRmpQm+s1D\nNvFfPyNY8i0sFeDWaa5nuWB25qFI17tKuFaTgZ8CRRnYlCCYZzOwbdM3VQ2B8Pm/\n13mjmBLOmK8soWZaOz5cofDB2erKM6p32+4Drbt6qL/5M7fGUHhMJt58LdQKhB47\ncwnPXzIyrwV0VHU1jJ2NowZJcU8McK7B/W9Ne1JRJy4GTiELMCsw7CNSQQtRIGdb\nICl2QV9EVo1B5h32eKH8gdoJNaAkZBJcpBsQshXaMQKBgQD2Dconl5IxnvSBjZHo\nfvwExfKhrOvj3H2bPE+f1KM5d9bznv8NxlTOsNOSO3I8OkYP9hnBkhgffeqWplM+\nuR9BRQwGo8aiLwiiwR0Ry99m9uRIpguffhHMdcvW3+H8iUwhGkK50oit/8VkVD4B\nibwZluLj/iFhXrJIoniIVXhd1QKBgQDFJdGPdUiXfVTWMaLI60iG+rQ6PpstSHjT\nBwQSZAkg1L3AUZ3q2Zr45SxxOTr04z9MMGU5S/fTUxX/5X+cbpZJIqrdxUxJhjgL\nqo3MZuSr55R2Guo3ybldCInqYkhiHVgPuBL29NlvkegAunEIDev9M1kzOJMRa6xx\nkonDuTEYzwKBgQCS87dpn//DPQEgotGivrx7iVGYt7MGmrg1z3Zqqc92UhmB1NLV\ngj9CVp91daWLTO5tN/k3/64CmOxTXzDWhC+jhr5g9M18LYUF1zoqV82sLAY5UVod\nvmiY6T19rqbEcaeTGaECZDgXW2ujuSBzQLSjv9bwfeWnxqvJ76b3HbzOpQKBgGUN\n2po3WwtT0f2tGaz1dYrCzUkhuDcA8/XvnbWzkz5B7jW7YD/2ZMp55krvM/o81cA+\n+lPhTdoDt74grEXKJby9SWo97LmvU+Ee/mosv8AiB2Z2q2IHQ72dV9xNnp60PeRo\nzUfK//2Bg7OD3dZsFHAINwvbTv9Z+t2IaJdrwO/fAoGATKADELnhIC4/2TopBJ8G\niIIDgTy5TQ2XkEo2eB9InQGgMEAbKmOMrGM8YrRjqNl48CnlCQBe8jreYgXZpoSq\nWe4wBecD0Ocayo+8joL510zGCkkRxRZ8OIGGjB5alWNyekCpThHTZuTerJZ/tCQJ\nup3rCoIv77yIbxZRU3kfPQk=\n-----END PRIVATE KEY-----\n"

    var token_profil = jwt.encode(data_profil, cle_profil, "RS256")

    function scriptCharge() {
        axios({
            method: 'get',
            url: "https://comper.projet.liris.cnrs.fr/sites/profile-engine/api/profile/to-olm/index.php",
            headers: {Authorization: 'Bearer ' + token_profil}
        }).then(res => { 
            setProfilStudent(res.data)

            var OLM             = null;
            var fw_tree         = null;
            var OLM = document._OLM;
            let framework = OLM.CORE.Utils.getScoredFrameworkSample();
    
            fw_tree = new OLM.CORE.FrameworkTree();
            fw_tree.buildFromFramework(res.data);
    
            config={
                "fontColor": "rgba(255, 255, 255, .85)",
                "backgroundColor": "#343a40",
                "formatMastery": "percentage",
                "formatTrust": "percentage",
                "formatCover": "percentage",
                "useHash": true,
                "hashTreshold": 0.1,
                "useLegend": true,
                "colors": [
                    {
                        "to": 0.4,
                        "color": "#cf000f"
                    },
                    {
                        "to": 0.8,
                        "color": "#f7ca18"
                    },
                    {
                        "color": "#00b16a"
                    }
                ],
                "noValueColor": "#808080"
            }
      
            let treeSunburst = new OLM.TreeSunburst(document.getElementById('profilCompetenceSunBurst'), fw_tree, config);
    
            //Ne fonctionne pas avec la vue SunBurst
            treeSunburst.onClick = (node) => {
                console.log(node)
            }
    
            treeSunburst.draw();
    
            var config  = {
              "useHash": true, 
              "hashTreshold": 0.1,
              "useLegend": true,
              "colors": [{
                "to": 0.4,
                "color": "#cf000f"
              }, {
                "to": 0.8,
                "color": "#f7ca18"
              }, {
                "color": "#00b16a"
              }],
              "noValueColor": "#808080"
            };
    
            let treeIndented  = new OLM.TreeIndented(document.getElementById('profilCompetences'), fw_tree, config);
    
            treeIndented.onClick = (node) => {
                //Incrémentation du cookie
                const themeAdd={
                    id: node.id,
                    name: node.data.name,
                    mastery: node.data.mastery * 100,
                    methode: null,
                    date1: null,
                    date2: null,
                    date3: null,
                    date4: null
                }
    
                var doublon = 0;
    
                if (cookies.Theme != undefined) {    
                    tabThemes = cookies.Theme
    
                    tabThemes.forEach(function(item){
                        if (item.id == themeAdd.id) {
                            doublon++;
                        }
                    });
                    if (doublon == 0) {
                        tabThemes.push(themeAdd)
                    }
                }else{
                    tabThemes.push(themeAdd)
                }
    
                majTheme(tabThemes)
                JSON.stringify(tabThemes)
    
                setCookie('Theme', tabThemes, { path: '/', expires: new Date(Date.now()+604800*1000)});
            }
    
            treeIndented.draw();
        }).catch(error => {
            console.log('erro', error);
        })


        // Creates the TreeSunburst object. The config is editable on the right =>  
        
    };

    const majTheme = (params) => {
        setThemeList(params)
    }

    function selectedMethod(e){
        var test = 0
        var listTh = cookies.Theme
        if (e.target.parentNode.tagName == "svg") {
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove('methodselected2')
            e.target.parentNode.parentNode.parentNode.children[1].classList.remove('methodselected2')
            e.target.parentNode.parentNode.parentNode.children[2].classList.remove('methodselected2')
            e.target.parentNode.parentNode.parentNode.children[3].classList.remove('methodselected2')

            test = e.target.parentNode.parentNode.classList

            listTh[e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id].methode = e.target.parentNode.parentNode.classList.value

            JSON.stringify(listTh)

            setCookie('Theme', listTh, { path: '/', expires: new Date(Date.now()+2592000)});

            e.target.parentNode.parentNode.classList.add('methodselected2')
        }else{
            e.target.parentNode.parentNode.children[0].classList.remove('methodselected2')
            e.target.parentNode.parentNode.children[1].classList.remove('methodselected2')
            e.target.parentNode.parentNode.children[2].classList.remove('methodselected2')
            e.target.parentNode.parentNode.children[3].classList.remove('methodselected2')

            test = e.target.parentNode.parentNode.classList[0]

            listTh[e.target.parentNode.parentNode.parentNode.parentNode.id].methode = e.target.parentNode.classList.value

            JSON.stringify(listTh)

            setCookie('Theme', listTh, { path: '/', expires: new Date(Date.now()+2592000)});

            e.target.parentNode.classList.add('methodselected2')
        }
    }

    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    var heure   = n.getHours();
    var minute  = n.getMinutes();

    if (m.toString().length == 1) {
        m = "0"+m
    }
    if (d.toString().length == 1) {
        d = "0"+d
    }
    if (heure.toString().length == 1) {
        heure = "0"+heure
    }
    if (minute.toString().length == 1) {
        minute = "0"+minute
    }

    const datelocal = "" +y + "-" + m + "-" + d +"T"+heure+":"+minute+"";

    const deleteTheme = e => {
        var listeTheme = themeList

        if (e.target.parentNode.tagName == "svg") {
            listeTheme.splice(e.target.parentNode.parentNode.id, 1)
        }else{
            listeTheme.splice(e.target.parentNode.id, 1)
        }

        JSON.stringify(listeTheme)

        setCookie('Theme', listeTheme, { path: '/', expires: new Date(Date.now()+2592000)});
    }

    const addHoraire = e =>{
        var tempDiv = document.createElement('input');
        tempDiv.setAttribute("type", "datetime-local");
        tempDiv.setAttribute("min", datelocal);
        tempDiv.onchange = dateRevision;
        tempDiv.classList.add("date-etudie")

        if (e.target.parentNode.tagName == "DIV") {
            e.target.parentNode.insertAdjacentElement("beforeend", tempDiv);            
        }else{
            e.target.parentNode.parentNode.insertAdjacentElement("beforeend", tempDiv);    
        }

    }

    const dateRevision = e =>{
        var themes = cookies.Theme

        themes[e.target.parentNode.parentNode.id].date1 = e.target.value

        JSON.stringify(themes)
        setCookie('Theme', themes, { path: '/', expires: new Date(Date.now()+2592000)});
    }

    const displayjauge = e =>{
        e.target.parentNode.parentNode.parentNode.lastChild.classList.add("ctnjaugetoggle")
        e.target.parentNode.parentNode.parentNode.lastChild.style.display = 'block!important';
    }

    const percentInteret = e =>{
        var themes = cookies.Theme

        themes[e.target.parentNode.parentNode.id].mastery = e.target.value

        e.target.parentNode.lastChild.innerHTML = e.target.value + " %"

        JSON.stringify(themes)
        setCookie('Theme', themes, { path: '/', expires: new Date(Date.now()+2592000)});
    }

    var listItems = "test"
    if (themeList != undefined) {
        listItems = themeList.map((item, i) =>  
            <li className="themeItem interetitem" id={i} key={item.id}><FontAwesomeIcon onClick={deleteTheme} className="delete" icon={['fas', 'trash']} /> <div className="name-item">{item.name}</div> <div className="methodeItem"> <FontAwesomeIcon icon={['fas', 'book']} /><div className="ctn-list-methode"><div onClick={selectedMethod} className="Decouverte"><FontAwesomeIcon className="" icon={['fas', 'compass']} /></div><div className="Remediation" onClick={selectedMethod}><FontAwesomeIcon className="" icon={['fas', 'hammer']} /></div><div className="Renforcement" onClick={selectedMethod}><FontAwesomeIcon className="" icon={['fas', 'rocket']} /></div><div className="Revision" onClick={selectedMethod}><FontAwesomeIcon className="" icon={['fas', 'book-open']} /></div></div></div> <div className="etudeDate"><label className="labdaterevision" htmlFor="">Choisir une date de révision</label><FontAwesomeIcon onClick={addHoraire} className="add" icon={['fas', 'plus-square']} /> </div><div className="ctnlabobjectif"><label htmlFor="" className="labobjectif">Choisis ton niveau de maîtrise</label><FontAwesomeIcon onClick={displayjauge} className="" icon={['fas', 'plus-square']} /></div><div className="ctnjauge"><input type="range" step="1"  max="100" name="" id="" className="jaugeInteret" min={item.mastery}  onChange={percentInteret} /> <p className="">{item.mastery} %</p></div></li>
        );
    }

    function themeChoisis(e){
        var listTh = cookies.Theme
        if (e.target.classList.contains('type-travaille')) {
            e.target.parentNode.children[0].classList.remove('methodeSelect')
            e.target.parentNode.children[1].classList.remove('methodeSelect')
            e.target.parentNode.children[2].classList.remove('methodeSelect')
            e.target.parentNode.children[3].classList.remove('methodeSelect')
            e.target.classList.add("methodeSelect")
            setMethode(e.target.textContent)

            listTh.forEach(function(item){
                item.methode = e.target.lastChild.textContent
            });
        }else if(e.target.tagName == "path"){
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove('methodeSelect')
            e.target.parentNode.parentNode.parentNode.children[1].classList.remove('methodeSelect')
            e.target.parentNode.parentNode.parentNode.children[2].classList.remove('methodeSelect')
            e.target.parentNode.parentNode.parentNode.children[3].classList.remove('methodeSelect')
            e.target.parentNode.parentNode.classList.add("methodeSelect")
            setMethode(e.target.parentNode.parentNode.textContent)

            listTh.forEach(function(item){
                item.methode = e.target.parentNode.parentNode.lastChild.innerHTML
            });
        }else if((e.target.tagName == "H3") || (e.target.tagName == "svg")){
            e.target.parentNode.parentNode.children[0].classList.remove('methodeSelect')
            e.target.parentNode.parentNode.children[1].classList.remove('methodeSelect')
            e.target.parentNode.parentNode.children[2].classList.remove('methodeSelect')
            e.target.parentNode.parentNode.children[3].classList.remove('methodeSelect')
            e.target.parentNode.classList.add("methodeSelect")
            setMethode(e.target.parentNode.textContent)

            listTh.forEach(function(item){
                item.methode = e.target.innerHTML
            });
        }

        JSON.stringify(listTh)
        setCookie('Theme', listTh, { path: '/', expires: new Date(Date.now()+2592000)});
    }

    const displayVue = e =>{
        if (document.getElementById("profilCompetences").style.display == 'none') {
            document.getElementById("profilCompetences").style.display = 'block';
            document.getElementById("profilCompetenceSunBurst").style.display = 'none';
            setlLogoVisu('chart-pie')   
        }else{
            document.getElementById("profilCompetences").style.display = 'none';
            document.getElementById("profilCompetenceSunBurst").style.display = 'block';
            document.getElementById("profilCompetenceSunBurst").style.visibility = 'visible';
            setlLogoVisu('tree')
        }
    }

    const refreshRecommandation = e =>{
        var reco = cookies.Theme;
        var recommandations = [];

        reco.forEach(function(item){
            if (item.methode != null) {
                recommandations.push([item.name, item.methode])
            }
        });
        data.objectives = recommandations

        var token = jwt.encode(data, privateKey, 'HS256')
        axios({
            method: 'post',
            url: url,
            headers: { "Authorization": "Bearer "+token, "Accept": "application/json"}
        }).then(res => { 
            setRecommandations(res.data)
        }).catch(error => {
            console.log('erro', error);
        })
    }

    library.add(
        faCompass,
        faHammer,
        faRocket,
        faBookOpen,
        faTrash,
        faBook,
        faPlusSquare,
        faRedoAlt,
        faTree,
        faChartPie
    );

        return (
            <div className="ctnTheme">
                <div className="methode">
                    <div className="type-travaille" onClick={themeChoisis}>
                        <FontAwesomeIcon className="" icon={['fas', 'compass']} />
                        <h3>Decouverte</h3>
                    </div>
                    <div className="type-travaille" onClick={themeChoisis}>
                        <FontAwesomeIcon className="" icon={['fas', 'hammer']} />
                        <h3>Remediation</h3>
                    </div>
                    <div className="type-travaille" onClick={themeChoisis}>
                        <FontAwesomeIcon className="" icon={['fas', 'rocket']} />
                        <h3>Renforcement</h3>
                    </div>
                    <div className="type-travaille" onClick={themeChoisis}>
                        <FontAwesomeIcon className="" icon={['fas', 'book-open']} />
                        <h3>Revision</h3>
                    </div>
                </div>
                <div className="ctnProfilCompetence">
                    <div onClick={displayVue} className="ico-tree">
                        <FontAwesomeIcon className="" icon={['fas', logoVisu]} />
                    </div>
                    <div className="profilCompetence" id="profilCompetences">
                    </div>
                    <div className="profilCompetenceSunBurst" id="profilCompetenceSunBurst">
                    </div>
                </div>
                <div className="themeInteret">
                    <h2>Thèmes d'intérêt</h2>
                    <ul>
                        {cookies.Theme == undefined ? "":listItems}
                    </ul>
                </div>
                <div className="recommendation">
                    <h2>Recommandations</h2>
                    <FontAwesomeIcon className="refresh" onClick={refreshRecommandation} icon={['fas', 'redo-alt']} />
                    <ul>
                         {recommandations.map(recommandation => recommandations[0].title == "test" ? "": <li className="reco">{recommandation.title} <a href={recommandation.location} target="_blank">S'exercer</a></li>)}
                    </ul>
                </div>
                <Script
                    src="http://yourjavascript.com/2210520913/olm-bundle.js"
                    type="text/javascript"
                    onLoad={ scriptCharge }
                    async
                    defer
                />
            </div>
        )

}

export default TargetsLegacy;