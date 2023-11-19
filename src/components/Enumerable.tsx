interface EnumerableProps {
  index: number;
  title: string;
  content: string;
}

export default function Enumerable(props: EnumerableProps) {
  return (
    <div>
      <div className="rounded-full h-12 w-12 border border-black flex items-center justify-center font-fraunces">{props.index}</div>
      <div>
        <h1 className="font-fraunces wonky">{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  )
}