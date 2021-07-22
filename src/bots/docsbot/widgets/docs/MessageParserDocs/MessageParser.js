class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("Mobiles on EMI")) {
        this.actionProvider.handleJavascriptList1();
      }

      if (lowerCaseMessage.includes("Laptops on EMI")) {
        this.actionProvider.handleJavascriptList();
      }

      if (lowerCaseMessage.includes("Smart Watches on EMI")) {
        this.actionProvider.handleJavascriptList2();
      }
    }
  }
  
  export default MessageParser;