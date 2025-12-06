import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the dashboard
  redirect('/dashboard');
  
  // This return is a fallback and won't be reached due to the redirect
  return null;
}