import { useNotes } from "frontend/context";
import "./EditNoteModal.css";

const EditNoteModal = () => {
  const { notesDispatch } = useNotes();
  return (
    <div
      class="modal-wrapper w-100 h-100 justify-center align-center container-center p-fixed"
      id="simple-modal-wrapper"
    >
      <div class="modal-container rounded-md">
        <div class="p-8">
          <h2 class="headline-md">Modal header</h2>
          <p class="text-sm mt-3">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <div
            class="action-btns-wrapper mt-4 d-flex justify-end"
            id="simple-modal-buttons"
          >
            <button
              class="btn btn-outline btn-action btn-primary-outline rounded-sm text-sm p-3 ml-4"
              onClick={() => notesDispatch({ type: "MODAL_TOGGLE" })}
            >
              Cancel
            </button>
            <button class="btn btn-primary btn-action rounded-sm text-sm p-3">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { EditNoteModal };
