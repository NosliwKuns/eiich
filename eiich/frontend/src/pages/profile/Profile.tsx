import { Container } from "@/components/ui/Container";
import { Data } from "./components/Data";
import { EditData } from "./components/EditData";

export const Profile = () => {
  return (
		<div className="min-h-[calc(100vh-394px)] pb-8 pt-20">
      <Container className="pt-8 pb-8">
        <Data />
        <EditData />
      </Container>
    </div>
  );
};
