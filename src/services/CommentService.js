import firebase from "../firebase";
const db = firebase.collection("/comments");
class TutorialDataService {
  getAll() {
    return db;
  }
  create(comment) {
    return db.add(comment);
  }
 
  delete(id) {
    return db.doc(id).delete();
  }
}
export default new TutorialDataService();