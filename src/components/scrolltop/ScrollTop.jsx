import {useEffect} from 'react';

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
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
          color: '#fff',
          textAlign: 'center',
          borderRadius: '2rem', zIndex:999
        }}
      ><i className="fa fa-angle-double-up" style={{ fontSize: "20px", color: "DodgerBlue" }}></i> 
      </button>
    </div>
  );
}

export default ScrollTop