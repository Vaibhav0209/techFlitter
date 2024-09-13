import { Trash2 } from "lucide-react";
import React, { useEffect } from "react";

const Modal = ({ handleAPI }) => {
  useEffect(() => {
    document.getElementById("my_modal_3").showModal();
  }, []);
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Delete</h3>
          <form className="flex flex-col space-y-5 mt-5 justify-center items-center">
            <Trash2 size={32} />
            <p className="capitalize font-medium">
              are you sure you want to delete?
            </p>
            <div className="p-6 space-x-3 flex ">
              <button
                type="button"
                onClick={handleAPI}
                className="btn w-40 text-sm  hover:bg-slate-700 bg-gradient-to-r p-2 from-fromgrad to-tograd text-white"
              >
                Save
              </button>

              <button
                type="reset"
                className="btn w-40 text-sm  text-main border-2 border-main"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
