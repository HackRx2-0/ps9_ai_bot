class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("xyz")) {
      this.actionProvider.handleJavascriptListA();
    }

    if (lowerCaseMessage.includes("types of emi card") || lowerCaseMessage.includes("emi card")) {
      this.actionProvider.handleJavascriptListvivo();
    }

    if (lowerCaseMessage.includes("aarogya care")) {
      this.actionProvider.handleJavascriptListapple();
    }

    if (lowerCaseMessage.includes("smart watches") || lowerCaseMessage.includes("smartwatches")) {
      this.actionProvider.handleJavascriptListsw();
    }

    if (lowerCaseMessage.includes("health library")) {
      this.actionProvider.handleJavascriptListlaptops();
    }

    
  }
}

export default MessageParser;