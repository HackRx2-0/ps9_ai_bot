class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("Aarogya Care")) {
        this.actionProvider.handleJavascriptList1();
      }

      if (lowerCaseMessage.includes("Cancer")) {
        this.actionProvider.handleJavascriptList();
      }

      if (lowerCaseMessage.includes("Cholesterol")) {
        this.actionProvider.handleJavascriptList2();
      }
    }
  }
  
  export default MessageParser;