import { useState } from 'react';
import { Target, defaultMethodSet } from '../../utils/types';
import DefaultMethodSelector from './DefaultMethodSelector';
import Profile from './Profile';
import styles from './styles/Targets.module.css';
import Suggestions from './Suggestions';
import TargetList from './TargetList';
import { pivotDate } from '../../constants';

export default function Targets({ targets, setTargets, setIsShowing, setExplanations, setTitle, setCompetencyName, setCompetencyMastery, setUsername }:
  {
    targets: Target[],
    setTargets: React.Dispatch<React.SetStateAction<Target[]>>,
    setExplanations: React.Dispatch<React.SetStateAction<string>>,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setIsShowing: React.Dispatch<React.SetStateAction<boolean>>,
    setCompetencyName: React.Dispatch<React.SetStateAction<string>>,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    setCompetencyMastery: React.Dispatch<React.SetStateAction<number>>
  }) {
  const [defaultMethod, setDefaultMethod] = useState(defaultMethodSet); //set current default method
  const currentDate = new Date();
  if (currentDate>pivotDate){
    return (
      <div className={styles.targets}>
        {/* <DefaultMethodSelector defaultMethod={defaultMethod} setDefaultMethod={setDefaultMethod} /> */}
        <Profile setTargets={setTargets} setIsShowing={setIsShowing} setExplanations={setExplanations} setTitle={setTitle} setCompetencyName={setCompetencyName} setCompetencyMastery={setCompetencyMastery} setUsername={setUsername} key="1"/>
        <TargetList targets={targets} setTargets={setTargets} defaultMethod={defaultMethod} />
        <Suggestions defaultMethod={defaultMethod} />
      </div>
    );
  }
  else {
    return (
      <div className={styles.targets}>
        <Profile setTargets={setTargets} setIsShowing={setIsShowing} setExplanations={setExplanations} setTitle={setTitle} setCompetencyName={setCompetencyName} setCompetencyMastery={setCompetencyMastery} setUsername={setUsername} key="1"/>
      </div>
    );
  }
}
