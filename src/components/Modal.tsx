import ReactDOM from "react-dom";
import { Target } from '../utils/types';
import TracesManager from "./tracesManager/TracesManager";

const Modal = ({ isShowing, hide, setExplanations, setTitle, setTargets, setCompetencyName, setCompetencyMastery, setUsername }:{ isShowing: any, hide: any, setExplanations: any, setTitle:any, setTargets: any, setCompetencyName:any, setCompetencyMastery:any, setUsername:any })  =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>{setTitle}« {setCompetencyName.replaceAll('_instruction_', ' l\'instruction ').replaceAll('de_un', 'd\'un').replaceAll('dollar_cmd', '$(cmd)').replaceAll('dun', 'd\'un').replaceAll('dollar_parenthesis', '$(( ... ))').replaceAll('_', ' ').replaceAll('CrochetCrochet', '[ ]').replaceAll('détat', 'd\'état').replaceAll('IfThenElifElse', 'if/then/elif/else').replaceAll('létat', 'l\'état').replaceAll('denvironnement', 'd\'environnement').replaceAll('lutilisateur', 'l\'utilisateur')} »</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={function closeWindow () {
                      TracesManager.generateActionTrace("closedModal", "modalDetails", "modalDetails", "the closed modal", {title: setTitle, competency: setCompetencyName, explanation: setExplanations});
                      hide();
                    }
                    }
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body" dangerouslySetInnerHTML={{__html: setExplanations}}></div>
                <div className="modal-footer">
                  <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={function Refresh(){
                        const targets: Target[] = JSON.parse(localStorage.getItem('targets') ?? '[]');
                        let found = false;
                        for(let t of targets){
                          if (t.name === setCompetencyName){
                            found = true;
                            break;
                          }
                        }
                        
                        if(!found){
                          let target = {
                            active: true,
                            name: setCompetencyName,
                            mastery: setCompetencyMastery,
                            reviewPeriods: []
                          };
                          targets.push(target);
                          setTargets(targets);
                          TracesManager.generateActionTrace("addedATarget", "targetDetail", "targetDetails", "the added target", {target: target});
                        }
                        hide();
                      }
                    }
                    >
                  Ajouter aux compétences à travailler
                  </button>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 1040;
              background-color: rgba(0, 0, 0, 0.5);
            }

            .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 1050;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .modal {
              z-index: 100;
              background: #fff;
              position: relative;
              margin: auto;
              border-radius: 5px;
              max-width: 500px;
              width: 80%;
              padding: 1rem;
            }

            .modal-body {
              padding-bottom:20px;
            }

            .modal-body > p:last-child {
              margin-bottom: 0px;
            }

            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .modal-footer {
              display:flex;
              justify-content:center;
            }

            .btn {
              background-color: #61ba5e;
              border: none;
              border-radius: 5px;
              width: 350px;
              padding: 14px;
              font-size: 16px;
              color: white;
              cursor:pointer;
            }

            .modal-close-button {
              align-self: flex-start;
              font-size: 1.4rem;
              font-weight: 700;
              color: #000;
              cursor: pointer;
              border: none;
              background: transparent;
            }
          `}</style>
        </>,
        document.body
      )
    : null;

export default Modal;
