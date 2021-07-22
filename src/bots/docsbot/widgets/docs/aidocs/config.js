import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from "./components/LearningOptions/LearningOptions";

import LinkList from "./components/LinkList/LinkList";

// Images ..

// Images ..

const config = { 
  botName: "Bajaj ChatBot",
  initialMessages: [createChatBotMessage("You are in HEALTH ARTICLES PAGE", {
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
          
          text: <div><b>7 Important Health Insurance Parameters to Select the Right Plan for Yourself</b></div>,
          
          id: 1,
          paragraph: "Health issues don’t just take a physical toll. They also affect you mentally and financially. The current pandemic drives home the importance of being financially secured. Consider this a reality check on how critical it is to safeguard your health and choose the right health insurance policy.Health issues don’t just take a physical toll. They also affect you mentally and financially. The current pandemic drives home the importance of being financially secured. Consider this a reality check on how critical it is to safeguard your health and choose the right health insurance policy.",
         // label: <div><img src={image_one} height="200px" width="200px"/></div> ,
          paragraph2: "The total sum assured is the maximum amount that a health insurance provider will have to pay you in case a claim has been made. It is very important to check this amount as that will decide if this option is feasible or not. When your medical expenses exceed the total sum assured, you might have to bear additional costs. Consider your current medical needs and choose the right health insurance policy that suits it. Usually, a higher sum assured is better as it caters to increasing medical costs. However, this may come at a higher premium.",
         // label2: <div><img src={image_two} height="300px" width="200px"/></div> 
         
        
        }
      ],
    },
  },

  {
    widgetName: "javascriptLinks1",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          text: <div><b>Informative guide to oral cancer symptoms, warning signs, causes and treatment</b></div>,
          //url: "https://www.bajajfinservhealth.in/articles/informative-guide-to-oral-cancer-symptoms-warning-signs-causes-and-treatment/",
          id: 1,
          paragraph: "Oral cancer is one of the most common types of cancers globally, and India contributes to almost 33% of all global oral cancer cases. The high number of oral cancer cases can be attributed to a lack of awareness, unhygienic oral habits, and tobacco and alcohol consumption. Annually, India reports approximately 77,000 oral cancer cases and 52,000 deaths due to oral cancer, making it a potent health risk to the country’s population.",
          paragraph2: "Cancer causes a mutation in cells, making them multiply uncontrollably. These cells finally outgrow the number of healthy cells in the body and form a mass or lump called a tumor. Finally, they invade or metastasize, spreading to other healthy tissues or organs in the body. Early diagnosis and treatment of the condition can provide complete relief from oral cancer. Therefore, if you notice or experience any of the following oral cancer symptoms, rush to your doctor or dentist for immediate medical diagnosis and treatment.",
        //  label: <div><img src={image_three} height="200px" width="200px"/></div>,
          //label2: <div><img src={image_four} height="300px" width="200px"/></div>

        
        },
        {
          text: <div><b>Breast Cancer Symptoms: 10 Common Signs of Breast Cancer</b></div>,
         // url:
           // "https://www.bajajfinservhealth.in/articles/breast-cancer-symptoms-10-common-signs-of-breast-cancer/",
          id: 2,
          paragraph: "Cancer is a disease that demands timely medical care for even the slightest chance of recovery. Among the many types of cancer, breast cancer is one that is most common amongst the female population in India, accounting for up to 32% of female cancers in the country. However, according to the National Breast Cancer Foundation, Inc., in the US, the 5-year survival rate is 100% when breast cancer is detected early in the localised stage. Thus, being alert to the early symptoms of breast cancer is key to early diagnosis and successful treatment.",
          paragraph2: "A common reason for breast cancer checks and a symptom that is most commonly noticed by many is the development of a lump in the breast. These may be soft and small in size or large and hard knots in the tissue. However, lumps may only be felt during the later breast cancer stages and this is reason why it is important to do regular mammograms. In addition to that, routine self-checking for lumps is also a key part of the process as it can help in early diagnosis.",
        //  label: <div><img src={image_five} height="200px" width="200px"/></div>,
          //label2: <div><img src={image_six} height="300px" width="200px"/></div>

        }
        
      ],
    },

    
  },

  {
    widgetName: "javascriptLinks2",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          text: <div><b>Fatty Liver: How to Spot It, Avoid It and Beat It</b></div>,
         // url:
           // "https://www.bajajfinservhealth.in/articles/fatty-liver-how-to-spot-it-avoid-it-and-beat-it/",
          id: 1,
          paragraph: "Your body stores and utilises nutrients as needed, and each type of nutrient has a role to play towards optimal body function. This is true even for fat, which is often demonised in the pursuit of weight loss today. It is important to know that consuming sufficient good fat from your diet helps you stay healthy. However, a problem known as fatty liver disease arises when there is a high level of fatty infiltration of the liver. Alcohol consumption is among the top causes of having a fatty liver and without proper treatment, the consequences can be dire.",
          paragraph2: "Since this disease has very serious health complications, including organ failure, it is well worth it to know all you can about the disease. This way, you can identify the warning signs early on before they turn into symptoms and get a conclusive diagnosis before the condition worsens. Let’s know more about it-",
         // label: <div><img src={image_seven} height="200px" width="200px"/></div>,
          //label2: <div><img src={image_eight} height="300px" width="200px"/></div>
        
        }
      ],
    },

    
  },
],
}
 

export default config