import { RotatingTriangles } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white", // якщо хочеш білий фон
        zIndex: 9999, // якщо треба поверх всього
      }}
    >
      <RotatingTriangles
        visible={true}
        height="500"
        width="500"
        color="#4fa94d"
        ariaLabel="rotating-triangles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingSpinner;
