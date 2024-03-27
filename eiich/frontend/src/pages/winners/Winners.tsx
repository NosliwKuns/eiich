import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { SelectMonth } from "./components/SelectMonth";
import { Winner } from "./components/Winner";

const winners:[] = [<Winner/>, <Winner/>, <Winner/>, <Winner/>];

export const Winners = () => {
  return (
		<div className="min-h-[calc(100vh-394px)] pb-8">
      <Header>
        <Typography className="px-40 text-center">Ganadores</Typography>
      </Header>
      <Container className="flex flex-col justify-center items-center">
        <SelectMonth />
        <div className="flex justify-center flex-wrap gap-20">
        {
          winners.length > 0 ? winners.map(winner =>(
            winner
          )):
          <h3>No hay ganadores en el mes seleccionado</h3>
        }
                </div>
      </Container>
    </div>
  );
};
