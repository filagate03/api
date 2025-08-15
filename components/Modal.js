// Basic modal component using HTML dialog
export default function Modal({ open, onClose, children }) {
  return (
    <dialog open={open} onClose={onClose}>
      {children}
      <button onClick={onClose}>Close</button>
    </dialog>
  );
}
