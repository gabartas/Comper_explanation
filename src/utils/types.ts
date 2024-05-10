import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTasks, faBookOpen, faCogs, faCompass, faHammer } from '@fortawesome/free-solid-svg-icons';

export interface Target {
  active: boolean;
  name: string;
  mastery: number;
  reviewPeriods: [Date | null, number][];
  method_id?: string;
  method_verb?: string;
}

export interface Method {
  id: string;
  name: string;
  verb: string;
  icon: IconDefinition;
}

export const methods: Method[] = [
  {
    id: 'Pre_requis',
    name: 'Prérequis',
    verb: 'travailler les pré-requis de',
    icon: faTasks
  },
  {
    id: 'Decouverte',
    name: 'Découverte',
    verb: 'découvrir',
    icon: faCompass
  },
  {
    id: 'Soutien',
    name: 'Soutien',
    verb: 'soutenir',
    icon: faBookOpen
  },
  {
    id: 'Perfectionnement',
    name: 'Perfectionnement',
    verb: 'perfectionner',
    icon: faHammer
  },
  {
    id: 'Revision',
    name: 'Révision',
    verb: 'réviser',
    icon: faCogs
  }
];

export const defaultMethodSet: Method = methods[4];

export interface PrioSymbol{
  from: number;
  to: number;
  symbol: string;
  bgcolor: string;
}

export const prioSymbols: PrioSymbol[] = [
  {
    from: 0.0,
    to: 0.4,
    symbol: '+',
    bgcolor: '#e9b861'
  },
  {
    from: 0.4,
    to: 0.6,
    symbol: '+ +',
    bgcolor: '#b0be6e'
  },
  {
    from: 0.6,
    to: 1.0,
    symbol: '+ + +',
    bgcolor: '#57bb8a'
  }
];

export interface RecoResult {
  recommandation: Suggestion[];
  traces: string;
}

export interface Suggestion {
  learning_platform: string;
  learning_type: string;
  location: string;
  nobj: number;
  position_in_obj: number;
  node: string;
  objectiveNode: string;
  tag: string;
  title: string;
  weight: number;
  previousObjectiveNode: string;
  nextObjectiveNode: string;
  id: string;
}

function renameNodeFromProfile(nameNode: string){
  nameNode = nameNode.replaceAll(' ', '_');

  return nameNode;
}

function renameNodeFromRecommendation(nameNode: string){
  nameNode = nameNode.replaceAll('_', ' ');

  return nameNode;
}

export const renameNodeFromProfileToRecommendation = (name: string)=>{
    return renameNodeFromProfile(name);
};

export const renameNodeFromRecommendationToProfile = (name: string)=>{
  return renameNodeFromRecommendation(name);
};