import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Event } from 'react-big-calendar';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import styles from './App.module.css';

import Navigation from './components/Navigation/Navigation';
import Targets from './components/Targets/Targets';
import { Target } from './utils/types';
// @ts-ignore
import Script from '@gumgum/react-script-tag';
import Modal from './components/Modal';
import TracesManager from './components/tracesManager/TracesManager';
import useModal from './useModal';
import { loadTree } from './utils/api';
import { Texpl } from 'comper_tree_reco_xai';
import { tracesUrl } from './constants';

export default function App() {
  // const [targets, setTargets] = useState<Target[]>(JSON.parse(localStorage.getItem('targets') ?? '[]'));
  const [targets, setTargets] = useState<Target[]>([]);
  const [explanations, setExplanations] = useState<string>("");
  const [competencyName, setCompetencyName] = useState<string>("");
  const [competencyMastery, setCompetencyMastery] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [userName, setUsername] = useState<string>("");
  const [events, setEvents] = useState<Event[]>([]);
  const {isShowing, toggle, setIsShowing} = useModal();

  useEffect(() => {
    localStorage.setItem('targets', JSON.stringify(targets))
  }, [targets]);

  useEffect(() => {
    const newEvents = targets.map(target =>
      target.reviewPeriods.reduce((acc: Event[], [start, duration]) => {
        if (start && duration) {
          acc.push({
            start: moment(start).toDate(),
            end: moment(start).add(duration, 'minutes').toDate(),
            title: target.name.replaceAll('_', ' ')
          });
        }
        return acc;
      }, [])
    );
    setEvents(newEvents.flat());
  }, [targets]);

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      try{
        Texpl.getInstance().setTracesURL(tracesUrl);
        // TracesManager.connectToLRS(() => {
        //   TracesManager.generateLaunchQuitTrace("LaunchedProfileVis", "Launched", "Launched");
        // });
        TracesManager.connectToLRSWithStatement();
      }
      catch(err){
        console.log(err);
      }
      
    }  
    return () => { ignore = true; };
  },[]);

  useEffect(() => {
    const handleTabClose = event => {
      event.preventDefault();
      
      TracesManager.generateLaunchQuitTrace("ClosedProfileVis", "Closed", "Closed");

      return(event.returnValue = "êtes vous sûrs de vouloir quitter?");
    };

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, []);


  const reloadTree = () => {
    console.log("before : ",targets);
    const profileTreeView = document.getElementById("profileTreeView");
    if (profileTreeView) {
      if(Texpl.getInstance().getObserver()){
        Texpl.getInstance().disconnectObserver();
      }
      profileTreeView.innerHTML = "";
      loadTree(setTargets, setIsShowing, setExplanations, setTitle, setCompetencyName, setCompetencyMastery, setUsername, () => {
        if(Texpl.getInstance().getObjNum()){
          Texpl.getInstance().refreshExpl();
        }
      });
      
    }
    console.log("after : ",targets);
  };

  useEffect(() => {
    const intervalId = setInterval(reloadTree, 10000); // Reload every 10 seconds
    
    return () => {
      clearInterval(intervalId);
    };
  });


  // const reloadTree = () => {
  //   // const profileTreeView = document.getElementById("profileTreeView");
  //   // if (profileTreeView) {
  //   //   profileTreeView.innerHTML = "";
  //   //   loadTree(setTargets, setIsShowing, setExplanations, setTitle, setCompetencyName, setCompetencyMastery, setUsername);
  //   // }
  //   loadTree(setTargets, setIsShowing, setExplanations, setTitle, setCompetencyName, setCompetencyMastery, setUsername);
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(reloadTree, 10000); // Reload every 10 seconds
    
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Modal isShowing={isShowing} hide={toggle} setExplanations={explanations} setTitle={title} setTargets={setTargets} setCompetencyName={competencyName} setCompetencyMastery={competencyMastery} setUsername={userName} />
      <div className={styles.app}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Targets targets={targets} setTargets={setTargets} setIsShowing={setIsShowing} setExplanations={setExplanations} setTitle={setTitle} setCompetencyName={setCompetencyName} setCompetencyMastery={setCompetencyMastery} setUsername={setUsername} />
          </Route>
        </Switch>
      </div>
      <Script
        src={process.env.PUBLIC_URL + '/addEvents.js'}
        type="text/javascript"
        async
        defer
      />
    </Router>
  );
}
