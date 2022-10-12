import SearchField from "./SearchField";
import SortPanel from "./SortPanel/SortPanel";

function Navbar({ onUpdateSearch }) {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<SortPanel />
					<SearchField onUpdateSearch={onUpdateSearch} />
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
