import React from 'react';
import ProfileData from './ProfileData.json';

class ActionProvider {
  createChatBotMessage: (message: string, options?: object) => any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  stateRef: any;

  constructor(
    createChatBotMessage: (message: string, options?: object) => any,
    setStateFunc: React.Dispatch<React.SetStateAction<any>>,
    stateRef: any
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.stateRef = stateRef;
  }

  // Helper method to update the state with a new message
  appendMessage(messageContent: string, options = {}): void {
    const message = this.createChatBotMessage(messageContent, options);
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

    handleGreeting = () => this.appendMessage(
        `Hi there! My Name is Rias A chatbot. 👋 I'm here to tell you all about ${ProfileData.About.full_name}. What would you like to know? 😊`
    );

    chatBotIdentity = () => this.appendMessage(
        `I'm your friendly guide to exploring ${ProfileData.About.full_name}'s profile! ` +
        `Think of me as a digital portfolio assistant. I can share details about his education, skills, projects, ` +
        `and more! 📚💻 Ask me anything you're curious about!`
    );

    creatorDetails = () => this.appendMessage(
        `Let me introduce my creator! 🎨\n\n` +
        `*Name*: ${ProfileData.About.full_name}\n` +
        ` *Birthday*: ${ProfileData.About.birth_day}\n` +
        ` *Location*: ${ProfileData.About.location}\n` +
        `*Contact*: ${ProfileData.About.phone_number}\n\n` +
        `He's a ${ProfileData.education.degree} student at ${ProfileData.education.institution}. ` +
        `Want to know more about his skills or projects? 😊`
    );

    education = () => this.appendMessage(
        `*Education Background*\n\n` +
        `*Institution*: ${ProfileData.education.institution}\n` +
        `*Degree*: ${ProfileData.education.degree}\n` +
        `*Key Coursework*:\n${ProfileData.education.details.replace('etc.', 'and more!')}\n\n` +
        `He's been focusing particularly on web development and database systems. ` +
        `Curious about specific technical skills he's learned? 💡`
    );

    handleSkills = () => {
        const techSkills = ProfileData.Skills.technical.join(' • ');
        const softSkills = ProfileData.Skills.soft.join(' • ');
        
        this.appendMessage(
            `*Technical Skills*:\n${techSkills}\n\n` +
            `*Soft Skills*:\n${softSkills}\n\n` +
            `He's always expanding his skill set! Want to see projects where he applied these skills? 😉`
        );
    };

    handleProjects = () => {
        const projects = Object.values(ProfileData.Project).map(proj =>
            `🔹 *${proj.name}* (${proj.language})\n${proj.description}\n🌐 ${proj.url}\n`
        ).join('\n');

        this.appendMessage(
            `🚀 *Featured Projects*\n\n${projects}\n` +
            `Which project interests you most? I can provide more details! 🔍`
        );
    };

    handleStrengths = () => this.appendMessage(
        `💪 *Key Strengths*\n\n` +
        ProfileData.Strengths.map(s => `✅ ${s}`).join('\n') +
        `\n\nThese strengths help him tackle complex development challenges! 🏆`
    );

    handleWeaknesses = () => this.appendMessage(
        `📌 *Development Areas*\n\n` +
        ProfileData.Weaknesses.map(w => `🔹 ${w}`).join('\n') +
        `\n\nHe's actively working on improving these aspects through time management techniques ` +
        `and agile methodologies! 📈`
    );

    handleContact = () => this.appendMessage(
        `📬 *Contact Information*\n\n` +
        `📧 Email: ${ProfileData.Contact.email}\n` +
        `📱 Phone: ${ProfileData.Contact.contact}\n` +
        `🌍 Serving: ${ProfileData.Contact.area_server}\n\n` +
        `Feel free to reach out for collaborations or opportunities! 🤝`
    );

    handleLocation = () => this.appendMessage(
        `📍 James is currently based in ${ProfileData.About.location} – ` +
        `a vibrant city in the Philippines known for its rich culture and growing tech community! ` +
        `🇵🇭🌴`
    );

    reasonToCode = () => this.appendMessage(
        `💡 James discovered his passion for coding through:\n` +
        `The creative freedom to build solutions\n` +
        `The thrill of problem-solving\n` +
        `The ability to impact digital experiences\n\n` +
        `"Coding is like supercharging creativity with logic!" – that's his motto. 😊`
    );

    projectOneCode = () => this.appendMessage(`${ProfileData.Project.project_one.name} using the ${ProfileData.Project.project_one.language} it is a ${ProfileData.Project.project_one.description}`)
    projectTwoCode = () => this.appendMessage(`${ProfileData.Project.project_two.name} using the ${ProfileData.Project.project_two.language} it is a ${ProfileData.Project.project_two.description}`)
    projectThreeCode = () => this.appendMessage(`${ProfileData.Project.project_three.name} using the ${ProfileData.Project.project_three.language} it is a ${ProfileData.Project.project_three.description}`)
    projectFourCode = () => this.appendMessage(`${ProfileData.Project.project_four.name} using the ${ProfileData.Project.project_four.language} it is a ${ProfileData.Project.project_four.description}`)


    handleDefault(){
        this.appendMessage(
        `\nHmm, I'm not sure I understand that one. 🤔\n` +
        `I can tell you about:\n` +
        `James's background and education,\n` +
        `Technical skills and projects, \n` +
        `Professional strengths,\n` +
        `Contact information,\n\n` +
        `What would you like to explore? 😊` )
        this.appendMessage(
            "Tips to used me! https://github.com/RiasGremoryHSDXD/WebsitePortfolio"
        )
    };

}

export default ActionProvider;
