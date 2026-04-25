import { profile } from '../data/portfolio';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__l">
        © {new Date().getFullYear()} Pundalik Mhamal · Senior Associate QA Engineer · Goa, India
        <br />
        Remote / Hybrid / Open to Relocation
      </div>
      <div className="footer__r">{profile.initials}.QA</div>
    </footer>
  );
}
