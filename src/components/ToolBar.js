import SearchField from "./SearchField";
import SortPanel from "./SortPanel/SortPanel";

function ToolBar({ onUpdateSearch }) {
	return (
		<nav className="navbar navbar-expand-lg bg-light fixed">
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
export default ToolBar;
