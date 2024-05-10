import { faPlusSquare, /*faTimes,*/ faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Method, methods, Target, renameNodeFromProfileToRecommendation } from '../../utils/types';
import styles from './styles/TargetList.module.css';
import TracesManager from '../tracesManager/TracesManager';
import { Texpl } from 'comper_tree_reco_xai';

export default function TargetList({ targets, setTargets, defaultMethod }:
  {
    targets: Target[],
    setTargets: React.Dispatch<React.SetStateAction<Target[]>>;
    defaultMethod: Method,
  }) {
  function targetRemover(target: Target) {
      let i = 0;
      let newTargets = targets.slice();
      while (i<targets.length && targets[i].name !== target.name){
        i++;
      }
      newTargets.splice(i,1);
      setTargets(newTargets);
  };

  return (
    <div className={styles.targets}>
      <h2>Compétences à travailler</h2>
      <ul id="listObjectives">
        {targets.reduce((acc: JSX.Element[], target, index) => {
          acc.push(
            <TargetItem
              target={target}
              targetRemover={targetRemover}
              defaultMethod={defaultMethod}
              key={target.name}
            />
          );
          return acc;
        }, [])}
      </ul>
    </div>
  );
}

function TargetItem({ target, targetRemover, defaultMethod }: {
  target: Target,
  targetRemover: (target: Target) => void,
  defaultMethod: Method
}) {
  return (
    <li>
      <h3>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
              target.active = false;
              //We remove the target
              targetRemover(target);
              TracesManager.generateActionTrace("removedTarget", "targetDetail", "targetDetails", "the removed target", {target: target});
              //we remove completly the recommendation for that objective
              let name = renameNodeFromProfileToRecommendation(target.name);
              let id_reco = "recoItems"+name;
              if(document.getElementById(id_reco)! != null){
                document.getElementById(id_reco)!.innerHTML = "";
                document.getElementById(id_reco)!.style.display = "none";
              }
              Texpl.getInstance().clearExpl();
          }}
          className={styles.delete}
        /> {target.name.replaceAll('_', ' ')}
      </h3>
      {/* <div className={styles.options}>
        <TargetMethodSelector target={target} setTarget={setTarget} defaultMethod={defaultMethod} />
      </div> */}
    </li>
  );
}

function TargetMethodSelector({ target, setTarget, defaultMethod }: {
  target: Target,
  setTarget: (target: Target) => void,
  defaultMethod: Method
}) {
  return (
    <>
      <p>Intention personnalisée</p>
      <div className={styles.methodSelector}>
        {methods.map(m => (
          <div
            className={((target.method_id ?? defaultMethod.id) === m.id ? styles.selectedMethod : '')}
            onClick={() => { 
              target.method_id = m.id;
              target.method_verb = m.verb;
            
              setTarget(target);
              let name = renameNodeFromProfileToRecommendation(target.name);

              let id_reco = "recoItems"+name;
              //console.log(id_reco, target);
              if(document.getElementById(id_reco)! != null){
                document.getElementById(id_reco)!.style.display = "none";
              }else{
                console.log("[Warning] Can't find id "+id_reco);
              }

              setTarget(target);}}
            key={m.id}
            title={m.id}
          >
            <FontAwesomeIcon
              icon={m.icon}
            />
          </div>
        ))}
        {/*
        <div title="Intention par défaut" onClick={() => { delete target.method_id; delete target.method_verb; setTarget(target); }}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      */}
      </div>
    </>
  );
}

function TargetMasterySelector({ target, setTarget }: {
  target: Target,
  setTarget: (target: Target) => void
}) {
  return (
    <>
      <p>Niveau de maîtrise</p>
      <div className={styles.masteryControl}>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={target.mastery}
          onChange={e => { target.mastery = e.target.valueAsNumber; setTarget(target); }}
        />
        <p>{target.mastery}</p>
      </div>
    </>
  );
}

function TargetReviewPeriods({ target, setTarget }: {
  target: Target,
  setTarget: (target: Target) => void
}) {
  function dateSetter(i: number) {
    return (date: Date | null) => {
      if (date) {
        target.reviewPeriods[i][0] = date;
        setTarget(target);
      }
    };
  }

  function durationSetter(i: number) {
    return (duration: number) => {
      target.reviewPeriods[i][1] = duration;
      setTarget(target);
    };
  }

  function removePeriod(i: number) {
    target.reviewPeriods.splice(i, 1);
    setTarget(target);
  }

  return (
    <>
      <p>
        {"Dates de révision "}
        <FontAwesomeIcon
          icon={faPlusSquare}
          onClick={() => { target.reviewPeriods.push([null, 0]); setTarget(target); }}
        />
      </p>
      <div className={styles.periods}>
        {target.reviewPeriods.map(([start, duration], index) =>
          <TargetPeriodPicker
            start={start}
            duration={duration}
            setStart={dateSetter(index)}
            setDuration={durationSetter(index)}
            removePeriod={() => removePeriod(index)}
            key={index}
          />
        )}
      </div>
    </>
  );
}

function TargetPeriodPicker({ start, duration, setStart, setDuration, removePeriod }:
  {
    start: Date | null,
    duration: number,
    setStart: (date: Date | null) => void,
    setDuration: (duration: number) => void,
    removePeriod: () => void
  }) {
  const selectOptions = [];
  for (let i = 0; i <= 60; i += 10) {
    selectOptions.push(<option value={i} key={i}>{i}</option>);
  }

  return (
    <div className={styles.periodPicker}>
      <input
        type="datetime-local"
        min={new Date().toISOString().slice(0, 16)}
        defaultValue={start?.toString().slice(0, 16)}
        onChange={e => setStart(new Date(e.target.value))}
      />
      <select
        defaultValue={duration}
        onChange={e => setDuration(parseInt(e.target.value))}
      >
        {selectOptions}
      </select>
      <p>min</p>
      <FontAwesomeIcon
        icon={faTimesCircle}
        onClick={removePeriod}
      />
    </div>
  );
}
