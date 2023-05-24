import ethereum from '../assets/icon-ethereum.svg';
import clock from '../assets/icon-clock.svg';
import eye from '../assets/icon-view.svg';

interface CardProps {
    name: string;
    description: string;
    value: number;
    timeRemaining: string;
    person: {
      name: string;
      imgUrl: string;
    }
    image: string;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  value,
  timeRemaining,
  person,
  image
}) => {
  return (
    <div
      className="
        flex
        flex-col
        justify-center
        items-center
        bg-Very-dark-blue-card 
        w-fit
        h-fit
        rounded-2xl
        m-4
        p-4
        space-y-8
        shadow-2xl
      "
    >
      <div className="flex flex-col space-y-5 p-4">
        {/* top part */}
        <div className="relative">
          <img
            className="rounded-xl object-cover"
            src={image}
            alt="top-image"
          />
          <div
            className="
              rounded-xl 
              bg-Cyan 
              cursor-pointer 
              absolute 
              inset-0 
              flex 
              items-center 
              justify-center 
              opacity-0 
              hover:opacity-50 
            "
          >
            <img className="w-16 h-16" src={eye} alt="eye" />
          </div>
        </div>
        <div className="space-y-2">
          {/* center part */}
          <div className="space-y-4">
            <h2 className="font-semibold text-White text-xl hover:text-Cyan cursor-pointer">
              {name}
            </h2>
            <p className="text-Soft-blue">{description}</p>
            <div className="flex flex-row justify-between items-center text-lg font-medium">
              <div className="flex flex-row justify-center items-center">
                <img src={ethereum} alt="ethereum" />
                <h4 className="pl-2 text-Cyan">{value} ETH</h4>
              </div>
              <div className="flex flex-row justify-center items-center">
                <img src={clock} alt="clock" />
                <h4 className="text-Soft-blue pl-2">{timeRemaining}</h4>
              </div>
            </div>
          </div>
          {/* bottom part */}
          <div
            className="
              flex 
              flex-col 
              justify-center 
              items-start
              mb-4
        "
          >
            <div
              className="
                w-full
              border-t-Very-dark-blue-line 
                border-t-2
                mt-4
          "
            />
            <div
              className="
                flex 
                flex-row 
                justify-start 
                items-center 
                pt-2
                mt-2
          "
            >
              <img
                className="
                w-10 
                border-White 
                border-2 
                rounded-full
                mr-4
              "
                src={person.imgUrl}
                alt={person.name}
              />
              <div className="text-Soft-blue text-lg font-medium">
                Creation of
                <span className="text-White hover:text-Cyan cursor-pointer">
                  {" "}
                  {person.name}
                </span>
              </div>
            </div>
          </div>
          <div className="pb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;