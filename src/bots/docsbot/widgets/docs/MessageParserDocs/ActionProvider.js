class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Here your products info",
        {
          widget: "javascriptLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
  
    handleJavascriptList1 = () => {
      const message = this.createChatBotMessage(
        "Here your products info",
        {
          widget: "javascriptLinks1",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptList2 = () => {
      const message = this.createChatBotMessage(
        "Here your products info",
        {
          widget: "javascriptLinks2",
        }
      );
  
      this.updateChatbotState(message);
    };


    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;