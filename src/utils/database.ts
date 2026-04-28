// Database utility for storing contact form submissions
// This is a simplified version that uses localStorage as fallback
// In production, this would connect to your PostgreSQL database

export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  created_at?: string;
}

export const storeContactSubmission = async (data: Omit<ContactSubmission, 'id' | 'created_at'>): Promise<ContactSubmission> => {
  try {
    // In a real application, this would make an API call to your backend
    // For now, we'll use localStorage as a fallback
    const contacts = JSON.parse(localStorage.getItem('portfolio_contacts') || '[]');
    
    const newContact: ContactSubmission = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      timestamp: data.timestamp,
      created_at: new Date().toISOString(),
    };
    
    contacts.push(newContact);
    localStorage.setItem('portfolio_contacts', JSON.stringify(contacts));
    
    return newContact;
  } catch (error) {
    throw new Error('Failed to store contact submission');
  }
};

export const getContactSubmissions = (): ContactSubmission[] => {
  try {
    const contacts = JSON.parse(localStorage.getItem('portfolio_contacts') || '[]');
    return contacts.sort((a: ContactSubmission, b: ContactSubmission) => 
      new Date(b.created_at || b.timestamp).getTime() - new Date(a.created_at || a.timestamp).getTime()
    );
  } catch (error) {
    return [];
  }
};

// For production use with Neon PostgreSQL
export const storeContactInDatabase = async (data: Omit<ContactSubmission, 'id' | 'created_at'>): Promise<ContactSubmission> => {
  try {
    // Use direct database connection (works in both development and production)
    const { storeContactData } = await import('@/api/contact-api');
    
    const result = await storeContactData({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      timestamp: data.timestamp
    });

    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.error || 'Failed to store contact');
    }
  } catch (error) {
    // Final fallback to localStorage
    const fallbackResult = await storeContactSubmission(data);
    return fallbackResult;
  }
};


