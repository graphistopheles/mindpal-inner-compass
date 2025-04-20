/**
 * Utility function to save user email to Google Docs
 * Note: This is a frontend implementation that uses a webhook
 */

interface GoogleDocsWebhookPayload {
  email: string;
  timestamp: string;
  source: string;
}

export const saveEmailToGoogleDocs = async (email: string): Promise<boolean> => {
  console.log('Attempting to save email to Google Docs:', email);
  
  // Replace this URL with your actual webhook URL that processes the request
  const webhookUrl = "https://hook.us2.make.com/ve0dqqa0zx036aaaf5ikmb26bhxufeit";
  
  try {
    const payload: GoogleDocsWebhookPayload = {
      email,
      timestamp: new Date().toISOString(),
      source: window.location.hostname || 'direct-test'
    };
    
    console.log('Sending payload to webhook:', payload);
    
    // Make.com puede tener requerimientos específicos para el formato
    // Intentemos enviar los datos en formato "application/x-www-form-urlencoded"
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('timestamp', payload.timestamp);
    formData.append('source', payload.source);
    
    // Primer intento: usando x-www-form-urlencoded
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
      
      console.log('Response status:', response.status);
      if (response.ok) {
        console.log('Email saved successfully');
        return true;
      }
      throw new Error(`Server responded with status: ${response.status}`);
    } 
    catch (firstError) {
      console.warn('First attempt failed:', firstError);
      
      // Segundo intento: usando JSON
      try {
        const jsonResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        
        console.log('JSON response status:', jsonResponse.status);
        if (jsonResponse.ok) {
          console.log('Email saved successfully with JSON format');
          return true;
        }
        throw new Error(`Server responded with status: ${jsonResponse.status}`);
      } 
      catch (jsonError) {
        console.warn('JSON attempt failed:', jsonError);
        
        // Último intento: usando no-cors como fallback
        console.log('Attempting no-cors as last resort');
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
          body: JSON.stringify(payload),
        });
        
        // No podemos confiar en que esto funcione realmente
        console.log('No-cors attempt completed, but success cannot be verified');
        return false;
      }
    }
  } catch (error) {
    console.error('Error saving email to Google Docs:', error);
    return false;
  }
};