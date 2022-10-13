import SearchField from "./SearchField";
import SortOptions from "./SortOptions";
import DisplayOptions from "./DisplayOptions";

function Navbar({ onUpdateSearch, onSort, users }) {
	return (
		<nav className="navbar navbar-expand-lg bg-light fixed">
			<div className="container-fluid">
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 me-3">
						<SortOptions onSort={onSort} users={users} />
						<DisplayOptions />
					</ul>
					<SearchField onUpdateSearch={onUpdateSearch} />
				</div>
			</div>
		</nav>
	);
}
export default Navbar;