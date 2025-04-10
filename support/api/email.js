import { expect } from "playwright/test";
import users from "../../fixtures/test-data/users.json";

class emailAPI {
    constructor(request) {
      this.request = request;
      this.sidToken = '';
      this.emailAddr = '';
    }
    
    async generateEmail(username) {
      const res = await this.request.get(
        `http://api.guerrillamail.com/ajax.php?f=set_email_user&email_user=${username}`
      );
      const data = await res.json();
      this.sidToken = data.sid_token;
      this.emailAddr = data.email_addr;
    }
  
    async waitForEmail(retryCount = 10, delay = 3000) {
        let emailList = [];
    
        for (let i = 0; i < retryCount; i++) {
            const res = await this.request.get(
                `https://api.guerrillamail.com/ajax.php?f=check_email&sid_token=${this.sidToken}&seq=0`
            );
            const data = await res.json();
            emailList = data.list;

            const foundEmail = emailList
                .filter(email => email.mail_subject === 'Your Main Website Store order confirmation')
                .sort((a, b) => b.mail_timestamp - a.mail_timestamp)[0]; 
            if (foundEmail) {
                console.log('Most recent email received with subject:', foundEmail.mail_subject);
                return foundEmail;
            }
            console.log('Waiting for email with subject "Your Main Website Store order confirmation"...');
            await new Promise(r => setTimeout(r, delay));
        }
        throw new Error('No email with the subject "Your Main Website Store order confirmation" received within timeout period.');
    }
    
    async fetchEmail(mailId) {
      const res = await this.request.get(
        `https://api.guerrillamail.com/ajax.php?f=fetch_email&email_id=${mailId}`
      );
      const data = await res.json();
      expect(data.mail_subject).toContain('Your Main Website Store order confirmation');
    }

    async getPurchaseItemEmail(username){
      switch (username) {
        case 'user1':
            await this.generateEmail(users.user.users1.Username);
            break;
        case 'user2':
            await this.generateEmail(users.user.users2.Username);
            break;
        case 'user3':
            await this.generateEmail(users.user.users3.Username);
            break;
    }
        const email = await this.waitForEmail();
        await this.fetchEmail(email.mail_id);
    }
  }

  export default emailAPI;