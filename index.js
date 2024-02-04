const quotes = [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'If you\'re not first, you\'re last. - Ricky Bobby',
    'An eye for an eye leaves the whole world blind. - Mahatma Gandhi'
  ];
  
  const getRandomQuotation = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  
  const printRandomQuotation = () => {
    const quotation = getRandomQuotation();
    console.log(quotation);
  };
  
  printRandomQuotation();