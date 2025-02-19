"use client"

import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookiesAccepted')) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center p-4">
      <p>
        We use cookies to ensure you get the best experience on our website.{' '}
        <a href="/legal/cookiepolicy" className="underline text-accent">Learn more</a>
      </p>
      <button
        onClick={acceptCookies}
        className="bg-accent text-gray-800 px-4 py-2 mt-2 rounded"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;