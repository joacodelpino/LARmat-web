'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, MessageCircle } from 'lucide-react';

export type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: '¡Hola! Soy el Asistente LAR. ¿En qué te puedo ayudar hoy?',
};

type ChatWidgetProps = {
  onSendMessage: (message: string, history: Message[]) => Promise<{ answer: string }>;
};

export default function ChatWidget({ onSendMessage }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;

    const history = [...messages];
    const userMessage: Message = { role: 'user', content: text };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const { answer } = await onSendMessage(text, history);
      setMessages((prev) => [...prev, { role: 'assistant', content: answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Lo siento, ocurrió un error. Por favor intentá de nuevo.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Chat Panel */}
      <div
        className={`
          mb-4 flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl
          transition-all duration-300 ease-in-out origin-bottom-right
          w-[min(calc(100vw-2rem),360px)]
          ${isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
          }
        `}
        style={{ height: 'min(500px, calc(100dvh - 7rem))' }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
          style={{ backgroundColor: '#F24A49' }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
            <Bot size={18} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white leading-tight">Asistente LAR</p>
            <p className="text-xs text-white/70 leading-tight">En línea</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Cerrar chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ backgroundColor: '#f8f8f8' }}>
          {messages.map((msg, index) => (
            <MessageBubble key={index} message={msg} />
          ))}

          {isLoading && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 border-t border-gray-100 bg-white px-4 py-3 flex-shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribí tu mensaje..."
            disabled={isLoading}
            className="
              flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2
              text-sm text-gray-800 placeholder-gray-400 outline-none
              transition-colors focus:border-[#F24A49] focus:bg-white
              disabled:opacity-50
            "
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="
              flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full
              text-white shadow-sm transition-all
              disabled:opacity-40 disabled:cursor-not-allowed
              hover:scale-105 active:scale-95
            "
            style={{ backgroundColor: '#F24A49' }}
            aria-label="Enviar mensaje"
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          relative flex h-14 w-14 items-center justify-center rounded-full
          text-white shadow-lg transition-all duration-200
          hover:scale-110 active:scale-95
        "
        style={{ backgroundColor: '#F24A49' }}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
            isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
          }`}
        >
          <X size={22} />
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
            isOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
          }`}
        >
          <MessageCircle size={22} />
        </span>

        {/* Pulse ring */}
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ backgroundColor: '#F24A49' }}
          />
        )}
      </button>
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {!isUser && (
        <div
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          <Bot size={13} className="text-white" />
        </div>
      )}
      <div
        className={`
          max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm
          ${isUser
            ? 'rounded-br-sm text-white'
            : 'rounded-bl-sm bg-white text-gray-800'
          }
        `}
        style={isUser ? { backgroundColor: '#F24A49' } : {}}
      >
        {message.content}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: '#1a1a1a' }}
      >
        <Bot size={13} className="text-white" />
      </div>
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
