import {useEffect} from 'react';

const ScrollTop = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      {/* 👇️ scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '0.5rem 1rem',
          fontSize: '20px',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#120E43',
          color: '#fff',
          textAlign: 'center',
          borderRadius: '2rem'
        }}
      >^ 
      </button>
    </div>
  );
}

export default ScrollTop