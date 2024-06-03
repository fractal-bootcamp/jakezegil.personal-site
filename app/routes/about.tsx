export default function About() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h2 className="text-3xl font-bold underline">About</h2>
      <p>Hey, I'm Jake. I like to build software.</p>
      <img src="/jake.jpg" alt="Jake" style={{ height: 50, width: 50 }} />
    </div>
  );
}
