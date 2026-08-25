type NavId = "projects" | "notes" | "connect" | "resume" | "about";

export default function HeaderHoverRing({ navId }: { navId: NavId }) {
  return <span className="drawn-ring" aria-hidden="true">
    <img src={navId === "about" ? "/assets/connects-circle.svg" : "/assets/projects-circle.svg"} alt=""/>
  </span>;
}
