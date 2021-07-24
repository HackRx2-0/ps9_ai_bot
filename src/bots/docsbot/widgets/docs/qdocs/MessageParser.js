class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();

      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.handleJavascriptListone();
      }

      if (lowerCaseMessage.includes("my age is 50 years and i am suffering from diabetes")) {
        this.actionProvider.handleJavascriptListtwo();
      }

      if (lowerCaseMessage.includes("what is diabetes care basic") || lowerCaseMessage.includes("what is diabetes care basic plan")) {
        this.actionProvider.handleJavascriptListthree();
      }

      if (lowerCaseMessage.includes("can you explain diabetes care plus") || lowerCaseMessage.includes("can you explain diabetes care plus plan")) {
        this.actionProvider.handleJavascriptListfour();
      }

      if (lowerCaseMessage.includes("out of both plans which plan is best for me")) {
        this.actionProvider.handleJavascriptListfive();
      }

      if (lowerCaseMessage.includes("please tell me the main difference between these two plans")) {
        this.actionProvider.handleJavascriptListsix();
      }

      if (lowerCaseMessage.includes("ok")) {
        this.actionProvider.handleJavascriptListseven();
      }

      if (lowerCaseMessage.includes("no")) {
        this.actionProvider.handleJavascriptListeight();
      }

      if (lowerCaseMessage.includes("yes but how much does a tele-consult appointment costs")) {
        this.actionProvider.handleJavascriptListnine();
      }

      if (lowerCaseMessage.includes("is my consultation secure")) {
        this.actionProvider.handleJavascriptListten();
      }

      if (lowerCaseMessage.includes("how do i book a tele-consult appointment")) {
        this.actionProvider.handleJavascriptListeleven();
      }

      if (lowerCaseMessage.includes("how can you help me")) {
        this.actionProvider.handleJavascriptListtwelve();
      }

      if (lowerCaseMessage.includes("what is emi network")) {
        this.actionProvider.handleJavascriptListthirteen();
      }

      if (lowerCaseMessage.includes("what is the bajaj finserv health emi network card")) {
        this.actionProvider.handleJavascriptListfourteen();
      }

      if (lowerCaseMessage.includes("eye care services on emi")) {
        this.actionProvider.handleJavascriptListfifteen();
      }

      if (lowerCaseMessage.includes("no i do not want to apply")) {
        this.actionProvider.handleJavascriptListsixteen();
      }

      if (lowerCaseMessage.includes("sure")) {
        this.actionProvider.handleJavascriptListseventeen();
      }

      if (lowerCaseMessage.includes("thank you for guiding")) {
        this.actionProvider.handleJavascriptListeighteen();
      }

      if (lowerCaseMessage.includes("bye")) {
        this.actionProvider.handleJavascriptListnineteen();
        this.actionProvider.handleJavascriptListtwenty();
      }
        
        if (lowerCaseMessage.includes("anythingelse")) {
        this.actionProvider.handleJavascriptListtwentyone();
      }








  
      if (lowerCaseMessage.includes("xyz")) {
        this.actionProvider.handleJavascriptListA();
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
