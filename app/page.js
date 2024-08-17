"use client"
import Image from "next/image";
import { useState } from "react";
import USAMapComponent from "./components/Map";
import { LicenseState, statesData, actionMap, backgroundMap } from "./utils/utility";
import clsx from "clsx";
import { Modal } from "./components/Modal";
import { StateList } from "./components/StateList";
import Head from "next/head";



export default function Home() {
  const [states, setStates] = useState(statesData);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleAction = (state, stateDetails) => {
    if (stateDetails.licensedState === LicenseState.NO_APPLY) {
      states[state].licensedState = LicenseState.PENDING;
      setMessage(`You have successfully applied for a ${state} State License`);

    }
    else if (stateDetails.licensedState === LicenseState.DENIED) {
      states[state].licensedState = LicenseState.PENDING;
      setMessage(`You have successfully re-applied for a ${state} State License`);

    }
    else if (stateDetails.licensedState === LicenseState.PENDING) {
      states[state].licensedState = LicenseState.LICENSED;
      setMessage(`Your application in ${state} has just been approved! Congratulations! You are licensed!`);
    }
    else if (stateDetails.licensedState === LicenseState.RENEW) {
      states[state].licensedState = LicenseState.PENDING;
      setMessage(`You have successfully started the renewal process for a ${state} License`);

    }
    setOpen(true);
  }




  return (<>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-6xl p-10 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">
          Cross State Licensing
        </h1>
        <USAMapComponent states={states} />
        <StateList states={states} onAction={handleAction} />
      </div>
    </div>
    <Modal open={open} setOpen={setOpen} message={message} />
    <a target='_blank' className="absolute top-5 right-5 text-slate-500 text-xs" href="https://matthewklimek.com">Made by Matthew Klimek</a>
  </>
  );
}
