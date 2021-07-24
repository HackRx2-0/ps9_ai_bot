class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

   

    handleJavascriptListone = () => {
      const message = this.createChatBotMessage(
        "Hello User",
        {
          widget: "",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListtwo = () => {
      const message = this.createChatBotMessage(
        <div><b>Okay. Based on your request. We have 2 Health Care Plans that you need :</b></div>,
        {
          widget: "javascriptLinkstwo",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListthree = () => {
      const message = this.createChatBotMessage(
        <div><b><mark>Diabetes Care Basic Plan</mark></b></div>,
        {
          widget: "javascriptLinksthree",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListfour = () => {
      const message = this.createChatBotMessage(
        <div><b><mark>Diabetes Care Plus Plan</mark></b></div>,
        {
          widget: "javascriptLinksfour",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListfive = () => {
      const message = this.createChatBotMessage(
        <div><b>As Both are Good. But I think you can go for Diabeted Care Plus have an edge over Diabetes Care Basic Plan. In Plus Plan, you will get better Reimbursement Offers as compared to Basic Plan. </b></div>,
        {
          widget: "",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListsix = () => {
      const message = this.createChatBotMessage(
        <div><b>Accoring to my knowledge only Reimbursement beneﬁt differs slightly and rest remain the same.</b></div>,
        {
          widget: "",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListseven = () => {
      const message = this.createChatBotMessage(
        <div><b>Yes. I hope you will get your answers.<div><b><mark>So you also want to 
        Book a Tele-consult Appointment</mark></b></div><div><h3>yes</h3>/<h3>no</h3></div> </b></div>,
        {
          widget: "",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListeight = () => {
      const message = this.createChatBotMessage(
        <div><b>Ok. you entered <mark>NO</mark>.</b></div>,
        {
          widget: "",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListnine = () => {
      const message = this.createChatBotMessage(
        <div><b>You entered <mark>YES</mark>. </b></div>,
        {
          widget: "javascriptLinksnine",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListten = () => {
      const message = this.createChatBotMessage(
        <div><b><mark>100%</mark> We have taken all the necessary security mesaures to ensure the safety of user's data.</b></div>,
        {
          widget: "",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListeleven = () => {
      const message = this.createChatBotMessage(
        <div><b>You can directly book appointment from Bajaj Finserv Health app.
        Follow the below steps:
        1. Choose Find Doctors or Tele-consult banner on Home
        2. Choose the specialty you want to book for
        3. Choose Book Tele-consult option
        4. Choose Patient Profile. If patient profile is not added, choose Add Family member
        5. Choose slot as per your convenience
        6. Request Appointment Booking
        <h3><mark>Your appointment will be confirmed once Doctor accepts the request.</mark></h3>
        </b></div>,
        {
          widget: "",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListtwelve = () => {
      const message = this.createChatBotMessage(
        <div><b>We have EMI Network, Health Prime, Aarogya care and much more...</b></div>,
        {
          widget: "",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListthirteen = () => {
      const message = this.createChatBotMessage(
        <div><b><mark>EMI Network</mark></b></div>,
        {
          widget: "javascriptLinksthirteen",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListfourteen = () => {
      const message = this.createChatBotMessage(
        <div><b>The Bajaj Finserv Health EMI Network Card is a single payment solution 
          which allows you to pay for you and your family's medical expenses in EMIs. With over 5500 partners in 1000+ cities,you can 
          avail wide range of treatments like : </b></div>,
        {
          widget: "javascriptLinksfourteen",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListfifteen = () => {
      const message = this.createChatBotMessage(
        <div><b>Get the best in eye treatments and manage the costs with lifecare finance on the 
          bajaj finserv EMI network.
          <mark>Do you want to apply</mark></b></div>,
        {
          widget: "",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListsixteen = () => {
      const message = this.createChatBotMessage(
        <div><b>Alright. would you like to know how it works</b></div>,
        {
          widget: "",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListseventeen = () => {
      const message = this.createChatBotMessage(
        <div><b>Ok</b></div>,
        {
          widget: "javascriptLinksseventeen",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListeighteen = () => {
      const message = this.createChatBotMessage(
        <div><b>Its OK.</b></div>,
        {
          widget: "javascriptLinkseighteen",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListnineteen = () => {
      const message = this.createChatBotMessage(
        <div><b>BYE</b></div>,
        {
          widget: "",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleJavascriptListtwenty = () => {
      const message = this.createChatBotMessage(
        <div><b>Have a Good Day...</b></div>,
        {
          widget: "",
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
