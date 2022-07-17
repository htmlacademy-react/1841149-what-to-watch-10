export default function OfferImaged({img}: {img: string}): JSX.Element {
  return (
    <div className="property__image-wrapper" key={img}>
      <img className="property__image" src={img} alt={img} />
    </div>
  );
}
