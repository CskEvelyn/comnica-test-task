import InputEmpty from "../../assets/input-empty.png";
import InputFull from "../../assets/input-full.png";

function FourthTask() {
  return (
    <div className="m-auto my-16 flex max-w-xl flex-col px-4">
      <h1 className="mb-3 font-bold">
        4. A designer a következőképpen álmodja meg a beviteli mező működését:
      </h1>
      <p className="mb-2 font-bold"> Kitöltetlen állapotban:</p>
      <img className="mb-6 w-48" src={InputEmpty} alt="InputEmpty" />
      <p className="mb-2 font-bold">Kitöltött állapotban:</p>
      <img className="mb-3 w-48" src={InputFull} alt="InputFull" />
      <p className="mb-10 font-bold">
        Mi lehet ezzel a működéssel az általános probléma?
      </p>

      <ul>
        <li className="mb-2">
          1. Az input mező alaphelyzetében, a placeholder szöveg túl hangsúlyos,
          ami azt a benyomást keltheti, mintha a mező már ki lenne töltve.
        </li>
        <li className="mb-2">
          2. A kitöltött állapotban lévő label szöveg még mindig túlzottan
          hangsúlyos, főleg, hogy nagybetűs marad, míg a megadott érték
          kisbetűs. Ha a label szöveget meg szeretnénk tartani kitöltés után is,
          akkor érdemes egy finomabb animációval kisebb betűméretté alakítani és
          bal felső sarokba pozicionálni.
        </li>
        <li className="mb-2">
          3. A kitöltött állapotban lévő érték le van csúszva, nincs középen ami
          esztétikailag zavaró, ez orvosolható ha a label szöveg vagy eltűnik,
          vagy kevésbé lesz hangsúlyos.
        </li>
      </ul>
    </div>
  );
}

export default FourthTask;
