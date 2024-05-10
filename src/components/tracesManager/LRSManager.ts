import {tracesUrl} from '../../constants';

class LRSManager {
    private static instance: LRSManager;
    
    readonly ULR_LRS: string = tracesUrl+"/api/";
    readonly USERNAME_LRS: string = "admin";
    readonly PASSWORD_LRS: string = "admin";
    lrsAccessToken?: string;
  
    private constructor() {}
  
    static getInstance = (): LRSManager => {
      return this.instance || (this.instance = new this());
    }

    signupToLRS= (): void => {
      fetch(this.ULR_LRS + "auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            'username': this.USERNAME_LRS,
            'password': this.PASSWORD_LRS,
          }),
      })
          .then((response) => {
            return response.json();
          })
          .then((data: any) => {
          if (data.accessToken) {
              this.lrsAccessToken = data.accessToken;
          } else {
              throw Error("cannot signup to LRS");
          }
      });
    };
  
    connectToLRS = (statement = undefined): void => {
      fetch(this.ULR_LRS + "auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode : "cors",
        body: JSON.stringify({
          'username': this.USERNAME_LRS,
          'password': this.PASSWORD_LRS,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data: any) => {
          if (data.accessToken) {
            this.lrsAccessToken = data.accessToken;
            if(statement){
              this.sendStatementToLRS(statement);
            }
          } else {
            throw Error("cannot connect to LRS");
          }
        });
    };
  
    sendStatementToLRS = (statement): void => {
      if (this.lrsAccessToken === undefined) {
        return;
      }
  
      fetch(this.ULR_LRS + "xAPI/statements", {
        method: "POST",
        mode : "cors",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + this.lrsAccessToken,
        },
        body: JSON.stringify(statement),
      });
    };
  
    retrieveStatementFromLRS = (filter): Promise<any> => {
      if (this.lrsAccessToken === undefined) {
        return;
      }
  
      return fetch(this.ULR_LRS + "xAPI/statements/retrieve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + this.lrsAccessToken,
        },
        body: JSON.stringify(filter),
      })
        .then((response) => {
          return response.json();
        })
        .then((json: any) => {  
          return json;
        });
    }
  }
  
  export default LRSManager;
  