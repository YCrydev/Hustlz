// API Configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Waitlist entry type
export interface WaitlistEntry {
  id?: number;
  email: string;
  user_type: 'talent' | 'client';
  created_at?: string;
}

// Local storage fallback for demo mode
const STORAGE_KEY = 'hustlz_waitlist';

function getLocalWaitlist(): WaitlistEntry[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveLocalWaitlist(entries: WaitlistEntry[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

// Check if API is available
async function isApiAvailable(): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/api/health`, { 
      method: 'GET',
      signal: AbortSignal.timeout(2000) // 2 second timeout
    });
    return response.ok;
  } catch {
    return false;
  }
}

// Add to waitlist
export async function addToWaitlist(email: string, userType: 'talent' | 'client'): Promise<{ success: boolean; error?: string }> {
  // Try API first
  const apiAvailable = await isApiAvailable();
  
  if (apiAvailable) {
    try {
      const response = await fetch(`${API_URL}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, user_type: userType }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error || 'Something went wrong' };
      }

      console.log('✅ Saved to database');
      return { success: true };
    } catch (err) {
      console.error('API error:', err);
      return { success: false, error: 'Something went wrong. Please try again.' };
    }
  }

  // Fallback: Use localStorage for demo mode
  console.log('📝 Demo mode: Saving to localStorage (start server for database)');
  
  const waitlist = getLocalWaitlist();
  
  // Check for duplicate
  if (waitlist.some(entry => entry.email === email)) {
    return { success: false, error: 'This email is already on the waitlist!' };
  }

  // Add new entry
  waitlist.push({
    email,
    user_type: userType,
    created_at: new Date().toISOString()
  });
  
  saveLocalWaitlist(waitlist);
  
  return { success: true };
}

// Get waitlist count
export async function getWaitlistCount(): Promise<number> {
  // Try API first
  const apiAvailable = await isApiAvailable();
  
  if (apiAvailable) {
    try {
      const response = await fetch(`${API_URL}/api/waitlist/count`);
      const data = await response.json();
      return data.count || 0;
    } catch (err) {
      console.error('Error:', err);
      return 0;
    }
  }

  // Fallback: Use localStorage
  return getLocalWaitlist().length;
}

