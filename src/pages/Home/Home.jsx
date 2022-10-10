import "./Home.scss";

function Home() {
	return (
		<div className="content">
			<div className="d-flex align-center justify-between mb-40">
				<h1>Пользователи</h1>
				<div className="search-block d-flex">
					<img src="/img/search.svg" alt="Search" />
					<input placeholder="Поиск..." />
				</div>
			</div>

			<div className="d-flex flex-wrap"></div>
		</div>
	);
}

export default Home;
