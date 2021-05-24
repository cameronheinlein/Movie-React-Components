// Step 1 - Convert this to a React Component
function Movie({ data }) {
  const movieStyle = {
    background: 'url(' + data.imageUrl + ')',
    backgroundSize: 'cover',
  };

  return (
        <div class="movie-card">
            <div class="movie-header" style={movieStyle}>
                <div class="header-icon-container">
                    <a href="#">
                        <i class="material-icons header-icon"></i>
                    </a>
                </div>
            </div>
            <div class="movie-content">
                <div class="movie-content-header">
                    <a href="#">
                        <h3 class="movie-title">{data.title}</h3>
                    </a>
                    <div class="imax-logo"></div>
                </div>
                <div class="movie-info">
                    <div class="info-section">
                        <label>Date & Time</label>
                        <span>{data.showTime}</span>
                    </div>
                    <div class="info-section">
                        <label>Screen</label>
                        <span>{data.screen}</span>
                    </div>
                    <div class="info-section">
                        <label>Row</label>
                        <span>{data.row}</span>
                    </div>
                    <div class="info-section">
                        <label>Seat</label>
                        <span>{data.seat}</span>
                    </div>
                </div>
            </div>
        </div>
  );
}

