import styles from "@/pages/Home/styles/hero-section.module.css";
import { useEffect, useRef } from "react";
import Goo from "gooey-react";
import { Container } from "@/components/ui/Container";
import { camara, celular, lavadora, microondas, refrigeradora } from "@/assets";

export const HeroSection = () => {
  const interBubbleRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);
  const fridgeRef = useRef<HTMLImageElement>(null);
  const washMachRef = useRef<HTMLImageElement>(null);
  const phoneRef = useRef<HTMLImageElement>(null);
  const microoRef = useRef<HTMLImageElement>(null);
  const cameraRef = useRef<HTMLImageElement>(null);
  const parX = useRef(0);
  const parY = useRef(0);

  const sFridge = 500;
  // const sWashMach = 400;
  // const sPhone = 300;
  // const sMicroo = 200;
  const sCamera = 100;
  // const sBack = 400;

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    const parallax = parallaxRef.current;
    const camera = cameraRef.current;
    const fridge = fridgeRef.current;

    if (!interBubble) {
      return; // Salir si interBubble es null
    }

    function move() {
      curX.current += (tgX.current - curX.current) / 20;
      curY.current += (tgY.current - curY.current) / 20;
      interBubble!.style.transform = `translate(${Math.round(
        curX.current
      )}px, ${Math.round(curY.current)}px)`;
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX.current = event.clientX;
      tgY.current = event.clientY;
    };

    const handleParallaxMove = (event: MouseEvent) => {
      parX.current = event.clientX;
      parY.current = event.clientY;

      fridge!.style.transform = `translate(${
        -35 + Math.round(parX.current) / sFridge
      }%, ${-50 + Math.round(parY.current) / sFridge}% )`;

      camera!.style.transform = `translate(${
        -82.5 + Math.round(parX.current) / sCamera
      }%, ${20 + Math.round(parY.current) / sCamera}% )`;

      camera!.style.transform = `translate(${
        -82.5 + Math.round(parX.current) / sCamera
      }%, ${20 + Math.round(parY.current) / sCamera}% )`;

      camera!.style.transform = `translate(${
        -82.5 + Math.round(parX.current) / sCamera
      }%, ${20 + Math.round(parY.current) / sCamera}% )`;

      camera!.style.transform = `translate(${
        -82.5 + Math.round(parX.current) / sCamera
      }%, ${20 + Math.round(parY.current) / sCamera}% )`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    parallax!.addEventListener("mousemove", handleParallaxMove);

    move(); // Iniciar el movimiento inicial

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      parallax!.removeEventListener("mousemove", handleParallaxMove);
    };
  }, [interBubbleRef, tgX, tgY, parallaxRef, cameraRef, parX, parY]);
  return (
    <section
      ref={parallaxRef}
      className="h-screen max-h-[800px] overflow-hidden"
    >
      <Container className="grid grid-cols-2 z-10 relative h-full">
        <div className="flex flex-col justify-center gap-8 pl-20 pr-16">
          <h2 className={`${styles.mainText} font-bold text-5xl italic`}>
            Ganar nunca fue tan facil
          </h2>
          <p className="text-sm font-normal">
            <span>
              Únete a nosotros y descubre cómo puedes convertirte en uno de
              nuestros afortunados ganadores
            </span>
            <br />
            <span>
              ¿Qué esperas para inscribirte? Aprovecha los beneficios exclusivos
              que tenemos
            </span>
          </p>
          <button className="bg-purple-600 inline-block w-fit text-white py-2 px-6">
            Quiero ser suscriptor
          </button>
        </div>
        <div className="w-full relative aspect-square my-auto">
          <img
            ref={fridgeRef}
            className="absolute w-[90%] z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-[35%]"
            src={refrigeradora}
            alt="refrigeradora"
          />
          <img
            ref={washMachRef}
            className="absolute w-[50%] z-20 top-1/2 left-1/2 -translate-x-[84%] -translate-y-[30%]"
            src={lavadora}
            alt="lavadora"
          />
          <img
            ref={phoneRef}
            className="absolute w-[40%] z-30 top-1/2 left-1/2 -translate-x-[55%] -translate-y-[20%]"
            src={celular}
            alt="celular"
          />
          <img
            ref={microoRef}
            className="absolute w-[60%] z-40 top-1/2 left-1/2 -translate-x-[26%] -translate-y-[-10%]"
            src={microondas}
            alt="microondas"
          />
          <img
            ref={cameraRef}
            className="absolute w-[55%] z-50 top-1/2 left-1/2"
            src={camara}
            alt="camara"
          />
        </div>
      </Container>

      <div
        className={`${styles.gradientsContainer} w-full h-full absolute top-0 overflow-hidden`}
      >
        <Goo className="w-full h-full" intensity="strong">
          <div className={`${styles.g1} absolute opacity-100`}></div>
          <div className={`${styles.g2} absolute opacity-100`}></div>
          <div
            className={`${styles.g3} absolute mix-blend-hard-light opacity-100`}
          ></div>
          <div
            className={`${styles.g4} absolute mix-blend-hard-light opacity-70`}
          ></div>
          <div
            className={`${styles.g5} absolute mix-blend-hard-light opacity-100`}
          ></div>
          <div
            ref={interBubbleRef}
            className={`${styles.interactive} absolute mix-blend-hard-light opacity-70`}
          ></div>
        </Goo>
      </div>
    </section>
  );
};
