import Icon from "../../Icon/Icon";

const CamperInfo = ({ camper }) => {
  const gallery = camper.gallery || [];
  const imagesToShow = [...gallery.slice(0, 4)];

  while (imagesToShow.length < 4) {
    imagesToShow.push({ thumb: "/images/default-camper.jpg" });
  }

  return (
    <div className="   p-16">
      <h2 className="text-3xl font-bold mb-2">{camper.name}</h2>
      <div className="flex flex-wrap items-center gap-4 mt-2">
        <div className="flex items-center">
          <Icon id="star" w={18} h={18} className="mr-1 fill-yellow" />
          <p className="text-base font-medium underline">
            {camper.rating} ({camper.reviews?.length || 0} Reviews)
          </p>
        </div>
        <div className="flex items-center">
          <Icon id="map" w={16} h={15} className="mr-1" />
          <p className="text-base font-normal">
            {camper.location || "Unknown Location"}
          </p>
        </div>
      </div>
      <div>
        <p className="text-gray flex  text-lg mb-4">
          <span className="font-semibold text-black">€{camper.price}</span>
        </p>
      </div>

      <div className="grid grid-cols-4 gap-[48px] mb-6">
        {camper.gallery?.slice(0, 4).map((img, idx) => (
          <img
            key={idx}
            src={img.thumb || "/images/default-camper.jpg"}
            alt={`Gallery ${idx + 1}`}
            className="rounded-lg w-[292px] h-[312px] object-cover"
          />
        ))}
      </div>

      <p className="my-4 text-gray text-base leading-relaxed">
        {camper.description}
      </p>
    </div>
  );
};

export default CamperInfo;
