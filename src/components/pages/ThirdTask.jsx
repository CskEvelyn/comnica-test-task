import { useState } from "react";
import Button from "../Button.jsx";

function ThirdTask() {
  const [users, setUsers] = useState([]);
  const [showList, setShowList] = useState(false);

  const fetchUsers = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userList = [
          { name: "Annamari" },
          { name: "Béla" },
          { name: "Katalin" },
          { name: "Samu" },
          { name: "Zsolt" },
          { name: "Iza" },
          { name: "Péter" },
          { name: "Zoltán" },
          { name: "Éva" },
          { name: "Mátyás" },
        ];
        resolve(userList);
      }, 500);
    });
  };

  const fetchColors = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const colorList = [
          "piros",
          "zöld",
          "kék",
          "sárga",
          "lila",
          "narancs",
          "rózsaszín",
          "fehér",
          "barna",
          "szürke",
        ];
        resolve(colorList);
      }, 500);
    });
  };

  const generateUsersWithColors = async () => {
    try {
      const userList = await fetchUsers();
      const colorList = await fetchColors();

      if (!userList.length || !colorList.length) {
        console.log("Hiba történt a listák betöltése közben!");
      }

      const usersWithColors = userList.map((user) => {
        const randomColor =
          colorList[Math.floor(Math.random() * colorList.length)];

        return {
          ...user,
          color: randomColor,
        };
      });
      setUsers(usersWithColors);
      setShowList(true);
    } catch (error) {
      console.error("Valami hiba történt!", error);
    } finally {
      console.log("Vége a folyamatnak.");
    }
  };

  return (
    <div className="m-auto flex h-screen w-full max-w-xl flex-col justify-center font-roboto md:flex-row md:items-center">
      <Button onClick={generateUsersWithColors} bg="bg-green-main mx-8">
        kérem a listát
      </Button>

      <div className="w-72 p-8">
        {showList && (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.color}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ThirdTask;
