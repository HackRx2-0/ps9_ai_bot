class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("xyz")) {
        this.actionProvider.handleJavascriptListA();
      }

      if (lowerCaseMessage.includes("vivo") || lowerCaseMessage.includes("VIVO Y20")) {
        this.actionProvider.handleJavascriptListvivo();
      }

      if (lowerCaseMessage.includes("apple") || lowerCaseMessage.includes("iphone11") || lowerCaseMessage.includes("apple11") || lowerCaseMessage.includes("iphone 11")) {
        this.actionProvider.handleJavascriptListapple();
      }

      if (lowerCaseMessage.includes("smart watches") || lowerCaseMessage.includes("smartwatches")) {
        this.actionProvider.handleJavascriptListsw();
      }

      if (lowerCaseMessage.includes("laptops") || lowerCaseMessage.includes("dell") || lowerCaseMessage.includes("hp")) {
        this.actionProvider.handleJavascriptListlaptops();
      }

      
    }
  }
  
  export default MessageParser;