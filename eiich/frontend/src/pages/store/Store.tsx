import { Container } from "@/components/ui/Container";
import { Banner } from "./components/Banner";
import { Filters } from "./components/Filters";
import { Card } from "@/components/ui/Card";

export const Store = () => {
  return (
    <div className="min-h-[calc(100vh-394px)] pb-8 pt-20">
      <Container>
        <Banner/>
        <Filters/>
        <Card className="m-4">
        <p className="text-gray-800">hola</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Botón
        </button>
      </Card>
      </Container>
    </div>
  );
};
