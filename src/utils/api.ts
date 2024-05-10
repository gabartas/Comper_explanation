import axios from 'axios';
import React from 'react';
import { Method, Suggestion, Target } from './types';
// import profile from './data.json';
import { Texpl } from 'comper_tree_reco_xai';
import TracesManager from '../components/tracesManager/TracesManager';
import { UserId, UserName, groupA, groupB } from '../constants';
// import * as olmBundle from './olm.bundle.js';
//import Utils from "./competency_framework";
const jwt = require('jwt-simple');

//?firstname=Anis&lastname=Zizi&jwt=eyJraWQiOiJ0cmFmZmljIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyb2xlIjoibGVhcm5lciIsImZ3aWQiOiI4MyIsImV4cCI6MTY0MTI4OTg5OCwidXNlciI6ImxhYjRjZS10cmFmZmljLmV4dF9BbmlzLlppemkiLCJ1c2VybmFtZSI6ImV4dF9BbmlzLlppemkifQ.B6zCi5oHAux7gC8B7HUfr-tsnVxMfka7oIbwsP2IFAK4DuO4dNbHMOpw3-a3NhL1RsCIxgtbRZBZwxfDe7qZisBBOFXI1ybLCejSjpWzk10-VKyMtWzX9612Wic73SKXYGiulXpJrzb_OD5umVHJYi3VJEFdUy4A5YJmzoNoXXkQhD64XgwRhPrcEdoJTIsHhyOL-5ve3agPhhOuyrS4C1I9AlqEgL5_iyBQAuy2yd90q7DEmcUdJ9nr7lzt6i-SHJbHn1DVQWNhvFba0kcQd523z3dqb4un_IgzBQb66wb-UQyQleA8WedVgbqRV_b-MHLGXZnMCSSmL2BZXvSYow
// const queryParams = new URLSearchParams(window.location.search);
// const firstName = queryParams.get('firstname');
// const lastName = queryParams.get('lastname');
// const jwtProfile = queryParams.get('jwt');

let usernamelab4ce = UserName;
// if (usernamelab4ce == undefined) {
//   usernamelab4ce = "test";
// }
export const username_lab4ce = usernamelab4ce;
// export const username = "ext_"+firstName+"."+lastName;
//export const username = "ext_user_test";

// export let username ="";

// let xmlrequest = new XMLHttpRequest();
// xmlrequest.open("GET", profilePath, false);
// xmlrequest.send();
// console.log(process.cwd());
// console.log(xmlrequest.status);
// console.log(xmlrequest.responseText);
// export let profile = JSON.parse(JSON.stringify(xmlrequest.responseText));



// const data_profil = {
//   user: "lab4ce-traffic:"+username,
//   username: username,
//   role: "learner",
//   //keyid: "traffic",
//   fwid: "83",
//   exp: Date.now() + 900,
//   //plateform: "traffic"
// };

// const token_profil = jwtProfile;

// URL of localy deployed Lab4ce
// const Lab4ceURL = "https://traffic.irit.fr/lab4ce/rest-global-analytics/experiments/2e61a9e79c394f81aad897fd23302d85/competencies/user-profiles/" + username_lab4ce;
const PATH_TO_PROFILE = "data.json";

export function loadTree(setTargets: React.Dispatch<React.SetStateAction<Target[]>>, setIsShowing: React.Dispatch<React.SetStateAction<boolean>>, setExplanations: React.Dispatch<React.SetStateAction<string>>, setTitle: React.Dispatch<React.SetStateAction<string>>, setCompetencyName: React.Dispatch<React.SetStateAction<string>>, setCompetencyMastery: React.Dispatch<React.SetStateAction<number>>, setUsername: React.Dispatch<React.SetStateAction<string>>, callback: () => void = () => { }) {

  // axios({
  //   method: 'get',
  //   url: PATH_TO_PROFILE,
  //   // headers: { 'x-api-token': 'FEs#sjh2sjha4f$sa', 'Accept': 'application/json'}
  // }).then(res => {

  //  TODO import dynamique du profil local
  // import('./data.json').then(data => {

  // })
  import("../profile.json").then(profile => {

    // @ts-ignore
    document.profile = profile;

    // @ts-ignore
    const OLM = document._OLM;

    const fw_tree = new OLM.CORE.FrameworkTree();

    setUsername(profile.userName);

    const dictionary: { [key: string]: string } = {};
    dictionary.Répéter_des_instructions = "Les <b>boucles</b> permettent d'exécuter plusieurs fois certaines parties de programme sans devoir à chaque fois réécrire les instructions correspondantes.<p> Une boucle peut être écrite avec une instruction <b>for</b> ou avec une instruction <b>while</b>.</p>";
    dictionary.Connaître_la_syntaxe_de_instruction_for = "L'instruction <b>for</b> permet d'implémenter une <b>boucle</b> : elle permet d'exécuter plusieurs fois la même instruction ou série d'instructions. <p>Elle peut être utilisée en particulier lorsque le <b>nombre d'itérations est connu</b>.</p>";
    dictionary.Connaître_la_syntaxe_de_instruction_while = "L'instruction <b>while</b> permet d'implémenter une <b>boucle</b> : elle permet d'exécuter plusieurs fois la même instruction ou série d'instructions. <p>Elle peut être utilisée en particulier lorsque le <b>nombre d'itérations n'est pas connu</b>.</p>";
    dictionary.Manipuler_des_variables = "Les variables sont utilisées dans les scripts Shell et offrent des possibilités supplémentaires pour exécuter des commandes.<p>En effet, elles permettent de <b>stocker temporairement des informations</b> dans le script Shell pour les utiliser avec d'autres commandes du script.</p>";
    dictionary.Connaître_la_syntaxe_de_instruction_set = "La commande <b>set</b> permet d'<b>affecter des valeurs aux paramètres positionnels</b>, ou <b>d’afficher et de définir</b> les noms et les valeurs de <b>variables</b> dans un script Shell.";
    dictionary.Connaître_la_notion_de_variable = "Les variables sont très fréquemment utilisées dans les scripts Shell.<p>Elles permettent de <b>stocker temporairement des informations</b> dans le script Shell pour les réutiliser avec d'autres commandes au sein du script.</p>";
    dictionary.Connaître_les_variables_denvironnement = "Dans les systèmes Linux et Unix, les <b>variables d'environnement</b> sont des variables dynamiques, c'est-à-dire que leur valeur peut changer en fonction de divers paramètres comme l’utilisateur qui les demande.<p>Elles permettent donc de personnaliser le fonctionnement du système et le comportement des applications sur le système.</p><p>Elles peuvent être affichées avec la commande <b>env</b></p>";
    dictionary.Connaître_les_variables_spéciales = "Les variables spéciales sont utilisées pour <b>manipuler les arguments</b> donnés à un script Shell ou à une fonction. <p>$0, $1, $#, $*, $@, $?, $$ ou encore $! sont des exemples de variables spéciales.</p>";
    dictionary.Affecter_une_valeur_à_une_variable = "Affecter une valeur à une variable permet d’initialiser la variable ou de modifier sa valeur, avec la syntaxe de type <b>nomvariable=valeur</b> ou à l'aide de la commande <b>read</b>.";
    dictionary.Obtenir_la_valeur_affectée_à_une_variable = "Le nom d'une variable se distingue de sa valeur. Pour une variable de nom <b>variable1</b>, la <b>valeur affectée à cette variable</b> peut être obtenue et manipulée avec <b>$variable1</b>.";
    dictionary.Afficher_la_valeur_dune_variable = "La commande <b>echo</b> permet d'afficher la valeur contenue dans une variable.";
    dictionary.Interpréter_de_façon_numérique_la_valeur_dune_variable = "Vous aurez parfois besoin en Shell d'effectuer des <b>opérations mathématiques</b> comme l’addition, la soustraction, la multiplication, la division ou le modulo. <p>Pour faire ces opérations, il faut que les variables soient considérées comme des <b>nombres entiers</b>, ce qui n'est pas le cas par défaut. </p><p>Il faut alors utiliser la commande <b>expr</b>. Par exemple : <b>expr 12 + 8</b>.</p>";
    dictionary.Modifier_la_valeur_de_une_variable = "Modifier la valeur affectée à une variable peut se faire avec la syntaxe <b>nomvariable=valeur</b> ou avec la commande <b>read</b>.";
    dictionary.Affecter_une_valeur_à_un_ou_plusieurs_paramètres_de_position = "Dans un script Shell, les paramètres de position sont utilisés pour accéder aux <b>valeurs des arguments qui ont été passés lors de son appel</b>. <p>L'affichage d'un ou plusieurs de ces paramètres peut se faire à l'aide de la commande <b>set</b>.</p>";
    dictionary.Ecrire_des_scripts_interactifs = "Un <b>script interactif</b> est un script qui <b>demande des informations à l'utilisateur</b>, et qui utilise ces informations lors de son exécution.";
    dictionary.Récupérer_des_données_saisies_par_lutilisateur = "La commande <b>read</b> permet de récupérer des données saisies par l'utilisateur pour pouvoir les utiliser dans un script.";
    dictionary.Manipuler_les_paramètres_dun_script = "Un <b>paramètre de script</b> est une information qui est donnée par l'utilisateur au lancement du script, et qui est ensuite disponible durant son exécution.";
    dictionary.Connaître_la_notion_de_paramètre = "Un <b>paramètre de script</b> est une information qui est donnée par l'utilisateur au lancement du script, et qui est ensuite disponible durant son exécution.<p>Les paramètres d'un script sont accessibles à travers le symbole <b>$X</b>, où X correspond au numéro du paramètre.</p>";
    dictionary.Obtenir_la_valeur_de_un_ou_plusieurs_paramètres = "Un <b>paramètre de script</b> est une information qui est donnée par l'utilisateur au lancement du script, et qui est ensuite disponible durant son exécution.<p>Les paramètres d'un script sont accessibles à travers le symbole <b>$X</b>, où X correspond au numéro du paramètre.</p>";
    dictionary.Exécuter_des_commandes_Unix = "Les systèmes d'exploitation de type Unix et Linux permettent à leurs utilisateurs d'utiliser différentes commandes pour modifier l'état du système. <p>Les commandes sont des outils puissants qui peuvent être exécutés directement dans le <b>terminal</b>.</p>";
    dictionary.Connaître_les_commandes_de_base_Unix = "Parmi les commandes Unix de base, on peut compter <b>pwd, cd, ls, mkdir, touch, cp, rm, mv, cat, echo, man</b>.";
    dictionary.Afficher_le_manuel_dune_commande_Unix = "Le manuel d’une commande Unix s’affiche en tapant dans le terminal <b>man nom_de_la_commande</b>. C’est un outil très utile car il vous permet d’apprendre à quoi sert une commande et contient souvent des exemples d’utilisation. <p>Exemple d’utilisation à taper dans le terminal : <b>man chmod</b>.</p>";
    dictionary.Manipuler_des_fichiers_Unix = "Sous Unix, il est possible de manipuler les fichiers depuis le terminal ou dans des scripts Shell à l'aide de <b>diverses commandes qui permettent par exemple de nommer, consulter ou modifier le contenu d'un fichier</b>.";
    dictionary.Connaître_la_notion_de_fichier_Unix = "Sous Unix, <b>tout élément est représenté sous la forme d'un fichier</b>. <p>Il existe différents types de fichiers, et les fichiers sont manipulables avec des commandes. </p>";
    dictionary.Connaître_la_notion_de_redirection_entrée_et_sortie = "Les commandes et programmes peuvent prendre des données en entrée, les manipuler et renvoyer un résultat en sortie. Par défaut, <b>l’entrée standard</b> est ce que vous tapez au clavier, et la sortie standard est ce qui apparaît à l’écran. <p>Le symbole > permet de rediriger la sortie standard dans un fichier : par exemple, la commande <b>echo “hello world”</b> affiche “hello world” sur le terminal, mais la commande <b>echo “hello world” > hello.txt</b> écrit “hello world” dans le fichier hello.txt.</p><p>Le symbole < permet de rediriger l’entrée standard en utilisant un fichier en entrée plutôt que le clavier </p>";
    dictionary.Connaître_la_notion_de_droits_sous_Unix = "Les droits d’accès décrivent, pour un fichier ou un répertoire, quels utilisateurs ont le droit de le <b>lire, l’exécuter ou le modifier</b>. La commande <b>chmod</b> permet de modifier les droits d’accès d’un fichier ou d’un répertoire.<p>Cette notion peut paraître peu importante si vous avez l’habitude d’être le seul utilisateur de votre machine, mais elle est primordiale sous Unix qui est conçu pour être <b>multi-utilisateurs</b>.</p>";
    dictionary.Créer_un_fichier_Unix = "Sous Unix, il est possible de créer des fichiers directement en ligne de commande. <p>La commande <b>touch</b> suivie d’un nom de fichier permet de créer un fichier, par exemple : <b>touch test.txt</b>. Cette commande ne crée que des fichiers vides. </p><p>Pour <b>créer un fichier et le modifier</b>, vous pouvez utiliser la commande <b>nano</b> suivie du nom du fichier.</p>";
    dictionary.Modifier_un_fichier_Unix = "Sous Unix, vous pouvez <b>modifier le contenu d’un fichier</b> en utilisant l’éditeur de texte <b>nano</b>, avec la commande nano suivie du nom du fichier, ou de la même manière avec n’importe quel autre éditeur de texte installé sur votre machine.";
    dictionary.Supprimer_un_fichier_Unix = "La commande <b>rm</b> suivie du nom d’un fichier permet de supprimer <b>définitivement</b> ce fichier. Elle est utile, mais elle doit être utilisée avec précaution ! <p>Pour pouvoir appliquer cette commande à un fichier, vous devez avoir les <b>droits d’écritures</b> sur ce fichier.</p>";
    dictionary.Renommer_un_fichier_Unix = "Il est possible sous Unix de <b>renommer</b> un fichier sans avoir besoin de l’ouvrir, avec une simple ligne de commande dans le terminal. <p>La commande <b>mv toto.txt titi.txt</b> renomme le fichier “toto.txt” en “titi.txt”. Il est intéressant de noter que la commande mv permet également de <b>déplacer des fichiers</b>.</p>";
    dictionary.Modifier_les_droits_dun_fichier_Unix = "Les droits d’accès décrivent, pour un fichier ou un répertoire, quels utilisateurs ont le droit de le <b>lire, l’exécuter ou le modifier</b>. <p>La commande <b>chmod</b> permet de modifier les droits d’accès d’un fichier ou d’un répertoire.</p>";
    dictionary.Afficher_le_contenu_de_un_fichier_Unix = "Il est parfois utile <b>d’afficher rapidement le contenu d’un fichier</b> directement dans le terminal, sans avoir besoin d’ouvrir un éditeur de texte. Les commandes <b>cat</b> ou <b>less</b> suivies du nom du fichier offrent cette possibilité. <p>Attention, ces commandes ne permettent pas de modifier le fichier.</p>";
    dictionary.Substituer_une_commande_par_son_exécution = "Lors de manipulations de commandes sous Unix, il peut arriver que vous ayez besoin d’une <b>résultat d’une commande</b> dans une autre commande. Il est alors utile de savoir remplacer une commande par le résultat de son exécution, en l’entourant avec les `quotes inversées`.";
    dictionary.Connaître_le_caractère_de_substitution_de_commande = "Pour remplacer une commande par le résultat de son exécution, vous pouvez l’entourer de <b>`quotes inversées`</b> (qui sont deux accents graves). <p>Comparez par exemple dans le terminal la différence entre les résultats retournés par la commande <b>echo date</b> et par la commande <b>echo `date`</b>. </p>";
    dictionary.Connaître_la_syntaxe_dollar_parenthesis = "Pour remplacer une commande par le résultat de son exécution, vous pouvez utiliser le symbole <b>$</b> suivi de parenthèses contenant une commande.";
    dictionary.Connaître_la_syntaxe_dollar_cmd = "Pour remplacer une commande par le résultat de son exécution, vous pouvez utiliser le symbole <b>$</b>. <p>Comparez par exemple dans le terminal la différence entre les résultats retournés par la commande <b>echo date</b> et <b>echo $(date)</b>. </p>";
    dictionary.Banaliser_un_caractère = "En Shell, les caractères d'échappement permettent de désactiver les caractères spéciaux.<p>Le <b>backslash</b> banalise le caractère suivant. Les <b>doubles quotes</b> et les <b>simples quotes</b> permettent de banaliser plusieurs caractères à la suite.</p>";
    dictionary.Connaître_la_notion_de_banalisation_de_caractères = "En Shell, vous aurez parfois besoin d'utiliser des caractères sans qu'ils soient interprétés. Pour cela, la banalisation de caractère permet de désactiver les caractères spéciaux. <p> Le <b>backslash </b> banalise le caractère suivant : comparez par exemple les commandes <b> echo $5 </b> et <b> echo \\$5</b>.</p>";
    dictionary.Réaliser_des_calculs_arithmétiques = "Pour effectuer des calculs arithmétiques en Shell, vous devez savoir exécuter les <b>opérations de base </b> comme l’addition, la soustraction, la multiplication, la division ou le modulo.";
    dictionary.Connaître_la_notion_de_expression_arithmétique = "Vous aurez parfois besoin en Shell d'effectuer des <b>opérations</b> comme l’addition, la soustraction, la multiplication, la division ou le modulo. <p>Les <b>expressions arithmétiques</b> sont formées à partir de ces opérateurs arithmétiques.</p>";
    dictionary.Réaliser_des_tests_conditionnels = "Une <b>structure conditionnelle</b> est une structure qui permet d'exécuter des instructions en fonction de conditions fondées sur les valeurs de variables.<p>La commande <b>test</b> permet de tester si une condition est respectée ou non.</p>";
    dictionary.Connaître_la_syntaxe_CrochetCrochet = "En Shell, dans une structure conditionnelle, la condition à respecter se situe entre crochets, par exemple de la manière suivante : <b>if [ $variable -gt 5 ]...</b>. <p>Attention à bien respecter les espaces entre la condition et les crochets !</p>";
    dictionary.Connaître_les_opérateurs_logiques = "Les opérateurs logiques permettent de <b>combiner des conditions</b> pour en former de nouvelles, plus complexes.<p>L'opérateur ET s'écrit <b>&&</b>, et l'opérateur OU s'écrit <b>||</b>.";
    dictionary.Connaître_la_syntaxe_IfThenElifElse = "En Shell, l'instruction <b>if...then...else...fi</b> est une structure de contrôle qui permet d'exécuter des <b>instructions différentes</b> en fonction de la validité d'une condition.</p>";
    dictionary.Connaître_les_opérateurs_de_comparaison_numérique = "Un opérateur de comparaison permet de <b>comparer deux variables</b>.<p><b>-eq, -ne, -gt, -ge, -lt, -le</b> permettent en Shell de comparer des nombres entiers.</p><p>Les opérateurs sont souvent utilisés dans les structures conditionnelles.</p>";
    dictionary.Connaître_les_tests_détat_de_fichier = "La commande <b>test expression</b> ou <b>[ expression ]</b> permet de tester la valeur des attributs d’un fichier ou le contenu d’une variable. <p>Elle est très utile pour <b>créer des conditions</b> avec la structure de contrôle <b>if</b>.</p><p><b>-e</b> permet de savoir si un fichier existe.</p><p><b>-r</b> permet de savoir si un fichier existe et s'il est accessible en lecture.</p><p><b>-w</b> permet de savoir si un fichier existe et s'il est accessible en écriture.</p><p><b>-x</b> permet de savoir si un fichier existe et s'il est exécutable.</p>";
    dictionary.Connaître_les_opérateurs_de_comparaison_de_caractères = "Un opérateur de comparaison permet de <b>comparer deux variables</b>.<p><b>car1=car2</b> utilisé avec la commande <b>test</b> retourne vrai si les caractères <b>car1</b> et <b>car2</b> sont identiques.</p><p><b>car1!=car2</b> utilisé avec la commande <b>test</b> retourne vrai si les caractères <b>car1</b> et <b>car2</b> sont différents.</p>";
    dictionary.Comparer_des_nombres = "Les opérateurs de comparaison permettent de <b>comparer deux variables</b>.<p><b>-eq, -ne, -gt, -ge, -lt, -le</b> permettent en Shell de comparer des nombres entiers.</p>";
    dictionary.Tester_létat_dun_fichier = "La commande <b>test expression</b> ou <b>[ expression ]</b> permet de tester la valeur des attributs d’un fichier ou le contenu d’une variable. <p>Elle est très utile pour <b>créer des conditions</b> avec la structure de contrôle <b>if</b>.</p><p><b>-e</b> permet de savoir si un fichier existe.</p><p><b>-r</b> permet de savoir si un fichier existe et s'il est accessible en lecture.</p><p><b>-w</b> permet de savoir si un fichier existe et s'il est accessible en écriture.</p><p><b>-x</b> permet de savoir si un fichier existe et s'il est exécutable.</p>";
    dictionary.Comparer_des_chaînes_de_caractères = "Les opérateurs de comparaison permettent de <b>comparer deux variables</b>.<p> Pour les chaînes de caractères, <b>str1=str2</b> utilisé avec la commande <b>test</b> retourne vrai si les chaînes de caractères <b>str1</b> et <b>str2</b> identiques.</p><p><b>str1!=str2</b> utilisé avec la commande <b>test</b> retourne vrai si les chaînes de caractères <b>str1</b> et <b>str2</b> sont différentes.</p>";
    dictionary.Exécuter_de_manière_sélective_des_commandes = "En Shell, il peut être utile de <b>distinguer des cas</b> et d'effectuer des instructions différentes selon les cas. <p>L'instruction <b>case...esac</b> permet d'exécuter des <b>instructions différentes</b> en fonction d'un choix de différentes valeurs.</p>";
    dictionary.Connaître_la_syntaxe_de_instruction_case = "En Shell, l'instruction <b>case...esac</b> est une instruction de contrôle qui permet d'exécuter des <b>instructions différentes</b> en fonction d'un choix de différentes valeurs. <p>Elle joue un rôle similaire à celui de la structure de contrôle <b>if</b>, mais elle est plus adaptée lorsqu'il y a un <b>nombre important de choix</b>.</p>";
    dictionary.Générer_une_séquence_de_nombres = "Sous Unix, il existe une commande permettant de <b>générer une séquence de nombres</b> : la commande <b>seq</b>. <p>Cette commande s'utilise avec ou sans options et avec un nombre d'arguments allant de 1 à 3.</p>";
    dictionary.Connaître_la_syntaxe_de_instruction_seq = "Pour <b>générer une séquence de nombres</b> avec la commande <b>seq</b>, il faut rentrer 1 à 3 arguments à la suite de l'instruction set.<p>Par exemple, l'instruction <b>seq 1 2 100</b> permet de générer une séquence allant de 1 à 100 avec un pas de 2.</p>";

    let isStudentWithSystemExplanations: boolean = false;
    let isStudentWithPedagogicalExplanations: boolean = true;
    let controlGroup = ['LMS3943A', 'BRM3832A', 'DLJ4811A', 'MWM4504A', 'JSM4544A', 'VSC4021A', 'BSR4256A', 'LKM3964A', 'FLB4847A', 'GWG3447A', 'NSN4427A', 'PDL4618A', 'BDM4667A', 'BNM4157A', 'BRT4455A', 'GHS4207A', 'HFM2303A', 'MLS4327A', 'HHM4670A', 'HMS4562A', 'RNP4346A', 'RCC4609A', 'TMK4839A', 'BRS4742A', 'LSN4866A', 'MRM4522A', 'MNB4745A', 'NBZ4573A', 'VSC4851A', 'LLM4810A', 'BLD4714A', 'BZL4613A', 'GRS4442A', 'LVD4672A', 'MKD3945A', 'GRM4453A', 'RDL3013A', 'SDC3528A', 'TVD4678A', 'GGM4563A', 'GRN4207A', 'LWC4343A', 'LMM4181A', 'MNL4757A', 'TGC4692A', 'HWN4623A', 'RRN4621A', 'MLW4995A', 'BMS4619A', 'BRQ4365A', 'BCL4189A'];
    let systemOnlyGroup = ['EFELIX', 'JBROISIN', 'RVENANT', 'BJJ4646A', 'BDR4233A', 'CSN3362A', 'KTD4299A', 'KHN4685A', 'LNC4784A', 'LRM3744A', 'GRS4750A', 'HRS4641A', 'MRM4197A', 'STM4409A', 'WTL4660A', 'BRB4515A', 'BRV2453A', 'CMT4601A', 'GTN4872A', 'KHC4298A', 'ZBM4580A', 'BDM4871A', 'BRR4274A', 'HSF4707A', 'NVL4584A', 'RPD3994A', 'RLJ4322A', 'BNL4835A', 'MBT4589A', 'KJG4556A', 'NGM4830A', 'SHN4560A', 'RMS4619A', 'BSR4521A', 'FVH4576A', 'GRT4487A', 'GLK4599A', 'PJM4634A', 'BDM4791A', 'DLN4488A', 'HMH4712A', 'LVT4735A', 'SLT4641A', 'TRJ4489B', 'BSS4299A', 'BGN4484A', 'DNL4751A', 'KRZ3517A', 'LBW4747A', 'MNM4436A', 'RZH4535A', 'LFM4686A'];
    let pedagogicalOnlyGroup = ['EFELIX', 'JBROISIN', 'RVENANT', 'BNR4479A', 'CZC4277A', 'DLM4504A', 'NNH4810A', 'RNM4323B', 'SRN4508A', 'CLT4671A', 'CRR4715A', 'GRR4617A', 'LCT4130A', 'MRD4502A', 'MRS4228B', 'BNN4521A', 'DRL4487A', 'GJM3956A', 'JRL4766A', 'LRF4482A', 'VCV3746A', 'BLT4720A', 'DLN4047B', 'LMC4718A', 'LGT4812A', 'RZM0948A', 'SRR5125A', 'LDC4814A', 'ZMD4757A', 'KSS3708A', 'PHN4372A', 'RSP4626A', 'TTL4851A', 'CRN4750A', 'GKC4601A', 'HRT4535A', 'LMN4867A', 'STJ4639A', 'LMH3922A', 'BLC4265A', 'FRN4556A', 'MRD4654A', 'RVR4467A', 'LNL4073A', 'BGC4401A', 'BSS4476A', 'BRT4900A', 'CRL4551A', 'GGJ4320A', 'PLL4315A', 'CRR4518A', 'PGS3938A'];

    let comp_masteries = new Map<string, number>();
    for (let i = 0; i < profile.objects.length; i++) {
      // profile.objects[i].explanation = "Maîtriser cette compétence vous aidera à progresser en administration système."; //+ res.data.objects[i].name;
      comp_masteries.set(profile.objects[i].name, profile.objects[i].mastery);
    }

    fw_tree.buildFromFramework(profile);

    // var js = JSON.parse(JSON.stringify(framework_louis))
    // for (const key in js.objects) {
    //   var name_comp = js.objects[key].name;
    //   if (comp_masteries.get(name_comp) !== undefined){
    //     js.objects[key].mastery = comp_masteries.get(name_comp);
    //   }
    //   //console.log(`${key}: ${js.default.objects[key].mastery}`);
    // }

    /*
    if ((username in systemOnlyGroup) || (username in allExplanationsGroup)) { //TODO list of student with system explanations
      isStudentWithSystemExplanations = true;
    } else {
      isStudentWithSystemExplanations = false;
    }

    if ((username in pedagogicalOnlyGroup) || (username in allExplanationsGroup)){ // TODO list of students with pedagogical explanations
      isStudentWithPedagogicalExplanations = true;
    } else {
      isStudentWithPedagogicalExplanations = false;
    }
    */

    /*let upper_username = username_lab4ce.toUpperCase();
    upper_username = "EFELIX";
    if (systemOnlyGroup.includes(upper_username)) {
      isStudentWithSystemExplanations = true;
    }

    if (pedagogicalOnlyGroup.includes(upper_username)) {
      isStudentWithPedagogicalExplanations = true;
    }*/
    if(groupA.includes(UserId) || groupB.includes(UserId)){
      isStudentWithSystemExplanations = true;
      isStudentWithPedagogicalExplanations = true;
    }


    // Tree
    const config2 = {
      "fontHoverColor": "rgba(255, 255, 255, 1)",
      "fontColor": "rgba(255, 255, 255, .85)",
      "colors": [
        {
          "to": 0.25,
          "color": "#cf000f"
        },
        {
          "to": 0.5,
          "color": "#f57f17"
        },
        {
          "to": 0.75,
          "color": "#ffee58"
        },
        {
          "color": "#4caf50"
        }
      ],
      "noValueColor": "#808080",
      "showMastery": true,
      "showTrust": false,
      "showCover": false,
      "formatMastery": "percentage",
      "formatTrust": "percentage",
      "formatCover": "percentage"
    };

    let treeContainer = document.getElementById('profileTreeView')!;
    treeContainer.innerHTML = "";
    const treeIndented = new OLM.TreeIndented(document.getElementById('profileTreeView'), fw_tree, config2);

    if (isStudentWithSystemExplanations == true) {
      treeIndented.i18n = {
        'fr': {
          'headers': {
            'cover': 'couverture',
            'mastery': 'maîtrise',
            'trust': 'confiance',
          },
          'information': {
            'mastery': {
              'name': 'Taux de maîtrise (mis à jour en temps réel)',
              'description': '<p>Le taux de maîtrise est calculé à partir d\'un <b>algorithme</b> qui récupère le code et les commandes que vous tapez sur Lab4CE.</p> <p>L\'algorithme cherche ensuite des <b>motifs</b> dans votre code et fait <b>monter votre niveau de maîtrise des compétences</b> en conséquence.</p> <p>Par exemple, la maîtrise de la compétence "Connaître la syntaxe de l\'instruction seq" augmentera si l\'algorithme trouve des instructions <b>seq</b> valides dans vos commandes ou votre code.</p>'
            },
            'trust': {
              'name': '',
              'description': ''
            },
            'cover': {
              'name': '',
              'description': ''
            }
          }
        }
      };
    } else {
      treeIndented.i18n = {
        'fr': {
          'headers': {
            'cover': 'couverture',
            'mastery': 'maîtrise',
            'trust': 'confiance',
          },
          'information': {
            'mastery': {
              'name': 'Taux de maîtrise (mis à jour en temps réel)',
              'description': '<p>Le taux de maîtrise est une valeur qui est d\'autant plus élevée que la compétence est maîtrisée.</p>'
            },
            'trust': {
              'name': '',
              'description': ''
            },
            'cover': {
              'name': '',
              'description': ''
            }
          }
        }
      };
    }


    //clean localStorage on load to remove objectives
    // localStorage.setItem('targets', '[]');

    treeIndented.onClickMastery = (node: any) => {
      setCompetencyName(node.src.data.name);
      setCompetencyMastery(node.src.data.mastery);


      if (node.src.data.name !== undefined) {

        //Nouvel envoi de traces ESTHER, vérifie si ça te vas!
        TracesManager.generateActionTrace("AskedForMasteryExplanation", "NodeDetails", "NodeDetails", "the node name and mastery", { nodeName: node.src.data.name, nodeMastery: node.src.data.mastery });

        // API POST request for system explanations OLD REQUEST
        // fetch('https://traffic.irit.fr/lab4ce/rest-global-analytics/traces/srl', {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //     'x-api-token': 'FEs#sjh2sjha4f$sa'
        //   },
        //   body: JSON.stringify({
        //     content: JSON.stringify({
        //     username: username_lab4ce,
        //     expId: '2e61a9e79c394f81aad897fd23302d85',
        //     type: 'hasOpenedExplanation',
        //     explanationType: "system",
        //     expName: 'R104-2022',
        //     nameCompetence: node.src.data.name,
        //     mastery: node.src.data.mastery})
        //   })
        // });

        setIsShowing(true);
        let title = node.src.data.name;
        title = title.replaceAll('_instruction_', ' l\'instruction ');
        title = title.replaceAll('de_un', 'd\'un');
        title = title.replaceAll('dollar_cmd', '$(cmd)');
        title = title.replaceAll('dollar_parenthesis', '$(( ... ))');
        title = title.replaceAll('dun', 'd\'un');
        title = title.replaceAll('_', ' ');
        title = title.replaceAll('CrochetCrochet', '[ ]');
        title = title.replaceAll('détat', 'd\'état');
        title = title.replaceAll('IfThenElifElse', 'if/then/elif/else');
        title = title.replaceAll('létat', 'l\'état');
        title = title.replaceAll('denvironnement', 'd\'environnement');
        title = title.replaceAll('lutilisateur', 'l\'utilisateur');

        node.src.data.explanation = "Ce taux donne une indication de votre maîtrise actuelle de la compétence " + "\"" + title + "\". <p>Les taux se mettent à jour lorsque vous travaillez sur Lab4CE.</p>";
        setTitle("Taux de maîtrise de la compétence ");

        if (isStudentWithSystemExplanations) { //TODO ajouter la condition de groupe
          setTitle("Explication de la compétence ");

          if (node.src.data.mastery == 0) {
            if (node.src.data.explanationforbeginners !== undefined && node.src.data.explanationforbeginners[0] != null) {
              node.src.data.explanation = "Le taux de maîtrise de cette compétence augmentera lorsque vous taperez des commandes ou des scripts liés à cette compétence. " + node.src.data.explanationforbeginners[0] + "</p>";
            }
            else {
              node.src.data.explanation = "Le taux de maîtrise de cette compétence augmentera lorsque vous taperez des commandes ou des scripts liés à cette compétence.";
            }
          }
          if ((node.src.data.mastery > 0) && (node.src.data.evaluationResult !== undefined)) { //not a parent node

            if (node.src.data.evaluationResult[0] !== undefined) {
              /*let i = 0;
              while (node.src.data.evaluationResult.matchesForRegex[0].matches[0].syntaxCorrect != true) { //find a regex with correct syntax
                i = i + 1;
              }*/
              if (node.src.data.mastery < 0.75) {

                node.src.data.explanation = "Bravo, vous avez commencé à maîtriser cette compétence car vous avez utilisé de manière correcte certaines commandes ou instructions dans votre code. <p>Voici un <b>extrait de votre code</b> qui a contribué à faire <b>monter votre taux de maîtrise</b> pour cette compétence :</p>" + "<p><code>" + node.src.data.evaluationResult[0] + "</code></p><p>Continuez à vous <b>exercer sur Lab4CE</b> pour monter encore votre maîtrise de cette compétence !</p>";
              }
              if (node.src.data.mastery > 0.75) {
                node.src.data.explanation = "Bravo, vous avez une <b>bonne maîtrise</b> de cette compétence car vous avez utilisé dans votre code suffisamment d'instructions correctes correspondant à cette compétence. <p>Voici un <b>extrait de votre code</b> qui a contribué à faire <b>monter votre taux de maîtrise</b> pour cette compétence :</p>" + "<p><code>" + node.src.data.evaluationResult[0] + "</code></p><p>Continuez à <b>pratiquer régulièrement</b> pour consolider vos acquis !</p>";
              }
            }
          
          else { // parent node
            if ((node.src.data.mastery > 0) && (node.src.data.mastery < 0.75)) {
              node.src.data.explanation = "Bravo, vous avez commencé à maîtriser cette compétence car vous avez augmenté le taux de maîtrise des <b>sous-compétences associées</b>.<p></p>";
            }
            if (node.src.data.mastery > 0.75) {
              node.src.data.explanation = "Bravo, vous avez une <b>bonne maîtrise</b> de cette compétence car vous avez des scores élevés dans les <b>sous-compétences associées</b>. <p>Continuez à <b>pratiquer régulièrement</b> pour consolider vos acquis !</p>";
            }
          }
          }
        }
        setExplanations(node.src.data.explanation);
      }
    }

    let timer: NodeJS.Timeout;
    treeIndented.onClick = (node: any, evt: any) => {
      setCompetencyName(node.data.name);
      setCompetencyMastery(node.data.mastery);


      if (evt.detail === 1) {
        timer = setTimeout(() => {
          if (node.data.type !== "framework") {
            
            if ((isStudentWithPedagogicalExplanations == true) && (node.data.name in dictionary)) {
              setIsShowing(true);
              let str: string = node.data.name;
              node.data.explanation = dictionary[str];
              setExplanations(node.data.explanation);
              setTitle("Explication de la compétence ");
              TracesManager.generateActionTrace("SimpleClickedOnNode", node.data.name, "node", "the clicked node", {text: node.data.explanation});
            }
            else {
              setIsShowing(true);
              let title = node.data.name;
              title = title.replaceAll('_instruction_', ' l\'instruction ');
              title = title.replaceAll('de_un', 'd\'un');
              title = title.replaceAll('dollar_cmd', '$(cmd)');
              title = title.replaceAll('dollar_parenthesis', '$(( ... ))');
              title = title.replaceAll('dun', 'd\'un');
              title = title.replaceAll('_', ' ');
              title = title.replaceAll('CrochetCrochet', '[ ]');
              title = title.replaceAll('détat', 'd\'état');
              title = title.replaceAll('IfThenElifElse', 'if/then/elif/else');
              title = title.replaceAll('létat', 'l\'état');
              title = title.replaceAll('denvironnement', 'd\'environnement');
              title = title.replaceAll('lutilisateur', 'l\'utilisateur');
              let no_explanation = "Utilisez Lab4CE pour vous exercer et maîtriser la compétence \"" + title + "\".";
              setExplanations(no_explanation);
              let end_title = "Compétence ";//+"\""+title+"\"";
              setTitle(end_title);
              TracesManager.generateActionTrace("SimpleClickedOnNode", node.data.name, "node", "the clicked node", {text: no_explanation});
            }
            
          }
        }, 200)
      } else if (evt.detail === 2) {
        clearTimeout(timer);

        const targets: Target[] = JSON.parse(localStorage.getItem('targets') ?? '[]');
        if (node.data.type !== "framework") { //we can't add the framework object as an objective
          let found = false;
          for(let t of targets){
            if (t.name === node.data.name){
              found = true;
              break;
            }
          }
          if(!found){
            let target = {
              active: true,
              name: node.data.name,
              mastery: node.data.mastery,
              reviewPeriods: []
            };
            targets.push(target);
            setTargets(targets);
            TracesManager.generateActionTrace("addedATarget", "targetDetail", "targetDetails", "the added target", {target: target});
          }
        }
      }
    }

    treeIndented.draw();
    let svgs = document.getElementById('profileTreeView').getElementsByTagName('svg');
    let element = svgs[0].parentElement;
    element.addEventListener("mouseenter", (event) => {
      TracesManager.generateActionTrace("HoveredInerrogationPoint", "InterrogationPoint", "htmlElement", "the interrogation point at the top right of the profile display", {});
    });
    element.addEventListener("mouseleave", (event) => {
      TracesManager.generateActionTrace("LeftInerrogationPoint", "InterrogationPoint", "htmlElement", "the interrogation point at the top right of the profile display", {});
    });

    const targets = document.getElementById('profileTreeView')?.getElementsByTagName('span');
    if (targets) {
      for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        target.innerText = target.innerText.replaceAll('_instruction_', ' l\'instruction ');
        target.innerText = target.innerText.replaceAll('de_un', 'd\'un');
        target.innerText = target.innerText.replaceAll('dollar_cmd', '$(cmd)');
        target.innerText = target.innerText.replaceAll('dun', 'd\'un');
        target.innerText = target.innerText.replaceAll('dollar_parenthesis', '$(( ... ))');
        target.innerText = target.innerText.replaceAll('_', ' ');
        target.innerText = target.innerText.replaceAll('CrochetCrochet', '[ ]');
        target.innerText = target.innerText.replaceAll('détat', 'd\'état');
        target.innerText = target.innerText.replaceAll('IfThenElifElse', 'if/then/elif/else');
        target.innerText = target.innerText.replaceAll('létat', 'l\'état');
        target.innerText = target.innerText.replaceAll('denvironnement', 'd\'environnement');
        target.innerText = target.innerText.replaceAll('lutilisateur', 'l\'utilisateur');
      }
    }
    //   }).catch(error => {
    //     console.log('error :', error);
    // return treeIndented;
    callback();
  });

}

// const comperOlm = "https://comper.projet.liris.cnrs.fr/sites/profile-engine/api/profile/to-olm/index.php";

// export function loadSunBurst() {
//   axios({
//     method: 'get',
//     url: comperOlm,
//     headers: { Authorization: 'Bearer ' + token_profil }
//   }).then(res => {
//     // @ts-ignore
//     const OLM = document._OLM;

//     const fw_tree = new OLM.CORE.FrameworkTree();
//     fw_tree.buildFromFramework(res.data);

//     // Sunburst

//     const config = {
//       "fontColor": "rgba(255, 255, 255, .85)",
//       "formatMastery": "percentage",
//       "formatTrust": "percentage",
//       "formatCover": "percentage",
//       "useHash": true,
//       "hashTreshold": 0.1,
//       "useLegend": true,
//       "colors": [
//         {
//           "to": 0.25,
//           "color": "#cf000f"
//         },
//         {
//           "to": 0.5,
//           "color": "#f57f17"
//         },
//         {
//           "to": 0.75,
//           "color": "#ffee58"
//         },
//         {
//           "color": "#4caf50"
//         }
//       ],
//       "noValueColor": "#808080"
//     };

//     const treeSunburst = new OLM.TreeSunburst(document.getElementById('profileSunBurstView'), fw_tree, config);

//     //Ne fonctionne pas avec la vue SunBurst
//     // @ts-ignore
//     treeSunburst.onClick = node => {
//       console.log(node);
//     };

//     treeSunburst.draw();
//   }).catch(error => {
//     console.log('erro', error);
//   });
// }

//deployed
// const comperSuggestions = "https://traffic.irit.fr/comper/recommendations/api/generateFromProfile/";
//local
const comperSuggestions = "http://127.0.0.1:4000/api/generateFromProfile/";
// const privateKey = "-----BEGIN RSA PRIVATE KEY-----\n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\n-----END RSA PRIVATE KEY-----\n";
const privateKey = "-----BEGIN RSA PRIVATE KEY-----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-----END RSA PRIVATE KEY-----";
//we can catch the infos from the request profile to avoid code duplication


export function refreshSuggestions(defaultMethod: Method, setSuggestions: React.Dispatch<React.SetStateAction<Suggestion[]>>, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) {


  // @ts-ignore
  let username = document.profile.userName;
  const dataBase = {
    user: "asker:" + username,
    username: username,
    role: "learner",
    keyid: "traffic",
    fwid: "83",
    exp: Date.now() + 900,
    plateform: "asker"
  };

  const targets: Target[] = JSON.parse(localStorage.getItem('targets') ?? '[]');
  //only use active = true
  const activeTargets = targets;
  // @ts-ignore
  const profile = document.profile

  if (activeTargets.length > 0) {
    for (let i = 0; i < activeTargets.length; i++) {
      if (activeTargets[i].name == "Connaître_la_syntaxe_dollar_parenthesis") {
        activeTargets[i].name = "Connaître_la_syntaxe_dollar((__))";
      }
      if (activeTargets[i].name == "Connaître_la_syntaxe_dollar_cmd") {
        activeTargets[i].name = "Connaître_la_syntaxe_dollar(cmd)";
      }
    }
    // const objectives = activeTargets.map(target => [target.name, target.method_id ?? defaultMethod.id]);
    const objectives = activeTargets.map(target => [target.name, "Revision"]);
    // objectives.forEach(function (objective) {
    //   // if (objective[1] == "Perfectionnement") {
    //   //   objective[1] = "Revision"
    //   // }
    //   if (objective[1] == "Pre_requis") {
    //     objective[1] = "Decouverte"
    //   }
    // })
    objectives.push(["sendTraces", ""]);


    const data = {
      ...dataBase,
      "objectives": objectives
    };

    TracesManager.generateActionTrace("AskedForReco", "Targets", "sent_objectives", objectives.toString(), targets);

    const token = jwt.encode(data, privateKey, 'RS256');

    axios({
      method: 'POST',
      url: comperSuggestions,
      headers: { "Authorization": "Bearer " + token, "Accept": "application/json", "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      data: JSON.stringify(profile)
    }).then(res => {
      setIsLoading(current => false);
      let btn =  (document.getElementById("loadRecoButton") as HTMLInputElement);;
      btn.innerText = "Charger les recommandations";
      btn.style.backgroundColor = "#61ba5e";
      btn.disabled = false;
      // console.log("suggestions :", res.data.recommandation);
      setSuggestions(res.data.recommandation);
      // setTraces(res.data.traces);
      Texpl.getInstance().setRecoTraceText(res.data.traces);

      if(groupB.includes(UserId)){
        let suggestion = res.data.recommandation[0];
        let nobj:number = +suggestion.nobj;
        TracesManager.generateActionTrace("ExplanationGeneratedAutomatically", "explDetails", "explDetails", "the explained resource", {nobj: suggestion.nobj, suggestion: suggestion});
        Texpl.getInstance().setIndentedTree(document.getElementById('profileTreeView')!);
        Texpl.getInstance().initializeExpl(nobj, suggestion.id);
      }
    }).catch(error => {
      console.log('error', error);
    });
  }
}

//deployed
const comperLogResources = "https://traffic.irit.fr/comper/recommendations/api/logResourceConsultation/";
//local
//const comperLogResources = "http://127.0.0.1:3000/api/logResourceConsultation/";

//we can catch the infos from the request profile to avoid code duplication


export function logResourcesConsultation(idResource: string, urlResource: string, timestamp: string) {

  // @ts-ignore
  let username = document.profile.userName;

  const dataResources = {
    username: username,
    role: "learner",
    keyid: "traffic",
    fwid: "83",
    exp: Date.now() + 900
  };

  const data = {
    ...dataResources,
    idResource: idResource,
    urlResource: urlResource,
    timestamp: timestamp
  };

  const token = jwt.encode(data, privateKey, 'HS256');

  fetch('https://traffic.irit.fr/lab4ce/rest-global-analytics/traces/srl', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-api-token': 'FEs#sjh2sjha4f$sa'
    },
    body: JSON.stringify({
      content: JSON.stringify({
        username: username_lab4ce,
        expId: '2e61a9e79c394f81aad897fd23302d85',
        type: 'hasAccessedResource',
        expName: 'R104-2022',
        idResource: idResource,
        urlResource: urlResource,
        timestudent: timestamp
      })
    })
  });

  axios({
    method: 'put',
    url: comperLogResources,
    headers: { "Authorization": "Bearer " + token, "Access-Control-Allow-Origin": "*" }
  }).then(res => {
    //console.log(objectives);
    console.log("Logconsultation done");
  }).catch(error => {
    console.log('erro Logconsultation', error);
  });
}