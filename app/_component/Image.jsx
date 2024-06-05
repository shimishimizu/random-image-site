export default function Image(props) {
  console.log(props);
  return (
    <>
      <img src={props.src ? props.src : ""} width="auto" height="400"></img>
    </>
  );
}
