const IntroductionWrapper = () => {
  return (
    <div className="introduction-wrapper">
      <div className="search-bar-avatar-wrapper">
        <div className="search-bar">
          <button>
            <img src="/src/assets/images/icons/search.png" alt="search icon" />
          </button>
          <input type="text" placeholder="Book / Author name" />
        </div>
        <div className="avatar-wrapper">
          <div className="real-avatar-wrapper">
            <img
              src="/src/assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
              alt="avatar image"
            />
          </div>
          <p>
            - “Narratives that inspire, inform, and transport you to distant
            lands, all woven together by the threads of compelling authorship
            and storytelling.”
          </p>
        </div>
      </div>
      <div className="image-wrapper">
        <img src="/src/assets/images/ying-ge--Yo1cWJVKFY-unsplash.jpg" />
      </div>
    </div>
  );
};

export default IntroductionWrapper;
