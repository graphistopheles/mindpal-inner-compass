export const saveEmailToGoogleDocs = async (email: string): Promise<boolean> => {
  console.log('Attempting to save email to Google Docs:', email);
  
  const webhookUrl = "https://hook.us2.make.com/ve0dqqa0zx036aaaf5ikmb26bhxufeit";
  
  try {
    const payload = {
      email,
      timestamp: new Date().toISOString(),
      source: window.location.hostname || 'unknown'
    };
    
    // Intentemos primero sin no-cors para ver si funciona
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      console.log('Response status:', response.status);
      return response.ok;
    } catch (corsError) {
      console.warn('CORS error, trying with no-cors mode:', corsError);
      
      // Fallback a no-cors si es necesario
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });
      
      // Como no podemos verificar la respuesta con no-cors, asumimos éxito
      console.log('Email attempt completed with no-cors mode');
      return true;
    }
  } catch (error) {
    console.error('Error saving email to Google Docs:', error);
    return false;
  }
};