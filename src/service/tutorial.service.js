import firebase from "../firebase";

const db = firebase.collection("/Book");

class TutorialDataService {
    getAll() {
        return db;
    }

    create(book) {
        return db.add(book);
    }

    update(id, value) {
        return db.doc(id).update(value);
    }

    delete(id) {
        return db.doc(id).delete();
    }
}

export default new TutorialDataService();
