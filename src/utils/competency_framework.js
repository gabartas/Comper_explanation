export default class Utils {
    /**
     * @returns {{objects : Array<FrameworkNode>}}, a test framework from real application.
     */
    static getFrameworkSample() {
        return {
                "frameworkId": 83,
                "frameworkName": "Programmer_en_langage_Shell",
                "objects": [
                  {
                    "name": "Connaître_la_notion_de_banalisation_de_caractères",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Substituer_une_commande_par_son_exécution"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*\\\\.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Cher utilisateur quel est ton prénom \\?\nread prenom\necho Ravi de te connaitre, $prenom\necho Quel est ton nom et ton age \\?\nread nom age\necho Tu es $prenom $nom et tu as $age ans, n\\'est ce pas \\?\nread reponse\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Nous sommes le \"'date'\"\necho Nous sommes le \ntime=\"fr_FR.UTF-8\" date\necho -e \"Ceci est \\n une très \\n longue phrase...\"\necho Voici une étoile: '*'\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": ".*'.*'.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Mon nom de login est: $USER\necho Mon shell est: $0\necho 'Les variables du sheel sont:'\nset\necho 'Celles d''environnement sont:'\nenv\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Nous sommes le \"'date'\"\necho Nous sommes le \ntime=\"fr_FR.UTF-8\" date\necho -e \"Ceci est \\n une très \\n longue phrase...\"\necho Voici une étoile: '*'\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": ".*\".*\".*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Nous sommes le \"'date'\"\necho Nous sommes le \ntime=\"fr_FR.UTF-8\" date\necho -e \"Ceci est \\n une très \\n longue phrase...\"\necho Voici une étoile: '*'\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Afficher_le_manuel_dune_commande_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Exécuter_des_commandes_Unix"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Réaliser_des_calculs_arithmétiques",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [],
                      "hasSkill": [
                        "Connaître_la_notion_de_expression_arithmétique",
                        "Connaître_la_syntaxe_dollar((__))",
                        "Interpréter_de_façon_numérique_la_valeur_dune_variable"
                      ],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0.8999999999999999,
                    "evaluationResult": null
                  },
                  {
                    "name": "Connaître_la_syntaxe_de_instruction_for",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Répéter_des_instructions"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Connaître_les_opérateurs_de_comparaison_numérique",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Réaliser_des_tests_conditionnels"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Afficher_la_valeur_dune_variable",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_variables"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": "(.*;)?echo ([^;]* )?\\$\\w+.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Cher utilisateur quel est ton prénom \\?\nread prenom\necho Ravi de te connaitre, $prenom\necho Quel est ton nom et ton age \\?\nread nom age\necho Tu es $prenom $nom et tu as $age ans, n\\'est ce pas \\?\nread reponse\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Mon nom de login est: $USER\necho Mon shell est: $0\necho 'Les variables du sheel sont:'\nset\necho 'Celles d''environnement sont:'\nenv\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Le script $0 possède $# paramètre, que voici: $*\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Je suis le script Shell $0\necho Mes arguments sont $*\necho Le premier argument est $1\necho Le deuxième argument est $2\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho cours\ncours=unix\necho $cours\necho je suis au cours $cours\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\nexport PATH=$PATH:$HOME\necho $PATH\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": "(.*;)?echo \\$\\(\\(.*\\)\\).*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho $(($1 + 1))\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Connaître_la_notion_de_fichier_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_fichiers_Unix"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Connaître_la_notion_de_redirection_entrée_et_sortie",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_fichiers_Unix"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0.7,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*&?>?>.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\ncat $1 $2 >> $3\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Supprimer_un_fichier_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_fichiers_Unix"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Générer_une_séquence_de_nombres",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [],
                      "hasSkill": [
                        "Connaître_la_syntaxe_de_instruction_seq"
                      ],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": null
                  },
                  {
                    "name": "Connaître_les_commandes_de_base_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Exécuter_des_commandes_Unix"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Réaliser_des_tests_conditionnels",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [],
                      "hasSkill": [
                        "Connaître_la_syntaxe_CrochetCrochet",
                        "Connaître_les_opérateurs_logiques",
                        "Connaître_la_syntaxe_IfThenElifElse",
                        "Connaître_les_opérateurs_de_comparaison_numérique",
                        "Connaître_les_tests_détat_de_fichier",
                        "Connaître_les_opérateurs_de_comparaison_de_caractères",
                        "Comparer_des_nombres",
                        "Tester_létat_dun_fichier"
                      ],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": null
                  },
                  {
                    "name": "Connaître_la_syntaxe_de_instruction_case",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Exécuter_de_manière_sélective_des_commandes"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Renommer_un_fichier_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_fichiers_Unix"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Manipuler_des_fichiers_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [],
                      "hasSkill": [
                        "Connaître_la_notion_de_fichier_Unix",
                        "Connaître_la_notion_de_redirection_entrée_et_sortie",
                        "Connaître_la_notion_de_droits_sous_Unix",
                        "Créer_un_fichier_Unix",
                        "Modifier_un_fichier_Unix",
                        "Supprimer_un_fichier_Unix",
                        "Renommer_un_fichier_Unix",
                        "Modifier_les_droits_dun_fichier_Unix",
                        "Afficher_le_contenu_de_un_fichier_Unix"
                      ],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0.3111111111111111,
                    "evaluationResult": null
                  },
                  {
                    "name": "Connaître_la_notion_de_droits_sous_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_fichiers_Unix"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Connaître_les_variables_spéciales",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_variables",
                        "Manipuler_les_paramètres_dun_script"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*\\$#.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Le script $0 possède $# paramètre, que voici: $*\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": ".*\\$0.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Mon nom de login est: $USER\necho Mon shell est: $0\necho 'Les variables du sheel sont:'\nset\necho 'Celles d''environnement sont:'\nenv\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Le script $0 possède $# paramètre, que voici: $*\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Je suis le script Shell $0\necho Mes arguments sont $*\necho Le premier argument est $1\necho Le deuxième argument est $2\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": ".*\\$\\*.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Le script $0 possède $# paramètre, que voici: $*\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Je suis le script Shell $0\necho Mes arguments sont $*\necho Le premier argument est $1\necho Le deuxième argument est $2\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Obtenir_la_valeur_affectée_à_une_variable",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_variables"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*\\$\\w+.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Cher utilisateur quel est ton prénom \\?\nread prenom\necho Ravi de te connaitre, $prenom\necho Quel est ton nom et ton age \\?\nread nom age\necho Tu es $prenom $nom et tu as $age ans, n\\'est ce pas \\?\nread reponse\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Mon nom de login est: $USER\necho Mon shell est: $0\necho 'Les variables du sheel sont:'\nset\necho 'Celles d''environnement sont:'\nenv\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Le script $0 possède $# paramètre, que voici: $*\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Je suis le script Shell $0\necho Mes arguments sont $*\necho Le premier argument est $1\necho Le deuxième argument est $2\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho cours\ncours=unix\necho $cours\necho je suis au cours $cours\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\ncat $1 $2 >> $3\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\nexport PATH=$PATH:$HOME\necho $PATH\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho $(($1 + 1))\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Connaître_les_opérateurs_de_comparaison_de_caractères",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Réaliser_des_tests_conditionnels"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Comparer_des_nombres",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Réaliser_des_tests_conditionnels"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Obtenir_la_valeur_de_un_ou_plusieurs_paramètres",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_les_paramètres_dun_script"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*\\$\\*.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Le script $0 possède $# paramètre, que voici: $*\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Je suis le script Shell $0\necho Mes arguments sont $*\necho Le premier argument est $1\necho Le deuxième argument est $2\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": ".*\\$\\d.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Mon nom de login est: $USER\necho Mon shell est: $0\necho 'Les variables du sheel sont:'\nset\necho 'Celles d''environnement sont:'\nenv\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Le script $0 possède $# paramètre, que voici: $*\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Je suis le script Shell $0\necho Mes arguments sont $*\necho Le premier argument est $1\necho Le deuxième argument est $2\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\ncat $1 $2 >> $3\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho $(($1 + 1))\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Affecter_une_valeur_à_un_ou_plusieurs_paramètres_de_position",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_variables"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Connaître_la_syntaxe_CrochetCrochet",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Réaliser_des_tests_conditionnels"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Substituer_une_commande_par_son_exécution",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [],
                      "hasSkill": [
                        "Connaître_le_caractère_de_substitution_de_commande",
                        "Connaître_la_syntaxe_dollar(cmd)",
                        "Connaître_la_notion_de_banalisation_de_caractères",
                        "Banaliser_un_caractère"
                      ],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0.5,
                    "evaluationResult": null
                  },
                  {
                    "name": "Connaître_les_opérateurs_logiques",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Réaliser_des_tests_conditionnels"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Interpréter_de_façon_numérique_la_valeur_dune_variable",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_variables",
                        "Réaliser_des_calculs_arithmétiques"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0.7,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*\\$\\(\\(.*\\)\\).*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho $(($1 + 1))\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Connaître_les_tests_détat_de_fichier",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Réaliser_des_tests_conditionnels"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Connaître_la_notion_de_expression_arithmétique",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Réaliser_des_calculs_arithmétiques"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*\\$\\(\\(.*\\)\\).*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho $(($1 + 1))\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Banaliser_un_caractère",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Substituer_une_commande_par_son_exécution"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*\\\\.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Cher utilisateur quel est ton prénom \\?\nread prenom\necho Ravi de te connaitre, $prenom\necho Quel est ton nom et ton age \\?\nread nom age\necho Tu es $prenom $nom et tu as $age ans, n\\'est ce pas \\?\nread reponse\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Nous sommes le \"'date'\"\necho Nous sommes le \ntime=\"fr_FR.UTF-8\" date\necho -e \"Ceci est \\n une très \\n longue phrase...\"\necho Voici une étoile: '*'\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": ".*'.*'.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Mon nom de login est: $USER\necho Mon shell est: $0\necho 'Les variables du sheel sont:'\nset\necho 'Celles d''environnement sont:'\nenv\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Nous sommes le \"'date'\"\necho Nous sommes le \ntime=\"fr_FR.UTF-8\" date\necho -e \"Ceci est \\n une très \\n longue phrase...\"\necho Voici une étoile: '*'\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": ".*\".*\".*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Nous sommes le \"'date'\"\necho Nous sommes le \ntime=\"fr_FR.UTF-8\" date\necho -e \"Ceci est \\n une très \\n longue phrase...\"\necho Voici une étoile: '*'\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Connaître_la_syntaxe_IfThenElifElse",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Réaliser_des_tests_conditionnels"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Connaître_la_notion_de_paramètre",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_les_paramètres_dun_script"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*\\$\\*.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Le script $0 possède $# paramètre, que voici: $*\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Je suis le script Shell $0\necho Mes arguments sont $*\necho Le premier argument est $1\necho Le deuxième argument est $2\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": ".*\\$\\d.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Mon nom de login est: $USER\necho Mon shell est: $0\necho 'Les variables du sheel sont:'\nset\necho 'Celles d''environnement sont:'\nenv\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Le script $0 possède $# paramètre, que voici: $*\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Je suis le script Shell $0\necho Mes arguments sont $*\necho Le premier argument est $1\necho Le deuxième argument est $2\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\ncat $1 $2 >> $3\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho $(($1 + 1))\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Modifier_la_valeur_de_une_variable",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_variables"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": "(.*;)?\\w+=[^;]+(;.*)?",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho cours\ncours=unix\necho $cours\necho je suis au cours $cours\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Nous sommes le \"'date'\"\necho Nous sommes le \ntime=\"fr_FR.UTF-8\" date\necho -e \"Ceci est \\n une très \\n longue phrase...\"\necho Voici une étoile: '*'\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Connaître_la_notion_de_variable",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_variables"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*\\$\\w+.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Cher utilisateur quel est ton prénom \\?\nread prenom\necho Ravi de te connaitre, $prenom\necho Quel est ton nom et ton age \\?\nread nom age\necho Tu es $prenom $nom et tu as $age ans, n\\'est ce pas \\?\nread reponse\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Mon nom de login est: $USER\necho Mon shell est: $0\necho 'Les variables du sheel sont:'\nset\necho 'Celles d''environnement sont:'\nenv\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Le script $0 possède $# paramètre, que voici: $*\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Je suis le script Shell $0\necho Mes arguments sont $*\necho Le premier argument est $1\necho Le deuxième argument est $2\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho cours\ncours=unix\necho $cours\necho je suis au cours $cours\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\ncat $1 $2 >> $3\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\nexport PATH=$PATH:$HOME\necho $PATH\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho $(($1 + 1))\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": "(.*;)?\\w+=[^;]+(;.*)?",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho cours\ncours=unix\necho $cours\necho je suis au cours $cours\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Nous sommes le \"'date'\"\necho Nous sommes le \ntime=\"fr_FR.UTF-8\" date\necho -e \"Ceci est \\n une très \\n longue phrase...\"\necho Voici une étoile: '*'\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": "(.*;)?read \\w+(;.*)?",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Cher utilisateur quel est ton prénom \\?\nread prenom\necho Ravi de te connaitre, $prenom\necho Quel est ton nom et ton age \\?\nread nom age\necho Tu es $prenom $nom et tu as $age ans, n\\'est ce pas \\?\nread reponse\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Récupérer_des_données_saisies_par_lutilisateur",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Ecrire_des_scripts_interactifs"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": "(.*;)?read \\w+(;.*)?",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Cher utilisateur quel est ton prénom \\?\nread prenom\necho Ravi de te connaitre, $prenom\necho Quel est ton nom et ton age \\?\nread nom age\necho Tu es $prenom $nom et tu as $age ans, n\\'est ce pas \\?\nread reponse\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Modifier_les_droits_dun_fichier_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_fichiers_Unix"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Manipuler_des_variables",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [],
                      "hasSkill": [
                        "Connaître_la_syntaxe_de_instruction_set",
                        "Connaître_la_notion_de_variable",
                        "Connaître_les_variables_denvironnement",
                        "Connaître_les_variables_spéciales",
                        "Affecter_une_valeur_à_une_variable",
                        "Obtenir_la_valeur_affectée_à_une_variable",
                        "Afficher_la_valeur_dune_variable",
                        "Interpréter_de_façon_numérique_la_valeur_dune_variable",
                        "Modifier_la_valeur_de_une_variable",
                        "Affecter_une_valeur_à_un_ou_plusieurs_paramètres_de_position"
                      ],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0.78,
                    "evaluationResult": null
                  },
                  {
                    "name": "Modifier_un_fichier_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_fichiers_Unix"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0.8,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*>.+",
                          "matches": [
                            {
                              "code": "#!/bin/bash\ncat $1 $2 >> $3\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": ".*>>.+",
                          "matches": [
                            {
                              "code": "#!/bin/bash\ncat $1 $2 >> $3\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Exécuter_de_manière_sélective_des_commandes",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [],
                      "hasSkill": [
                        "Connaître_la_syntaxe_de_instruction_case"
                      ],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": null
                  },
                  {
                    "name": "Connaître_la_syntaxe_dollar(cmd)",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Substituer_une_commande_par_son_exécution"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Connaître_les_variables_denvironnement",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_variables"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0.7,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": "(.*;)?env(;.*)?",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Mon nom de login est: $USER\necho Mon shell est: $0\necho 'Les variables du sheel sont:'\nset\necho 'Celles d''environnement sont:'\nenv\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": ".*\\$PATH.*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\nexport PATH=$PATH:$HOME\necho $PATH\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Exécuter_des_commandes_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [],
                      "hasSkill": [
                        "Connaître_les_commandes_de_base_Unix",
                        "Afficher_le_manuel_dune_commande_Unix"
                      ],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": null
                  },
                  {
                    "name": "Manipuler_les_paramètres_dun_script",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [],
                      "hasSkill": [
                        "Connaître_la_notion_de_paramètre",
                        "Obtenir_la_valeur_de_un_ou_plusieurs_paramètres",
                        "Connaître_les_variables_spéciales"
                      ],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": null
                  },
                  {
                    "name": "Afficher_le_contenu_de_un_fichier_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_fichiers_Unix"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*cat .+",
                          "matches": [
                            {
                              "code": "#!/bin/bash\ncat $1 $2 >> $3\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Connaître_la_syntaxe_dollar((__))",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Réaliser_des_calculs_arithmétiques"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*\\$\\(\\(.*\\)\\).*",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho $(($1 + 1))\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Connaître_la_syntaxe_de_instruction_while",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Répéter_des_instructions"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Connaître_la_syntaxe_de_instruction_seq",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Générer_une_séquence_de_nombres"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Ecrire_des_scripts_interactifs",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [],
                      "hasSkill": [
                        "Récupérer_des_données_saisies_par_lutilisateur"
                      ],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": null
                  },
                  {
                    "name": "Connaître_le_caractère_de_substitution_de_commande",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Substituer_une_commande_par_son_exécution"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Affecter_une_valeur_à_une_variable",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_variables"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 1,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": "(.*;)?\\w+=[^;]+(;.*)?",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho cours\ncours=unix\necho $cours\necho je suis au cours $cours\n",
                              "syntaxCorrect": true
                            },
                            {
                              "code": "#!/bin/bash\necho Nous sommes le \"'date'\"\necho Nous sommes le \ntime=\"fr_FR.UTF-8\" date\necho -e \"Ceci est \\n une très \\n longue phrase...\"\necho Voici une étoile: '*'\n",
                              "syntaxCorrect": true
                            }
                          ]
                        },
                        {
                          "regex": "(.*;)?read \\w+(;.*)?",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Cher utilisateur quel est ton prénom \\?\nread prenom\necho Ravi de te connaitre, $prenom\necho Quel est ton nom et ton age \\?\nread nom age\necho Tu es $prenom $nom et tu as $age ans, n\\'est ce pas \\?\nread reponse\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Répéter_des_instructions",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [],
                      "hasSkill": [
                        "Connaître_la_syntaxe_de_instruction_for",
                        "Connaître_la_syntaxe_de_instruction_while"
                      ],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": null
                  },
                  {
                    "name": "Créer_un_fichier_Unix",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_fichiers_Unix"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0.3,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": ".*>.+",
                          "matches": [
                            {
                              "code": "#!/bin/bash\ncat $1 $2 >> $3\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "name": "Tester_létat_dun_fichier",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Réaliser_des_tests_conditionnels"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0,
                    "evaluationResult": {
                      "matchesForRegex": []
                    }
                  },
                  {
                    "name": "Connaître_la_syntaxe_de_instruction_set",
                    "type": "Skills",
                    "relations": {
                      "isSkillOf": [
                        "Manipuler_des_variables"
                      ],
                      "hasSkill": [],
                      "isKnowledgeOf": [],
                      "hasKnowledge": [],
                      "requires": [],
                      "isRequiredBy": [],
                      "composes": [],
                      "isComposedOf": []
                    },
                    "mastery": 0.4,
                    "evaluationResult": {
                      "matchesForRegex": [
                        {
                          "regex": "(.*;)?set(;.*)?",
                          "matches": [
                            {
                              "code": "#!/bin/bash\necho Mon nom de login est: $USER\necho Mon shell est: $0\necho 'Les variables du sheel sont:'\nset\necho 'Celles d''environnement sont:'\nenv\n",
                              "syntaxCorrect": true
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              };
    }
    /**
     * @returns {{objects : Array<FrameworkNode>}}, a test framework from real application, with score on each node (y, cover and trust).
     */
    static getScoredFrameworkSample() {
        let framework = Utils.getFrameworkSample();
        let leaves = new Set;
        let setRandomValues = function (node, leaf) {
            if (leaf) {
                if (Math.random() > 0.75) {
                    node.mastery = 0;
                    node.trust = 0;
                    node.resourcesCompleted = 0;
                }
                else {
                    node.mastery = Math.floor(Math.random() * 11) / 10;
                    node.trust = Math.floor((Math.random() * 4) + 1) / 10;
                    node.resourcesCompleted = node.trust;
                }
                node.cover = undefined;
            }
            else {
                node.trust = Math.floor(Math.random() * 4) / 10;
                node.mastery = Math.floor(Math.random() * 11) / 10;
                node.cover = 0;
                node.resourcesCompleted = undefined;
            }
        };
        let findNode = function (fw, name) {
            for (let i = 0; i < fw.length; i++) {
                if (fw[i].name === name)
                    return fw[i];
            }
            return null;
        };
        framework['objects'].forEach((node) => {
            node.children = [node.relations.hasSkill, node.relations.hasKnowledge, node.relations.isComposedOf].flat();
            node.parents = [node.relations.isSkillOf, node.relations.isKnowledgeOf, node.relations.composes].flat();
        });
        framework['objects'].forEach((node) => {
            if (node.children.length === 0) {
                // Save the leaves for propagation later
                node.parents.forEach(child => {
                    leaves.add(child);
                });
                setRandomValues(node, true);
            }
            else {
                (Math.random() > 0.75) ? setRandomValues(node, false) : node.cover = node.mastery = node.trust = 0;
            }
        });
        while (leaves.size > 0) {
            let nextLeaves = new Set();
            leaves.forEach((leafName) => {
                let leaf = findNode(framework['objects'], leafName);
                let children = [];
                leaf.children.forEach(childName => {
                    children.push(findNode(framework['objects'], childName));
                });
                let meanCover = 0;
                let meanMaster = 0;
                let meanTrust = 0;
                children.forEach(child => {
                    if (child.resourcesCompleted !== undefined) {
                        meanCover += (child.resourcesCompleted !== 0) ? 1 : 0;
                    }
                    else {
                        meanCover += child.cover;
                    }
                    meanMaster += child.mastery;
                });
                meanCover /= Math.max(children.length, 1);
                meanMaster /= Math.max(children.length, 1);
                meanTrust = (leaf.trust + meanCover) / 2;
                leaf.cover = meanCover;
                leaf.masteyr = Math.round(meanMaster);
                leaf.trust = Math.round(meanTrust);
                leaf.parents.forEach(child => {
                    nextLeaves.add(child);
                });
            });
            leaves = nextLeaves;
        }
        return framework;
    }
    static makeId(prefix = '', length = 6) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return prefix + Date.now() + result;
    }
}
