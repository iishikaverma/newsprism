type CardProps = {
  image: string;
  title: string;
};

const NewsCard = ({ image, title }: CardProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden group cursor-pointer h-56">
      
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-xl font-semibold mt-1">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default NewsCard;