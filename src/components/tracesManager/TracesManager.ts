import LRSManager from "./LRSManager";
import { UserId } from "../../constants";

class TracesManager {
  static generateConnectTrace = (
    actorId: string,
    actorName: string,
    activityId: string,
    activityInstanceId: string,
    roleName: string
  ): void => {
    const statement: Statement = {
      actor: {
        id: actorId,
        name: actorName,
        objectType: "Agent",
      },
      verb: {
        id: "Connected", // TODO use proper IRI instead
        display: {
          en: "Connected",
        },
      },
      object: {
        id: activityId,
        objectType: "Activity",
      },
      context: {
        contextActivities: {
          parent: activityId,
        },
        extensions: {
          // TODO use a proper extension with IRI
          role: {
            roleName: roleName,
          },
          activityInstance: {
            id: activityInstanceId,
          },
        },
      },
      timestamp: new Date(Date.now()),
    };
    if(!LRSManager.getInstance().lrsAccessToken){
        LRSManager.getInstance().connectToLRS();
    }
    LRSManager.getInstance().sendStatementToLRS(statement);
  };

  static connectToLRS = (callback=() => {}):void => {
    LRSManager.getInstance().connectToLRS();
    callback();
  }

  static connectToLRSWithStatement = ():void => {
    const statement: Statement = {
      actor: {
        name: UserId,
        id: UserId,
        objectType: "Agent",
      },
      verb: {
        id: "LaunchedProfileVis",
        display: {
          en: "LaunchedProfileVis",
        },
      },
      object: {
        objectType: "Activity",
        id: "Launched",
        definition: {
            name: "Launched",
            type: "Launched"
          },
      },
      timestamp: new Date(Date.now()),
    };
    LRSManager.getInstance().connectToLRS(statement);
  }

  static generateDisconnectionTrace = (
    actorId: string,
    actorName: string,
    activityId: string,
    activityInstanceId: string,
    roleName: string
  ): void => {
    const statement: Statement = {
      actor: {
        id: actorId,
        name: actorName,
        objectType: "Agent",
      },
      verb: {
        id: "Disconnected", // TODO use proper IRI instead
        display: {
          en: "Disconnected",
        },
      },
      object: {
        id: activityId,
        objectType: "Activity",
      },
      context: {
        contextActivities: {
          parent: activityId,
        },
        extensions: {
          // TODO use a proper extension with IRI
          role: {
            roleName: roleName,
          },
          activityInstance: {
            id: activityInstanceId,
          },
        },
      },
      timestamp: new Date(Date.now()),
    };
    if(!LRSManager.getInstance().lrsAccessToken){
        LRSManager.getInstance().connectToLRS();
    }
    LRSManager.getInstance().sendStatementToLRS(statement);
  };

  static generateCodeSnapshotTrace = (
    actorId: string,
    actorName: string,
    activityId: string,
    activityInstanceId: string,
    code: string
  ): void => {
    const statement: Statement = {
      actor: {
        id: actorId,
        name: actorName,
        objectType: "Agent",
      },
      verb: {
        id: "Wrote", // TODO use proper IRI instead
        display: {
          en: "Wrote",
        },
      },
      object: {
        id: "PythonSourceCode", // TODO use proper IRI instead
        // TODO xAPI spec doesn't support this use of objectType, currently object type "code" is
        // written like an activity
        // find another way to put code in the statement
        objectType: "code",
        definition: {
          extensions: {
            // TODO use a proper extension with IRI
            codeSnapshot: {
              code: code,
            },
          },
        },
      },
      context: {
        contextActivities: {
          parent: activityId,
        },
        extensions: {
          activityInstance: {
            id: activityInstanceId,
          },
        },
      },
      timestamp: new Date(Date.now()),
    };
    if(!LRSManager.getInstance().lrsAccessToken){
        LRSManager.getInstance().connectToLRS();
    }
    LRSManager.getInstance().sendStatementToLRS(statement);
  };

  static generateTestTrace = (): void => {
    const statement: Statement = {
      actor: {
        name: "testName",
        id: "testActorId",
        objectType: "Agent",
      },
      verb: {
        id: "Tested",
        display: {
          en: "Tested",
        },
      },
      object: {
        objectType: "Activity",
        id: "ActivityId",
        definition: {
            name: "testDefName",
            type: "testDefType",
          },
      },
      timestamp: new Date(Date.now()),
    };
    if(!LRSManager.getInstance().lrsAccessToken){
        LRSManager.getInstance().connectToLRS();
    }
    LRSManager.getInstance().sendStatementToLRS(statement);
  };

  static generateActionTrace = (verbID : string, objectid : string, objectType : string, objectDescription : string, extension : object): void => {
    const statement: Statement = {
      actor: {
        name: UserId,
        id: UserId,
        objectType: "Agent",
      },
      verb: {
        id: verbID,
        display: {
          en: verbID,
        },
      },
      object: {
        objectType: "Activity",
        id: objectid,
        definition: {
            name: objectid,
            type: objectType,
            description : objectDescription,
          },
      },
      context: {
        extensions : extension
      },
      timestamp: new Date(Date.now()),
    };
    // if(!LRSManager.getInstance().lrsAccessToken){
    //     LRSManager.getInstance().connectToLRS();
    // }
    LRSManager.getInstance().sendStatementToLRS(statement);
  };

  static generateLaunchQuitTrace = (verbID : string, objectid : string, objectType : string): void => {
    const statement: Statement = {
      actor: {
        name: UserId,
        id: UserId,
        objectType: "Agent",
      },
      verb: {
        id: verbID,
        display: {
          en: verbID,
        },
      },
      object: {
        objectType: "Activity",
        id: objectid,
        definition: {
            name: objectid,
            type: objectType
          },
      },
      timestamp: new Date(Date.now()),
    };
    // if(!LRSManager.getInstance().lrsAccessToken){
    //     LRSManager.getInstance().connectToLRS();
    // }
    LRSManager.getInstance().sendStatementToLRS(statement);
  };
}



/**
 * type for xAPI statement send by this application
 */
class Statement {
    actor: Actor;
    verb: Verb;
    object: xAPIObject;
    result?: Object;
    context?: Object;
    timestamp: Date; 
}

class Actor {
    objectType: string; // a user of this client will always be an agent
    name: string;
    id: string;
}

class Verb {
    id: string;
    display: {
        "en": string,
    };
}

class xAPIObject {
    objectType?: string; // Activity by default

    // when object is an activity
    id?: string;
    definition?: Object;

    // when object is an Agent or Group
    account?: string; // id of the user
    name?: string;
}

export default TracesManager;
