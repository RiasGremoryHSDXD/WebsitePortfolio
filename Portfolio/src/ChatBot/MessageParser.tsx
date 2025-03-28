// MessageParser.tsx
class MessageParser {
    actionProvider: any;
    state: any;
  
    constructor(actionProvider: any, state: any) {
      this.actionProvider = actionProvider;
      this.state = state;
    }

    parse(message: string): void {
        const lowerMessage = message.toLowerCase().trim();

        // Greeting variations
        if (/(hi|hello|hey|howdy|good\s(morning|afternoon|evening))\b/i.test(lowerMessage)) {
            this.actionProvider.handleGreeting();
        
        // Identity questions
        } else if (/(who\s*(are|r)\s*(you|u)|introduce|yourself|identity)/i.test(lowerMessage)) {
            this.actionProvider.chatBotIdentity();
        
        // About creator
        } else if (/(creator|about\s+(him|james)|details.*(james|creator)|who.*(made|created)\syou)/i.test(lowerMessage)) {
            this.actionProvider.creatorDetails();
        
        // Education queries
        } else if (/(stud(y|ied)|education|degree|school|college|university|ustp|coursework)/i.test(lowerMessage)) {
            this.actionProvider.education();
        
        // Coding motivation
        } else if (/(why\s(code|programming)|reason.*(code|program)|motivation)/i.test(lowerMessage)) {
            this.actionProvider.reasonToCode();
        
        // Skills queries
        } else if (/(skills|expert|proficient|what.*(do|can).*you\s(do|make)|abilities)/i.test(lowerMessage)) {
            this.actionProvider.handleSkills();
        
        // Project inquiries
        } else if (/(projects?|portfolio|github|works?|build|created?)/i.test(lowerMessage)) {
            this.actionProvider.handleProjects();
        
        // Strengths
        } else if (/(strengths?|good\sat|excel.*at|advantages?)/i.test(lowerMessage)) {
            this.actionProvider.handleStrengths();
        
        // Weaknesses
        } else if (/(weakness(es)?|improve|better\sat|challenges?)/i.test(lowerMessage)) {
            this.actionProvider.handleWeaknesses();
        
        // Contact info
        } else if (/(contact|reach|number|email|phone|connect)/i.test(lowerMessage)) {
            this.actionProvider.handleContact();
        
        // Location info
        } else if (/(where.*live|location|residence|based|philippines)/i.test(lowerMessage)) {
            this.actionProvider.handleLocation();
        
        }else if (/(grammar(\s*picker)?|python\s*game)/i.test(lowerMessage)) {
            this.actionProvider.projectOneCode();
        }
        else if (/(library\s*management|java\s*(app|swing)|book\s*system)/i.test(lowerMessage)) {
            this.actionProvider.projectTwoCode();
        }
        else if (/(grade\s*management|c\s*program|student\s*grade)/i.test(lowerMessage)) {
            this.actionProvider.projectThreeCode();
        }
        else if (/(ustp\s*it|university\s*website|department\s*portal)/i.test(lowerMessage)) {
            this.actionProvider.projectFourCode();
        }
         else {
            this.actionProvider.handleDefault();
        }
    }
}

export default MessageParser;