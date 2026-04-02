export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#020617",
        color: "white",
        flexDirection: "column",
      }}
    >
      <h1>🚀 NextJob Platform</h1>
      <p>Deployed with Jenkins, Terraform & Ansible</p>
    </div>
  );
}