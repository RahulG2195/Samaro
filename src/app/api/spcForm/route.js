import formData from 'form-data';
import Mailgun from 'mailgun.js';

export async function POST(request) {
  const { name, email, phone, message, selectedOption } = await request.json();

  try {
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: 'Need to add an env', // Replace with your Mailgun 
    });

    const teamEmailData = {
      from: email,
      to: 'sales.assist@samaro.in',
      subject: 'New SpcForm Submission',
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4a4a4a;">New SpcForm Submission</h2>
            <table style="border-collapse: collapse; width: 100%;">
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
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Selected Option:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${selectedOption}</td>
              </tr>
              <tr>
                <td style="padding: 10px;" colspan="2"><strong>Message:</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px;" colspan="2">${message}</td>
              </tr>
            </table>
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
        from: 'sales.assist@samaro.in',
        to: email,
        subject: 'Thank You for Your Submission',
        html: `
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4a4a4a;">Thank You for Your Submission</h2>
              <p>Dear ${name},</p>
              <p>We have received your submission through our website form. Thank you for your interest in our services.</p>
              <p>Our team will review your information and get back to you as soon as possible.</p>
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
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Selected Option:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${selectedOption}</td>
                </tr>
              </table>
              <p>Best regards,</p>
              <p><strong>The Samaro Team</strong></p>
            </body>
          </html>
        `,
      };

      const clientResponse = await mg.messages.create('samaro.in', clientEmailData);
      console.log('Client confirmation email sent:', clientResponse);

      return new Response(
        JSON.stringify({ 
          success: "Form submitted successfully. A confirmation email has been sent.",
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
      JSON.stringify({ error: 'Error processing form submission', details: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}