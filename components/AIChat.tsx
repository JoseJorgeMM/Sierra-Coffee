import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Utensils, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage, ChatRole } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "¡Hola! Soy tu Sommelier de Empanadas Creativas. ¿Buscas el maridaje perfecto o quieres conocer nuestro menú gourmet?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: ChatRole.USER, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      const botMsg: ChatMessage = { role: ChatRole.MODEL, text: responseText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} bg-gold-500 text-coffee-900`}
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[90vw] md:w-[400px] h-[500px] bg-coffee-900/95 backdrop-blur-md border border-gold-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-coffee-800 p-4 flex justify-between items-center border-b border-gold-500/20">
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-gold-500" />
                <h3 className="font-serif text-lg text-gold-500" style={{ color: '#D4AF37' }}>Empanada Sommelier AI</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-coffee-200 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                      msg.role === ChatRole.USER
                        ? 'bg-gold-500 text-coffee-900 rounded-br-none'
                        : 'bg-coffee-800 text-coffee-100 border border-coffee-700 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-coffee-800 p-3 rounded-xl rounded-bl-none flex gap-2 items-center">
                    <Loader2 className="w-4 h-4 animate-spin text-gold-500" />
                    <span className="text-xs text-coffee-300">Cocinando respuesta...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-coffee-800/50 border-t border-gold-500/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ej: ¿Qué salsa me recomiendas para carne?"
                  className="flex-1 bg-coffee-900 border border-coffee-600 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-coffee-400"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-gold-500 hover:bg-gold-400 disabled:opacity-50 text-coffee-900 p-2 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};