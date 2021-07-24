class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
// TESTING ......
  handleEXTRA = () => {
    const messages = this.createChatBotMessage(
      "You Selected HEALTH_ARTICLES",
      { widget: "EXTRA", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };


  // TESTING......

  handleAI = () => {
    const messages = this.createChatBotMessage(
      "Welcome to Bajaj AI",
      { widget: "AI", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };


  handleVoicetoText = () => {
    const messages = this.createChatBotMessage(
      "Welcome to Bajaj Voice To Text Command Corner",
      { widget: "VTT", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };


  handleSearchPanel = () => {
    const messages = this.createChatBotMessage(
      "Welcome to Bajaj Search Panel Corner...",
      { widget: "SP", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleQuery = () => {
    const messages = this.createChatBotMessage(
      "You Selected Query section",
      { widget: "Q", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };



  handlevivo = () => {
    const messages = this.createChatBotMessage(
      "vivo phone",
      { widget: "widget", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  }

  handleHelpfinal = () => {
    const messages = this.createChatBotMessage(
      "Let's Play Quiz",
      { widget: "widget", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  }

  greet = () => {
    const messages = this.createChatBotMessage(
      "Hello",
      { widget: "greet", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  

  

  greettwo = () => {
    const messages = this.createChatBotMessage(
      "Hey",
      { widget: "greet", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleMessageParserDocs = () => {
    const messages = this.createChatBotMessage(
      "SHOP ON EMI STORE",
      { widget: "messageParser", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleActionProviderDocs = () => {
    const messages = [
      this.createChatBotMessage(
        "Your Search Results",
        { widget: "actionProviderDocs", withAvatar: true }
      ),
    ];

    this.addMessageToBotState(messages);
  };

  handleConfigDocs = () => {
    const messages = this.createChatBotMessage(
      "PRE-OWNED VECHICLE FINANCE",
      { widget: "config", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

 

  handleWidgetDocs = () => {
    const messages = this.createChatBotMessage(
      "Play a Quiz and you will find relevant data....",
      { widget: "widget", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "How can I help? Here is the overview.",
      {
        withAvatar: true,
        widget: "overview",
      }
    );

    this.addMessageToBotState(message);
  };

  addMessageToBotState = (messages, newState) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, ...messages],
        gist: "",
        infoBox: "",
      }));
    } else {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, messages],
        gist: "",
        infoBox: "",
      }));
    }
  };
}

export default ActionProvider;
