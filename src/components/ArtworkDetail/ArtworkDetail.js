import { useSelector } from "react-redux";

import "./ArtworkDetail.scss";

const ArtworkDetail = () => {
	const { selectedArtwork: artwork } = useSelector((state) => state.artworks);

	return (
		<div className="artwork--detail">
			<>
				{artwork.thumbnail?.lqip && (
					<img
						className="artwork--list-item_img"
						src={artwork.thumbnail.lqip}
						alt={artwork.thumbnail.alt_text}
					/>
				)}

				{artwork.title && (
					<p className="artwork--detail-title">
						<b>Title:</b> {artwork.title}
					</p>
				)}

				{artwork.place_of_origin && (
					<p>
						<b>Place of Origin:</b> {artwork.place_of_origin}
					</p>
				)}

				{artwork.inscriptions && (
					<p>
						<b>Inscriptions :</b> {artwork.inscriptions}
					</p>
				)}

				{artwork.artist_display && (
					<p>
						<b>Artist Display :</b> {artwork.artist_display}
					</p>
				)}

				{artwork.theme_titles && (
					<p>
						<b>Theme Titles :</b> {artwork.theme_titles}
					</p>
				)}

				{artwork.provenance_text && (
					<p>
						<b>Provenance Text:</b> {artwork.provenance_text}
					</p>
				)}

				{artwork.publication_history && (
					<p className="artwork--detail-publication">
						<b>Publication History :</b> {artwork.publication_history}
					</p>
				)}
			</>
		</div>
	);
};

export default ArtworkDetail;
