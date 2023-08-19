import { useSelector } from "react-redux";

import "./ArtworkDetail.scss";

const ArtworkDetail = () => {
	const { selectedArtwork: artwork } = useSelector((state) => state.artworks);

	return (
		<div>
			{artwork && (
				<>
					{artwork && (
						<>
							<p>Title: {artwork.title}</p>
							<p>Place of Origin: {artwork.place_of_origin}</p>
							<p>Inscriptions : {artwork.inscriptions}</p>
							<p>Artist Display : {artwork.artist_display}</p>
							<p>Theme Titles : {artwork.theme_titles}</p>
							<img
								className="artwork--list-item_img"
								src={artwork?.thumbnail.lqip}
								alt={artwork?.thumbnail.alt_text}
							/>
							<p>Provenance Text: {artwork.provenance_text}</p>
							<p>Publication History : {artwork.publication_history}</p>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default ArtworkDetail;
