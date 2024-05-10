export function signupToLRS(){
    fetch(this.ULR_LRS + "auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        username: this.USERNAME_LRS,
        password: this.PASSWORD_LRS,
        }),
    })
        .then((response) => {
        return response.json();
        })
        .then((data: any) => {
        if (data.accessToken) {
            console.log("logged to LRS");
            this.lrsAccessToken = data.accessToken;
        } else {
            throw Error("cannot connect to LRS");
        }
    });
};

