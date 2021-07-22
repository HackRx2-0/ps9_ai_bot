class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    handleJavascriptListvivo = () => {
      const message = this.createChatBotMessage(
        "Your Search Related Products : ",
        {
          widget: "javascriptLinksvivo",
        }
      );
  
      this.updateChatbotState(message);
    };



    handleJavascriptListsw = () => {
      const message = this.createChatBotMessage(
        "Your Search Related Products : ",
        {
          widget: "javascriptLinkssw",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListlaptops = () => {
      const message = this.createChatBotMessage(
        "Your Search Related Products : ",
        {
          widget: "javascriptLinkslaptops",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListvivo = () => {
      const message = this.createChatBotMessage(
        "Your Search Related Products : ",
        {
          widget: "javascriptLinksvivo",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListapple = () => {
      const message = this.createChatBotMessage(
        "Your Search Related Products : ",
        {
          widget: "javascriptLinksapple",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListA = () => {
      const message = this.createChatBotMessage(
        "Oooopps!!!",
        {
          widget: "javascriptLinksA",
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