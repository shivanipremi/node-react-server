const sendgrid = require("sendgrid");
const Helper = sendgrid.mail;
const keys = require("../config/keys")


class Mailer extends  Helper.Mail {
    constructor({subject, recipients}, body) {
        super();
        this.sgApi = sendgrid(keys.sendGridKey)
        this.from_email = new Helper.Email("no-reply@emaily.com");
        this.subject = subject;
        this.body = new Helper.Content("text/html", body)
        this.recipients = this.formatAddresses(recipients); 
        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients()
    }
    formatAddresses(recipients) {
        return recipients.map((data)=> {
            return new Helper.Email(data.email)
        })
    }
    addClickTracking() {
        const trackingSettings = new Helper.TrackingSettings();
        const clickTracking = new Helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings)
    }
    addRecipients(){
        const personalize = new Helper.Personalization();

        this.recipients.forEach(recipient => {
            personalize.addTo(recipient)
        })

        this.addPersonalization(personalize)
    }

    async send() {
        try {
            console.log("inside try here===")
            const request = this.sgApi.emptyRequest({
                method : 'POST',
                path : '/v3/mail/send',
                body : this.toJSON()
            })
            const response = await this.sgApi.API(request);
            console.log("check response here========", response)
            return response;

        } catch(err) {
            console.log("error here===", err)
        }
       
    }

}

module.exports = Mailer;