
import React, { useEffect } from 'react';

export default function Layout({ children }) {
  useEffect(() => {
    // Define o título da página
    document.title = 'FastRepair - Reparos rápidos, do seu jeito';

    // Encontra o link do favicon existente ou cria um novo
    let favicon = document.querySelector("link[rel*='icon']");
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    
    // Define o href e o tipo do favicon
    favicon.type = 'image/png';
    favicon.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/70546188b_ChatGPTImage16deabrde202522_35_40.png';
  }, []); // Executa apenas uma vez quando o componente é montado

  return (
    <>
      {children}
    </>
  );
}
