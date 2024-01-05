"use-strict";
class Authintification {
  constructor() {
    this.loggedInUser = null;
    this.baseURL = "https://greenshop.abduvoitov.com/api/user";
  }

  async signIn(username, password) {
    try {
      const response = await fetch(`${this.baseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        this.loggedInUser = data.username;
        return { message: "Sign-in successful", user: this.loggedInUser };
      } else {
        throw new Error("Sign-in failed");
      }
    } catch (error) {
      throw new Error("Sign-in failed");
    }
  }

  async signOut() {
    try {
      const response = await fetch(`${this.baseURL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        this.loggedInUser = null;
        return { message: "Sign-out successful" };
      } else {
        throw new Error("Sign-out failed");
      }
    } catch (error) {
      throw new Error("Sign-out failed");
    }
  }

  getCurrentUser() {
    return this.loggedInUser;
  }
}

const fakeAPI = new Authintification();

fakeAPI.signIn("user", "password").then((response) => {
  console.log(response);
  console.log("Logged in as:", fakeAPI.getCurrentUser());

  fakeAPI.signOut().then((response) => {
    console.log(response);
    console.log("Logged in as:", fakeAPI.getCurrentUser());
  });
  fakeAPI
    .signOut()
    .then((response) => {
      console.log(response);
      console.log("Logged in as:", fakeAPI.getCurrentUser());
    })
    .catch((error) => {
      console.error(error);
    });
});
// .catch((error) => {
//   console.error(error);
// });
// end of the function
