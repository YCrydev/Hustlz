// Client-side utility to interact with the waitlist API

export async function addToWaitlist(email: string, user_type: 'talent' | 'client') {
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, user_type }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return { success: false, error: data.error || 'Failed to add to waitlist.' };
    }
    
    return { success: true };
  } catch (error: any) {
    console.error('Error adding to waitlist:', error);
    return { success: false, error: error.message || 'Network error.' };
  }
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const response = await fetch('/api/waitlist/count');
    const data = await response.json();
    
    if (!response.ok) {
      console.error('Failed to fetch waitlist count:', data.error);
      return 0;
    }
    
    return data.count;
  } catch (error) {
    console.error('Error fetching waitlist count:', error);
    return 0;
  }
}

