import { GifItem } from '../components';
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);
  console.log({ images, isLoading });

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <div>...Cargando</div>}
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

