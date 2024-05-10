// @ts-ignore
import Script from '@gumgum/react-script-tag';
import { useState } from 'react';
import { loadTree } from '../../utils/api';
import { Target } from '../../utils/types';
import styles from './styles/Profile.module.css';

export default function Profile({ setTargets, setIsShowing, setExplanations, setTitle, setCompetencyName, setCompetencyMastery, setUsername }: { setTargets: React.Dispatch<React.SetStateAction<Target[]>>, setIsShowing: React.Dispatch<React.SetStateAction<boolean>>, setExplanations: React.Dispatch<React.SetStateAction<string>>, setTitle: React.Dispatch<React.SetStateAction<string>>, setCompetencyName: React.Dispatch<React.SetStateAction<string>>, setCompetencyMastery: React.Dispatch<React.SetStateAction<number>>, setUsername: React.Dispatch<React.SetStateAction<string>> }) {

  return (
    <div className={styles.profileContainer}>
      { <>
          <div
            className={styles.treeView}
            id="profileTreeView"
          ></div>
          <Script
            src={process.env.PUBLIC_URL + '/olm.bundle.js'}
            type="text/javascript"
            onLoad={() => loadTree(setTargets, setIsShowing, setExplanations, setTitle, setCompetencyName, setCompetencyMastery, setUsername)}
            async
            defer
          />
        </>
      }
    </div>
  );
}
