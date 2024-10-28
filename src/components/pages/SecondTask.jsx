function SecondTask() {
  return (
    <div className="m-auto mt-16 flex max-w-xl flex-col px-4">
      <h1 className="mb-10 font-bold">
        2. Adott egy gomb. Elvileg minden rendben kód szinten, mégsem csinál
        semmit se hover, se egyéb eseményre (nem disabled). Mi lehet a probléma,
        mi okozhat ilyen jelenséget?
      </h1>
      <p>Ilyen esetben szerintem több probléma is szóba jöhet:</p>

      <ul>
        <li className="mb-2">
          1. Egy felső elem rálóg és nincsenek jól megadva a hierarchiák,
          z-index.
        </li>
        <li className="mb-2">
          2. Le van formázva és úgy néz ki mint egy gomb, de a rajta lévő
          események nem lettek megfelelően megadva/kezelve.
        </li>
        <li className="mb-2">
          3. A gombhoz vagy annak szülő eleméhez "pointer-events: none" CSS
          tulajdonság van hozzáadva.
        </li>
      </ul>
    </div>
  );
}

export default SecondTask;
