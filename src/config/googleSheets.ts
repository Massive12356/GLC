// Google Sheets Configuration
// Replace this URL with your deployed Google Apps Script Web App URL
export const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

// Form Types
export type FormType = 'contact' | 'volunteer' | 'partnership' | 'event';

// Helper function to submit form data
export const submitFormToGoogleSheets = async (
  formType: FormType,
  formData: Record<string, unknown>
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType,
        ...formData
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
};
