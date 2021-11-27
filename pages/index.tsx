import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Header = () => {
  const handleScrollDown = () => {
    window.scroll({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-green-beret bg-pattern-autumn-green bg-repeat">
      <div className="md:bg-portrait-spokes bg-left-bottom bg-contain bg-no-repeat">
        <div className="container mx-auto flex justify-end">
          <header className="text-center md:text-right pt-8 xl:pt-16 pb-24 xl:pb-24 w-full lg:w-8/12 xl:w-9/12">
            <Image
              src="/logo.svg"
              alt="Georgie & Jordan"
              width={130}
              height={64}
            />
            <h1 className="text-8xl lg:text-9xl text-white font-serif mt-16 md:mt-20 xl:mt-28">
              We’re getting married
              <span className="text-dusty-pink transform rotate-2 inline-block">
                !
              </span>
            </h1>
            <div className="flex justify-center md:justify-end items-end text-dusty-pink transform -rotate-2 xl:mr-12">
              <Image
                className="animate-bounce transform rotate-3 block"
                src="/short_down.svg"
                alt="Arrow inviting to scroll down"
                width={24}
                height={24}
              />
              <button
                onClick={handleScrollDown}
                className="text-sunny-yellow lg:text-sunny-yellow md:text-white text-xl lg:text-2xl mt-12 ml-2 hover:text-dusty-pink"
              >
                Come and help us have fun
              </button>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};

const AGENDA_ITEMS = [
  {
    imgPath: "/ceremony-venue.png",
    displayTime: "12 noon",
    timeString: "12:00",
    title: "Ceremony",
    description:
      "Watch in hushed awe as we deftly slip into rings inside an old barn.",
  },
  {
    imgPath: "/curry-on-naan-stop.png",
    displayTime: "2 pm",
    timeString: "14:00",
    title: "Bombay streetfood",
    description:
      "Try to contain your joy as speeches combine with yummy Indian food.",
  },
  {
    imgPath: "/evening-venue.png",
    displayTime: "6 pm",
    timeString: "18:00",
    title: "Evening guests",
    description: "Eat cake, wave sparklers, and dance like no one is looking.",
  },
  {
    imgPath: "/taxi.png",
    displayTime: "Midnight",
    timeString: "23:59",
    title: "Fun stops",
    description: "All good things come to an end.",
  },
];

interface AgendaCardProps {
  item: {
    imgPath: string;
    displayTime: string;
    timeString: string;
    title: string;
    description: string;
  };
  index: number;
}

const AgendaCard = ({ item, index }: AgendaCardProps) => {
  const { imgPath, displayTime, timeString, title, description } = item;
  return (
    <div className="flex flex-col w-5/12 lg:w-2/12 xl:w-64 mb-8">
      <div className={`transform ${index % 2 ? "rotate-3" : "-rotate-2"}`}>
        <Image
          src={imgPath}
          alt={title}
          width={256}
          height={256}
          className="rounded-xl"
        />
      </div>
      <time
        dateTime={`2022-07-02 ${timeString}`}
        className="text-pink-600 font-bold  mt-4"
      >
        {displayTime}
      </time>
      <h3 className="font-serif text-3xl lg:text-2xl xl:text-3xl">{title}</h3>
      <p className="leading-5 mt-2 text-green-beret-light">{description}</p>
    </div>
  );
};

const Agenda = () => {
  return (
    <section className="bg-dusty-pink pt-16 pb-8 bg-pattern-wiggle-pink bg-repeat">
      <div className="container mx-auto">
        <header className="text-center">
          <h2 className="text-5xl lg:text-6xl font-serif">What’s the plan?</h2>
          <p className="mt-5 font-medium text-lg">
            It goes a little something like this
          </p>
        </header>
        <div className="flex justify-around md:justify-between flex-wrap mt-10">
          {AGENDA_ITEMS.map((item, index) => (
            <AgendaCard item={item} key={item.title} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  const googleMapsLink = "https://goo.gl/maps/S5nchSiHYSWKcAzc9";
  const venueWebsiteLink = "https://lodgefarmnazeing.co.uk/";

  return (
    <section>
      <div className="bg-green-beret pt-12 pb-8 bg-pattern-topography-green bg-repeat">
        <div className="container mx-auto flex flex-wrap-reverse justify-center items-center">
          <a
            className="hover:opacity-90"
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/map-lg.png"
              alt="A map showing the rough location of the venue"
              width={512}
              height={512}
              className="rounded-xl"
            />
          </a>
          <div className="lg:ml-10 w-96">
            <h2 className="text-5xl lg:text-6xl font-serif text-white">
              Where is it?
            </h2>
            <p className="mt-12 font-medium text-dusty-pink">
              It’s at a farm in Essex. Specifically, it’s at:
            </p>

            <p className="mt-6 font-medium text-xl text-white leading-tight text-left">
              The Barns at Lodge Farm, Epping Road, Epping Green, Epping, Essex.
              CM16 6FS
            </p>

            <div className="text-lg font-medium mt-8">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sunny-yellow px-4 py-2 rounded inline-flex justify-between items-center cursor-pointer hover:bg-dusty-pink"
              >
                <p className="pr-3">Launch maps</p>
                <Image
                  src="/icon-map.svg"
                  alt="Map icon"
                  width={24}
                  height={24}
                  className=""
                />
              </a>
              <a
                href={venueWebsiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent px-4 py-2 rounded inline-flex justify-between items-center cursor-pointer hover:text-dusty-pink ml-4 text-sunny-yellow"
              >
                <p className="pr-3 ">Venue website</p>
                <Image
                  src="/icon-external-link.svg"
                  alt="Map icon"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <p className="mt-12 text-dusty-pink font-medium">
              P.S. There’s plenty of parking on site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-green-beret bg-pattern-autumn bg-repeat">
        <Header />
        <Agenda />
        <Location />
      </main>
    </div>
  );
};

export default Home;
