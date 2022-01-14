export default function ProfileCard(props: {
  children: JSX.Element | JSX.Element[];
}) {
  return <section className="profile-card">{props.children}</section>;
}
