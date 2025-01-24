import formData from 'form-data';
import Mailgun from 'mailgun.js';

export async function POST(request) {
  const { name, email, phone, position } = await request.json();

  try {
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: 'need to add in env', // Replace with your Mailgun 
    });

    // Email to the team
    const teamEmailData = {
      from: email,
      to: 'info@samaro.in',
      subject: `New Career Application: ${position}`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #4a4a4a;">New Career Application Received</h2>
            <p>A new application has been submitted for the <strong>${position}</strong> position.</p>
            <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px;"><strong>Position:</strong></td>
                <td style="padding: 10px;">${position}</td>
              </tr>
            </table>
            <p style="margin-top: 20px;">Please review this application and take appropriate action.</p>
            <p>This is an automated message from the Samaro Careers website.</p>
          </body>
        </html>
      `,
    };

    // Confirmation email to the client
    const clientEmailData = {
      from: 'info@samaro.in',
      to: email,
      subject: 'Thank You for Your Application to Samaro',
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4a4a4a;">Thank You for Your Application</h2>
            <p>Dear ${name},</p>
            <p>Thank you for submitting your application for the <strong>${position}</strong> position at Samaro. We have received your information and our team will review it shortly.</p>
            <p>Here's a summary of your submission:</p>
            <table style="border-collapse: collapse; width: 100%;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px;"><strong>Position:</strong></td>
                <td style="padding: 10px;">${position}</td>
              </tr>
            </table>
            <p>We appreciate your interest in joining our team. Our hiring team will carefully review your application, and we will be in touch if your qualifications match our current needs.</p>
            <p>Best regards,</p>
            <p><strong>The Samaro Recruitment Team</strong></p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 12px; color: #666;">This is an automated message. Please do not reply to this email.</p>
          </body>
        </html>
      `,
    };
    let teamResponse, clientResponse;
    // Send email to the team
    teamResponse = await mg.messages.create('samaro.in', teamEmailData);
    console.log('Team notification email sent:', teamResponse);
  
    // Check if the team email was sent successfully
    if (teamResponse.status === 200) {
      // Send confirmation email to the client
      clientResponse = await mg.messages.create('samaro.in', clientEmailData);
      console.log('Client confirmation email sent:', clientResponse);
    } else {
      console.log('Team email not sent successfully. Client email not sent.');
    }

    return new Response(
      JSON.stringify({ 
        success: "Application submitted successfully. Please check your email for confirmation.",
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
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Error processing application', details: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}