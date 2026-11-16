import React from "react";
import { ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <a className="footer-name" href="#home">
          sm<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Subhadeep Mondal</p>
        <span>Thoughtfully engineered. Always evolving.</span>
        <a href="#home" className="back-top">
          Back to top <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
