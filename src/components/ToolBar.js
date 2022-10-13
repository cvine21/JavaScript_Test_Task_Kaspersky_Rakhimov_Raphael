import SearchField from "./SearchField";
import Options from "./Options/Options";

function ToolBar({ onUpdateSearch }) {
	return (
		<nav className="navbar navbar-expand-lg bg-light fixed">
			<div className="container-fluid">
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<Options />
					<SearchField onUpdateSearch={onUpdateSearch} />
				</div>
			</div>
		</nav>
	);
}
export default ToolBar;
