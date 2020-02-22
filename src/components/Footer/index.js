import React from "react";
import "./style.css";

export default function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="contentFooter">
					<div className="brandNameFooter">
						<p>Dreamshare</p>
					</div>
					<div className="footerDetail">
						<p className="footerDetailTitle">Company</p>
						<div className="footerMapSite">
						<div className="mapSite">
							<p>About</p>
							<p>Contact</p>
							<p>Press</p>
						</div>
						<div className="mapSite">
							<p>Blog</p>
							<p>Terms and Privacy</p>
							<p>Help</p>
						</div>
						</div>
						
					</div>
					<div className="copyright">
						<p className="copyrightBy">Designed by</p>
						<p className="copyrightByBrand">Areto Development</p>
					</div>
				</div>
			</footer>
		</>
	);
}
