export default class Entry {
  constructor(id, Title, Body, Date, Uid) {
    this.id = id;
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
