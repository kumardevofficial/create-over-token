const ErrorLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 300"
      fill="none"
      className="w-full h-auto"
    >
      <rect width="600" height="300" />
      <text
        x="50%"
        y="30%"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="72"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        dy=".3em"
      >
        404
      </text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="#ffcc00"
        fontSize="24"
        fontWeight="normal"
        fontFamily="Arial, sans-serif"
        dy=".3em"
      >
        Page Not Found
      </text>
    </svg>
  );
};

export default ErrorLogo;
