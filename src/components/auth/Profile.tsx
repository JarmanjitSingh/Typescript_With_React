export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>private profile component, The name is {name}</div>;
};

export default Profile;
