import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from "../../../../../components/LearningOptions/LearningOptions";
import LinkList from "../../../../../components/LinkList/LinkList";

import image_one from "./images/one.jpg";
import image_three from "./images/three.jpg";
import image_five from "./images/five.jpg";
import image_four from "./images/four.jpg";
import image_sorry from "./images/sorry.png";


const config = { 
  botName: "Bajaj ChatBot",
  initialMessages: [createChatBotMessage("You can Search Anything just type",{
  }),
],

widgets: [
  {
    widgetName: "learningOptions",
   widgetFunc: (props) => <LearningOptions {...props} />,
  },

  {
    widgetName: "javascriptLinksA",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          
          text: "Sorry.. No Data is Available. This is under Development...",
         
          label: <div><img src={image_sorry} height="300px" width="200px"/></div>,
          id: 1,
         
        
        }
      ],
    },
},


  
  {
    widgetName: "javascriptLinksvivo",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          
          text: <div><b>Bajaj Finserv EMI Card</b></div>,
          
         
        
        },
        {
          text: <div><b>Bajaj Finserv Health EMI Card</b></div>,
        }
      ],
    },
},

{
  widgetName: "javascriptLinksapple",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: <div><b>Pro Health Solution</b></div>,
       
      
      },
      {
        
        text: <div><b>Super Health Solution</b></div>,
      
      },
      {
        
        text: <div><b>Health Plus Solution</b></div>,
      
      },
      {
        
        text: <div><b>Hospicare Solution</b></div>,
      
      },
      {
        
        text: <div><b>Complete Health Solution</b></div>,
      
      }
    ],
  },
},

{
  widgetName: "javascriptLinkssw",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: "Apple Watch SE GPS 44 mm Space Grey Aluminium Case with Black Sport Band Black Strap (MYDT2HN/A)",
        url: "https://www.bajajfinservmarkets.in/emi-store/apple-watch-se-gps-44-mm-space-grey-aluminium-case-with-black-sport-band-black-strap-mydt2hn-a.html",
        label: <div><img src={image_five} height="300px" width="200px"/></div>,
        id: 1,
       
      
      }
    ],
  },
},

{
  widgetName: "javascriptLinkslaptops",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: <div><b>General Health Library</b></div>,
        
       
      
      },
      {
        
        text: <div><b>Covid 19</b></div>,
        
       
      
      },
      {
        
        text: <div><b>Dental care</b></div>,
        
       
      
      },
      {
        
        text: <div><b>Cancer</b></div>,
        
       
      
      }
    ],
  },
},


],
}
 

export default config