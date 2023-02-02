export default function Khud() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <p style={{ padding: "5px" }}>تمت العملية بنجاح</p>
      <video controls width="250" autoPlay loop>
        <source src="https://d95r5flyap9d6.cloudfront.net/khud.mp4" />
      </video>
    </div>
  );
}
