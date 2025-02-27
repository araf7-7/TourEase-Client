import { useEffect, useState } from "react";
import MyCraftCard from "./MyCraftCard";
import UseAuth from "./UseAuth";

const MyCraftList = () => {
  const { user } = UseAuth();

  const [tourists, setTourists] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-10-server-delta-dun.vercel.app/userTourist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTourists(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user.email]);

  return (
    <div>
      <section className="mt-28 mx-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-center">
          My Tourist List
        </h2>
        <div className="">
          {tourists.map((tourist) => (
            <MyCraftCard key={tourist.email} tourists={tourists} setTourists={setTourists} tourist={tourist} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyCraftList;
