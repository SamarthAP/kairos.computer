import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connection Successful - Kairos',
  description: 'Your account has been successfully connected to Kairos.',
};

export default function OAuthCallbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}