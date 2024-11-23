import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
;

const Features = () => {
    const [showFeatures, setShowFeatures] = useState(false);

    return (
        <div className="features">
            <h2>Why Choose Us?</h2>
            <button className='features-btn' onClick={() => setShowFeatures((prev) => !prev)}>
                Show Features
            </button>
            <CSSTransition
                in={showFeatures}
                timeout={500}
                classNames="feature"
                unmountOnExit
            >
                <div className="features-container">
                    <div className="feature">
                        <h3>Interactive Lessons</h3>
                        <p>Engage with hands-on coding exercises and projects.</p>
                    </div>
                    <div className="feature">
                        <h3>Expert Mentors</h3>
                        <p>Learn from professionals with real-world experience.</p>
                    </div>
                    <div className="feature">
                        <h3>Flexible Schedule</h3>
                        <p>Study anytime, anywhere, at your own pace.</p>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Features;