import React, { useState, useEffect } from 'react';

const TypedText = ({ strings, typeSpeed = 80, backSpeed = 50, backDelay = 2000, loop = true }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentString.substring(0, currentText.length - 1));
      }, backSpeed);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(currentString.substring(0, currentText.length + 1));
      }, typeSpeed);
    }

    if (!isDeleting && currentText === currentString) {
      timeout = setTimeout(() => setIsDeleting(true), backDelay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentStringIndex((currentStringIndex + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed, backDelay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {currentText}
      <span style={{ 
        opacity: showCursor ? 1 : 0, 
        color: '#667eea',
        fontWeight: 400 
      }}>
        |
      </span>
    </span>
  );
};

export default TypedText;