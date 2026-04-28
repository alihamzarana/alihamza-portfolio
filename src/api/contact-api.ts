// Contact API function for storing contact data
// This version works in the browser and uses a webhook approach for database storage

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export const storeContactData = async (data: ContactData): Promise<{ success: boolean; data?: any; error?: string }> => {
  try {
    // Create contact object
    const newContact = {
      id: Date.now(),
      ...data,
      created_at: new Date().toISOString()
    };

    // Store in localStorage first (always works)
    const contacts = JSON.parse(localStorage.getItem('portfolio_contacts') || '[]');
    contacts.push(newContact);
    localStorage.setItem('portfolio_contacts', JSON.stringify(contacts));

    // Try to send to Neon database via webhook
    try {
      const { sendToNeonDatabase } = await import('@/api/neon-webhook');
      await sendToNeonDatabase(newContact);
    } catch (webhookError) {
      // Webhook failed, but data stored locally
    }

    return {
      success: true,
      data: newContact
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Function to retrieve stored contacts
export const getStoredContacts = (): ContactData[] => {
  try {
    const contacts = JSON.parse(localStorage.getItem('portfolio_contacts') || '[]');
    return contacts.sort((a: any, b: any) => 
      new Date(b.created_at || b.timestamp).getTime() - new Date(a.created_at || a.timestamp).getTime()
    );
  } catch (error) {
    return [];
  }
};

// Function to clear stored contacts
export const clearStoredContacts = (): void => {
  localStorage.removeItem('portfolio_contacts');
};
