'use client';

import ChatWidget, { type Message } from './ChatWidget';

async function sendMessage(
  message: string,
  history: Message[]
): Promise<{ answer: string }> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history }),
  });

  if (!res.ok) throw new Error('Error en el chat');

  return res.json() as Promise<{ answer: string }>;
}

export default function ChatProvider() {
  return <ChatWidget onSendMessage={sendMessage} />;
}
