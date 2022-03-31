const { question } = require('readline-sync');
const constants = require('./utils/constants');
const message = require('./utils/messages');
const info = require('./utils/info');
const dictionaryService = require('./services/dictionary_service');

console.log(`${info.INFORMATION}`);

async function run() {
  let status = true;
  while (status) {
    let input = question('>');
    input = input.replace(/  +/g, ' ');
    const arr = input.split(" ");
    const command = arr[0];
    const key = arr[1];
    const member = arr[2];

    switch (command) {
      case constants.ADD_KEYS_COMMAND: {
        dictionaryService.addKey(key, member);
        break;
      }

      case constants.ITEMS_LIST_COMMAND: {
        dictionaryService.items();
        break;
      }

      case constants.CLEAR_COMMAND: {
        dictionaryService.clearDictionary();
        break;
      }

      case constants.KEYS_LIST_COMMAND: {
        dictionaryService.keys();
        break;
      }

      case constants.MEMBERS_LIST_COMMAND: {
        dictionaryService.members(key);
        break;
      }

      case constants.KEY_EXISTS_COMMAND: {
        dictionaryService.keyExists(key);
        break;
      }

      case constants.MEMBER_EXISTS_COMMAND: {
        dictionaryService.memberExists(key, member);
        break;
      }

      case constants.ALL_MEMBERS_COMMAND: {
        dictionaryService.allMembers();
        break;
      }

      case constants.REMOVE_ALL_COMMAND: {
        dictionaryService.removeAll(key);
        break;
      }

      case constants.REMOVE_COMMAND: {
        dictionaryService.remove(key, member);
        break;
      }

      case constants.KEYS_COUNT_COMMAND: {
        dictionaryService.keysCount();
        break;
      }

      case constants._COUNT_COMMAND: {
        dictionaryService.membersCount();
        break;
      }

      case constants.QUIT_COMMAND: {
        status = false;
        break;
      }

      default:
        console.log(message.INVALID_COMMAND);
        break;

    }
  }
}

run().then();