import { faCaretRight, faCaretDown, faWindowClose, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { refreshSuggestions } from '../../utils/api';
import { Method, Suggestion, Target, prioSymbols, renameNodeFromProfileToRecommendation, renameNodeFromRecommendationToProfile } from '../../utils/types';
import styles from './styles/Suggestions.module.css';
import {Texpl} from 'comper_tree_reco_xai';
import TracesManager from '../tracesManager/TracesManager';
import { UserId, groupA, groupB, controlGroup } from '../../constants';
import $ from 'jquery';
// import ReactHtmlParser from 'react-html-parser';

export default function Suggestions({ defaultMethod }: { defaultMethod: Method }) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [recoObjectives, setRecoObjectives] = useState<Target[]>([]);
  const [isRecommendationsSend, setIsRecommendationsSend] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  var suggestionsByObjectives = new Map<string, Suggestion[]>();
  var maxPrioByObjectives = new Map<string, number>();
  var old_max, maxPrioObj: number;
  
  return (
    <div className={styles.suggestionsContainer}>
      <div className={styles.btn_div}>
       <button 
                  type="button"
                  className={styles.btn}
                  id="loadRecoButton"
       

            onClick={() => {
              //maj of objectives used for the recommendation to show the suggestions
              let targets: Target[] = JSON.parse(localStorage.getItem('targets') ?? '[]');
              if (targets.length>0){
                let btn = (document.getElementById("loadRecoButton") as HTMLInputElement);
                btn.innerText = "Chargement";
                btn.style.backgroundColor = "#afafae";
                btn.disabled = true;
                

                for (var key in targets) {
                  if (targets[key].name === "Connaître_la_syntaxe_dollar_cmd") {
                    targets[key].name = "Connaître_la_syntaxe_dollar(cmd)";
                  }
                  if (targets[key].name === "Connaître_la_syntaxe_dollar_parenthesis") {
                    targets[key].name = "Connaître_la_syntaxe_dollar((__))";
                  }
                }
    
                setRecoObjectives(current => targets);
    
                //maj of suggestions var to process it downside
                refreshSuggestions(defaultMethod, setSuggestions, setIsLoading);

                //hasSend recommendation --> to show recommended resources
                setIsRecommendationsSend(current => true);  
                
                //isloading (the request has been send to the reco api but response not received) --> show loader
                setIsLoading(current => true);
              }
              
            }}
        >
          Charger les recommandations
        </button>
      </div>
      { //Construction of a map of max priority by objectives to normalize
        // for (suggestion of suggestions){
        suggestions.forEach(function(suggestion) {
          if(!maxPrioByObjectives.has(suggestion.objectiveNode)){
            //the objectif node is first seen in maxPrioByObjectives
            maxPrioByObjectives.set(suggestion.objectiveNode, 0.0);
          }
          old_max = Number(maxPrioByObjectives.get(suggestion.objectiveNode));
          if(!old_max){
            old_max = 0.0;
          }
          maxPrioByObjectives.set(suggestion.objectiveNode, Math.max(old_max, suggestion.weight));
        }
        )
      }
      {
        //instanciation of a map of suggested item with objectives defined
        getTargets(recoObjectives, defaultMethod).forEach(function(objective){
            suggestionsByObjectives.set(objective[0], []);
        })
      }
      {
        //Construction of a map of suggested item group by objectives
        suggestions.forEach(function(suggestion) {
          //console.log("objective",suggestion.objectiveNode,suggestion.title);
          if(!suggestionsByObjectives.has(suggestion.objectiveNode)){
            //the objectif node is first seen in suggestionsByObjectives
            //we need to create the array
            suggestionsByObjectives.set(suggestion.objectiveNode, []);
          }
          // we push the item recommended
          var arraySuggestOfObjective = suggestionsByObjectives.get(suggestion.objectiveNode);
          maxPrioObj = Number(maxPrioByObjectives.get(suggestion.objectiveNode));

          if(!arraySuggestOfObjective){
            arraySuggestOfObjective = [];
          }

          //normalization
          suggestion.weight = suggestion.weight / maxPrioObj;

          arraySuggestOfObjective.push(suggestion);

          suggestionsByObjectives.set(suggestion.objectiveNode, arraySuggestOfObjective);
        })
      } 
      <div id="recommendations" className={styles.suggestions}>
        {  //Construction of the html elements to show the recommendation
          Array.from(suggestionsByObjectives.entries()).map(function (e, key){
            if(isRecommendationsSend && !isLoading){
              return (
                <div>
                  <fieldset id={"recoItems"+e[0]} className={styles.lBtn}>
                    <NameObjective nameNodeObjective={getMethodVerbOfObjectiveNode(getTargets(recoObjectives, defaultMethod), e[0])[0]} verbMethod={getMethodVerbOfObjectiveNode(getTargets(recoObjectives, defaultMethod), e[0])[1]} href_id={"reco_"+e[0]} caret="faCaretRight"/>
                    <NameObjective nameNodeObjective={getMethodVerbOfObjectiveNode(getTargets(recoObjectives, defaultMethod), e[0])[0]} verbMethod={getMethodVerbOfObjectiveNode(getTargets(recoObjectives, defaultMethod), e[0])[1]} href_id="" caret="faCaretDown"/>          
                    <ol>
                      {e[1].map(function (suggestion, key){
                        return (<ShowRecommendedItem keyToAssign={key.toString()} suggestion={suggestion} defaultClick={(key===0)}/>);
                      })}
                    </ol>
                    <NoRecommendations nameNodeObjective={getMethodVerbOfObjectiveNode(getTargets(recoObjectives, defaultMethod), e[0])[0]} verbMethod={getMethodVerbOfObjectiveNode(getTargets(recoObjectives, defaultMethod), e[0])[1]} suggestions={e[1]}/>
                  </fieldset>
                </div>
              );
            }else{
              return (<p></p>);
            }
          })}
      </div>
    </div>
  );
}

function getTargets(targets: Target[] , defaultMethod: Method){
  
  let objectives = targets.map(target => [
    target.name,
    target.method_id ?? defaultMethod.id,
    target.method_verb ?? defaultMethod.verb]
  );
  return objectives;
}

function getMethodVerbOfObjectiveNode(objectives: Array<Array<string>>, nameNodeObjective: string){
  //let obj_name = "";
  let method_verb = "travailler";
  objectives.forEach(obj => {
    //let old_obj = obj[0];

    obj[0] = renameNodeFromProfileToRecommendation(obj[0]);
    //console.log(obj[0], nameNodeObjective);

    if(obj[0] === nameNodeObjective){
      method_verb = obj[2];
      //obj_name = old_obj;
    }
  });
  //console.log("getVerb:",method_verb, nameNodeObjective);
  return [renameNodeFromRecommendationToProfile(nameNodeObjective), method_verb];
}

function NoRecommendations({nameNodeObjective, verbMethod, suggestions}: {nameNodeObjective: string, verbMethod: string, suggestions: Suggestion[]}){
  if(suggestions.length === 0){
    return (<p>
      {"Oups… Aucune ressource pédagogique ne permet de "+verbMethod+" "+nameNodeObjective+"."}<br/><i><small>Merci de modifier vos objectifs et rafraichir les recommandations.</small></i>
      </p>);
  }else{
    return (<b></b>);
  }
}

function NameObjective({nameNodeObjective, verbMethod, href_id, caret}: { nameNodeObjective: string, verbMethod: string, href_id: string, caret: string}){
  if (caret === "faCaretRight"){
    let with_dieze_href_id = "#"+href_id;
    return ( /*closed*/
              <a href={with_dieze_href_id} id={href_id} className={styles.titleObj}>
                <FontAwesomeIcon icon={faCaretRight} size="2x"/>
                <p className={styles.objText}>  Mes recommandations pour <i>{verbMethod}</i>&nbsp;&nbsp;"<b>{nameNodeObjective}</b>"</p>
              </a>
    );
  }else{
    return ( /*opened*/
              <a href="#recoButton" className={styles.titleObj}>
                <FontAwesomeIcon icon={faCaretDown} size="2x"/>
                {/*<ExplanationMode nameNodeObjective={nameNodeObjective} idResource={nameNodeObjective} />*/}
                <p className={styles.objText}>  Mes recommandations pour <i>{verbMethod}</i>&nbsp;&nbsp;"<b>{nameNodeObjective}</b>"</p>
              </a>
      );
  }
}

function ShowRecommendedItem({keyToAssign, suggestion, defaultClick=false}: {keyToAssign: string, suggestion: Suggestion, defaultClick: boolean}){
  
  // Groupe expl à la demande
  if (groupA.includes(UserId)){
    return (
      <li key={keyToAssign} id={"sugg_"+String(suggestion.title)} className={styles.suggestionItem}>
        <p className={styles.weight + " " + styles.tooltip}>
        </p>&nbsp;
        <p className={styles.title}>{suggestion.title}
        </p>
        <FontAwesomeIcon icon={faQuestionCircle} onClick= { (evt) => {
              let nobj:number = +suggestion.nobj;
              console.log("asked for recommandation", "nobj :", nobj, "id :", suggestion.id)
              TracesManager.generateActionTrace("AskedForExplanation", "explDetails", "explDetails", "the explained resource", {nobj: nobj, suggestion: suggestion});
              let elements = $('li[id^="sugg_"]');
              for(let elt of elements){
                elt.style.borderWidth = "0px";
              }
              evt.currentTarget.parentElement.style.borderWidth = "1px";
              Texpl.getInstance().setIndentedTree(document.getElementById('profileTreeView')!);
              Texpl.getInstance().initializeExpl(nobj, suggestion.id);
            }
          }/>
        <RecoPopup text={suggestion.location} suggestion={suggestion}></RecoPopup>
      </li>
    );
  }
  // groupe explication auto
  else if (groupB.includes(UserId)){
    // Pour le premier élément : expl auto.
    if(defaultClick){
      return (
        <li key={keyToAssign} id={"sugg_"+String(suggestion.title)} className={styles.suggestionItem} style={{borderWidth:"1px"}}
          onClick={ (evt) => {
            let nobj:number = +suggestion.nobj;
            TracesManager.generateActionTrace("AskedForExplanation", "explDetails", "explDetails", "the explained resource", {nobj: nobj, suggestion: suggestion});
            console.log("asking explanation for ",suggestion);
            let elements = $('li[id^="sugg_"]');
            for(let elt of elements){
              elt.style.borderWidth = "0px";
            }
            evt.currentTarget.style.borderWidth = "1px";
            Texpl.getInstance().setIndentedTree(document.getElementById('profileTreeView')!);
            Texpl.getInstance().initializeExpl(nobj, suggestion.id);
          }
        }>
          <p className={styles.weight + " " + styles.tooltip}>
          </p>&nbsp;
          <p className={styles.title}>{suggestion.title} 
          </p>
          <RecoPopup text={suggestion.location} suggestion={suggestion}></RecoPopup>
        </li>
      );
    }
    else {
      return (
        <li key={keyToAssign} id={"sugg_"+String(suggestion.title)} className={styles.suggestionItem}
          onClick={ (evt) => {
            let nobj:number = +suggestion.nobj;
            TracesManager.generateActionTrace("AskedForExplanation", "explDetails", "explDetails", "the explained resource", {nobj: nobj, suggestion: suggestion});
            console.log("asking explanation for ",suggestion);
            let elements = $('li[id^="sugg_"]');
            for(let elt of elements){
              elt.style.borderWidth = "0px";
            }
            evt.currentTarget.style.borderWidth = "1px";
            Texpl.getInstance().setIndentedTree(document.getElementById('profileTreeView')!);
            Texpl.getInstance().initializeExpl(nobj, suggestion.id);
          }
        }>
          <p className={styles.weight + " " + styles.tooltip}>
          </p>&nbsp;
          <p className={styles.title}>{suggestion.title} 
          </p>
          <RecoPopup text={suggestion.location} suggestion={suggestion}></RecoPopup>
        </li>
      );
    }
  }

  // groupe contrôle
  else{
    return (
      <li key={keyToAssign} id={"sugg_"+String(suggestion.title)} className={styles.suggestionItem}>
        <p className={styles.weight + " " + styles.tooltip}>
        </p>&nbsp;
        <p className={styles.title}>{suggestion.title} 
        </p>
        <RecoPopup text={suggestion.location} suggestion={suggestion}></RecoPopup>
      </li>
    );
  }
  

  
}

function RecoPopup({text, suggestion}: {text: string, suggestion: Suggestion}) {

  const [isVisible, setIsVisible] = useState(false);

  if(text.startsWith("http")){
    return (
      <div>
          <button className={styles.sinstruireButton} onClick={() => {
            window.open(text);
          }}>
            S'instruire
          </button>
      </div>
    );
  }
  else{
    return (
      <div>
          <button className={styles.sexercerButton} onClick={() => {
            setIsVisible(!isVisible);
            if(isVisible){
              TracesManager.generateActionTrace("DisplayedRessourceText", "ResDetails", "ResDetails", "the resource", {suggestion: suggestion});
            }
            else {
              TracesManager.generateActionTrace("HidRessourceText", "ResDetails", "ResDetails", "the resource", {suggestion: suggestion});
            }
            
          }}>
            S'exercer
          </button>
          {isVisible && (
              <div className={styles.popupcontent} onClick={e => e.stopPropagation()}>
                  {text}
              </div>
          )}
      </div>
    );
  }
}

function displayDate(){
  var str = "";

  var currentTime = new Date();
  var year = String(currentTime.getFullYear());
  var month = String(currentTime.getMonth() + 1);
  var day = String(currentTime.getDate());

  if (Number(month) < 10){
    month = "0" + month;
  }

  str = year + "/" + month + "/" + day;

  return str;
}

function displayTime() {
  var str = "";

  var currentTime = new Date();
  var hours = String(currentTime.getHours());
  var minutes = String(currentTime.getMinutes());
  var seconds = String(currentTime.getSeconds());
  var millisec = String(currentTime.getMilliseconds());

  if (Number(minutes) < 10) {
      minutes = "0" + minutes;
  }
  if (Number(seconds) < 10) {
      seconds = "0" + seconds;
  }
  str += hours + ":" + minutes + ":" + seconds + "." + millisec + " ";
  if(Number(hours) > 12){
      str += "PM";
  } else {
      str += "AM";
  }
  return str;
}

function GetSymbolFromPriority(suggestion: Suggestion, position: number){
  let symbol = "";
  let bgcolor = "#ffffff";
  prioSymbols.forEach(function (prio){
    if (suggestion.weight >= prio.from && suggestion.weight <= prio.to ){
      symbol = prio.symbol;
      //bgcolor = prio.bgcolor;
    }
  });

  return (<p id={"weight_"+String(suggestion.title)} className={styles.tooltip} /*style={{ backgroundColor: bgcolor }}*/>
            <span className={styles.tooltiptext}>
            {"Cette ressource a une priorité de "+String(suggestion.weight).substring(0,5)+
              ", c'est pourquoi elle apparaît en "+String(position)+"e position."
            }
            </span>
            {symbol}
          </p>);
  //return String(suggestion.weight).substring(0,4);
}

function ExplanationMode({suggestion}:{suggestion: Suggestion}){
    let idExplToUser = "Expl_"+suggestion.objectiveNode+"-"+Math.random() * (1000000);

    return (
      <div id={"Explanations_"+suggestion.title.replaceAll(" ", "_")}className={styles.explanationBlock}>
        <a href={"#suggestions"}>
          <svg id={idExplToUser} className={styles.explanationButton} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <title>Expliquez-moi !</title>
            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"></path>
          </svg>
        </a>
        <div id={"Message"+idExplToUser} className={styles.message}>
          <FontAwesomeIcon href={"#suggestions"} id={"Close"+idExplToUser} icon={faWindowClose} className={styles.closeButton} size="1x"/>
          <p>La ressource <b className={styles.expl_resource}>{suggestion.title}</b> 
             permet de travailler [la connaissance] <b className={styles.expl_node}> 
             {suggestion.node.replaceAll("_", " ")}</b> un de sous-thème de
             l'objectif <b className={styles.expl_objective}>{suggestion.objectiveNode.replaceAll("_", " ")}</b>.
          </p>
          <p>Il vous est recommandé afin de conserver votre niveau de maîtrise dans [la connaissance] 
             <b className={styles.expl_node}> {suggestion.node.replaceAll("_", " ")}</b>.
          </p>
        </div>
      </div>
    );
}