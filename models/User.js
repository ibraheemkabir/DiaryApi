export default class User {
  constructor(name, username, email, password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  getUsername() {
    return this.username;
  }

  getName() {
    return this.name;
  }
}
