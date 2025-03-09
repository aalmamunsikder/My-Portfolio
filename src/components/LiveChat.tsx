"use client";

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const TAWK_PROPERTY_ID = '67cd6f2217609a190a8a3b78';
const TAWK_WIDGET_ID = '1ilt7k8ht';

const LiveChat = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    try {
      // Initialize Tawk_LoadStart
      window.Tawk_LoadStart = new Date();

      // Create and configure the main script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      // Add event listeners for script loading
      script.onload = () => {
        console.log('Tawk.to chat widget loaded successfully');
        setIsLoaded(true);
      };

      script.onerror = (error) => {
        console.error('Error loading Tawk.to chat widget:', error);
      };

      // Custom styling script
      const styleScript = document.createElement('script');
      styleScript.innerHTML = `
        var Tawk_API = Tawk_API || {};
        
        Tawk_API.onLoad = function() {
          console.log('Tawk.to API loaded');
          
          // Define theme-based colors
          const isDark = ${theme === 'dark'};
          const colors = {
            primary: isDark ? '#6366f1' : '#4f46e5', // Indigo
            secondary: isDark ? '#ec4899' : '#db2777', // Pink
            background: isDark ? '#1e293b' : '#ffffff', // Slate-800 : White
            foreground: isDark ? '#f8fafc' : '#0f172a', // Slate-50 : Slate-900
            border: isDark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(79, 70, 229, 0.2)',
            inputBg: isDark ? 'rgba(15, 23, 42, 0.5)' : 'rgba(248, 250, 252, 0.5)'
          };

          // Customize chat widget appearance
          Tawk_API.customStyle = {
            zIndex: 1000,
            visibility: {
              desktop: {
                position: 'br',
                xOffset: 20,
                yOffset: 20
              },
              mobile: {
                position: 'br',
                xOffset: 10,
                yOffset: 70
              }
            },
            minimizedStyle: {
              background: 'linear-gradient(135deg, ' + colors.primary + ', ' + colors.secondary + ')',
              color: '#ffffff',
              borderRadius: '16px',
              padding: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              border: '1px solid ' + colors.border,
              backdropFilter: 'blur(8px)',
              minWidth: '260px',
              maxWidth: '300px'
            },
            maximizedStyle: {
              width: '380px',
              height: '580px',
              background: colors.background,
              color: colors.foreground,
              borderRadius: '20px',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
              border: '1px solid ' + colors.border
            },
            chatBubble: {
              background: colors.inputBg,
              color: colors.foreground,
              fontSize: '14px',
              padding: '12px 16px',
              borderRadius: '12px',
              maxWidth: '85%'
            },
            textColor: colors.foreground,
            inputColor: colors.foreground,
            placeholderColor: isDark ? 'rgba(248, 250, 252, 0.5)' : 'rgba(15, 23, 42, 0.5)'
          };

          // Set visitor information if available
          Tawk_API.visitor = {
            name: 'Website Visitor',
            email: undefined
          };

          // Customize the chat widget text
          Tawk_API.onBeforeLoad = function() {
            Tawk_API.maximize(); // Optional: Open chat on load
          };

          // Enhanced event handlers with custom styling updates
          Tawk_API.onChatMaximized = function() {
            console.log('Chat window maximized');
            // Add any additional styling or behavior for maximized state
          };

          Tawk_API.onChatMinimized = function() {
            console.log('Chat window minimized');
            // Add any additional styling or behavior for minimized state
          };

          Tawk_API.onChatStarted = function() {
            console.log('Chat started');
            // You could add custom welcome message or behavior here
          };

          Tawk_API.onChatEnded = function() {
            console.log('Chat ended');
            // You could add feedback request or follow-up message here
          };
        };

        // Enhanced offline form handling
        Tawk_API.onOfflineSubmit = function(data) {
          console.log('Offline message submitted:', data);
          // You could add custom offline message handling here
        };
      `;

      // Add scripts to document
      document.head.appendChild(styleScript);
      document.body.appendChild(script);

      return () => {
        // Cleanup on component unmount
        if (document.head.contains(styleScript)) {
          document.head.removeChild(styleScript);
        }
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    } catch (error) {
      console.error('Error initializing Tawk.to chat:', error);
    }
  }, [theme]); // Add theme as dependency to update styling when theme changes

  return null;
};

export default LiveChat; 