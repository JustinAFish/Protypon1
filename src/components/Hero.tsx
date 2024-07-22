import { useRef } from 'react';
import { Button } from "./ui/button";
import Modal from './Modal.jsx'

export const Hero = () => {
  const modal = useRef();

  function handleOpenWaitingList() {
    modal.current.open();
  }

  return (
<>
<Modal ref={modal} buttonCaption="Close" >
        {" "}
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">Forgot to enter info</p>
        <p className="text-stone-400 mb-4">enter the information</p>
      </Modal>{" "}

    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold  max-w-1">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Automated Assessment Assistant
            </span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          A tool which supports academics by increasing quality and reducing
          overhead for creating assessments.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button onClick={handleOpenWaitingList} className="w-full md:w-1/3">Join Waiting List</Button>
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
    </>
  );
};
