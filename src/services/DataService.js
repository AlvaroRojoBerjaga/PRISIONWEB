import firebase from "../firebase";
const db = firebase.collection("/registros");
class DataService {
  getAll() {
    return db;
  }
  //falta getById
  
  create(registro) {
    return db.add(registro);
  }
  update(id, value) {
    return db.doc(id).update(value);
  }
  delete(id) {
    return db.doc(id).delete();
  }
}
export default new DataService();