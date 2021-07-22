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
  initialMessages: [createChatBotMessage("You can Search Product by its : NAME, CODE",{
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
          
          text: "Vivo Y20G 64 GB Storage Obsidian Black",
          url: "https://www.bajajfinservmarkets.in/emi-store/vivo-y20g-64-gb-obsidian-black-4-gb-ram-smartphone.html",
          label: <div><img src={image_one} height="300px" width="200px"/></div>,
          id: 1,
         
        
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
        
        text: "Apple iPhone 11 128 GB Storage Black",
        url: "https://www.bajajfinservmarkets.in/emi-store/apple-iphone-11-128-gb-black-smartphone.html",
        label: <div><img src={image_three} height="300px" width="200px"/></div>,
        id: 1,
       
      
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
        
        text: "Dell Latitude 3500 Intel Core i3 8th Gen 4 GB RAM/ 1 TB HDD/ 15.6 Inch Laptop (Black, B07W4286PX)",
        url: "https://www.bajajfinservmarkets.in/emi-store/dell-latitude-3500-intel-core-i3-8th-gen-4-gb-ram-1-tb-hdd-15-6-inch-laptop-black-b07w4286px.html",
        label: <div><img src={image_four} height="300px" width="200px"/></div>,
        id: 1,
       
      
      },
      {
        
        text: "HP 15 Intel Pentium Gold 4 GB RAM/ 1 TB HDD/ 15.6 Inch Laptop (Jet Black, 15s-du1052tu)",
        url: "https://www.bajajfinservmarkets.in/emi-store/hp-15-intel-pentium-gold-4-gb-ram-1-tb-hdd-15-6-inch-laptop-jet-black-15s-du1052tu.html",
        label: <div><img src={image_four} height="300px" width="200px"/></div>,
        id: 2,
       
      
      }
    ],
  },
},


],
}
 

export default config