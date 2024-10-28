import Button from "../Button.jsx";
import Logo from "../../assets/logo.svg";
import Illustration from "../../assets/illustration.svg";
import Svg from "../../assets/wallpaper.svg";

function FirstTask() {
  const onClick = () => {
    console.log("Szuper, elkezdtük! :)");
  };
  return (
    <>
      <div className="h-screen w-full font-roboto text-grey md:flex">
        <img
          className="absolute z-10 hidden h-full w-full object-cover opacity-60 md:block"
          src={Svg}
          alt="Svg"
        />
        <a
          href="https://comnica.hu/"
          target="_blank"
          className="absolute left-8 top-10 z-20 block w-32 md:left-10"
        >
          <img src={Logo} alt="Logo" />
        </a>
        <div className="bg-green-dark/20 p-8 pt-24 md:w-3/5 md:p-10 md:pt-32 xl:w-[70%] xl:p-20 xl:pt-44">
          <div className="flex flex-col xl:flex-row">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-green-dark md:text-4xl">
                Comnica Signature
              </h1>
              <h3 className="mt-3 text-lg font-bold">
                Digitális aláíró szolgáltatás a Comnicától
              </h3>
            </div>
            <div className="mt-10 flex flex-1 self-center xl:mt-0">
              <img
                src={Illustration}
                className="w-full max-w-xl"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
        <div className="bg-green-dark/5 p-8 md:w-2/5 md:p-10 md:pt-32 xl:w-[30%] xl:p-10 xl:pt-44">
          <h2 className="mb-3 text-2xl font-bold text-purple md:text-3xl">
            Üdvözlöm a <br /> Comnica Signature-ben!
          </h2>
          <p className="font-bold">
            A kővetkezőkben végigvezetjük dokumentumai elfogadásán és aláírásán.
            A folyamat több percet is igénybe vehete, ezért kérjük, csak akkor
            kezdje el, ha készen áll rá.
          </p>
          <Button onClick={onClick} bg="bg-green-main mt-8 z-20 relative">
            Kezdhetjük
          </Button>
        </div>
      </div>
    </>
  );
}

export default FirstTask;
