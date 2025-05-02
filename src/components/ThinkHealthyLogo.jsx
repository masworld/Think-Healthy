// ThinkHealthyLogo.jsx
const ThinkHealthyLogo = ({ size = "large" }) => {
    const logoSize = size === "small" ? "h-12 w-12" : "h-20 w-20";

    return (
        <div className="flex items-center bg-auto rounded-full p-2">
            <img
                src="src\assets\logo.png"
                alt="Think Logo"
                className={`${logoSize} object-contain`}
            />
        </div>
    );
};

export default ThinkHealthyLogo;
