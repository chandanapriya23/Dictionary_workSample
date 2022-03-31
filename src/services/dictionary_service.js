const constants = require('../utils/constants');
const message = require('../utils/messages');

let dictionary = {};

exports.addKey = (key, member) => {
    if (key in dictionary && dictionary[key].indexOf(member) >= 0) {
        console.log(message.MEMBER_EXISTS_ERROR_MESSAGE);
    } else if (key in dictionary) {
        dictionary[key].push(member);
        console.log(message.ADD_MESSAGE);
    } else {
        dictionary[key] = [member];
        console.log(message.ADD_MESSAGE);
    }
};

exports.items = () => {
    if (Object.keys(dictionary).length === 0) {
        console.log(message.EMPTY_SET_MESSAGE);
    } else {
        for (const [key, values] of Object.entries(dictionary)) {
            values.forEach(value => {
                console.log(`${key} : ${value}`);
            });
        }
    }
}

exports.keys = () => {
    if (Object.keys(dictionary).length === 0) {
        console.log(message.EMPTY_SET_MESSAGE);
    } else {
        const keysData = Object.keys(dictionary);
        keysData.forEach(item => {
            console.log(item);
        });
    }
}

exports.members = (key) => {
    if (key in dictionary) {
        const valueData = dictionary[key];
        valueData.forEach(item => {
            console.log(item);
        });
    } else {
        console.log(message.KEY_ERROR_MESSAGE);
    }
}

exports.allMembers = () => {
    const allMembersData = Object.values(dictionary);
    if (allMembersData.length === 0) {
        console.log(message.EMPTY_SET_MESSAGE);
    } else {
        allMembersData.flat().forEach(item => {
            console.log(item);
        });
    }
}

exports.keyExists = (key) => {
    if (key in dictionary) {
        console.log("true");
    } else {
        console.log("false");
    }
}

exports.memberExists = (key, member) => {
    if (key in dictionary && dictionary[key].indexOf(member) >= 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}

exports.removeAll = (key) => {
    if (key in dictionary) {
        delete dictionary[key];
        console.log(message.REMOVE_MESSAGE);
    } else {
        console.log(message.KEY_ERROR_MESSAGE);
    }
}

exports.remove = (key, member) => {
    if (!dictionary[key]) {
        console.log(message.KEY_ERROR_MESSAGE);
        return;
    }
    const memberValue = dictionary[key] && dictionary[key].find(item => item === member);
    if (memberValue) {
        dictionary[key] = dictionary[key].filter(item => item != member);
        if (dictionary[key].length === 0) {
            delete dictionary[key];
        }
        console.log(message.REMOVE_MESSAGE);
    } else {
        console.log(message.MEMBER_ERROR_MESSAGE);
    }
}

exports.clearDictionary = () => {
    if (Object.keys(dictionary).length === 0) {
        console.log("There are no items to clear");
    } else {
        dictionary = {};
        console.log(message.CLEAR_MESSAGE);
    }
}

exports.keysCount = () => {
    console.log(Object.keys(dictionary).length);
}

exports.membersCount = () => {
    console.log(Object.values(dictionary).length);
}