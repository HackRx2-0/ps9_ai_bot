import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from "../../../../../components/LearningOptions/LearningOptions";
import LinkList from "../../../../../components/LinkList/LinkList";

import image_one from "./images/one.jpg";
import image_two from "./images/two.jpg";
import image_three from "./images/three.jpg";
import image_four from "./images/four.jpg";
import image_five from "./images/five.jpg";

const config = { 
  botName: "Bajaj ChatBot",
  initialMessages: [createChatBotMessage("You are in SHOP ON EMI STORE", {
    widget: "learningOptions",
  }),
],

widgets: [
  {
    widgetName: "learningOptions",
   widgetFunc: (props) => <LearningOptions {...props} />,
  },
  
  {
    widgetName: "javascriptLinks",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          text: "Vivo Y20G 64 GB Storage Obsidian Black",
          url:
            "https://www.bajajfinservmarkets.in/emi-store/vivo-y20g-64-gb-obsidian-black-4-gb-ram-smartphone.html/",
          id: 1,
          label: <div><img src={image_one} height="300px" width="200px"/></div>,
        
        },
        {
          text: "Oppo A15s 64 GB Storage Fancy White ",
          url:
            "https://www.bajajfinservmarkets.in/emi-store/oppo-a15s-64-gb-fancy-white-4-gb-ram-smartphone.html/",
          id: 2,
          label: <div><img src={image_two} height="300px" width="200px"/></div>,
        },
        {
          text: "Apple iPhone 11 128 GB Storage Black",
          url: "https://www.bajajfinservmarkets.in/emi-store/apple-iphone-11-128-gb-black-smartphone.html/",
          id: 3,
          label: <div><img src={image_three} height="300px" width="200px"/></div>,
        },
        {
          text: "Samsung Galaxy A21s 64 GB Storage Black",
          url: "https://www.bajajfinservmarkets.in/emi-store/samsung-galaxy-a21s-64-gb-black-6-gb-ram-smartphone.html/",
          id: 4,
          label: <div><img src={image_one} height="300px" width="200px"/></div>,
        },
        {
          text: "Realme 8 Pro 128 GB Storage Infinite Black ",
          url: "https://www.bajajfinservmarkets.in/emi-store/realme-8-pro-128-gb-infinite-black-8-gb-ram-smartphone.html/",
          id: 5,
          label: <div><img src={image_two} height="300px" width="200px"/></div>,
        },
        {
          text: "Samsung Galaxy S21 Ultra 256 GB Storage Phantom Black ",
          url: "https://www.bajajfinservmarkets.in/emi-store/samsung-galaxy-s21-ultra-256-gb-phantom-black-12-gb-ram-smartphone.html/",
          id: 6,
          label: <div><img src={image_one} height="300px" width="200px"/></div>,
        },
        {
          text: "OnePlus 8T 5G 128 GB Storage Green ",
          url: "https://www.bajajfinservmarkets.in/emi-store/oneplus-8t-5g-128-gb-aquamarine-green-8-gb-ram-smartphone.html/",
          id: 7,
          label: <div><img src={image_two} height="300px" width="200px"/></div>,
        },
      ],
    },
  },

  {
    widgetName: "javascriptLinks1",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          text: "Dell Inspiron 3501 Core i3 10th Gen ",
          url: "https://www.bajajfinservmarkets.in/emi-store/dell-inspiron-core-i3-10th-gen-4-gb-ram-1-tb-hhd-15-6-inch-laptop-accent-black-d560354win9b.html/",
          id: 1,
          label: <div><img src={image_four} height="300px" width="200px"/></div>,
        
        },
        {
          text: "Dell Latitude 3500 Intel Core i3 8th Gen ",
          url:
            "https://www.bajajfinservmarkets.in/emi-store/dell-latitude-3500-intel-core-i3-8th-gen-4-gb-ram-1-tb-hdd-15-6-inch-laptop-black-b07w4286px.html/",
          id: 2,
          label: <div><img src={image_four} height="300px" width="200px"/></div>,
        },
        {
          text: "Lenovo AMD Ryzen 5 4 GB RAM/1 TB HDD/Windows ",
          url: "https://www.bajajfinservmarkets.in/emi-store/lenovo-amd-ryzen-5-4-gb-ram1-tb-hddwindows-10156-inch-laptop-grey81ut00j7in.html/",
          id: 3,
          label: <div><img src={image_four} height="300px" width="200px"/></div>,
        },
        
      ],
    },

    
  },

  {
    widgetName: "javascriptLinks2",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          text: "WatchOut Elegant Gen2 Jazz Black Metallic Smart Watch",
          url:
            "https://www.bajajfinservmarkets.in/emi-store/watchout-wearables-elegant-gen2-black-dial-bluetooth-smartwatch-jazz-black.html/",
          id: 1,
          label: <div><img src={image_five} height="300px" width="200px"/></div>,
        
        },
        {
          text: "WatchOut Elegant Gen2 Black Storm Leather Smart Watch",
          url:
            "https://www.bajajfinservmarkets.in/emi-store/watchout-wearables-elegant-gen2-black-dial-bluetooth-smartwatch-black-storm.html/",
          id: 2,
          label: <div><img src={image_five} height="300px" width="200px"/></div>,
        },
        {
          text: "WatchOut MadGaze 4G Sim Gesture Controlled Smart Watch",
          url: "https://www.bajajfinservmarkets.in/emi-store/watchout-madgaze-round-dial-shape-smartwatch-black.html/",
          id: 3,
          label: <div><img src={image_five} height="300px" width="200px"/></div>,
        },
        
      ],
    },

    
  },
],
}
 

export default config