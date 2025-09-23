import React from 'react';

const RotatingRibbon = ({ variant = 'black', className = '' }) => {
    const ribbonText = ['DEVELOPMENT', 'UI UX', 'MARKETING', 'STRATEGY', 'SEO'];

    const baseClasses = "relative overflow-hidden whitespace-nowrap py-3 px-4 font-bold text-sm tracking-widest uppercase";

    const variantClasses = {
        black: "bg-zinc-900 text-white",
        white: "bg-white text-black border border-gray-200"
    };

    const createColoredText = () => {
        const textColor = variant === 'black' ? 'text-white' : 'text-black';
        return Array(20).fill(null).map((_, index) => (
            <span key={index}>
                {ribbonText.map((text, textIndex) => (
                    <span key={textIndex}>
                        <span className={textColor}>{text}</span>
                        {textIndex < ribbonText.length - 1 && <span className="text-center font-bold text-crimson"> &nbsp;&nbsp;•&nbsp;&nbsp; </span>}
                    </span>
                ))}
                {index < 19 && <span className="font-bold text-crimson"> &nbsp;&nbsp;•&nbsp;&nbsp; </span>}
            </span>
        ));
    };

    return (
        <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            <div className="animate-scroll-left flex gap-4">
                {createColoredText()}
            </div>
        </div>
    );
};

export default RotatingRibbon;