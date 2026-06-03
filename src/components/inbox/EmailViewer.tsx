export default function EmailViewer() {
  return (
    <div className="viewer">
      <h2>Overdue Book Follow-up</h2>

      <p>Hi there,</p>

      <p>
        I just returned Echoes of Astra this morning via the return box
        at the west entrance.
      </p>

      <p>
        Could you please confirm if it is already marked as returned
        in the system?
      </p>

      <textarea placeholder="Type something..." />

      <button>Send</button>
    </div>
  );
}