import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from "../../../../../components/LearningOptions/LearningOptions";
import LinkList from "../../../../../components/LinkList/LinkList";

import image_one from "./images/one.png";
import image_two from "./images/two.jpg";
import image_three from "./images/three.jpg";
import image_four from "./images/four.jpg";
import image_five from "./images/five.png";
import image_six from "./images/six.png";
import image_seven from "./images/seven.png";
import image_eight from "./images/eight.png";
import image_nine from "./images/nine.png";
import image_ten from "./images/ten.png";



const config = { 
  botName: "Bajaj ChatBot",
  initialMessages: [createChatBotMessage("Search Panel Section",{
  }),
],

widgets: [
  {
    widgetName: "learningOptions",
   widgetFunc: (props) => <LearningOptions {...props} />,
  },


  {
    widgetName: "javascriptLinksone",
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
  widgetName: "javascriptLinkstwo",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: <div><h2>Diabetes Care Basic</h2></div>,
        url: "https://www.bajajfinservhealth.in/aarogya-care/diabetes-care-basic",
       label: <div><img src={image_one} height="100px" width="200px"/></div>,
        id: 1,
       
      
      },
      {
        
        text: <div><h2>Diabetes Care Plus</h2></div>,
        url: "https://www.bajajfinservhealth.in/aarogya-care/diabetes-care-plus",
       label: <div><img src={image_one} height="100px" width="200px"/></div>,
        id: 2,
       
      
      }
    ],
  },
},

{
  widgetName: "javascriptLinksthree",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: "In this Plan we have : ",
        text1: "---> DOCTOR CONSULTATION",
        text2: "---> LAB BENEFITS",
        text3: "---> TELECONSULATION",
        text4: "---> NETWORK DISCOUNTS",
        //url: "https://www.bajajfinservhealth.in/aarogya-care/diabetes-care-basic",
        label: <div><img src={image_two} height="150px" width="200px"/></div>,
        id: 1,
        text5: <div><b><mark>Doctor Consultation</mark></b></div>,
        text6: "Reimbursement beneﬁt of upto Rs. 750",
        text7: "Multiple visits allowed",
        text8: "No capping on individual usage up to specified amount",
        text9: <div><b><mark>Lab benefit</mark></b></div>,
        text10: "Reimbursement beneﬁt of upto Rs. 1000",
        text11: "Multiple visits allowed",
        text12: "No capping on individual usage up to specified amount",
        text13: <div><b><mark>Teleconsultation</mark></b></div>,
        text14: "1000+ Doctors",
        text15: "Top General Physicians at your fingertips",
        text16: "Pan India Coverage",
        text17: <div><b><mark>Network Discounts</mark></b></div>,
        text18: "10% discount on Doctor consultation",
        text19: "5% discount on IPD room rent",
        text20: "Pan India Hospital and Lab Network",
       
      
      }
    ],
  },
},

{
  widgetName: "javascriptLinksfour",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: "Sure. In this Plan we have : ",
        text1: "---> DOCTOR CONSULTATION",
        text2: "---> LAB BENEFITS",
        text3: "---> TELECONSULATION",
        text4: "---> NETWORK DISCOUNTS",
        //url: "https://www.bajajfinservhealth.in/aarogya-care/diabetes-care-basic",
        label: <div><img src={image_three} height="150px" width="200px"/></div>,
        id: 1,
        text5: <div><b><mark>Doctor Consultation</mark></b></div>,
        text6: "Reimbursement beneﬁt of upto Rs. 1000",
        text7: "Multiple visits allowed",
        text8: "No capping on individual usage up to specified amount",
        text9: <div><b><mark>Lab benefit</mark></b></div>,
        text10: "Reimbursement beneﬁt of upto Rs. 1000",
        text11: "Multiple visits allowed",
        text12: "No capping on individual usage up to specified amount",
        text13: <div><b><mark>Teleconsultation</mark></b></div>,
        text14: "1000+ Doctors",
        text15: "Top General Physicians at your fingertips",
        text16: "Pan India Coverage",
        text17: <div><b><mark>Network Discounts</mark></b></div>,
        text18: "10% discount on Doctor consultation",
        text19: "5% discount on IPD room rent",
        text20: "Pan India Hospital and Lab Network",
       
      
      }
    ],
  },
},

{
  widgetName: "javascriptLinksfive",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
       // text: "Vivo Y20G 64 GB Storage Obsidian Black",
        //url: "https://www.bajajfinservmarkets.in/emi-store/vivo-y20g-64-gb-obsidian-black-4-gb-ram-smartphone.html",
        //label: <div><img src={image_one} height="300px" width="200px"/></div>,
        //id: 1,
       
      
      }
    ],
  },
},

{
  widgetName: "javascriptLinksnine",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: <div><b>The consultation fee vary from doctor to doctor. You may choose a doctor as per your preference.<mark>Click on the photo to see consultation fee.</mark> </b></div>,
        url: "https://www.bajajfinservhealth.in/in-clinic-consultation",
        label: <div><img src={image_four} height="300px" width="200px"/></div>,
        //id: 1,
       
      
      }
    ],
  },
},

{
  widgetName: "javascriptLinksthirteen",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: <div><b>Bajaj Finserv EMI Card </b></div>,
        url: "https://www.bajajfinservhealth.in/emi-network-health-emi-card?loginRequired=true",
        label: <div><img src={image_five} height="200px" width="200px"/></div>,
        id: 1,
       
      
      },
      {
        
        text: <div><b>Bajaj Finserv Health EMI Card </b></div>,
        url: "https://www.bajajfinservhealth.in/emi-network-health-emi-card",
        label: <div><img src={image_six} height="200px" width="200px"/></div>,
        id: 2,
       
      
      }
    ],
  },
},

{
  widgetName: "javascriptLinksfourteen",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: <div><b><mark>Dental Health</mark> </b></div>,
        url: "https://www.bajajfinservhealth.in/health-library/dental-health",
        label: <div><img src={image_seven} height="200px" width="200px"/></div>,
        id: 1,
       
      
      },
      {
        
        text: <div><b><mark>Cancer</mark></b></div>,
        url: "https://www.bajajfinservhealth.in/health-library/cancer",
        label: <div><img src={image_eight} height="200px" width="200px"/></div>,
        id: 2,
       
      
      },
      {
        
        text: <div><b><mark>Skin Care</mark></b></div>,
        url: "https://www.bajajfinservhealth.in/health-library/skin-and-hair",
        label: <div><img src={image_nine} height="200px" width="200px"/></div>,
        id: 3,
       
      
      }
    ],
  },
},

{
  widgetName: "javascriptLinksfifteen",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: <div><b> </b></div>,
        url: "https://www.bajajfinservhealth.in/in-clinic-consultation",
        label: <div><img src={image_four} height="300px" width="200px"/></div>,
        //id: 1,
       
      
      }
    ],
  },
},

{
  widgetName: "javascriptLinksseventeen",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: <div><b><mark>Eligibility</mark> </b></div>,
        text1: "The Bajaj Finserv Digital Health EMI Network Card can be availed only by existing Bajaj Finserv EMI Network card holders.",
        //url: "https://www.bajajfinservhealth.in/in-clinic-consultation",
        //label: <div><img src={image_four} height="300px" width="200px"/></div>,
        id: 1,
       
      
      },
      {
        
        text: <div><b><mark>Documents Needed</mark> </b></div>,
        text1: "Aadhar Card",
        text2: "Cancelled cheque",
        text3: "Signed ECS Mandate",
        //url: "https://www.bajajfinservhealth.in/in-clinic-consultation",
        //label: <div><img src={image_four} height="300px" width="200px"/></div>,
        id: 2,
       
      
      },
      {
        
        text: <div><b><mark>Fees and charges</mark> </b></div>,
        text1: "Eye Care Treatment - Rs 767",
        //url: "https://www.bajajfinservhealth.in/in-clinic-consultation",
        //label: <div><img src={image_four} height="300px" width="200px"/></div>,
        id: 3,
       
      
      }
    ],
  },
},

{
  widgetName: "javascriptLinkseighteen",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        
        text: <div><b>Thanx for using... </b></div>,
       // url: "https://www.bajajfinservhealth.in/in-clinic-consultation",
        label: <div><img src={image_ten} height="300px" width="200px"/></div>,
        id: 1,
       
      
      }
    ],
  },
},














  {
    widgetName: "javascriptLinksA",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          
          text: "Sorry.. No Data is Available. This is under Development...",
         
        //  label: <div><img src={} height="300px" width="200px"/></div>,
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
        //  label: <div><img src={} height="300px" width="200px"/></div>,
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
      //  label: <div><img src={} height="300px" width="200px"/></div>,
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
       // label: <div><img src={} height="300px" width="200px"/></div>,
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
        //label: <div><img src={} height="300px" width="200px"/></div>,
        id: 1,
       
      
      },
      {
        
        text: "HP 15 Intel Pentium Gold 4 GB RAM/ 1 TB HDD/ 15.6 Inch Laptop (Jet Black, 15s-du1052tu)",
        url: "https://www.bajajfinservmarkets.in/emi-store/hp-15-intel-pentium-gold-4-gb-ram-1-tb-hdd-15-6-inch-laptop-jet-black-15s-du1052tu.html",
        //label: <div><img src={image_four} height="300px" width="200px"/></div>,
        id: 2,
       
      
      }
    ],
  },
},


],
}
 

export default config