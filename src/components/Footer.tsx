import { profile } from "../data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>React, Vite, a weekend or two.</span>
      </div>
    </footer>
  );
}
