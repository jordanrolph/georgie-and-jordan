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
    <section className="bg-green-beret bg-pattern-autumn-green bg-repeat transform -skew-y-1 -my-3">
      <div className="md:bg-portrait-spokes bg-left-bottom bg-contain bg-no-repeat">
        <div className="container mx-auto flex justify-end">
          <header className="text-center md:text-right pt-8 xl:pt-16 pb-24 xl:pb-24 w-full lg:w-8/12 xl:w-9/12 transform skew-y-1">
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
            <div className="flex justify-center md:justify-end items-end text-dusty-pink transform -rotate-3 xl:mr-12">
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
    <section className="bg-dusty-pink pt-16 pb-8 bg-pattern-wiggle-pink bg-repeat transform -skew-y-1 -my-3">
      <div className="container mx-auto transform skew-y-1 my-3">
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
      <div className="bg-green-beret pt-12 pb-8 bg-pattern-topography-green bg-repeat transform -skew-y-1 -my-3 px-8">
        <div className="container mx-auto flex flex-wrap-reverse justify-center items-center transform skew-y-1 my-3">
          <p className="mt-6 text-dusty-pink font-medium mb-4 lg:hidden">
            P.S. There’s plenty of parking on site.
          </p>
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

            <div className="text-lg font-medium mt-8 mb-12">
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
                  alt="External link icon"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <p className="text-dusty-pink font-medium mb-4 hidden lg:block">
              P.S. There’s plenty of parking on site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HOTELS = [
  {
    imgPath: "/camping.png",
    name: "Some hotel",
    link: "https://TODO.com",
    miles: "4",
    comment: "(This is where we are staying)",
  },
  {
    imgPath: "/camping.png",
    name: "Some hotel",
    link: "https://TODO.com",
    miles: "4",
    comment: "",
  },
  {
    imgPath: "/camping.png",
    name: "Some hotel",
    link: "https://TODO.com",
    miles: "4",
    comment: "",
  },
];

interface HotelCardProps {
  hotel: {
    imgPath: string;
    name: string;
    link: string;
    miles: string;
    comment?: string;
  };
  index: number;
}

const HotelCard = ({ hotel, index }: HotelCardProps) => {
  const { imgPath, name, link, miles, comment } = hotel;
  return (
    <a className="flex flex-col cursor-pointer mb-8">
      <div className={`transform ${index % 2 ? "rotate-1" : "-rotate-1"}`}>
        <Image
          src={imgPath}
          alt={name}
          width={192}
          height={192}
          className="rounded-xl"
        />
      </div>
      <h4 className="underline text-xl mt-2">{name}</h4>
      <p className="leading-5 text-pink-600 mt-1">{miles} miles</p>
      <p className="leading-5 mt-1 text-green-beret-light text-sm italic">
        {comment}
      </p>
    </a>
  );
};

const Accomodation = () => {
  return (
    <section className="bg-dusty-pink pt-16 pb-8 bg-pattern-leaf-pink bg-repeat transform -skew-y-1 -mt-3 px-4">
      <div className="container mx-auto transform skew-y-1">
        <header className="text-center">
          <h2 className="text-5xl lg:text-6xl font-serif">Where can I stay?</h2>
          <p className="mt-5 font-medium text-lg">
            Here’s a few local hotels. They are all a short drive away.
          </p>
        </header>
        <div className="flex justify-between items-center flex-wrap mt-12">
          <div className="flex justify-around lg:justify-between flex-wrap mt-10 md:w-8/12 xl:w-7/12 w-full pr-10">
            {HOTELS.map((hotel, index) => (
              <HotelCard key={hotel.name} hotel={hotel} index={index} />
            ))}
          </div>
          <div className="w-full xl:w-5/12 md:w-4/12 mb-8">
            <p className="">
              There’s a longer list of hotels{" "}
              <a className="underline text-pink-600 hover:text-pink-400 cursor-pointer">
                here
              </a>
              .
            </p>
            <p className="mt-6">
              Everywhere is a car ride away unfortunately, so please book a cab
              in advance. <b>Uber doesn’t work out in Epping</b>.
            </p>
            <p className="mt-6">
              There is also camping on site, so you’re welcome to bring a tent.
              We won’t be camping, but a bunch of people will be. You’ll be able
              to access the loos all night. If you’d like to camp, please let us
              know so we can arrange things with the venue:
            </p>
            <a
              href="" // TODO: mailto link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-beret px-4 py-2 rounded inline-flex justify-between items-center cursor-pointer text-dusty-pink mt-6"
            >
              <p className="pr-3">I’m down with Bear Grylls</p>
              <Image
                src="/icon-tent.svg"
                alt="Tent icon"
                width={24}
                height={24}
                className=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const RSVP = () => {
  return (
    <section className="bg-green-beret bg-pattern-autumn-green pt-14 px-4 md:px-12 -mt-3">
      <div className="bg-sunny-yellow px-6">
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-serif pt-14">
            Totes up for it?
          </h2>
          <p className="mt-5 text-lg mb-4">
            Please let us know if you’re able to come by March 30th 2022. We’ll
            also want to know if you’re planning on camping, and if you’ve got
            any dietary requirements.
          </p>
          <a
            href="" // TODO: Mailto link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-beret px-4 py-2 rounded inline-flex justify-between items-center cursor-pointer text-white hover:text-dusty-pink mt-6"
          >
            <p className="pr-3">RSVP</p>
            <Image
              src="/icon-envelope.svg"
              alt="Envelope icon"
              width={24}
              height={24}
              className=""
            />
          </a>

          <p className="pt-14 pb-8">
            ...or feel free to Whatsapp, call, text, etc
          </p>
        </header>
      </div>
      <Footer />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-16 pb-4 flex items-center justify-center">
      <p className="text-dusty-pink text-sm pr-2">Built with</p>
      <Image
        src="/icon-heart.svg"
        alt="Love icon"
        width={20}
        height={20}
        className=""
      />
    </footer>
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
        <Accomodation />
        <RSVP />
      </main>
    </div>
  );
};

export default Home;
