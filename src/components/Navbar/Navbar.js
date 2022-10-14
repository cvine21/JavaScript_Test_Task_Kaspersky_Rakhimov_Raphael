import SearchField from "../SearchField";
import SortOptions from "../SortOptions";
import DisplayOptions from "../DisplayOptions";

import "./Navbar.scss";

function Navbar() {
	return (
		<nav className="navbar navbar-expand px-2 fixed">
			<div className="container-fluid">
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 me-3">
						<SortOptions />
						<DisplayOptions />
					</ul>
					<SearchField />
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
