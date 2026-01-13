import { useEffect, useState } from 'react';

const SimpleLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return show ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : null;
};

export default SimpleLoader;