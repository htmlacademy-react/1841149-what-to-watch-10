import OfferImage from './dsa';


function OfferGallery(images: string[]): JSX.Element {
  const OfferImageList =
      images?.map((img) => (
        <OfferImage key={img + 1} img={img}/>
      ));

  return (
    <div>
      { OfferImageList }
    </div>
  );

}

export default OfferGallery;
