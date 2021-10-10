export default function StickNoteAdd(props) {
  const { lines, setLines } = props.pstate;
  console.log(lines);
  return (
    <button
      onClick={() => {
        setLines([...lines, lines.length]);
      }}
      className="bg-indigo-400 text-indigo-700 text-3xl rounded-md w-full h-full min-h-[100px]"
    >
      +
    </button>
  );
}
