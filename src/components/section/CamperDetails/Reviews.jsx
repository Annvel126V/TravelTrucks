import Icon from "../../Icon/Icon";
import BookingForm from "../../BookingForm/BookingForm";

const Reviews = ({ reviews = [], camper }) => {
  if (!reviews.length) return <p>No reviews available.</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-16 gap-16">
      <div className="flex flex-col gap-8">
        {reviews.map(({ id, reviewer, comment, rating }, index) => {
          const reviewerName = reviewer?.name.trim() || "Anonymous";
          const firstLetter = reviewerName.charAt(0).toUpperCase();

          return (
            <div
              key={id || `${reviewerName}-${index}`}
              className="bg-darkWhite p-4 rounded-lg flex  gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-lightGray text-red font-semibold text-lg flex-shrink-0 aspect-square">
                {firstLetter}
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <div className="gap-2 mb-4">
                    <span className="font-semibold text-black">
                      {reviewerName}
                    </span>
                    <div className="flex  items-center">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Icon
                          key={`${id}-star-${starIndex}`}
                          id="star"
                          w={16}
                          h={16}
                          className={`${
                            starIndex < Math.round(rating)
                              ? "fill-yellow"
                              : "fill-lightGray"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-gray">
                    {comment || "No comment provided."}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="col-span-1">
        <BookingForm camper={camper} />
      </div>
    </div>
  );
};

export default Reviews;
