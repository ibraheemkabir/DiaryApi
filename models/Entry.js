export default class Entry {
  constructor(Title, Body, Date, Uid) {
    this.Title = Title;
    this.Body = Body;
    this.Date = Date;
    this.Uid = Uid;
  }

  getUsername() {
    return this.username;
  }

  getName() {
    return this.name;
  }
}
