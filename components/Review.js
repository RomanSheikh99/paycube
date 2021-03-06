import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Review = ({ review }) => {
    return (
        <div className="col-md-4">
            <Zoom>
                <div className="card border-0 rounded-3 shadow-lg">
                    <div className="card-header quote-logo">
                        #
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>" {review.review} "</p>
                            <footer className="blockquote-footer mt-4">-- <cite title="Source Title">{review.name}</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </Zoom>
        </div>

    );
};

export default Review;