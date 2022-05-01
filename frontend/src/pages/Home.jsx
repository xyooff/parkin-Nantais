import NavBar from "@components/NavBar";
import DayTime from "@components/DayTime";
import ParkingTable from "@components/ParkingTable";
import ButtonOrder from "@components/ButtonOrder";

export default function Home() {
  return (
    <div>
      <NavBar />
      <DayTime />
      <ParkingTable />
      <ButtonOrder />
    </div>
  );
}
