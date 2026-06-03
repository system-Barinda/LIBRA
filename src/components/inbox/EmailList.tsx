const emails = [
  {
    name: "Livia Hart",
    title: "Overdue Book Follow-up",
    time: "09:22",
  },
  {
    name: "Ezra Nolan",
    title: "Premium Account Upgrade",
    time: "08:47",
  },
];

export default function EmailList() {
  return (
    <div className="email-list">
      {emails.map((email, index) => (
        <div key={index} className="email-card">
          <div className="avatar">{email.name[0]}</div>

          <div>
            <h4>{email.name}</h4>
            <p>{email.title}</p>
          </div>

          <span>{email.time}</span>
        </div>
      ))}
    </div>
  );
}