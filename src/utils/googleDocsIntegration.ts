export const saveEmailToGoogleDocs = async (email: string): Promise<boolean> => {
  console.log('Attempting to save email to Google Docs:', email);
  
  const webhookUrl = "https://hook.us2.make.com/ve0dqqa0zx036aaaf5ikmb26bhxufeit";
  
  try {
    // Usar exactamente el mismo formato que funcionó en la prueba de PowerShell
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });
    
    console.log('Response status:', response.status);
    return response.status === 200;
  } catch (error) {
    console.error('Error saving email to Google Docs:', error);
    return false;
  }
};