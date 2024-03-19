import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://form.jotform.com/jsform/240778048424158';
    script.async = true;

    // Error handling
    const handleError = () => {
      console.error('Failed to load JotForm script');
    };

    script.addEventListener('error', handleError);

    document.body.appendChild(script);


  }, []);

  return (
    <div>
      {/* Your JSX for the contact component */}
    </div>
  );
};

export default Contact;
