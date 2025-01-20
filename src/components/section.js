import React from 'react';
import "./section.css"

const Section = ({
    className,
    id,
    crosses,
    crossesOffset,
    customPaddings,
    children,
}) => {
    return (
        <div
            id={id}
            className={`section-container ${customPaddings ? customPaddings : crosses ? "section-with-crosses" : ""
                } ${className || ""}`}
        >
            {children}

            <div className="vertical-line left" />
            <div className="vertical-line right" />

            {crosses && (
                <>
                    <div
                        className={`horizontal-line ${crossesOffset ? crossesOffset : ""
                            }`}
                    />

                </>
            )}
        </div>
    );
};

export default Section;
