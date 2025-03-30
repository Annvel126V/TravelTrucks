import Icon from "../../Icon/Icon";
import BookingForm from "../../BookingForm/BookingForm";

const Reviews = ({ reviews = [], camper }) => {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <p className="text-gray-500 p-4">No reviews available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-16 gap-16">
      <div className="flex flex-col gap-8">
        {reviews.map((review, i) => {
          const name = review.reviewerName || "Anonymous";
          const firstLetter = name.charAt(0).toUpperCase();
          const comment = review.comment || "No comment provided.";

          return (
            <div
              key={review.id || `${name}-${i}`}
              className="bg-darkWhite p-4 rounded-lg flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-lightGray text-red font-semibold text-lg flex-shrink-0 aspect-square">
                {firstLetter}
              </div>

              <div>
                <div className="flex flex-col gap-3">
                  <div className="gap-2 mb-1">
                    <span className="font-semibold text-black">{name}</span>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Icon
                          key={`star-${index}`}
                          id="star"
                          w={16}
                          h={16}
                          className={
                            index < review.reviewer_rating
                              ? "fill-yellow"
                              : "fill-lightGray"
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray">{comment}</p>
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
