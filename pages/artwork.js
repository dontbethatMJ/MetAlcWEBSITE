const Artwork = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="https://community.metalcproductions.com/artwork"
        title="MetAlc Community"
        width="100%"
        height="100%"
        allowFullScreen
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Artwork;
