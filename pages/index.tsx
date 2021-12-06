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

  const ShortDown = () => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-bounce transform rotate-3 block mt-4 md:mt-0 h-7 w-7 sm:mr-2"
      >
        <path
          d="M11 16.17L7.41 12.59L6 14L12 20L18 14L16.59 12.59L13 16.17V4H11V16.17Z"
          fill="currentColor"
        />
      </svg>
    );
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
            <div className="flex justify-end items-end text-white transform -rotate-3 md:ml -0 xl:mr-12">
              <button
                onClick={handleScrollDown}
                className="flex flex-col-reverse sm:flex-row items-center justify-center sm:text-sunny-yellow lg:text-sunny-yellow md:text-white text-xl sm:text-2xl mt-12 ml-2 md:hover:text-dusty-pink hover:text-sunny-white"
              >
                <ShortDown />
                <p className="mr-8">
                  Come and help
                  <br className="md:hidden" /> us have fun
                </p>
              </button>
            </div>
          </header>
        </div>
      </div>
      <div className="md:hidden h-96 -mt-80 bg-portrait-spokes w-full bg-contain bg-no-repeat">
        &nbsp;
      </div>
    </section>
  );
};

const AGENDA_ITEMS = [
  {
    imgPath: "/ceremony-venue.png",
    displayTime: "1 pm",
    timeString: "13:00",
    title: "Ceremony",
    description:
      "Watch in hushed awe as we deftly slip into rings inside an old barn.",
  },
  {
    imgPath: "/curry-on-naan-stop.png",
    displayTime: "3:30 pm",
    timeString: "15:30",
    title: "Bombay streetfood",
    description:
      "Try to contain your joy as speeches combine with yummy Indian food.",
  },
  {
    imgPath: "/evening-venue.png",
    displayTime: "6:30 pm",
    timeString: "18:30",
    title: "Evening guests",
    description: "Eat cake, wave sparklers, and dance like no one is looking.",
  },
  {
    imgPath: "/taxi.png",
    displayTime: "Midnight",
    timeString: "23:59",
    title: "Fun stops",
    description: "All good things come to an end. Carriages by 12:30.",
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

            <div className="text-lg font-medium mt-10 mb-12 flex flex-wrap w-full items-center justify-center">
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
                className="bg-transparent px-4 py-2 rounded inline-flex justify-between items-center cursor-pointer hover:text-dusty-pink ml-4 text-sunny-yellow mt-3 sm:mt-0"
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

const RSVPBody = encodeURIComponent(`
Dear my favourite couple of all time,

I absolutely cannot wait to celebrate with you on your wedding day.

I am literally counting down the minutes until I get to share this special day with you. I have made a wall chart and my pen has nearly run out from ticking off the days.

~~~~

Can you make it?

Any dietary requirements?

Will you be camping?

~~~~

Billions of love and sloppy kisses,


YOUR NAME

xoxo
`);

const mailTo = `mailto:rsvp@georgieandjordanrolph.com?subject=RSVP&body=${RSVPBody}`;

const HOTELS = [
  {
    imgPath: "/hanbury_manor_square.png",
    name: "Hanbury Manor Marriott",
    link: "http://www.booking.com/Share-pc8D1T",
    miles: "12",
    comment: "(This is where we are staying)",
  },
  {
    imgPath: "/premier_inn_harlow_north_square.png",
    name: "Premier Inn Harlow North",
    link: "https://www.premierinn.com/gb/en/hotels/england/essex/harlow/harlow-north-harlow-mill.html",
    miles: "6",
    comment: "",
  },
  {
    imgPath: "/camping.png",
    name: "Camping on site",
    link: mailTo,
    miles: "0",
    comment: "(Bring your own tent)",
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
    <a
      className="flex flex-col cursor-pointer mb-8"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`transform ${index % 2 ? "rotate-2" : "-rotate-2"}`}>
        <Image
          src={imgPath}
          alt={name}
          width={192}
          height={192}
          className="rounded-xl"
        />
      </div>
      <h4 className="underline text-lg mt-2">{name}</h4>
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
            There’s a few local hotels. They are all a short taxi ride away.
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
              There’s a longer list of local hotels{" "}
              <a className="underline text-pink-600 hover:text-pink-400 cursor-pointer">
                here
              </a>
              .
            </p>
            <p className="mt-6">
              Please book a cabs in advance.{" "}
              <b>Uber doesn’t work out in Epping</b>.
            </p>
            <p className="mt-6">
              There is also camping on site, so you’re welcome to bring a tent.
              We won’t be camping, but a bunch of people will be. You’ll be able
              to access the loos all night. If you’d like to camp, you need to
              let us know so we can arrange things with the venue:
            </p>
            <a
              href={mailTo}
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
            Please let us know if you’re able to come by February 14th 2022.
            We’ll also want to know if you’re planning on camping, and if you’ve
            got any dietary requirements.
          </p>
          <a
            href={mailTo}
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
    </section>
  );
};

const FAQS = [
  {
    question: "Can I drive and park?",
    answer:
      "Yes! There's loads of parking on site. If you're camping, or leaving your car overnight, your car will need to be off site by 11:30am the next morning.",
  },
  {
    question: "Is it a cash bar?",
    answer: "Yes - and they take card.",
  },
  {
    question: "What about gifts?",
    answer:
      "Your presence is present enough. If you'd like to get us a gift, we would really appreciate contributions to our honeymoon.",
  },
  {
    question: "How does the camping work?",
    answer:
      "You can pitch your own tent in the field attached to the site, and say overnight on the 2nd. The loos are open all night, but there are no showering facilities. We have to tell the venue in advance exactly who is staying, so please let us know if you're camping when you RSVP.",
  },
  {
    question: "Can I bring additional guests?",
    answer:
      "Unfortunately we are limited on numbers, so we cannot take any additional guests (and this includes children).",
  },
  {
    question: "Does this mean Georgie is now off the market?",
    answer: "Unfortunately, yes.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-green-beret bg-pattern-autumn-green pt-6 px-4 md:px-12 flex items-center justify-center">
      <div className="max-w-xl mb-8">
        <h2 className="text-3xl lg:text-3xl font-serif pt-14 text-white text-center mb-10">
          Infrequently asked questions
        </h2>
        {FAQS.map(({ question, answer }) => {
          return (
            <div key={question}>
              <h4 className="text-lg text-sunny-yellow font-medium leading-tight mt-10">
                {question}
              </h4>
              <p className="text-dusty-pink leading-tight mt-2 pl-4 border-l-2 border-sunny-yellow">
                {answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-green-beret bg-pattern-autumn-green pt-16 pb-4 flex items-center justify-center">
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
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
