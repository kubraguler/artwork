import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtworks, setSelectedArtwork } from "../../reducers/artworkSlice";
import { Link } from "react-router-dom";

import "./ArtworkList.scss";

const ArtworkList = () => {
	const dispatch = useDispatch();
	const { artworks } = useSelector((state) => state.artworks);

	useEffect(() => {
		dispatch(getArtworks());
	}, [dispatch]);

	return (
		<div className="artworks">
			<ul className="artwork--list">
				{artworks.map((artwork) => {
					return (
						<li key={artwork.id} className="artwork--list-item">
							<Link
								className="artwork--list-item_link"
								to={`/artwork/${artwork.id}`}
								onClick={() => {
									dispatch(setSelectedArtwork(artwork));
								}}
							>
								<img
									className="artwork--list-item_img"
									src={artwork.thumbnail.lqip}
									alt={artwork.thumbnail.alt_text}
								/>
								<div className="artwork--content">
									<p className="artwork--title">{artwork.title}</p>
									{/* TODO: Title long ... */}
									<p className="artwork--type">{artwork.artwork_type_title}</p>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ArtworkList;
