import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { Value } from 'sass';
import { query } from "@/utils/Dbconnect"; 
    

export async function GET(request) {
    try {
      const results = await query({
        query: "SELECT * FROM emails",
      });
      return new Response(JSON.stringify(results), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
  }
  
export async function POST(request) {
  const { email } = await request.json();

  try {
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_SEDN_KEY, 
    });

    const teamEmailData = {
      from: email,
      to: 'info@samaro.in',
      subject: 'New Newsletter Subscription',
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4a4a4a;">New Newsletter Subscription</h2>
            <p>A new user has subscribed to the newsletter with the following email:</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </body>
        </html>
      `,
    };

    // Send email to the team
    const teamResponse = await mg.messages.create('samaro.in', teamEmailData);
    console.log('Team notification email sent:', teamResponse);

    // Only send confirmation email if team email was sent successfully
    if (teamResponse.status === 200) {
      const clientEmailData = {
        from: 'info.assist@samaro.in',
        to: email,
        subject: 'Thank You for Subscribing to Our Newsletter',
        html: `
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4a4a4a;">Thank You for Subscribing to Our Newsletter</h2>
              <p>Dear Subscriber,</p>
              <p>Thank you for subscribing to our newsletter. You will now receive the latest updates and news from Samaro.</p>
              <p>Best regards,</p>
              <p><strong>The Samaro Team</strong></p>
            </body>
          </html>
        `,
      };

      const clientResponse = await mg.messages.create('samaro.in', clientEmailData);
      console.log('Client confirmation email sent:', clientResponse);
      
      const sqlQuery = `INSERT INTO emails (email_id) VALUES (?)`;

      const dbResponse = await query({
        query: sqlQuery,
        values: [email],
      });
      console.log('Email inserted into the database:', dbResponse);
    

      return new Response(
        JSON.stringify({ 
          success: "Subscription successful. A confirmation email has been sent.",
          teamMailgunResponse: teamResponse,
          clientMailgunResponse: clientResponse
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } else {
      throw new Error('Failed to send team notification email');
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Error processing subscription', details: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}


