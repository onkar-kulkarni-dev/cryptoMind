import React from "react";

type ButtonProps = {
    styles?: React.CSSProperties;
    text: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Button: React.FC<ButtonProps> = ({ styles, text, icon }) => {
    console.log(icon)
    return (
        <button style={styles}>
            {text}
            {icon && React.createElement(icon)}
        </button>
    )
}

export default Button;