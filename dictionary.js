// const dictionary = {};
// dictionary[name] = "kotkoti begum";

class Dictionary {
    constructor() {
        this.dictionary = {};

    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key];
    }

    
}

// replace jeno na kore :

const phoneBook = new Dictionary();
phoneBook.add('Mahi', '0178778767');
phoneBook.add('kahi', '0178778767');
phoneBook.add('tahi', '0178778767');
phoneBook.add('rahi', '0178778767');
console.log(phoneBook.dictionary);
const Mahi = phoneBook.get('Mahi');
console.log(Mahi);

//direct access kora jay
//unique key diye value rekhe direct niye asha jay instead of using while etc.