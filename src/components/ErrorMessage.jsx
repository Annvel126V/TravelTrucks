const ErrorMessage = ({ message = "Something went wrong." }) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#ffe0e0",
        color: "#b00020",
        borderRadius: "8px",
        textAlign: "center",
        maxWidth: "400px",
        margin: "40px auto",
        fontSize: "18px",
      }}
    >
      ⚠️ {message}
    </div>
  );
};

export default ErrorMessage;
